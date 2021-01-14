---
title: Add hillshading
description: Add raster hillshading to a map.
topics:
  - Layers
  - Sources
thumbnail: hillshade
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Mapbox Terrain-RGB tileset
prependJs:
- "import Example from '../../components/example';"
- "import html from './hillshade.html';"
---

This example adds raster hillshading to a map by first creating a map with no hillshading, then using [`addSource`](/mapbox-gl-js/api/map/#map#addsource) and [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add the freely available [Mapbox Terrain-RGB](https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb) raster tileset as a [`raster-dem`](/mapbox-gl-js/style-spec/sources/#raster-dem) source for a [`hillshade`](/mapbox-gl-js/style-spec/layers/#hillshade) layer.

{{ <Example html={html} {...this.props} /> }}
