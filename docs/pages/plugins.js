/*---
title: Plugins
description: Extend your Mapbox GL JS map with plugins.
pathname: /mapbox-gl-js/plugins/
products:
- Mapbox GL JS
---*/

import React from 'react';
import slug from 'slugg';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import md from '../components/md';
import PageShell from '../components/page_shell';
import entries from 'object.entries';
import IconText from '@mapbox/mr-ui/icon-text';
import plugins from '../data/plugins.json';

export default class Plugins extends React.Component {
    render() {
        return (
            <PageShell {...this.props}>
                <div className="prose">
                    <h1 className="mt24 mt0-mm txt-fancy">Plugins</h1>
                </div>
                <div>
                    <div
                        id="plugins"
                        className="doc"
                        data-swiftype-index="true"
                    >
                        {entries(plugins).map(([title, plugins], i) => (
                            <div key={i} className="">
                                <a
                                    className={`unprose mb18 ${
                                        i > 0 ? 'pt60' : 'pt30'
                                    } block color-blue-on-hover`}
                                    href={`#${slug(title)}`}
                                    style={{ marginTop: '-30px' }}
                                    id={slug(title)}
                                >
                                    <h2 className="txt-bold">
                                        {title} ({entries(plugins).length})
                                    </h2>
                                </a>
                                {entries(plugins).map(([name, plugin], i) => (
                                    <div
                                        key={i}
                                        className="mb18 border-b border--darken10"
                                    >
                                        <div className="mb6">{name}</div>
                                        <div className="color-gray color-gray-on-hover mb6 prose">
                                            {md(plugin.description)}
                                        </div>

                                        <div className="pb18">
                                            {plugin.website && (
                                                <div className="">
                                                    <a
                                                        className="link link--blue"
                                                        href={plugin.website}
                                                    >
                                                        <IconText iconBefore="github">
                                                            View on GitHub
                                                        </IconText>
                                                    </a>
                                                </div>
                                            )}
                                            {plugin.example && (
                                                <div className="mt6">
                                                    <a
                                                        className="link link--blue"
                                                        href={prefixUrl(
                                                            `/example/${plugin.example}`
                                                        )}
                                                    >
                                                        <IconText iconBefore="code">
                                                            View example
                                                        </IconText>
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </PageShell>
        );
    }
}
