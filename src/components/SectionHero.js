import React from 'react';
import _ from 'lodash';

export default class SectionHero extends React.Component {
  render() {
    const section = _.get(this.props, 'section');
    const sectionId = _.get(section, 'section_id');

    return (
      <section id={sectionId} className="block block-hero outer">
        <div className="inner">
          <div className="Hero_content">
            <div className="Hero_avatar">
              <img src="https://arepa.s3.amazonaws.com/oscar-barajas-tavares.png" alt="Oscar Barajas Tavares" />
            </div>
            <div className="Hero_person">
              <div className="block-header inner-sm">
                <h1 className="block-title">Oscar Barajas Tavares</h1>
              </div>
              <div className="block-content inner-sm">Foundation Layer at
              @platzi - Microsoft MVP - Lead at Developer Circles from Facebook, I teach React & Svelte - #Twitch Partner #EStreamerCoders - 🇲🇽 🇨🇴</div>
            </div>
          </div>
          <header className="Header">
            <div className="Header-content">
              <div className="Header-items">
                <div className="Header-item">
                  <div className="Header-title">
                    <a href="https://instagram.com/gndx" target="_blank" rel="noopener noreferrer">
                      <h2>
                        <span>Live Streams</span>@gndx
                      </h2>
                    </a>
                    <p>❤️👨‍💻🔥</p>
                  </div>
                </div>
                <div className="Header-item">
                  <figure>
                    <img src="https://arepa.s3.amazonaws.com/youtube.png" alt="Youtube" />
                  </figure>
                  <div className="Header-title">
                    <a
                      href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                      <h2>
                        <span>Youtube</span>Oscar Barajas
                      </h2>
                    </a>
                    <p>🗓️ Viernes 9PM</p>
                  </div>
                </div>
                <div className="Header-item">
                  <figure>
                    <img src="https://arepa.s3.amazonaws.com/youtube.png" alt="Youtube" />
                  </figure>
                  <div className="Header-title">
                    <a
                      href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                      <h2>
                        <span>Youtube</span>Oscar Barajas
                      </h2>
                    </a>
                    <p>🗓️ Sabado 10PM</p>
                  </div>
                </div>
                <div className="Header-item">
                  <figure>
                    <img
                      src="https://arepa.s3.amazonaws.com/app-icons-twitch.png"
                      alt="Twitch" />
                  </figure>
                  <div className="Header-title">
                    <a href="https://twitch.tv/gndxdev" target="_blank" rel="noopener noreferrer">
                      <h2>
                        <span>Twitch</span>gndxdev
                      </h2>
                    </a>
                    <p>🗓️ Domingos 8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    );
  }
}
