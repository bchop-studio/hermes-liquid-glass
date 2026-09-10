#!/usr/bin/env python3
"""Validate liquid-glass palette contracts."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "palettes" / "liquid-glass-palettes.json"

REQUIRED_COLORS = {
    "background", "backgroundGlow", "glassTint", "foreground",
    "mutedForeground", "primary", "accent", "rim", "success",
    "warning", "error", "tool", "selection",
}
REQUIRED_GLASS = {
    "surfaceOpacity", "strongOpacity", "blurPx", "saturation",
    "rimOpacity", "glowOpacity",
}
MIN_PALETTE_DISTANCE = 0.08
MIN_EXPANSION_DISTANCE = 0.11
FOUNDATION_THEME_COUNT = 50
APPROVED_THEME_COUNT = 100
SIGNATURE_KEYS = ("background", "glassTint", "primary", "accent", "rim", "backgroundGlow")


def _rgb(color: str) -> tuple[int, int, int]:
    if len(color) != 7 or not color.startswith("#"):
        raise ValueError(f"unsupported color: {color}")
    return tuple(int(color[index:index + 2], 16) for index in (1, 3, 5))  # type: ignore[return-value]


def _luminance(color: str) -> float:
    channels = []
    for value in _rgb(color):
        normalized = value / 255
        channels.append(normalized / 12.92 if normalized <= 0.04045 else ((normalized + 0.055) / 1.055) ** 2.4)
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]


def contrast(first: str, second: str) -> float:
    high, low = sorted((_luminance(first), _luminance(second)), reverse=True)
    return (high + 0.05) / (low + 0.05)


def blend(foreground: str, background: str, opacity: float) -> str:
    fg = _rgb(foreground)
    bg = _rgb(background)
    values = [round(fg[i] * opacity + bg[i] * (1 - opacity)) for i in range(3)]
    return "#" + "".join(f"{value:02x}" for value in values)


def _oklab(color: str) -> tuple[float, float, float]:
    linear = []
    for value in _rgb(color):
        channel = value / 255
        linear.append(channel / 12.92 if channel <= 0.04045 else ((channel + 0.055) / 1.055) ** 2.4)
    red, green, blue = linear
    long = 0.4122214708 * red + 0.5363325363 * green + 0.0514459929 * blue
    medium = 0.2119034982 * red + 0.6806995451 * green + 0.1073969566 * blue
    short = 0.0883024619 * red + 0.2817188376 * green + 0.6299787005 * blue
    long_root, medium_root, short_root = (long ** (1 / 3), medium ** (1 / 3), short ** (1 / 3))
    return (
        0.2104542553 * long_root + 0.7936177850 * medium_root - 0.0040720468 * short_root,
        1.9779984951 * long_root - 2.4285922050 * medium_root + 0.4505937099 * short_root,
        0.0259040371 * long_root + 0.7827717662 * medium_root - 0.8086757660 * short_root,
    )


def palette_distance(first: dict[str, str], second: dict[str, str]) -> float:
    squared = 0.0
    for key in SIGNATURE_KEYS:
        left = _oklab(first[key])
        right = _oklab(second[key])
        squared += sum((left[index] - right[index]) ** 2 for index in range(3))
    return (squared / len(SIGNATURE_KEYS)) ** 0.5


def audit_catalog(
    catalog: dict[str, Any],
    expected_count: int | None = None,
    foundation_count: int = FOUNDATION_THEME_COUNT,
    approved_count: int = APPROVED_THEME_COUNT,
) -> dict[str, Any]:
    themes = catalog.get("themes")
    if not isinstance(themes, list):
        raise ValueError("catalog themes must be a list")
    if expected_count is not None and len(themes) != expected_count:
        raise ValueError(f"expected {expected_count} themes, found {len(themes)}")

    ids: set[str] = set()
    names: set[str] = set()
    signatures: dict[tuple[str, ...], str] = {}
    recipes: dict[tuple[str, ...], str] = {}
    duplicate_signatures: list[tuple[str, str]] = []
    duplicate_recipes: list[tuple[str, str]] = []
    contrast_failures: list[str] = []
    seen_colors: dict[str, tuple[str, str]] = {}
    reused_colors: list[tuple[str, str, str]] = []

    for theme in themes:
        theme_id = theme["id"]
        name = theme["name"]
        if theme_id in ids or name in names:
            raise ValueError(f"duplicate id or name: {theme_id}")
        ids.add(theme_id)
        names.add(name)

        colors = theme["colors"]
        glass = theme["glass"]
        missing_colors = REQUIRED_COLORS - colors.keys()
        missing_glass = REQUIRED_GLASS - glass.keys()
        if missing_colors or missing_glass:
            raise ValueError(f"{theme_id} missing keys: {sorted(missing_colors | missing_glass)}")
        for role, value in colors.items():
            _rgb(value)
            normalized = value.lower()
            if normalized in seen_colors:
                first_theme, first_role = seen_colors[normalized]
                reused_colors.append((normalized, f"{first_theme}.{first_role}", f"{theme_id}.{role}"))
            else:
                seen_colors[normalized] = (theme_id, role)
        if not 0 < glass["surfaceOpacity"] <= 1 or not 0 < glass["strongOpacity"] <= 1:
            raise ValueError(f"{theme_id} has invalid glass opacity")
        if glass["strongOpacity"] < glass["surfaceOpacity"]:
            raise ValueError(f"{theme_id} strongOpacity must be at least surfaceOpacity")

        signature = tuple(colors[key].lower() for key in (
            "background", "glassTint", "primary", "accent", "rim", "backgroundGlow"
        ))
        if signature in signatures:
            duplicate_signatures.append((signatures[signature], theme_id))
        signatures[signature] = theme_id

        recipe = (
            theme["mode"], theme["surfaceFamily"], theme["accentFamily"], theme["glassCharacter"]
        )
        if recipe in recipes:
            duplicate_recipes.append((recipes[recipe], theme_id))
        recipes[recipe] = theme_id

        surface = blend(colors["glassTint"], colors["background"], glass["surfaceOpacity"])
        checks = (
            ("foreground/background", colors["foreground"], colors["background"], 4.5),
            ("foreground/glass", colors["foreground"], surface, 4.5),
            ("muted/background", colors["mutedForeground"], colors["background"], 4.5),
            ("primary/background", colors["primary"], colors["background"], 3.0),
            ("accent/background", colors["accent"], colors["background"], 3.0),
        )
        for label, foreground, background, floor in checks:
            ratio = contrast(foreground, background)
            if ratio < floor:
                contrast_failures.append(f"{theme_id} {label} {ratio:.2f}:1 < {floor:.1f}:1")

    perceptual_failures: list[tuple[str, str]] = []
    nearest_neighbors: dict[str, dict[str, float | str]] = {}
    for index, first in enumerate(themes):
        distances = []
        for other_index, second in enumerate(themes):
            if index == other_index:
                continue
            distances.append((palette_distance(first["colors"], second["colors"]), second["id"]))
        if distances:
            score, neighbor = min(distances)
            nearest_neighbors[first["id"]] = {"theme": neighbor, "distance": round(score, 4)}
    for index, first in enumerate(themes):
        for second in themes[index + 1:]:
            if palette_distance(first["colors"], second["colors"]) < MIN_PALETTE_DISTANCE:
                perceptual_failures.append((first["id"], second["id"]))

    expansion_distance_failures: list[tuple[str, str]] = []
    expansion_distances: list[float] = []
    foundation = themes[:foundation_count]
    for theme in themes[foundation_count:]:
        if not foundation:
            continue
        score, neighbor = min(
            (palette_distance(theme["colors"], original["colors"]), original["id"])
            for original in foundation
        )
        expansion_distances.append(score)
        if score < MIN_EXPANSION_DISTANCE:
            expansion_distance_failures.append((theme["id"], neighbor))

    catalog_expansion_distance_failures: list[tuple[str, str]] = []
    catalog_expansion_distances: list[float] = []
    approved = themes[:approved_count]
    for theme in themes[approved_count:]:
        if not approved:
            continue
        score, neighbor = min(
            (palette_distance(theme["colors"], original["colors"]), original["id"])
            for original in approved
        )
        catalog_expansion_distances.append(score)
        if score < MIN_EXPANSION_DISTANCE:
            catalog_expansion_distance_failures.append((theme["id"], neighbor))

    return {
        "count": len(themes),
        "duplicate_signatures": duplicate_signatures,
        "duplicate_recipes": duplicate_recipes,
        "contrast_failures": contrast_failures,
        "perceptual_failures": perceptual_failures,
        "expansion_distance_failures": expansion_distance_failures,
        "catalog_expansion_distance_failures": catalog_expansion_distance_failures,
        "reused_colors": reused_colors,
        "unique_color_count": len(seen_colors),
        "minimum_palette_distance": min((float(item["distance"]) for item in nearest_neighbors.values()), default=1.0),
        "minimum_expansion_distance": min(expansion_distances, default=1.0),
        "minimum_catalog_expansion_distance": min(catalog_expansion_distances, default=1.0),
        "nearest_neighbors": nearest_neighbors,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--expected-count", type=int, default=120)
    args = parser.parse_args()
    report = audit_catalog(json.loads(CATALOG.read_text(encoding="utf-8")), args.expected_count)
    if any(report[key] for key in (
        "duplicate_signatures", "duplicate_recipes", "contrast_failures", "perceptual_failures", "expansion_distance_failures", "catalog_expansion_distance_failures", "reused_colors"
    )):
        raise SystemExit(json.dumps(report, indent=2))
    print(f"{report['count']} palettes valid")
    print("0 duplicate signatures")
    print("0 duplicate recipes")
    print("0 perceptual-distance failures")
    print("0 foundation-distance failures")
    print("0 approved-catalog-distance failures")
    print(f"{report['unique_color_count']} unique source colors")
    print("0 reused source colors")
    print(f"minimum palette distance: {report['minimum_palette_distance']:.4f}")
    print(f"minimum new-to-foundation distance: {report['minimum_expansion_distance']:.4f}")
    print(f"minimum new-to-approved-catalog distance: {report['minimum_catalog_expansion_distance']:.4f}")
    print("0 contrast failures")


if __name__ == "__main__":
    main()
