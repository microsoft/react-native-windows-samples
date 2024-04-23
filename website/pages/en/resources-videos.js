/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const CWD = process.cwd();
const siteConfig = require(CWD + '/siteConfig.js');
const versions = require(CWD + '/versions.json');

const docsUrl = siteConfig.url + siteConfig.baseUrl;
const repoUrl = siteConfig.repoUrl;

const textContent = {
  resourceslist: `
  `,
};

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedResource: 'repos' };
  }

  render() {

    let currentVersion = versions.length > 0 ? versions[0] : null;
    let latestVersions = ['next'].concat(
      versions.filter(version => version.indexOf('-RC') !== -1)
    );
    const stableVersions = versions.filter(
      version => version.indexOf('-RC') === -1
    );

    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const ResourceCardItem = ({ videotitle, videotype, videodifficulty, speakername, imgurl, videodisc, cardlink }) => (
      <div className="CenterContent">
        <a href={cardlink}>
          <div className="videocard" style={{ maxHeight: 380, marginBottom: 50 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ maxWidth: '100%', maxHeight: '50%' }}>
                <img src={imgurl} alt="videoimg" />
              </div>
              <div className="videocardlengthtip">
                <div>
                  <div>
                    <img style={{ width: 14, height: 14 }} src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="timeicon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="videocardcontent">
              <div className="videocardheader">
                <p style={{ fontsize: 46, fontWeight: 700 }}>{videotitle}</p>
                <div className="videocardinfo">
                  <p style={{ fontSize: 14 }}>{videotype}</p>
                </div>
              </div>
              <div style={{ marginBottom: 15 }}>
                <div >{videodisc}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );

    const videoUrls = [
      { yt: 'PYMMxfttOug', title: 'React Native EU 2023: Tommy Nguyen & Lorenzo Sciandra - Raising the Bar'},
      { yt: 'ChDQZpWQbwk', title: 'Chain React 2023: Christoph Purrer - From Electron to React Native'},
      { yt: '1vMic8ixfVI', title: `Chain React 2023: Lorenzo Sciandra - The work that you don't see`},
      { yt: 'kMJNEFHj8b8', title: 'Chain React 2023: Chiara Mooney & Shiven Mian - Building for Microsoft'},
      { yt: 'uSr9KXu707s', title: 'React Native Radio Ep267: React Native Windows with Chiara Mooney'},
      { yt: 'r7yKet5dga4', title: 'React Native EU 2021: Khalef Hosany - Unlocking the next generation of desktop app with React Native' },
      { yt: 'gWOrCedNR9M', title: 'React Native EU 2020: Steven Moyes - Building For Desktops And Dual Screens' },
      { yt: 'QMFbrHZnvvw', title: 'MS Build SK119 React Native: Build cross platform apps that target Windows, Mac, and more!' },
      { yt: 'x6-5e3Lifyw', title: 'App Development Community Standup: React Native for Windows update' },
      { yt: 'DAEnPV78rQc', title: 'RNEU 2021: Lorenzo Sciandra & Tommy Nguyen - Improve all the repos – exploring Microsoft’s DevExp' },
      { yt: 'IUMWFExtDSg', title: 'React Native EU 2019: Micah Lewis & EJ Layne - React Native @ Microsoft' },
    ];

    const VideosList = () => (
      <Section background="light">
        <div className="content">
          {videoUrls.map(video => <iframe style={{ width: 560, height: 315, marginBottom: 16 }} src={`https://www.youtube.com/embed/${video.yt}`}
            title={video.title} frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />)}
        </div>
      </Section>
    );

    return (
      <div className="docMainWrapper wrapper">
        <div className="docsNavContainer" id="navButtons_clickTarget">
          <nav className="toc">
            <div className="toggleNav">
              <section className="navWrapper wrapper">
                <div className="navBreadcrumb wrapper">
                  <div className="navToggle" id="navButtons_clickSource">
                    <div className="hamburger-menu">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                  <h2>Resources</h2>
                  <div class="tocToggler" id="tocToggler"><i class="icon-toc"></i></div>
                </div>
                <div className="navGroups">
                  <div className="navGroup">
                    <h3 className="navGroupCategoryTitle">Resources</h3>
                    <ul>
                      <li className="navListItem">
                        <a href="./resources" className="navItem">Repos</a>
                      </li>
                      <li className="navListItem">
                        <a href="./resources-news-social" className="navItem" >News &amp; Social</a>
                      </li>
                      <li className="navListItem navListItemActive">
                        <a className="navItem" >Videos</a>
                      </li>
                      <li className="navListItem">
                        <a href="./resources-showcase" className="navItem" >Showcase</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </nav>
        </div>
        <div className="container mainContainer docsContainer">
          <div className="wrapper">
            <div id="newssocial">
              <VideosList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Resources.title = "Resources - Videos";

module.exports = Resources;
