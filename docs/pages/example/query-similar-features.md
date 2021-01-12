---
title: Highlight features containing similar data
description: Hover over counties to highlight counties that share the same name.
topics:
  - User interaction
thumbnail: query-similar-features
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './query-similar-features.html';"
---

In this example, a user can hover their cursor over any county in the United States, and the map highlights other U.S. counties with a matching name. The application also shows a popup with the name of the county at the cursor location, and shows an HTML overlay with summary information.

The example first uses [`addSource`](/mapbox-gl-js/api/map/#map#addsource) to connect data from a vector tileset, and then uses [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer) to add two [`fill`](/mapbox-gl-js/style-spec/layers/#fill) layers using that source.

It uses [`mousemove`](/mapbox-gl-js/api/map/#map.event:mousemove) to find the name of the county located at the cursor position, then uses and [`querySourceFeatures`](/mapbox-gl-js/api/map/#map#querysourcefeatures) to find other counties with the same name and highlights them using an overlay on the map.

{{ <Example html={html} {...this.props} /> }}
