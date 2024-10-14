// Create the map object and set it to a center point and zoom level
let map = L.map('map').setView([20, 0], 2);

// Add a tile layer (base map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Earthquake data URL (GeoJSON)
const earthquakeDataUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch the earthquake data
d3.json(earthquakeDataUrl).then(function(data) {
  // Define marker style based on magnitude and depth
  function styleInfo(feature) {
    return {
      radius: getRadius(feature.properties.mag),
      fillColor: getColor(feature.geometry.coordinates[2]), // Depth-based color
      color: "#000",
      weight: 0.5,
      opacity: 1,
      fillOpacity: 0.8
    };
  }

  // Function to calculate radius based on magnitude
  function getRadius(magnitude) {
    return magnitude ? magnitude * 4 : 1;
  }

  // Function to calculate color based on depth
  function getColor(depth) {
    return depth > 90 ? "#FF5F65" :
           depth > 70 ? "#FCA35D" :
           depth > 50 ? "#FDB72A" :
           depth > 30 ? "#F7DB11" :
           depth > 10 ? "#DCFA19" :
                        "#A3F600";
  }

  // Add the GeoJSON layer with earthquake data
  L.geoJSON(data, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      // Add a popup with earthquake info
      layer.bindPopup(
        `Magnitude: ${feature.properties.mag}<br>
         Location: ${feature.properties.place}<br>
         Depth: ${feature.geometry.coordinates[2]} km`
      );
    }
  }).addTo(map);

  // Create a legend for the map
  let legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let depths = [-10, 10, 30, 50, 70, 90];
    let colors = [
      "#A3F600",
      "#DCFA19",
      "#F7DB11",
      "#FDB72A",
      "#FCA35D",
      "#FF5F65"
    ];

    // Loop through depth intervals and generate labels
    for (let i = 0; i < depths.length; i++) {
      div.innerHTML +=
        '<i style="background: ' + colors[i] + '"></i> ' +
        depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
    }
    return div;
  };
  legend.addTo(map);
});
