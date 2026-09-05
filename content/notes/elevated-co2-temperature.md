+++
title = "Simulating the potential effects of elevated CO₂ concentration and temperature coupled with storm intensification on crop yield, surface runoff, and soil loss based on 25 GCMs ensemble: A site-specific case study in Oklahoma"
description = "WEPP simulations of crop yield, runoff, and soil loss under elevated CO₂, temperature, and storm intensification."
publication_year = 2022
weight = 30
type = "notes"
topic = "Climate & Agricultural Systems"
publication_title = "Simulating the potential effects of elevated CO₂ concentration and temperature coupled with storm intensification on crop yield, surface runoff, and soil loss based on 25 GCMs ensemble: A site-specific case study in Oklahoma"
snapshot_question = "How do elevated CO₂, warming, and storm intensification jointly affect crop yield, runoff, and soil loss?"
snapshot_methods = "Modified WEPP · CLIGEN · 25-GCM CMIP5 ensemble · RCP4.5 and RCP8.5 scenarios"
snapshot_relevance = "Supports climate-resilient cropping, tillage, and soil-conservation decisions under compound climate stressors."
figure = "images/research-summaries/wepp-climate-runoff-soil-loss.png"
figure_width = 1074
figure_height = 725
figure_alt = "Four panels comparing projected percentage changes in precipitation, runoff, and soil loss under RCP4.5 and RCP8.5 for two future periods"
figure_caption = "Projected changes in annual precipitation and runoff in relation to soil-loss change under RCP4.5 and RCP8.5 for 2021–2050 and 2051–2080."
figure_credit = "Source: Yuan et al. (2022)."
+++

## Research Question

How do elevated atmospheric CO₂, warming, and storm intensification interact to affect crop yield, surface runoff, and soil loss in Oklahoma agricultural systems?

## Why It Matters

Climate-impact assessments that treat temperature, CO₂, and rainfall intensity separately can miss important compound effects on agricultural productivity and erosion risk. Representing these stressors together provides more realistic evidence for future land, water, and soil-conservation decisions.

## Methods

- Used CLIGEN and a modified **WEPP (Water Erosion Prediction Project)** model.
- Downscaled and bias-corrected an ensemble of **25 CMIP5 general circulation models**.
- Compared baseline conditions with RCP4.5 and RCP8.5 CO₂ projections.
- Evaluated temperature increases from **1.5°C to 4.5°C** and intensified-storm scenarios.
- Applied the scenario framework at an Oklahoma research site representative of southern Great Plains agricultural landscapes.

## Key Findings

- Elevated CO₂ enhanced simulated crop productivity, but larger temperature increases offset those gains, particularly under higher-emission conditions.
- Storm intensification substantially increased runoff and soil erosion, particularly in some no-till or monoculture scenarios.
- Changes in rainfall intensity had a stronger influence on soil loss than changes in average annual precipitation.
- Combined climate stressors increased the modeled vulnerability of agricultural landscapes to hydrologic and erosion extremes.

## My Contribution

Lifeng Yuan developed the Python automation workflow for the modified WEPP model and contributed scenario design, model execution, data analysis, visualization, interpretation, and manuscript preparation.

WEPP (Water Erosion Prediction Project) run interface:

![WEPP model interface configured for a 100-year simulation at Fort Reno, Oklahoma, showing a conventional canola–alfalfa management system along a 656.2-foot hillslope.](/images/research-summaries/wepp-model-running-interface.jpg)

### Supporting Python workflow

