---
title: Show and hide layers
description: Create a custom layer switcher to display different datasets.
topics:
  - Layers
thumbnail: toggle-layers
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './toggle-layers.html';"
---

This example adds a clickable interface that allows a user to enable and disable two different map layers.

The interface uses [`setLayoutProperty`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setlayoutproperty) to toggle the value for each layer's [`layout`](https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#layout) sub-property for `visibility` between `visble` and `none`.

{{ <Example html={html} {...this.props} /> }}
