---
title: Play map locations as a slideshow
description: Autoplay the locations of boroughs in New York City.
topics:
  - Camera
thumbnail: playback-locations
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './playback-locations.html';"
---

This example autoplays through a series of locations of boroughs in New York City.

The application uses a variable to define a collection of locations, each with a title, description, center, and other properties. Then, it defines an automatic playback function and uses that function with [`flyTo`](/mapbox-gl-js/api/map/#map#flyto) to autoplay through locations on the map and update the descriptive overlay.

{{ <Example html={html} {...this.props} /> }}