```python
############################################################################################

##   This python script was developed to record the output of the WEPP model running      ##

##   under a single slope and soil condition with various combinations of climate change  ##

##   senarios and management controls. It was customized to conduct a scientific project  ##

##   at USDA-ARS Grazinglands Research Lab. El Reno, OK 73036.                            ##

##                                                                                        ##

##   Author: Lifeng Yuan                                                                  ##

##   Email: Lifeng.Yuan@ou.edu                                                            ##

##   Date: October 2020                                                                   ##

############################################################################################

PyLink_WEPP Python Script

import os

import subprocess

# Define paths using raw strings to avoid escaping backslashes

path_output = r"c:\wepp\output\Present"

path_man = r".\managements"

path_cli = r".\Data\climates\Present"

# Function to get filenames from a directory

def get_filenames(directory):

    os.chdir(directory)

    filenames = []

    for _, _, files in os.walk('.\\'):

        filenames.extend(files)

    return filenames

# Get management and climate filenames

mans_filename = get_filenames(r'c:\wepp\python\managements')

clis_filename = get_filenames(r'c:\wepp\Data\climates\Present')

# Print management and climate files

print("Management Files:", mans_filename)

print("Climate Files:", clis_filename)

# Set up running years for WEPP

years = 100

# Function to run WEPP model

def run_wepp(man_file, cli_file):

    wepp_executable = r"C:\WEPP\wepp\wepp_co2_2019.exe"

    inputs = [

        "m\n",  # Measurement units

        "y\n",  # Hillslope option

        "1\n",  # Continuous simulation

        "1\n",  # Hillslope version

        "n\n",  # Hillslope pass file

        "1\n",  # Abbreviated annual output

        "n\n",  # Initial condition scenario output

        f"{path_output}\\sol_{man_file[:-4]}_{cli_file[:-4]}.txt\n",

        "y\n",  # Water balance output

        f"{path_output}\\wat_{man_file[:-4]}_{cli_file[:-4]}.txt\n",

        "n\n",  # Plant and residue output

        "n\n",  # Soil output

        "n\n",  # Distance and sediment loss output

        "n\n",  # Large graphics output

        "y\n",  # Event output

        f"{path_output}\\evt_{man_file[:-4]}_{cli_file[:-4]}.txt\n",

        "n\n",  # Element output

        "y\n",  # Final summary

        f"{path_output}\\sum_{man_file[:-4]}_{cli_file[:-4]}.txt\n",

        "n\n",  # Daily winter output

        "y\n",  # Crop yield output

        f"{path_output}\\crp_{man_file[:-4]}_{cli_file[:-4]}.txt\n",

        f"{path_man}\\{man_file}\n",

        "fr5.slp\n",  # Slope file

        f"{path_cli}\\{cli_file}\n",

        "FR678_945.sol\n",  # Soil data

        "0\n",  # No irrigation

        f"{years}\n",

        "0\n"  # Route all events

    ]

    try:

        result = subprocess.run(

            [wepp_executable],

            input=''.join(inputs),  # Join the list into a single string

            text=True,

            capture_output=True,

            check=True

        )

        print(f"WEPP run successfully for {man_file} and {cli_file}")

    except subprocess.CalledProcessError as e:

        print(f"Error running WEPP for {man_file} and {cli_file}: {e.stderr}")

# Run WEPP for each combination of management and climate files

for man_file in mans_filename:

    for cli_file in clis_filename:

        run_wepp(man_file, cli_file)
```

The custom Python workflow extended the modified WEPP model beyond one-at-a-time combinations of climate, cropping, and tillage inputs. It automated batch processing for 29 management combinations over 100-year simulations and systematically organized long-term runoff, soil-loss, and crop-yield outputs.

### Results visualization

R was used to compare exceedance probabilities of annual soil loss for continuous winter wheat under conventional and no-till treatments during the baseline, Future 1 RCP4.5, and Future 2 RCP8.5 scenarios. Solid lines represent the baseline; dashed lines represent the mean of the 25 GCM simulations.

Average annual runoff and soil loss were also grouped by cropping system—canola, wheat, sorghum, soybean, cotton, crop–alfalfa rotations, and winter wheat–summer soybean double cropping—and by reduced, delayed, no-till, and conventional tillage. Baseline results were compared with 25-GCM ensemble means under two RCPs for 2021–2050 and 2051–2080, with one-sample, one-tailed *t*-tests used to assess statistical significance.

## Practical Relevance

The results show that compound climate stress could challenge agricultural sustainability and watershed resilience. Integrating CO₂–plant interactions with hydrologic and erosion modeling supports selection of adaptive soil-conservation practices and resilient cropping systems under future climate extremes.

## Publication & Resources

{{< publication-resources >}}
