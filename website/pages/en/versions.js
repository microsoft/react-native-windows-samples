const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const textContent = {
  introtext: `
  React Native for Windows has a release train that is tracked on GitHub through the [react-native-windows releases](https://github.com/microsoft/react-native-windows/releases/) archive.
  When a major release is made available, it will be present here under the **Latest version** section.

  Once the release has had significant time to be tested and contributers have addressed as many issues as possible, the release will be upgraded to a **Stable version** and become present in the corosponding section below.
  `,
  latestverison: `
  The latest and greatest, bleeding edge version release of React Native for Windows will be listed and updated here.
  `,
  stablelegacyversions: `
  The most recent and stable version will be used automatically when the
  *npx react-native-windows-init*
  command is run on a newly initialized React Native project.

  See the
  [Getting Started](docs/getting-started)
  guide for more information.
  `
};

class Versions extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );

    const TableRow = ({background = "light", versionNumber, docLink, changeLogLink, changeLogText = "Changelog"}) => (
      <div className={`TableRowItem ${background}`} style={{width: '487px'}}>
        <div className={`TableRowItem ${"versiontext"}`} style={{fontSize: 14, padding: 10}}>{versionNumber}</div>
        <div className={`TableRowItem ${"text"}`} style={{padding: 7}}>
          <a href={docLink} style={{fontSize: 14, padding: 10}}>
            Documentation
          </a>
        </div>
        <div className={`TableRowItem ${"text"}`} style={{padding: 7}}>
          <a href={changeLogLink} style={{fontSize: 14}}>
            {changeLogText}
          </a>
        </div>
      </div>
    );

    const VersioningInformation = () => (
      <Section background="light">
        <div className="content">
          <h1 style={{fontSize: '60px', marginTop: '-20px', fontWeight: 'bold'}}>React Native for Windows Versions </h1>
          <MarkdownBlock>{textContent.introtext}</MarkdownBlock>
          <h1 style={{fontWeight: 'bold'}}>Latest version</h1>
          <MarkdownBlock>{textContent.latestverison}</MarkdownBlock>
          <TableRow versionNumber="MASTER"
          docLink="https://www.aka.ms/react-native-windows-mac"
          changeLogLink="https://github.com/microsoft/react-native-windows/compare/0.61-stable...master"
          changeLogText="Commits since 0.61"/>
          <h1 style={{fontWeight: 'bold'}}>Stable versions</h1>
          <MarkdownBlock>{textContent.stablelegacyversions}</MarkdownBlock>
          {/*
            Facebook docs point to GitHub releases (usually patch 0, ie. 0.XX.0) which have an human-written changelog. They don't update the links with new patch versions.
            Prior to vnext (<= 0.59), we had no changelogs at all, so we still link to the GitHub releases, even though they're empty.
            Starting with vnext (>= 0.59) we generate changelogs in-repo, so link to that instead.
          */}
          <TableRow versionNumber="0.61" changeLogLink="https://github.com/microsoft/react-native-windows/blob/0.61-stable/vnext/CHANGELOG.md"/>
          <TableRow versionNumber="0.60" changeLogLink="https://github.com/microsoft/react-native-windows/blob/0.60-stable/vnext/CHANGELOG.md" background="dark"/>
          <TableRow versionNumber="0.59" changeLogLink="https://github.com/microsoft/react-native-windows/blob/0.59-vnext-stable/vnext/CHANGELOG.md"/>
          <TableRow versionNumber="0.59 (Legacy)" changeLogLink="https://github.com/microsoft/react-native-windows/releases/tag/v0.59.0-legacy.2" background="dark"/>
          <TableRow versionNumber="0.58 (Legacy)" changeLogLink="https://github.com/microsoft/react-native-windows/releases/tag/vnext-0.58.0-vnext.176"/>
          <TableRow versionNumber="0.57 (Legacy)" changeLogLink="https://github.com/microsoft/react-native-windows/releases/tag/v0.57.2" background="dark"/>
        </div>
      </Section>
    );

    return (
      <div className="homepage">
        <VersioningInformation />
      </div>
    );
  }
}

module.exports = Versions;
