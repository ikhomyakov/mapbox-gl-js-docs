---
title: Animate map camera around a point
description: Animate the map camera around a point.
topics:
  - Camera
thumbnail: animate-camera-around-point
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './animate-camera-around-point.html';"
---

This example uses [`rotateTo`](/mapbox-gl-js/api/map/#map#rotateto) to animate the map camera around a point.

This example uses the [`interpolate`](/mapbox-gl-js/style-spec/expressions/#interpolate) expression.

{{ <Example html={html} {...this.props} /> }}
