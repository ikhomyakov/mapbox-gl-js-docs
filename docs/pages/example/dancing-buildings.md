---
title: Animate 3D buildings based on ambient sounds
description: Make a 3D map that responds to sounds from your environment.
topics:
  - User interaction
thumbnail: dancing-buildings
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './dancing-buildings.html';"
---

This example connects the runtime styling API with the Web Audio API to create a map where the 3D buildings dance to the rhythm of your ambient environment.

The application uses [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) to access audio from the user's environment, then analyzes that sound for loudness, and uses the loudness levels to control the [`fill-extrusion-height`](/mapbox-gl-js/style-spec/layers/?size=n_10_n#paint-fill-extrusion-fill-extrusion-height) property of the [`fill-extrusion`](/mapbox-gl-js/style-spec/layers/#fill-extrusion) type layer so the 3D buildings get taller when the audio is louder.

This example uses the [`==`](/mapbox-gl-js/style-spec/expressions/#==), [`>`](/mapbox-gl-js/style-spec/expressions/#%3E) and [`<=`](/mapbox-gl-js/style-spec/expressions/#%3C=) [`Decision`](/mapbox-gl-js/style-spec/expressions/#decision) type expressions.

{{ <Example html={html} {...this.props} /> }}
