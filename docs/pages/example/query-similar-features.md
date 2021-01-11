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

The example first uses [addSource](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addsource) to connect data from a vector tileset, and then uses [`addLayer`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addlayer) to add two [`fill`](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#fill) layers using that source.

Then, it uses [`mousemove`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map.event:mousemove) to gain [MapMouseEvent](https://docs.mapbox.com/mapbox-gl-js/api/events/#mapmouseevent) information to use with [`querySourceFeatures`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#querysourcefeatures) to search for the county located at the cursor position, and other counties with the same name.

{{ <Example html={html} {...this.props} /> }}
