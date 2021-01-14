---
title: Animate a line
description: Animate a line by updating a GeoJSON source on each frame.
topics:
  - Layers
  - Sources
thumbnail: animate-a-line
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-a-line.html';"
---

This example animates a line by updating a GeoJSON source on each frame.

It uses a variable to store a GeoJSON object, then uses [`addSource`](/mapbox-gl-js/api/map/#map#addsource) referring to that object as a data value, then uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add a [`line` layer](/mapbox-gl-js/style-spec/layers/#line) to the map.

When the animation begins, the data in the GeoJSON object changes, and the line appears animated on the map.

{{ <Example html={html} {...this.props} /> }}
