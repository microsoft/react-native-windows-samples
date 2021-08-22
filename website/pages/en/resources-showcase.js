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

function renderImg(img, isSmall) {
  return <img src={img}
    style={{
      maxHeight: isSmall ? 40 : 500,
      minHeight: isSmall ? 40 : 220,

      verticalAlign: 'end',
    }} />;
}
function renderImgs(imgs, isSmall) {
  if (!Array.isArray(imgs)) {
    imgs = [imgs];
  }
  const size = isSmall ? 40 : 220;
  return <td style={{ borderColor: 'transparent', padding: 0, height: size, width: size * imgs.length }} >
    {imgs.map(i => renderImg(i, isSmall))}
  </td>;
}

function renderMoreAppImg(a) {
  return <td style={{ borderColor: 'transparent', margin: 10, width: 240 }}>
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
  const pill = app.category ? <span style={{
    padding: 3,
    margin: 10,
    borderRadius: 2000,
    color: 'white',
    verticalAlign: 'super',
    fontSize: '10px',
    background: getBackgroundForCategory(app.category)
  }}>
    {app.category}
  </span> : '';

  return <div style={{ minHeight: 24, minWidth: 140 }}>
    <span style={{
      fontSize: 22,
      fontWeight: 500,
      minWidth: 140,
      width: 140,
    }}>
      {app.header}
    </span>
    {pill}
    {renderDescription(app.description)}
    <p>{app.link ? <a href={app.link}>See more</a> : ''}</p>
  </div>
    ;
}
function renderShowcaseApp(app, i) {

  if (app.category === 'more') return renderMore(app);

  const img = app.img ? renderImgs(app.img, false) : renderImgs(app.logo, true);
  const content = <td style={{ borderColor: 'transparent' }} width={400}>{renderContent(app)}</td>;

  const parts = [img, content];

  return <div>
    <table style={{ borderColor: 'transparent', alignSelf: 'center' }}><tr>
      {parts[i % 2]}
      {parts[1 - (i % 2)]}
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
        <div className="content" style={{ width: 1900, maxWidth: '90%' }}>
          <h1>Who's using React Native for Windows</h1>
          <p>React Native for Desktop empowers developers to target a huge community of users beyond mobile.
            See how Microsoft uses React Native within strategically key experiences like Xbox, Office, and more.
            Then check out some key success stories from companies using React Native for Desktop to reach even more users.</p>
          {showcaseApps.map(renderShowcaseApp)}
        </div>
      </Section>
    );

    return (
      <div className="homepage" style={{ marginLeft: 10 }}>
        <Showcase />
      </div>
    );
  }
}

module.exports = Resources;
function renderDescription(desc) {
  if (!Array.isArray(desc)) {
    desc = [desc];
  }
  return desc.map(d => <p>{d}</p>);
}

