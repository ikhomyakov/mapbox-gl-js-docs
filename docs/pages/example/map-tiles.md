---
title: Add a raster tile source
description: Add a third-party raster source to the map.
topics:
  - Sources
thumbnail: map-tiles
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './map-tiles.html';"
---

This example adds third-party raster tiles to a map by adding a source and a layer inside a JSON object in the [`style`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters) parameter of the map object.

The source uses the [`raster`](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster) source type and an external url for the `tiles` option. The layer uses the [`raster`](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#raster) layer type and references the source.

{{ <Example html={html} {...this.props} /> }}
