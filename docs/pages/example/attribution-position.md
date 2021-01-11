---
title: Change the default position for attribution
description: Place attribution in the top-left position when initializing a map.
topics:
  - Controls and overlays
thumbnail: attribution-position
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './attribution-position.html';"
---

This example places the [required](https://docs.mapbox.com/help/how-mapbox-works/attribution/) map attribution in the `top-left` position when initializing a map.

The application uses [`addControl`]https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addcontrol with [`AttributionControl`](/mapbox-gl-js/api/markers/#attributioncontrol) to specify the position for this control as `top-left`.

{{ <Example html={html} {...this.props} /> }}
