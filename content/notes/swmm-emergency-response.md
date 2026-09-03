+++
title = "Using SWMM for Emergency Response Planning: A Case Study Evaluating Biological Agent Transport Under Various Rainfall Scenarios and Urban Surfaces"
description = "How SWMM can support emergency-response planning for biological-agent transport under varying rainfall and urban surfaces."
publication_year = 2023
weight = 20
type = "notes"
topic = "Urban Stormwater"
publication_title = "Using SWMM for Emergency Response Planning: A Case Study Evaluating Biological Agent Transport Under Various Rainfall Scenarios and Urban Surfaces"
snapshot_question = "How do rainfall intensity and urban surface type control biological-agent transport through stormwater systems?"
snapshot_methods = "SWMM / PCSWMM · rainfall scenarios · contaminant fate and transport · Python automation"
snapshot_relevance = "Supports exposure-zone identification, decontamination strategy evaluation, and emergency-response planning."
figure = "images/research-summaries/swmm-agent-transport-surfaces.png"
figure_width = 2048
figure_height = 1536
figure_alt = "Six maps comparing simulated biological-agent transport across asphalt and grass surfaces and concrete surfaces for scenarios A1, A2, and A3"
figure_caption = "Comparison of simulated biological-agent transport pathways and load ranges on asphalt–grass and concrete surfaces across application scenarios A1–A3."
figure_credit = "Source: Yuan et al. (2023)."
+++

## Objective

This study aims to assess how biological agents, specifically surrogates for hazardous pathogens like Bacillus anthracis, could be transported through urban stormwater systems under different rainfall intensities and land surface types. The research supports emergency preparedness and homeland security response using hydrological modeling.

## Methods

Tool Used: EPA Storm Water Management Model (SWMM/PCSWMM)

Simulations: Modeled biological contaminant runoff and transport under varying storm scenarios (e.g., low vs. high intensity rainfall)

Different urban surface configurations (e.g., impervious vs. pervious areas)

Data Inputs: Urban hydrologic and hydraulic parameters, agent decay rates, washoff coefficients, flow pathways

Approach: Integration of custom Python scripts for model automation and scenario comparisons

## Key Findings

Surface type and rainfall intensity significantly affect biological agent fate:

Heavier storms result in faster and more widespread dispersal of biological agents.

Impervious surfaces contribute to quicker runoff and less opportunity for agent decay or settling.

The model identifies critical infrastructure zones most vulnerable to contamination.

Results help guide decontamination strategies and emergency planning by illustrating potential exposure zones.

## Contributions

Demonstrated the applicability of SWMM for non-traditional pollutants such as pathogens.

Offered a framework for using hydrological modeling in biosecurity planning.

Supported by U.S. EPA Homeland Security Research Program in collaboration with USCG and DHS.

## Supporting script

```python
##############################################################################

## Programmer: Lifeng Yuan                                                  ##

## Development date: Dec. 1, 2021                                           ##

## Last update: Dec.10, 2021                                                ##

## Description: Output flow or velocity from certain conduits on land uses  ##

## Running env: IronPython (Python2.7) in PCSWMM                            ##

# ############################################################################

import os, sys, math, csv

# set work directory

path = r'C:\Users\lifengyuan\Stormwater Models\Stormwater_EC_EPA_v4'

os.chdir(path)

# confirm current work directory

print(os.getcwd())

# store swmm input file into a variable

swmm = pcpy.open_swmm_input('Stormwater_EC_EPA_v4.inp')

# obtain time step of swmm report in simulation options

outfile = pcpy.Graph.Files[0]

# identify and summarize conduits from asphalt, concrete, and grass

land_dict = {'S1A1000': ['C220233','C220231','C184791','C220229'],

             'S9100E0' :['C220236','C220235'],

             'S1C1000' :['C112822','C220243','C220241','C220240','C220238']}

# write a empty csv file

csv_file = open('output_velocity.csv','wb')

csv_writer = csv.writer(csv_file,delimiter = ',')

csv_writer.writerow(['Subcatchment','link','Year','Month','Day','Hour','Minute','Second','Velocity'])

csv_file.close()

# define a export_output function to write data and output statistics of surface runoff, velocity, flow

# take velocity as an example in the script

def export_output(sub,category,funcname,units,loc):

    csv_file = open('output_velocity.csv','ab')

    data = outfile.get_data(category,funcname,units,loc)

    velocity = []

    year = []

    month = []

    day = []

    hour = []

    minute = []

    second = []

    for i in range(len(data)):

        year.append(getattr(data[i].DateTime,'Year'))

        month.append(getattr(data[i].DateTime,'Month'))

        day.append(getattr(data[i].DateTime,'Day'))

        hour.append(getattr(data[i].DateTime,'Hour'))

        minute.append(getattr(data[i].DateTime,'Minute'))

        second.append(getattr(data[i].DateTime,'Second'))

        velocity.append(data[i].Value)

    # start to write csv file

    csv_writer = csv.writer(csv_file,delimiter = ',')

    for i in range(len(data)):

        csv_writer.writerow([sub,loc,year[i],month[i],day[i],hour[i],minute[i],second[i],velocity[i]])

    csv_file.close()

    print(sub, loc, 'successfully finished')

# define the output objectives

category = ['Subcatchments','Nodes','Links','System']

fnNames = ['Infiltration','Rainfall','Runoff','Depth','Volume','Flow','Velocity']

fnUnits = ['in/hr','ft','cfs','ft/s','ft2']

# export selected objectives

for k,v in land_dict.items():

    for i in range(len(v)):

        export_output(k,category[2],fnNames[6],fnUnits[3],v[i])
```
