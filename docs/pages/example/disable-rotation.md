---
title: Disable map rotation
description: Prevent users from rotating a map.
topics:
  - User interaction
thumbnail: disable-rotation
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './disable-rotation.html';"
---

This example uses `dragRotate.disable` and `touchZoomRotate.disableRotation` so the [`DragRotateHandler`](/mapbox-gl-js/api/handlers/#dragrotatehandler) and [`TouchZoomRotateHandler`](/mapbox-gl-js/api/handlers/#touchzoomrotatehandler) prevent a user's drag and touch interactions from rotating a map.


{{ <Example html={html} {...this.props} /> }}
