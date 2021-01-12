---
title: Generate and add a missing icon to the map
description: Dynamically generate a missing icon at runtime and add it to the map.
topics:
  - Styles
  - Layers
thumbnail: add-image-missing-generated
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-image-missing-generated.html';"
---

This example uses [`addImage`](/mapbox-gl-js/api/map/#map#addimage) to dynamically generate an icon at runtime and add it to a map style. Then, it adds the icon to the map by including the `'layout': {'icon-image': ['concat', 'square-rgb-', ['get', 'color']]}` statement inside [`addLayer`](/mapbox-gl-js/api/map/#map#addlayer).

{{ <Example html={html} {...this.props} /> }}
