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

This example dynamically generates a missing icon at runtime, then uses [`addImage`](/mapbox-gl-js/api/map/#map#addimage) to add it to the map.

{{ <Example html={html} {...this.props} /> }}
