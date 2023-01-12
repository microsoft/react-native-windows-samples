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

    // This binding is necessary to make `this` work in the callback
    this.SelectResource = this.SelectResource.bind(this);
  }

  SelectResource(navItemName) {
    if (typeof document !== 'undefined') {
      var i;
      var x = document.getElementsByClassName("resourcesSideNavLink");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(navItemName).style.display = "block";
    }
    console.log('poop');
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

    const NewsAndSocialList = () => (
      <Section background="light">
        <div className="content">

          <a href="https://twitter.com/ReactNativeMSFT?ref_src=twsrc%5Etfw">

            <svg xmlns="http://www.w3.org/2000/svg" fill="#1d9bf0" width="32" height="32" viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="u01b__icon-home">
              <path opacity="0" d="M0 0h24v24H0z"></path>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </svg>
            <span style={{ verticalAlign: 'top', margin: 5 }}> Follow <b>@ReactNativeMSFT</b> on Twitter</span></a>


          <a href="https://discord.gg/KcxxrZVYSM">
            <span><img src="./img/discord.png" style={{ verticalAlign: 'top', width: 32, marginRight: 8 }} />
              Join the &nbsp;
              <span style={{ fontFamily: 'monospace', textDecorationLine: 'underline' }}>#react-native</span>
              &nbsp; channel on the <b>UWP Community</b> Discord server
            </span>
          </a>
        </div>
      </Section>
    );

    const VideosList = () => (
      <Section background="light">
        <div className="content">
          Videos list coming soon!
        </div>
      </Section>
    );

    return (
      <div className="docMainWrapper wrapper">
        <div className="docsNavContainer">
          <nav className="toc">
            <div className="toggleNav">
              <section className="navWrapper wrapper">
                <div className="navBreadcrumb wrapper">
                  <div className="navToggle" id="navToggler">
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
                      <li className="navListItem navListItemActive">
                        <a className="navItem" >News &amp; Social</a>
                      </li>
                      <li className="navListItem">
                        <a href="./resources-videos" className="navItem" >Videos</a>
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
              <NewsAndSocialList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Resources.title = "Resources - News & Social";

module.exports = Resources;
