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

This example adds raster hillshading to a map by adding the [Mapbox Terrain-RGB](https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb) raster tileset as a [`raster-dem`](/mapbox-gl-js/style-spec/sources/#raster-dem) source with a [`hillshade`](/mapbox-gl-js/style-spec/layers/#hillshade) layer.

{{ <Example html={html} {...this.props} /> }}
