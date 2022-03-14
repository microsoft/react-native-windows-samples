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

function renderImg(img, isSmall, key) {
  return  <div
  style={{
    maxHeight: isSmall ? 40 : 600,
    minHeight: isSmall ? 40 : 320,
    minWidth: isSmall ? 40 : 320,
    verticalAlign: 'baseline',
  }}
  ><img src={img}
 key={key} />
    </div>;
}
function renderImgs(app) {
  const isSmall = app.logo !== undefined;
  let imgs = isSmall ? app.logo : app.img;
  if (!Array.isArray(imgs)) {
    imgs = [imgs];
  }
  const size = isSmall ? 40 : 220;
  return <td style={{ borderColor: 'transparent', padding: 0, height: size, width: size * imgs.length }} >
    {imgs.map(i => renderImg(i, isSmall, `${app}-img-${i}`))}
  </td>;
}

function renderMoreAppImg(a) {
  return <td style={{ borderColor: 'transparent', margin: 10, width: 440 }}>
    <div align='center'>{renderImg(a.img, true)}</div>
  </td>;
}

function renderMoreAppContent(a) {
  return <td style={{ borderColor: 'transparent', textAlign: 'center' }}>
    {renderContent(a)}
  </td>
}

function renderMore(a) {
  return <div style={{}}>
    …and more!
    <div align='center'>
      <table style={{ borderColor: 'transparent', maxWidth: a.entries.length * 240 }}>
        <tr style={{ maxHeight: 40 }}>
          {a.entries.map(renderMoreAppImg)}
        </tr>
        <tr style={{ height: 12, padding: 0, background: 'white' }}>
          {a.entries.map(renderMoreAppContent)}
        </tr>
      </table>
    </div>
  </div>;
}

function renderContent(app) {
  const pill = app.category ? <nobr><span style={{
    padding: 3,
    margin: 10,
    borderRadius: 2000,
    color: 'white',
    verticalAlign: 'super',
    fontSize: '10px',
    background: getBackgroundForCategory(app.category)
  }}>
    {app.category}
  </span></nobr> : '';

  return <div style={{ minHeight: 24, minWidth: 140 }} key={`${app.header}-content`}>
    <span style={{
      fontSize: 22,
      fontWeight: 500,
      minWidth: 140,
      width: 140,
    }}>
      {app.header}
    </span>
    {pill}
    {renderDescription(app)}
    <p key={`${app.header}-seemore`}>{app.link ? <a href={app.link}>See more</a> : ''}</p>
  </div>
    ;
}
function renderShowcaseApp(app, i) {

  if (app.category === 'more') return renderMore(app);

  const img = renderImgs(app);
  const content = <td style={{ borderColor: 'transparent' }} minWidth={400}>{renderContent(app)}</td>;

  return <div key={app.header}>
    <table style={{ borderColor: 'transparent', alignSelf: 'center' }}><tr>
      {img}
      {content}
    </tr>
    </table>
  </div>;
}

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

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );



    const Showcase = () => (
      <Section background="light">
        <div className="content">
          <h1 style={{marginTop: 0}}>Who's using React Native for Desktop</h1>
          <p>React Native for Desktop empowers developers to target a huge community of users beyond mobile.
            See how Microsoft uses React Native within strategically key experiences like Xbox, Office, and more.
            Then check out some key success stories from companies using React Native for Desktop to reach even more users.</p>
          {showcaseApps.map(renderShowcaseApp)}
        </div>
      </Section>
    );

    return (
      <div className="row">
        <div className="resourcesPageSideNav">
          <Section background="tint">
            <div style={{ float: "right", marginRight: 180 }}>
              <div className="resourcesPageSideNavTitle">Resources</div>
              <div className="resourcesPageSideNavOptions">
                <a className='resourcesSideNavLink' href="./resources">Repos</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a href="./resources-news-social" className="resourcesSideNavLink">News & Social</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a href="./resources-videos" className="resourcesSideNavLink" >Videos</a>
              </div>
              <div className="resourcesPageSideNavOptions">
                <a className="resourcesSideNavLink selected" >Showcase</a>
              </div>
            </div>
          </Section>
        </div>
        <div className="column" style={{ width: '60%' }}>
          <div className="homepage" style={{ marginLeft: 50 }}>
            <div id="showcase">
              <Showcase />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Resources;
function renderDescription(app) {
  let desc = app.description;
  if (!Array.isArray(desc)) {
    desc = [desc];
  }
  return desc.map((d, i) => <p style={{ textAlign: 'justify', fontSize: 'normal' }} key={`${app.header}-desc${i}`}>{d}</p>);
}

