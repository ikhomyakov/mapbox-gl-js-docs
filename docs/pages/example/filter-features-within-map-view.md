---
title: Filter features within map view
description: Move the map to query viewable features in a vector tile layer and filter by typing in an input.
topics:
  - User interaction
thumbnail: filter-features-within-map-view
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './filter-features-within-map-view.html';"
---

Use [`queryRenderedFeatures`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#queryrenderedfeatures) to enable a user to move a map to query viewable features in a vector tile layer and filter by typing in an input.

{{ <Example html={html} {...this.props} /> }}
