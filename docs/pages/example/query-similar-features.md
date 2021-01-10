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

In this example, a user can hover their cursor over any county in the United States, and the map highlights other U.S. counties with a matching name. The application also shows a popup with the name of the county at the cursor location, and shows an HTML overlay with the sum of counties with a matching name, and the sum of population totals for counties with a matching name.

Then, it uses [`mousemove`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map.event:mousemove) to gain [MapMouseEvent](https://docs.mapbox.com/mapbox-gl-js/api/events/#mapmouseevent) information to determine the [`lnglat`](https://docs.mapbox.com/mapbox-gl-js/api/events/#mapmouseevent#lnglat) value for the cursor position. 

, uses that value with [`querySourceFeatures`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#querysourcefeatures) to find information about other counties in 

Hover over counties to highlight counties that share the same name.

{{ <Example html={html} {...this.props} /> }}
