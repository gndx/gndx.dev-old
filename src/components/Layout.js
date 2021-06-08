import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { withPrefix, classNames } from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.handleVideoEmbeds = this.handleVideoEmbeds.bind(this);
    }

    componentDidMount() {
        this.handleVideoEmbeds();
    }

    componentDidUpdate() {
        this.handleVideoEmbeds();
    }

    handleVideoEmbeds() {
        const videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
        noframe(videoEmbeds.join(','), '.inner-sm');
    }

    render() {
        const page = _.get(this.props, 'page');
        const pageTitle = _.get(page, 'title');
        const config = _.get(this.props, 'config');
        const configTitle = _.get(config, 'title');
        const colorScheme = _.get(config, 'color_scheme', 'light');
        const accentColor = _.get(config, 'accent_color', 'pink');

        const seoImage = _.get(page, 'thumb_image');
        const seoTitle = _.get(page, 'title');
        const seoDescription = _.get(page, 'subtitle');

        const title = seoTitle ? seoTitle : [pageTitle, configTitle].join(' | ');

        const description = seoDescription ? seoDescription : 'Foundation Layer at @platzi - Microsoft MVP - Lead at Developer Circles from Facebook - I teach React &amp; Svelte.'
        const ogImage = seoImage ? seoImage : 'https://arepa.s3.amazonaws.com/og-gndx.png';

        return (
            <React.Fragment>
                <Helmet>
                    <title>{title}</title>
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={description} />
                    <link href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i&display=swap" rel="stylesheet" />
                    <meta content="#333333" name="theme-color" />
                    <link rel="canonical" href="https://gndx.dev/" />
                    <link href="favicon.png" rel="icon" type="image/png" />
                    <meta name="description" content={description} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@gndx" />
                    <meta name="twitter:creator" content="@gndx" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={ogImage} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={ogImage} />
                    <meta property="og:url" content="https://gndx.dev/" />
                    <meta property="og:site_name" content={title} />
                    <meta property="og:locale" content="es_ES" />
                    <meta property="og:type" content="article" />
                    <meta property="fb:app_id" content="285513459106600" />

                    <link rel="manifest" href="/manifest.json" />

                    <body className={classNames(`palette-${colorScheme}`, `accent-${accentColor}`)} />
                </Helmet>
                <div id="page" className="site">
                    <Header page={page} config={config} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer config={config} />
                </div>
            </React.Fragment>
        );
    }
}
