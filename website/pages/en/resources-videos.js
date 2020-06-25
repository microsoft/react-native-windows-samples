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
    this.state = {selectedResource: 'repos'};

    // This binding is necessary to make `this` work in the callback
    this.SelectResource = this.SelectResource.bind(this);
  }

  SelectResource (navItemName) {
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

    const ResourceCardItem = ({ videotitle, videotype, videodifficulty, speakername, imgurl, videodisc, cardlink}) => (
      <div className="CenterContent">
      <a href={cardlink}>
        <div className="videocard" style={{maxHeight: 380, marginBottom: 50}}>
            <div style={{position: 'relative'}}>
              <div style={{maxWidth: '100%', maxHeight: '50%'}}>
                <img src={imgurl} alt="videoimg"/>
              </div>
              <div className="videocardlengthtip">
                <div>
                    <div>
                        <img style={{width: 14, height: 14}} src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="timeicon"/>
                    </div>
                </div>
              </div>
            </div>
            <div className="videocardcontent">
              <div className="videocardheader">
                <p style={{fontsize: 46, fontWeight: 700}}>{videotitle}</p>
                <div className="videocardinfo">
                  <p style={{fontSize: 14}}>{videotype}</p>
                </div>
              </div>
              <div style={{marginBottom: 15}}>
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

    const VidoesList = () => (
      <Section background="light">
        <div className="content">
          <h1>Videos list coming soon!</h1>
        </div>
      </Section>
    );

    return (
      <div className="row">
        <div className="resourcesPageSideNav">
          <Section background="tint">
            <div style={{float: "right", marginRight: 180}}>
              <div className="resourcesPageSideNavTitle">Resources</div>
              <div className="resourcesPageSideNavOptions">
                <a href="./resources" className={'resourcesSideNavLink '}>Repos</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a href="./resources-news-social"className="resourcesSideNavLink" >News & Social</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a className="resourcesSideNavLink selected" >Videos</a>
              </div>
            </div>
          </Section>
        </div>
        <div className="column">
          <div className="homepage" style={{marginLeft: 50}}>
            <div id="newssocial">
              <VidoesList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Resources;
