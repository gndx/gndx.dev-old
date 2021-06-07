import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class Page extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'image');
        const video = _.get(page, 'video');
        const iframe = _.get(page, 'iframe');
        const cursos = _.get(page, 'cursos');
        const imageAlt = _.get(page, 'image_alt', '');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <div className="inner outer">
                    <article className="post post-full">
                        <header className="post-header inner-sm">
                            <h1 className="post-title line-top">{title}</h1>
                            {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                        </header>
                        {image && (
                            <div className="post-image">
                                <img src={withPrefix(image)} alt={imageAlt} />
                            </div>
                        )}
                        {video && (
                            <div className="post-image">
                                <video autoPlay muted loop>
                                    <source src={withPrefix(video)} type="video/mp4" />
                                </video>
                            </div>
                        )}
                        {markdownContent && <div className="post-content inner-sm">{markdownify(markdownContent)}</div>}
                        {iframe && (
                            <div className="post-content inner-sm">
                                <iframe
                                    src={withPrefix(iframe)}
                                    width="100%"
                                    height="232"
                                    frameBorder="0"
                                    title="Humans of Platzi - Oscar Barajas"
                                    allowtransparency="true"
                                    allow="encrypted-media" />
                            </div>
                        )}
                        {cursos && (
                            <div class="Posts svelte-1clxu8k">
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/bots-fb/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/1355-571dc94e-6f15-4e83-b558-71edeb7b9153.png"
                                                alt="Curso de Bots con Facebook Messenger" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Bots con Facebook Messenger</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">130 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/js-jest-2019/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/1357-a959540b-9de5-4dd4-af7b-73adaf44433f.png"
                                                alt="Curso de JavaScript Testing con Jest 2019" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de JavaScript Testing con Jest 2019</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">409 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/react-ejs/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png"
                                                alt="Curso Práctico de React JS" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso Práctico de React JS</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">2398 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/react-router-redux/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-react-redux-2ca3c0a5-fc53-437f-bfba-69e9ddd5a803.png"
                                                alt="Curso de React Router y Redux" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de React Router y Redux</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">1296 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/npm/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-gestion-dependencias-paquetes-npm-f02e4608-c688-4d99-aa6d-293ea6c0be8d.png"
                                                alt="Curso de Gestión de Dependencias y Paquetes con NPM" class="svelte-iyeypx" />
                                            </figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Gestión de Dependencias y Paquetes con NPM</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">1212 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/jest/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-unit-testing-jest-react-bb2bcb68-aeb7-4ff3-886e-f04816dfe0a0.png"
                                                alt="Curso de Unit Testing con Jest en React" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Unit Testing con Jest en React</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">374 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/asincronismo-js/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png"
                                                alt="Curso de Asincronismo con JavaScript" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Asincronismo con JavaScript</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">3437 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/ecmascript-6/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-ecmascript-6-d48e7bb7-a7a4-416d-a3b4-e11f0b13a229.png"
                                                alt="Curso de ECMAScript 6+" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de ECMAScript 6+</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">4446 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/scope/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-_closures-scope-javascript-3848a8e7-cf6f-47c5-a824-df5fc0c14d41.png"
                                                alt="Curso de Closures y Scope en JavaScript" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Closures y Scope en JavaScript</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">1490 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/spa-javascript/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-spa-javascript-vanilla-71b296fc-7041-4084-9f94-0ed5e1b53d18.png"
                                                alt="Curso de Single Page Application con JavaScript Vanilla" class="svelte-iyeypx" />
                                            </figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Single Page Application con JavaScript Vanilla</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">895 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/travis/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-travis-ci2--7ddee2a2-9343-492f-8461-32f6c7f2edeb.png"
                                                alt="Curso de Travis CI" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Travis CI</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">144 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/svelte/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-svelte-8cbb6b4b-8d22-4c31-8d74-64377c516ab8.png"
                                                alt="Curso de Svelte" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Svelte</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">265 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/bff/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-integracion-backend-frontend-04987dfb-dc9f-4578-8ecb-e7489956c3e5.png"
                                                alt="Curso de Integración de Backend y Frontend" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Integración de Backend y Frontend</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">213 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/sapper/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/badge-sapper-4f1700c9-e581-42e8-800d-92cc46700666.png"
                                                alt="Curso de Sapper" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso de Sapper</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">87 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>
                                <div class="Course"><a
                                    href="https://platzi.com/cursos/svelte-sapper-practico/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                    target="_blank" rel="referrer" class="svelte-iyeypx">
                                    <div class="Course-content svelte-iyeypx">
                                        <div class="Course-badge">
                                            <figure class="svelte-iyeypx"><img
                                                src="https://static.platzi.com/media/achievements/sveltebadge-7c1b29ec-f5ad-4908-af0c-3e634b0ab070.png"
                                                alt="Curso Práctico de Svelte y Sapper" class="svelte-iyeypx" /></figure>
                                        </div>
                                        <div class="Course-info">
                                            <h2 class="svelte-iyeypx">Curso Práctico de Svelte y Sapper</h2>
                                            <div class="Course-count"><span class="svelte-iyeypx">48 Opiniones</span></div>
                                        </div>
                                    </div>
                                </a></div>

                                <div class="Course">
                                    <a href="https://platzi.com/cursos/react-hooks/?utm_source=platzi_teacher&utm_medium=teacher_referral&utm_campaign=542"
                                        target="_blank" rel="referrer" class="svelte-iyeypx">
                                        <div class="Course-content svelte-iyeypx">
                                            <div class="Course-badge">
                                                <figure class="svelte-iyeypx"><img
                                                    src="https://static.platzi.com/media/achievements/badge-profesional-react-hooks-6b35d829-af8e-47e6-aef6-e4504db32bc4.png"
                                                    alt="Curso Profesional de React Hooks" class="svelte-iyeypx" /></figure>
                                            </div>
                                            <div class="Course-info">
                                                <h2 class="svelte-iyeypx">Curso Profesional de React Hooks</h2>
                                                <div class="Course-count"><span class="svelte-iyeypx">214 Opiniones</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="Course">
                                    <a href="https://platzi.com/cursos/webpack/?utm_source=platzi_teacher&amp;utm_medium=teacher_referral&amp;utm_campaign=542"
                                        target="_blank" rel="referrer" class="svelte-iyeypx">
                                        <div class="Course-content svelte-iyeypx">
                                            <div class="Course-badge">
                                                <figure class="svelte-iyeypx">
                                                    <img
                                                        src="https://static.platzi.com/media/achievements/badge-webpack-3e3867f2-5bcf-4a7e-9af2-cf735850a791.png"
                                                        alt="Curso de Webpack" class="svelte-iyeypx" />
                                                </figure>
                                            </div>
                                            <div class="Course-info">
                                                <h2 class="svelte-iyeypx">Curso de Webpack</h2>
                                                <div class="Course-count"><span class="svelte-iyeypx">111 Opiniones</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </Layout>
        );
    }
}
