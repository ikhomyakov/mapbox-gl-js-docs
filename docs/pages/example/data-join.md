---
title: Join local JSON data with vector tile geometries
description: Style a choropleth by merging local JSON data with vector tile geometries.
topics:
  - Sources
thumbnail: data-join
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './data-join.html';"
---

This example styles a choropleth map by merging local JSON data with vector tile geometries.

The application uses the [`match`](/mapbox-gl-js/style-spec/expressions/#match) expression to join the freely available [Mapbox Countries](https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1/) vector tileset with local JSON data by using the `ISO 3166-1 alpha 3` code as the lookup key for the country shape.

{{ <Example html={html} {...this.props} /> }}
