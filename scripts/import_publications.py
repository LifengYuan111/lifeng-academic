#!/usr/bin/env python3
"""Import and deduplicate a Google Scholar CSV export for the Hugo site."""

from __future__ import annotations

import argparse
import csv
import json
import re
from pathlib import Path


REPORT_TITLES = {
    "A Review of Watershed and Water Quality Tools for Nutrient Fate and Transport"
}

TITLE_CORRECTIONS = {
    "Evaluating Parsivel2’s raindrop data: A comparative study of different terminal drop velocity models on simulated and natural rain events":
        "Evaluating Parsivel²’s raindrop data: A comparative study of different terminal drop velocity models on simulated and natural rain events",
    "Exploring the statistical characteristics of coastal winter precipitation measured using a Parsivel2 disdrometer: A case study in North Carolina":
        "Exploring the statistical characteristics of coastal winter precipitation measured using a Parsivel² disdrometer: A case study in North Carolina",
    "Using Swmm for Emergency Response Planning: A Case Study Evaluating Biological Agent Transport Under Various Rainfall Scenarios and Urban Surfaces":
        "Using SWMM for Emergency Response Planning: A Case Study Evaluating Biological Agent Transport Under Various Rainfall Scenarios and Urban Surfaces"
}


def normalized(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip().casefold()


def completeness(row: dict[str, str]) -> tuple[int, int]:
    return sum(bool(value) for value in row.values()), sum(len(value) for value in row.values())


def import_publications(source: Path) -> list[dict[str, object]]:
    with source.open(encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.DictReader(handle))

    deduplicated: dict[tuple[str, str], dict[str, str]] = {}
    for raw in rows:
        row = {key.strip(): (value or "").strip() for key, value in raw.items()}
        row["Title"] = TITLE_CORRECTIONS.get(row["Title"], row["Title"])
        # Scholar may export the same author names in different orders or styles.
        # Title and year are the stable fields for the two known duplicate groups.
        key = (normalized(row["Title"]), row["Year"])
        previous = deduplicated.get(key)
        if previous is None or completeness(row) > completeness(previous):
            deduplicated[key] = row

    publications: list[dict[str, object]] = []
    for row in deduplicated.values():
        publications.append(
            {
                "authors": row["Authors"].rstrip(" ;"),
                "title": row["Title"],
                "publication": row["Publication"],
                "volume": row["Volume"],
                "number": row["Number"],
                "pages": row["Pages"],
                "year": int(row["Year"]),
                "publisher": row["Publisher"],
                "kind": "Report" if row["Title"] in REPORT_TITLES else "Article",
            }
        )

    publications.sort(key=lambda item: (-int(item["year"]), str(item["title"]).casefold()))
    return publications


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "source",
        nargs="?",
        type=Path,
        default=Path("source_inputs/citations.csv"),
        help="Google Scholar CSV export",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("data/publications.json"),
        help="Hugo data file",
    )
    args = parser.parse_args()

    publications = import_publications(args.source)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(publications, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(publications)} publications to {args.output}")


if __name__ == "__main__":
    main()
