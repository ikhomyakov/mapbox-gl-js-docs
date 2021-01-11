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

This map uses 2014 U.S. Census data to create two layers, one containing a choropleth visualization for _state populations_, and one containing a choropleth visualization for _county populations_. 

Then, it defines a zoom level at which each layer and its respective legend should appear or disappear.

You can use the `minzoom` and `minzoom` [layer properties](/mapbox-gl-js/style-spec/layers/) to define the zoom levels at which a map layer should appear or disappear.

You can use [`getZoom`](/mapbox-gl-js/api/map/#map#getzoom) with the [`MapBoxZoomEvent`](/mapbox-gl-js/api/events/#mapboxzoomevent) event type to get zoom values to control the appearance of other elements. 

{{ <Example html={html} {...this.props} /> }}
