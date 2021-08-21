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

const showcaseApps = siteConfig.customFields.users;

const textContent = {
  resourceslist: `
  `,
};

function getBackgroundForCategory(category) {
  if (category == '1st party') return 'green';
  else return 'orange';
}

function renderImg(img) {
  return <img src={img} height={120} style={{ margin: 10 }}/>
}
function renderImgs(imgs) {
  if (!Array.isArray(imgs)) {
    imgs = [imgs];
  }
  return <td style={{borderColor: 'transparent', padding: 0 }} width={140 * imgs.length} >
    {imgs.map(renderImg)}
  </td>;
}
function renderShowcaseApp(app, i) {
  const img = renderImgs(app.img);
  const content =     <td style={{borderColor: 'transparent'}} width={400}>
      <span style={{
        fontSize: 22,
        fontWeight: 500,
      }}>
        {app.header}
      </span>
      <span style={{ 
        padding: 3,
        margin: 10,
        borderRadius: 2000, 
        color: 'white',
        verticalAlign: 'super',
        fontSize: '10px',
        background: getBackgroundForCategory(app.category)}}>
          {app.category}
      </span>
    <p>{app.description}</p>
    <p><a href={app.link}>See more</a></p>
    </td>;

  const parts = [img, content];

return <div>
    <table style={{borderColor: 'transparent'}}><tr>
      {parts[i%2]}
      {parts[1-(i%2)]}
    </tr>
    </table>
    </div>;
}

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

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );



    const Showcase = () => (
      <Section background="light">
        <div className="content">
          <h1>Who's using React Native for Windows</h1>
          {showcaseApps.map(renderShowcaseApp)}
        </div>
      </Section>
    );

    return (
      // <div className="row">
      //   <div className="resourcesPageSideNav">
      //     <Section background="tint">
      //       <div style={{float: "right", marginRight: 180}}>
      //         <div className="resourcesPageSideNavTitle">Resources</div>
      //         <div className="resourcesPageSideNavOptions">
      //           <a href="./resources" className={'resourcesSideNavLink '}>Repos</a>
      //         </div>
      //         <div className="resourcesPageSideNavOptions">
      //           <a href="./resources-news-social"className="resourcesSideNavLink" >News & Social</a>
      //         </div>
      //         <div className="resourcesPageSideNavOptions">
      //           <a href="./resources-videos" className="resourcesSideNavLink" >Videos</a>
      //         </div>
      //         <div className="resourcesPageSideNavOptions">
      //           <a className="resourcesSideNavLink selected" >Showcase</a>
      //         </div>
      //       </div>
      //     </Section>
      //   </div>
        // <div className="column">
          <div className="homepage" style={{marginLeft: 50}}>
            <div id="newssocial">
              <Showcase/>
            </div>
          </div>
        // </div>
      // </div>
    );
  }
}

module.exports = Resources;
