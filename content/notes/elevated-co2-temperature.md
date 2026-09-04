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

## Objective

This study evaluates the long-term impacts of climate change stressors—specifically elevated CO₂, increased temperature, and storm intensification—on agricultural productivity and environmental degradation in Oklahoma. The goal is to inform future land and water management practices under projected climate scenarios.

## Methods

Models Used: Weather Generator (CLIGEN), a modified WEPP (Water Erosion Prediction Project)

Climate Data Source: Ensemble of 25 General Circulation Models (GCMs) from CMIP5, downscaled and bias-corrected for high-resolution climate projections.

Scenario Design:

CO₂ concentrations: Baseline vs. RCP4.5 & 8.5 projections

Temperature increase: 1.5°C to 4.5°C scenarios

Rainfall: Intensified storm scenarios using modified precipitation patterns

Site: A research site in Oklahoma representative of southern Great Plains agricultural landscapes.

## Key Results

Crop Yield:

Elevated CO₂ enhanced crop productivity (e.g., biomass), but extreme temperature increases offset gains, especially in high emission scenarios.

Surface Runoff & Soil Loss:

Storm intensification significantly increased runoff volumes and soil erosion, particularly in no-till or monoculture scenarios.

Projected changes in rainfall intensity had a stronger influence on soil loss than changes in average annual precipitation.

WEPP simulations showed increased vulnerability of the landscape to hydrologic and erosion extremes under combined stressors.

## Conclusion

This research demonstrates that multi-factor climate stress could severely challenge agricultural sustainability and watershed resilience. Integrating CO₂-plant interactions with hydrological modeling provides a more realistic forecast of future impacts. The study highlights the importance of adaptive soil conservation practices and resilient cropping systems to buffer against climate extremes in the region.

WEPP (Water Erosion Prediction Project) run interface:

![WEPP model interface configured for a 100-year simulation at Fort Reno, Oklahoma, showing a conventional canola–alfalfa management system along a 656.2-foot hillslope.](/images/research-summaries/wepp-model-running-interface.jpg)

## Supporting script

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

The above developed Python script significantly enhances the simulation capability of the modified WEPP (Water Erosion Prediction Project) model, which traditionally supports only a single combination of climate, cropping, and tillage management per run. This custom script automates and batch-processes WEPP simulations, enabling the model to simultaneously execute 29 distinct combinations of climate scenarios and land management practices over a 100-year period. By systematically modifying input parameters and managing simulation runs, the script efficiently generates long-term projections of runoff, soil loss, and crop yield, streamlining what would otherwise be a time-consuming and manual process. This tool is especially valuable for evaluating the impacts of climate change and conservation practices on soil and water resources at scale. 

Results Visualization Tool: R 

Exceedance probability of annual soil loss for continuous winter wheat under conventional and no-till treatments during baseline, future1 RCP4.5, and future 2 RCP 8.5 scenarios (Solid line stands for the baseline, dashed line is the mean of 25 GCMs) 

Average annual runoff (a) and soil loss (b) grouped by cropping (Ca: canola; Wt: wheat; Sg: sorghum; Sb: soybean; Ct: cotton; Ca-alf: canola-alfalfa; Wt-alf: wheat-alfalfa; Sg-alf: Sorghum-alfalfa; Sb-alf: soybean-alfalfa; Ct-alf: cotton-alfalfa; Wt_double: winter wheat-summer soybean double crops) and tillage systems (RT: reduced till; DT: delayed till; NT: no till; CT: conventional till) under baseline conditions and those averaged over 25 GCMs under two RCPs scenarios during 2021-2050 and 2051-2080 (*, **, *** refer to statistical significant at the 90, 95, 99% confidence level; one-sample one-tailed t-test n = 25). 

Highlighted in WEPP-CO₂ Climate Impact Study 
```
