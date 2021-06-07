import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { getPageUrl, htmlToReact, Link, withPrefix } from '../utils';

export default class SectionPortfolio extends React.Component {
    renderProject(project, index, projectCount, viewAllLabel, viewAllUrl) {
        const title = _.get(project, 'title');
        const thumbImage = _.get(project, 'thumb_image');
        const thumbImageAlt = _.get(project, 'thumb_image_alt', '');
        const date = _.get(project, 'date');
        const excerpt = _.get(project, 'excerpt');

        const projectUrl = getPageUrl(project, { withPrefix: true });
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');

        if (index === projectCount - 1 && viewAllLabel && viewAllUrl) {
            return (
                <article key={index} className="post grid-item">
                    <div className="post-inside">
                        {thumbImage && <Link className="post-thumbnail" href={projectUrl}><img src={withPrefix(thumbImage)} alt={thumbImageAlt} /></Link>}
                        <header className="post-header">
                            <h3 className="post-title"><Link href={projectUrl}>{title}</Link></h3>
                            <div className="post-meta">
                                <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                            </div>
                        </header>
                        {excerpt && <p className="post-content">{excerpt}</p>}
                    </div>
                </article>
            );
        } else {
            return (
                <article key={index} className="post grid-item">
                    <div className="post-inside">
                        {thumbImage && <Link className="post-thumbnail" href={projectUrl}><img src={withPrefix(thumbImage)} alt={thumbImageAlt} /></Link>}
                        <header className="post-header">
                            <h3 className="post-title"><Link href={projectUrl}>{title}</Link></h3>
                            <div className="post-meta">
                                <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                            </div>
                        </header>
                        {excerpt && <p className="post-content">{excerpt}</p>}
                    </div>
                </article>
            )
        }
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const layoutStyle = _.get(section, 'layout_style', 'mosaic');
        const viewAllLabel = _.get(section, 'view_all_label');
        const viewAllUrl = _.get(section, 'view_all_url');
        const projects = _.orderBy(_.get(this.props, 'projects', []), 'date', 'desc');
        const projectsNumber = _.get(section, 'projects_number', 6);
        const recentProjects = projects.slice(0, projectsNumber);
        const projectCount = _.size(recentProjects);

        return (
            <section id={sectionId} className="block block-posts outer">
                <div className="inner">
                    {(title || subtitle) && (
                        <div className="block-header inner-sm">
                            {title && <h2 className="block-title line-top">{title}</h2>}
                            {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                        </div>
                    )}
                    <div className="block-content">
                        <div className={`post-feed grid grid-col-3`}>
                            {_.map(recentProjects, (project, index) => this.renderProject(project, index, projectCount, viewAllLabel, viewAllUrl))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
