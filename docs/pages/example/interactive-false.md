---
title: Display a non-interactive map
description: Disable interactivity to create a static map.
topics:
  - User interaction
thumbnail: interactive-false
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './interactive-false.html';"
---

Set the map parameter [`interactive`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters) to `false` to present a static map with no interactivity.

{{ <Example html={html} {...this.props} /> }}
