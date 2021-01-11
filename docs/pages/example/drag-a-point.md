---
title: Create a draggable point
description: Drag the point to a new location on a map and populate its coordinates in a display.
topics:
  - User interaction
thumbnail: drag-a-point
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './drag-a-point.html';"
---

In this example, a user can drag a point to a new location on the map, and a map overlay displays the new point coordinates.

The application stores the point coordinates in a variable with a GeoJSON value, then uses [`MapTouchEvent`s](https://docs.mapbox.com/mapbox-gl-js/api/events/#maptouchevent) to prevent the default map drag behavior and enable changes to the variable.

{{ <Example html={html} {...this.props} /> }}
