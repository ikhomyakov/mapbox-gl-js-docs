---
title: Add an image
description: Add a radar weather image overlay on top of a dark vector baselayer.
topics:
  - Sources
  - Layers
thumbnail: image-on-a-map
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './image-on-a-map.html';"
---

This example adds a radar weather image overlay on top of a dark vector baselayer.

To create the vector baselayer, the example provides a JSON object to define a map [`style`](/mapbox-gl-js/api/map/#map-parameters) that uses the publicly available Mapbox Streets vector tileset as a source for several [`vector`](/mapbox-gl-js/style-spec/sources/#vector) layers, and recolors them to create a dark appearance. 

To add the raster overlay, the example adds another source to the same JSON object, this time using the [`image`](/mapbox-gl-js/style-spec/sources/#image) source type, and adds a [`raster`](/mapbox-gl-js/style-spec/layers/#raster) layer to the JSON object.

{{ <Example html={html} {...this.props} /> }}
