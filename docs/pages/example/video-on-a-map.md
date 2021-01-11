---
title: Add a video
description: Display a video on top of a satellite raster baselayer.
topics:
  - Sources
  - Layers
thumbnail: video-on-a-map
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './video-on-a-map.html';"
---

Display a [`video`](/mapbox-gl-js/style-spec/sources/#video) in a map layer by adding a [source](/mapbox-gl-js/style-spec/sources/) and then adding a [layer](/mapbox-gl-js/style-spec/layers/) using that source. This example adds a video layer on top of a raster layer with satellite.

Add interactivity by using the [click](/mapbox-gl-js/api/map/#map.event:click) event to pause and play the video.

{{ <Example html={html} {...this.props} /> }}
