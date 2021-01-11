---
title: Update a feature in realtime
description: Change an existing feature on your map in real-time by updating its data.
topics:
  - Sources
thumbnail: live-update-feature
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './live-update-feature.html';"
---

This example changes an existing feature on a map in real-time by updating its data.

The application also uses [`panTo`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#panto) to animate the camera as the location of the `line` feature changes.

{{ <Example html={html} {...this.props} /> }}
