# leaflet-challenge
Module 15 Challenge

This project visualizes earthquake data from the USGS using Leaflet, showing the locations of earthquakes from the past week. The map displays circle markers that vary in size based on earthquake magnitude and change color based on earthquake depth.

### Features

- **Interactive Map:** View earthquake locations on a world map.
- **Marker Size:** Based on earthquake magnitude.
- **Marker Color:** Based on earthquake depth (from green to red).
- **Popups:** Display information about each earthquake (magnitude, location, and depth).
- **Legend:** Explains the color scale for earthquake depth.

## Getting Started

### Prerequisites

- A web browser to open the project.
- Internet connection to access the map tiles and USGS data.

### How to Use
- **1.** Clone or download the project files.
- **2.** Open index.html in your web browser.
- **3.** Explore the interactive map.

### Project Files

- index.html: The main HTML file containing the map container.
- logic.js: The JavaScript file that fetches earthquake data and adds it to the map.
- style.css (optional): Styles for the map layout (Leaflet's default styles are used).
### How It Works

- **Map:** The map is created using Leaflet and OpenStreetMap tiles.
- **Data:** Earthquake data is fetched from the USGS GeoJSON feed using D3.
- **Markers:** Earthquakes are shown as circle markers that vary in size and color based on their magnitude and depth.
- **Legend:** A color-coded legend shows the depth of earthquakes.

### Customization

- Change the data source by updating the earthquakeDataUrl in logic.js to visualize earthquakes from different timeframes or magnitude levels.

