---
title: Add a stretchable image to the map
description: Use a stretchable image as a background for text.
topics:
  - Styles
  - Layers
thumbnail: add-image-stretchable
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './add-image-stretchable.html';"
---

This example uses a stretchable image as a background for text. Stretchable images allow some parts of the image to stretch while keeping other parts, such as corners, at a constant size. Set the `layout` property `['icon-text-fit'](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#layout-symbol-icon-text-fit): 'both'` to use the image as background for the text.

{{ <Example html={html} {...this.props} /> }}
