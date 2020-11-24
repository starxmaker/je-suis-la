# Je Suis Là

("I'm here" in English, pronounced /ʒə sɥi la/)

Je Suis Là is a simple library powered by OpenLayers and OpenStreetMaps. Its main goal is to quickly generate a map with a fixed pointer, without having to study Geolocation. It's useful for customers who wants a map with their company's location pinned. It's free and you just have to indicate the latitude and longitude (you can easily find those values on OpenStreetMaps in the url bar).

[Demo](https://starxmaker.github.io/je-suis-la)

## Installation

Include these files in your HTML. Je Suis Là completely requires OpenLayers in order to work, so make sure to import its JS and CSS first.

```
<!-- Import OpenLayers JS and CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/css/ol.css" type="text/css">
<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.4.3/build/ol.js"></script>

<!-- import the library -->
<script src="https://cdn.jsdelivr.net/gh/starxmaker/je-suis-la@main/je-suis-la.js" crossorigin="anonymous"></script>
```

## Quick start

To make it work quickly, you just have to indicate the id of the DIV that will contain the map, the latitude, and the longitude. That's all!
```
new JeSuisLa("map", -29.98130, -71.34999)
```

## Parameters

The library can receive the following parameters
```
new JeSuisLa(target, latitude, longitude, zoom, style)
```

| Parameter        | Required? | Type             | Default value | Description                               |
|------------------|-----------|------------------|---------------|-------------------------------------------|
| target           | Yes       | String           |               | The id attribute of the map container tag.|
| latitude         | Yes       | Float            |               | "The angular distance north or south from the equator of a point on the earth's surface, measured on the meridian of the point." (Dictionary.com)|
| longitude        | Yes       | Float            |               | "Angular distance east or west on the earth's surface, measured by the angle contained between the meridian of a particular place and some prime meridian, as that of Greenwich, England, and expressed either in degrees or by some corresponding difference in time." (Dictionary.com) |
|zoom              | No        | Integer          | 17            | Zoom level of the map. Its minimum value is 1 and its maximum value is 19. |
| style            | No          | Object         |{height: "20em",width: "100%"} | JSON object containing a custom style for the map. Note: if you don't specify a height or a width, the map will not be displayed. |

