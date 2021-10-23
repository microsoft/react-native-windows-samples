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

    const ReposCardList = () => (
      <Section background="light">
        <div className="content">
          <h1 style={{marginTop: -35, fontSize: 50, fontWeight: 700}}>Repos</h1>
          <p>The following is a suite of offerings from Microsoft in the React Native space to help you target Desktop platforms as well as accelerate your development efficiency with React Native.</p>
          <div className="row">
             <div className="column">
              <ResourceCardItem
                videolength="Repo"
                videotitle="React Native for Windows"
                videotype="Github Repo"
                cardlink="https://github.com/Microsoft/react-native-windows"
                imgurl="https://raw.githubusercontent.com/microsoft/react-native-windows/main/.github/hero2.png"
                videodisc="Official React Native for Windows framework for building native Windows applications with React."/>
                <ResourceCardItem
                  videolength="Repo"
                  videotitle="Fluent UI React Native (FURN)"
                  cardlink="https://github.com/microsoft/fluentui-react-native"
                  videotype="Github Repo"
                  imgurl="./img/homepage/fluentUI_image.png"
                  videodisc="FluentUI React Native is a javascript component library providing developers with controls that are in the Fluent Design System."/>
                  <ResourceCardItem
                    videolength="Repo"
                    videotitle="Hermes for Windows"
                    cardlink="https://github.com/microsoft/hermes-windows"
                    videotype="Github Repo"
                    imgurl="./img/homepage/hermes_logo_small.png"
                    videodisc="Microsoft’s fork of facebook/Hermes that brings Windows support to the lightweight JS engine for React Native."/>
                    <ResourceCardItem
                      videolength="Repo"
                      videotitle="React Native Test App"
                      videotype="Github Repo Sample"
                      cardlink="https://github.com/microsoft/react-native-test-app"
                      imgurl="https://raw.githubusercontent.com/microsoft/react-native-windows/main/.github/hero2.png"
                      videodisc="React Native Test App provides test apps for all platforms as a package."/>
             </div>
             <div className="column">
              <ResourceCardItem
                videolength="Repo"
                videotitle="React Native for macOS"
                cardlink="https://github.com/Microsoft/react-native-macos"
                videotype="Github Repo"
                imgurl="./img/homepage/native_and_js_mac_cropped.png"
                videodisc="Official React Native for macOS framework for building native macOS applications with React."/>
                <ResourceCardItem
                  videolength="Repo"
                  videotitle="Dual Screen"
                  videotype="Github Repo"
                  imgurl="./img/homepage/duo.jpg"
                  cardlink="https://github.com/microsoft/react-native-dualscreen"
                  videodisc="Microsoft's offerings to streamline dual-screen cross-platform development using React Native. The modules in the repo are targeting Windows and Android."/>
                  <ResourceCardItem
                    videolength="Repo"
                    videotitle="VS Code RN extension"
                    videotype="Github Repo"
                    imgurl="./img/homepage/vs_code_logo.png"
                    cardlink="https://github.com/Microsoft/vscode-react-native"
                    videodisc="React Native extension for VS Code enables you to debug your code and quickly and run react-native commands from the command palette."/>
                    <ResourceCardItem
                      videolength="Repo"
                      videotitle="App Center SDK for React Native"
                      videotype="Github Repo"
                      imgurl="./img/homepage/appcenter_logo.png"
                      cardlink="https://github.com/microsoft/appcenter-sdk-react-native"
                      videodisc="App Center allows you to get faster release cycles, higher-quality apps, and app insights to build what users want."/>
             </div>
          </div>
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
                <a className={'resourcesSideNavLink selected'}>Repos</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a href="./resources-news-social" className="resourcesSideNavLink" >News & Social</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a href="./resources-videos" className="resourcesSideNavLink" >Videos</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a href="./resources-showcase" className="resourcesSideNavLink" >Showcase</a>
              </div>
            </div>
          </Section>
        </div>
        <div className="column">
          <div className="homepage" style={{marginLeft: 50}}>
            <div id="repos">
              <ReposCardList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Resources;
