---
title: Update a choropleth layer by zoom level
description: Display state or county population depending on zoom level.
topics:
  - Layers
  - User interaction
thumbnail: updating-choropleth
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './updating-choropleth.html';"
---

This map uses 2014 U.S. Census data to create two layers. One layer contains a choropleth visualization for _state populations_, and one layer contains a choropleth visualization for _county populations_. 

The example defines a zoom level at which each layer and its respective legend should appear or disappear using the `minzoom` and `maxzoom` [layer properties](/mapbox-gl-js/style-spec/layers/).

You can use [`getZoom`](/mapbox-gl-js/api/map/#map#getzoom) with the [`MapBoxZoomEvent`](/mapbox-gl-js/api/events/#mapboxzoomevent) event type to get zoom values to control the appearance of other elements. 

{{ <Example html={html} {...this.props} /> }}
