---
title: Change a map's style
description: Switch to another map style.
topics:
  - Styles
  - User interaction
thumbnail: setstyle
contentType: example
layout: example
language:
- JavaScript
products:
- Mapbox GL JS
prependJs:
- "import Example from '../../components/example';"
- "import html from './setstyle.html';"
---

Switch to another map style by using [`setstyle`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setstyle) with a [style URL](https://docs.mapbox.com/help/glossary/style-url/) for your own custom map style, or a style URL for any of our [Mapbox-owned styles](https://docs.mapbox.com/api/maps/styles/#mapbox-styles).

{{ <Example html={html} {...this.props} /> }}
