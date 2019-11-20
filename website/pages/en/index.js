const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const textContent = {
  intro: `
[React Native] enables you to build world-class native application 
experiences on multiple platforms using a consistent developer 
experience based on Javascript and [React].

**React Native for Windows brings React Native support for the
[Windows 10 SDK]**. With this, you can use Javascript to build native
Windows apps for [all devices supported by Windows 10] including PCs,
tablets, 2-in-1s, Xbox, Mixed reality devices, etc.

![Written in Javascript, Running Native](img/homepage/native-and-js.png)

You can use React Native for Windows in any way you like:
  - Add Windows support to your existing React Native projects for iOS
  and/or Android
  - Create full Windows 10 apps using React Native for Windows from scratch
  - Add React Native for Windows components to your existing native
  Windows 10 projects
  - Add React Native for Windows components to your existing Win32
  projects using XamlIslands

[React Native]: http://facebook.github.io/react-native
[React]: https://reactjs.org/
[Windows 10 SDK]: https://developer.microsoft.com/en-us/windows/downloads
[all devices supported by Windows 10]: https://developer.microsoft.com/en-us/windows/get-started-windows-10
  `,
  roadmap: `
We are in the process of re-implementing React Native for Windows in
C++, for better performance, and to better align with the shared C++
react-native core as it evolves as part of the \`vnext\` effort. Please
see the [Roadmap 2019] blog for details on this effort and investment
roadmap for the upcoming months.

**React Native for Windows vnext now supports React Native version 0.60.**
Download the latest [npm package] to get the updates.

[Roadmap 2019]: blog/2019/07/22/roadmap
[npm package]: https://www.npmjs.com/package/react-native-windows
  `,
  resources: `
Develop a React Native for Windows app - [Getting Started]. Learn the
**basics of React Native** using the [React Native Tutorial].

Learn about the core [React Native Components and APIs]. Almost all of
these are supported by React Native for Windows and we continue to add 
more support. Take a look at the [API Parity status] for a live glimpse
of any missing or partially implemented React Native APIs on Windows.

In addition to the core, we have added a few **extra APIs and features 
on Windows**.
  - Learn how to access signature Windows themes and Fluent Design visuals
  like Acrylic and Reveal from React Native for Windows - 
  [Windows Brushes and Themes].
  - You can begin taking a look [here] for new Windows specific APIs.

Learn how to **extend React Native for Windows** through [Native modules]
and [Native UI components].

Take a look at some of the **sample apps** we have published for inspiration:
  - [Calculator app] shows an example of a full cross-platform React Native
  app for iOS, Android, and Windows.
  - [ToDos Feed app] illustrates the usage of React Native for Windows in 3
  different contexts: as a full Windows 10 app, as a component in a native 
  Windows 10 app, and as a component in a Win32 app. This sample is a
  companion for a blog post about React Native for Windows, which is 
  available on the [Windows AppConsult blog].

Lastly, we are fully **open source**. Head over to React Native for Windows
[GitHub] to learn more, file issues, and begin contributing. 

You can follow us on Twitter [@ReactWindows] for latest news and updates.

[Getting Started]: docs/getting-started
[React Native Tutorial]: https://facebook.github.io/react-native/docs/tutorial.html
[React Native Components and APIs]: https://facebook.github.io/react-native/docs/activityindicator
[API Parity status]: docs/parity-status
[Windows Brushes and Themes]: docs/windowsbrush-and-theme
[here]: https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/api/react-native-windows.md
[Native modules]: docs/native-modules
[Native UI components]: docs/view-managers
[Calculator app]: https://github.com/microsoft/react-native-windows-samples/tree/master/samples/Calculator
[ToDos Feed app]: https://github.com/microsoft/react-native-windows-samples/tree/master/samples/TodosFeed
[Windows AppConsult blog]: https://techcommunity.microsoft.com/t5/Windows-Dev-AppConsult/Getting-started-with-React-Native-for-Windows/ba-p/912093
[GitHub]: https://github.com/microsoft/react-native-windows
[@ReactWindows]: https://twitter.com/ReactWindows
  `
};

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Heading = ({ text }) => <h2 className="Heading">{text}</h2>;

    const GetStartedButton = () => (
      <div>
        <a
          className="ActionButton primary"
          href={baseUrl + "docs/getting-started"}
          target="_self"
        >
          Get started
        </a>
      </div>
    );

    const TwitterButton = () => (
      <a
        href="https://twitter.com/reactwindows?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-size="large"
        data-show-count={false}
      >
        Follow @ReactWindows
      </a>
    );

    const GitHubButton = () => (
      <a
        className="github-button"
        href="https://github.com/microsoft/react-native-windows"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star microsoft/react-native-windows on GitHub"
      >
        Star
      </a>
    );

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );

    const TwoColumns = ({ columnOne, columnTwo, reverse }) => (
      <div className={`TwoColumns ${reverse ? "reverse" : ""}`}>
        <div className={`column first ${reverse ? "right" : "left"}`}>
          {columnOne}
        </div>
        <div className={`column last ${reverse ? "left" : "right"}`}>
          {columnTwo}
        </div>
      </div>
    );

    const HeaderHero = () => (
      <Section background="dark" className="HeaderHero">
        <div className="socialLinks">
          <TwitterButton />
          <GitHubButton />
        </div>
        <TwoColumns
          reverse
          columnOne={
            <React.Fragment>
              <div width={400}>
                <img alt="" src={baseUrl + "img/homepage/cross-platform.png"} />
              </div>
            </React.Fragment>
          }
          columnTwo={
            <React.Fragment>
              <h1 className="title">React Native</h1>
              <p className="tagline">For Windows</p>
              <div className="buttons">
                <GetStartedButton />
              </div>
            </React.Fragment>
          }
        />
      </Section>
    );

    const Intro = () => (
      <Section background="light">
        <div className="content">
          <Heading text="Bringing React Native to Windows devices" />
          <MarkdownBlock>{textContent.intro}</MarkdownBlock>
        </div>
      </Section>
    );

    const Roadmap = () => (
      <Section background="tint">
        <div className="content">
          <Heading text="Status and Roadmap" />
          <MarkdownBlock>{textContent.roadmap}</MarkdownBlock>
        </div>
      </Section>
    );

    const Resources = () => (
      <Section background="light">
        <div className="content">
          <Heading text="Resources" />
          <MarkdownBlock>{textContent.resources}</MarkdownBlock>
        </div>
      </Section>
    );

    return (
      <div className="homepage">
        <HeaderHero />
        <Intro />
        <Roadmap />
        <Resources />
      </div>
    );
  }
}

module.exports = Index;
