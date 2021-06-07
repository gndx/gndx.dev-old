import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { getPageUrl, Link, withPrefix } from '../utils';
import moment from 'moment-strftime';

export default class Portfolio extends React.Component {
    renderProject(project, index) {
        const title = _.get(project, 'title');
        const thumbImage = _.get(project, 'thumb_image');
        const date = _.get(project, 'date');
        const excerpt = _.get(project, 'excerpt');
        const thumbImageAlt = _.get(project, 'thumb_image_alt', '');
        const projectUrl = getPageUrl(project, { withPrefix: true });
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        return (
            // <article key={index} className="project">
            //     <Link href={projectUrl} className="project-link">
            //         {thumbImage && (
            //             <div className="project-thumbnail">
            //                 <img src={withPrefix(thumbImage)} alt={thumbImageAlt} />
            //             </div>
            //         )}
            //         <header className="project-header">
            //             <h2 className="project-title">{title}</h2>
            //         </header>
            //     </Link>
            // </article>
            <article key={index} className="post grid-item">
                <div className="post-inside">
                    {thumbImage && <Link className="post-thumbnail" href={projectUrl}><img src={withPrefix(thumbImage)} alt={thumbImageAlt} /></Link>}
                    <header className="post-header">
                        <h2 className="post-title"><Link href={projectUrl}>{title}</Link></h2>
                        <div className="post-meta">
                            <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                        </div>
                    </header>
                    {excerpt && <p className="post-content">{excerpt}</p>}
                </div>
            </article>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const layoutStyle = _.get(page, 'layout_style', 'mosaic');
        const projects = _.orderBy(_.get(this.props, 'projects', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <div className="inner outer">
                    <header className="page-header inner-sm">
                        <h1 className="page-title line-top">{title}</h1>
                        {subtitle && <div className="page-subtitle">{subtitle}</div>}
                    </header>
                    <div className={`post-feed grid grid-col-3`}>
                        {_.map(projects, (project, index) => this.renderProject(project, index))}
                    </div>
                </div>
            </Layout>
        );
    }
}
