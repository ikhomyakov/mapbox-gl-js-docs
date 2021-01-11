---
title: Display a satellite map
description: Display a satellite raster baselayer on a map.
topics:
  - Styles
thumbnail: satellite-map
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
- Mapbox Satellite tileset
prependJs:
- "import Example from '../../components/example';"
- "import html from './satellite-map.html';"
---

This example shows how to display a satellite raster baselayer on a web map.

This example is like the [Display a map](/mapbox-gl-js/example/simple-map/) example, but it uses the style URL for [Mapbox Satellite](https://www.mapbox.com/maps/satellite/).

{{ <Example html={html} {...this.props} /> }}
