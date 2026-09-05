+++
title = "Evaluating Parsivel²’s Raindrop Data with Terminal Drop-Velocity Models"
description = "A combined laboratory and field evaluation of how terminal drop-velocity filters affect Parsivel² drop-size distributions and bulk rainfall parameters."
publication_year = 2025
weight = 5
type = "notes"
topic = "Urban Stormwater"
publication_title = "Evaluating Parsivel²’s raindrop data: A comparative study of different terminal drop velocity models on simulated and natural rain events"
snapshot_question = "How do theoretical terminal drop-velocity filters change Parsivel² drop-size distributions and rainfall parameters for artificial and natural rain?"
snapshot_methods = "Parsivel² · four-nozzle rainfall simulator · 10 natural events · 732 min artificial rainfall · six velocity filters"
snapshot_relevance = "Improves rainfall-data quality control for stormwater modeling, radar interpretation, and rainfall-erosivity assessment."
figure_gallery = [
  { image = "images/research-summaries/parsivel-terminal-velocity/field-deployment.webp", width = 2048, height = 1536, layout = "wide", label = "Outdoor field deployment", caption = "Parsivel² and Davis tipping-bucket instruments with telemetry and solar power for natural-rainfall monitoring.", alt = "Annotated outdoor rainfall-monitoring setup showing a Parsivel squared disdrometer, Davis tipping bucket, telemetry unit, and solar-panel power supply" },
  { image = "images/research-summaries/parsivel-terminal-velocity/indoor-rainfall-simulator.webp", width = 1536, height = 2048, label = "Artificial-rainfall facility", caption = "Enclosed rainfall-simulation chamber at the U.S. EPA Fluid Modeling Facility in Durham, North Carolina.", alt = "Tall enclosed artificial-rainfall simulator inside the U.S. EPA Fluid Modeling Facility" },
  { image = "images/research-summaries/parsivel-terminal-velocity/parsivel-indoor-setup.webp", width = 1536, height = 2048, label = "Parsivel² laboratory setup", caption = "Parsivel² positioned inside the simulator to measure artificial drop-size and velocity distributions.", alt = "Parsivel squared optical disdrometer mounted inside the artificial-rainfall chamber" }
]
figure_label = "Research highlights"
figure_caption = "Field and laboratory measurement systems used to evaluate Parsivel² rainfall observations under natural and artificially generated rainfall. Select any image to open the full-resolution version."
figure_credit = "Photographs provided by Lifeng Yuan."
+++

## Research Question

How does the choice of theoretical terminal drop-velocity model affect quality control of Parsivel² drop-size distributions and the calculation of bulk rainfall parameters under natural and artificially generated rainfall?

## Why It Matters

Parsivel² disdrometers provide high-frequency measurements of particle size and fall velocity, but physically unlikely drops are commonly removed with theoretical velocity filters. Those filters can change drop counts, rain intensity, kinetic energy, and derived microphysical parameters. Understanding when they are appropriate is important for rainfall inputs used in urban stormwater modeling, radar quantitative precipitation estimation, and soil-erosion studies.

## Methods

- Recorded **10 natural rainfall events** with a Parsivel² disdrometer at the U.S. EPA Research Triangle Park campus in Durham, North Carolina, during June–July 2024.
- Generated **732 minutes of artificial rainfall** with four nozzles at the U.S. EPA Fluid Modeling Facility.
- Compared the raw drop-size-distribution output and the instrument-calculated rainfall parameters.
- Evaluated six terminal-velocity relationships: Gunn and Kinzer (1949), Atlas et al. (1973), Beard (1976), Atlas (1977), Uplinger (1981), and Van Dijk et al. (2002).
- Examined changes in drop count, rain intensity, kinetic energy, mass-weighted mean diameter (*D*<sub>m</sub>), normalized intercept parameter (log<sub>10</sub>*N*<sub>w</sub>), liquid-water content, and radar reflectivity.

## Key Findings

- For artificial rainfall, rain rates calculated from raw drop-size distributions were substantially higher than the Parsivel² instrument calculation and more closely matched independently collected water volumes.
- Applying theoretical terminal-velocity filters to artificial rainfall removed valid simulator-generated drops and could underestimate rain rate; filters developed for natural rainfall should therefore not be transferred automatically to artificial-rainfall experiments.
- For natural rainfall, the six filters produced similar results. Mean drop-count reduction was **0.14%**, with the largest reduction—**0.36%**—from the Atlas (1977) relationship.
- Filtered-drop ranking for the accumulated natural events was Atlas (1977) > Uplinger (1981) > Atlas et al. (1973) > Beard (1976) > Van Dijk et al. (2002) > Gunn and Kinzer (1949).
- Filters affected *D*<sub>m</sub> more strongly than log<sub>10</sub>*N*<sub>w</sub> and had a larger influence on convective rainfall than on stratiform rainfall.
- Natural-rainfall liquid-water content and radar reflectivity peaked near **0.6–0.7 g m⁻³** and **30 dBZ**, respectively.

## My Contribution

According to the published CRediT statement, Lifeng Yuan was responsible for conceptualization, data curation, formal analysis, methodology, validation, visualization, and preparation of the original manuscript draft.

## Practical Relevance

The study provides an evidence-based distinction between quality-control procedures for natural and artificial rainfall. It helps researchers avoid filtering artifacts, improves interpretation of Parsivel²-derived rainfall intensity and kinetic energy, and strengthens precipitation inputs used in stormwater, hydrologic, radar, and erosion applications.

## Publication & Resources

Yuan, L., Mikelonis, A. M., & Sawyer, J. (2025). Evaluating Parsivel²’s raindrop data: A comparative study of different terminal drop velocity models on simulated and natural rain events. *Atmospheric Environment, 362*, 121548. https://doi.org/10.1016/j.atmosenv.2025.121548

{{< publication-resources >}}
