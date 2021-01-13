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

This example shows how to change an existing feature on a map by updating its data.

It shows the progression of a path by drawing new coordinates to a feature in a [`line`](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#line) type layer, one at a time, an approach which you can use with a real-time data source.

It also uses [`panTo`](/mapbox-gl-js/api/map/#map#panto) to animate the camera to follow the line as new coordinates are added.

{{ <Example html={html} {...this.props} /> }}
