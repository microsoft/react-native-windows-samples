/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const textContent = {
  windowsintro: `
  Building for Windows doesn't stop with just desktop experiences!

  Take your apps across Xbox, Surface Tablets, dual-screens, and web with our robust Windows extension to React Native.
  `,
  macintro: `
  test
  `,
  intro: `
**React Native for Windows & Mac brings React Native support for the
[Windows 10 SDK] as well as the [MacOS 10.12 SDK]**. With this, you can use Javascript to build native
Windows apps for [all devices supported by Windows 10] including PCs,
tablets, 2-in-1s, Xbox, Mixed reality devices, etc., as well as the MacOS desktop and laptop ecosystems.

[React Native]: http://facebook.github.io/react-native
[React]: https://reactjs.org/
[Windows 10 SDK]: https://developer.microsoft.com/en-us/windows/downloads
[MacOS 10.12 SDK]: https://developer.apple.com/documentation/macos_release_notes/macos_catalina_10_15_release_notes
[all devices supported by Windows 10]: https://developer.microsoft.com/en-us/windows/get-started-windows-10
  `,
  roadmapwindows: `
We are actively developing React Native for Windows in alignment with
react-native core as it evolves. Please see the [Roadmap 2019] blog for
details on this effort and investment roadmap for the upcoming months.

**React Native for Windows now supports React Native version 0.61.**
Download the latest [npm package] to get the updates.

[Roadmap 2019]: blog/2019/07/22/roadmap
[npm package]: https://www.npmjs.com/package/react-native-windows
  `,
  roadmapmac: `
Coming soon!

[Roadmap 2019]: blog/2019/07/22/roadmap
[npm package]: https://www.npmjs.com/package/react-native-windows
  `,
  resources: `
  Don't forget we are fully **open source**! Head over to our **[React Native for Windows]** or **[React Native for Mac]** GitHubs to learn more, file issues, contribute, or ask questions.

  **Windows Resources**

  - [Get started] developing a React Native for Windows app
  - Learn the **basics of React Native** using the [React Native Tutorial]
  - Learn about the core [React Native Components and APIs]
  - Check out the [API Parity status] doc for updates on what we support from core
  - For new **Windows specific APIs** [check out our list here]
  - Learn how to **extend React Native for Windows** through [Native modules] and [Native UI components]

If you're curious about the **sample apps** we have published for inspiration:
  - [Calculator app] shows an example of a full cross-platform React Native
  app for iOS, Android, and Windows.
  - [ToDos Feed app] illustrates the usage of React Native for Windows in 3
  different contexts: as a full Windows 10 app, as a component in a native
  Windows 10 app, and as a component in a Win32 app. This sample is a
  companion for a blog post about React Native for Windows, which is
  available on the [Windows AppConsult blog].

  **Mac Resources**
  - Coming soon!

[Get started]: docs/getting-started
[React Native for Windows]: https://github.com/microsoft/react-native-windows
[React Native for Mac]: https://aka.ms/react-native-mac
[React Native Tutorial]: https://reactnative.dev/docs/tutorial
[React Native Components and APIs]: https://reactnative.dev/docs/components-and-apis
[API Parity status]: docs/parity-status
[Windows Brushes and Themes]: docs/windowsbrush-and-theme
[check out our list here]: docs/flyout-component
[Native modules]: docs/native-modules
[Native UI components]: docs/view-managers
[Calculator app]: https://github.com/microsoft/react-native-windows-samples/tree/master/samples/Calculator
[ToDos Feed app]: https://github.com/microsoft/react-native-windows-samples/tree/master/samples/TodosFeed
[Windows AppConsult blog]: https://techcommunity.microsoft.com/t5/Windows-Dev-AppConsult/Getting-started-with-React-Native-for-Windows/ba-p/912093
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
            <b style={{fontSize: 24}}>Windows</b>
          </a>
      </div>
    );

    const VideoCardItem = ({ videolength, videotitle, videotype, videodifficulty, speakername, imgurl}) => (
      <div className="CenterContent">
        <div className="videocard">
            <div style={{position: 'relative'}}>
              <div style={{maxWidth: '100%', maxHeight: '100%'}}>
                <img src={imgurl} alt="videoimg"/>
              </div>
              <div className="videocardlengthtip">
                <div>
                  <div className="videocardtipbackground">
                    <div>
                        <img src="./img/homepage/timeicon.png" alt="timeicon"/>
                    </div>
                    <div>
                      <p style={{color: '#fff', marginLeft: 8, marginTop: 4, fontSize: 14}}>{videolength}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="videocardcontent">
              <div className="videocardheader">
                <p style={{fontsize: 46, fontWeight: 700}}>{videotitle}</p>
                <div className="videocardinfo">
                  <p style={{fontSize: 14}}>{videotype}</p>
                  <div className="subtitledot"/>
                  <p style={{fontSize: 14}}>{videodifficulty}</p>
                </div>
              </div>
              <div className="videocarddriverinfo" style={{color: '#0e53bd'}}>
                <a href={"https://twitter.com/" + speakername}>
                  <div className="column" style={{marginRight: -130, marginLeft: -15}}>
                    <img style={{borderRadius: '50%', width: '32px', height: '32px'}} src={"https://avatars.io/twitter/" + speakername} alt="speakericon"/>
                  </div>
                  <div className="column" style={{marginTop: 5}}>@{speakername}</div>
                </a>
              </div>
            </div>
        </div>
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
      <Section background="light" className="HeaderHero">
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
              <h1 className="title">React Native for</h1>
              <p className="tagline">Windows + Mac</p>
            </React.Fragment>
          }
        />
      </Section>
    );

    const GettingStartedActions = () => (
      <Section background="light">
        <div className="GettingStartedButtons">
          <GetStartedButton/>
        </div>
      </Section>
    );

    const Intro = () => (
      <Section background="light">
        <div className="content">
          <Heading text="React Native on Windows + Mac" />
          <MarkdownBlock>{textContent.intro}</MarkdownBlock>
        </div>
      </Section>
    );

    const WindowsIntro = () => (
      <Section background="tint">
        <div className="content">
          <div className="row">

            <div className="column">
              <img style={{maxWidth: '200%', marginLeft: -300, marginTop: -70, marginBottom: -70}} src="./img/homepage/native_and_js_windows_cropped.png" alt="rnw_cropped"/>
            </div>

            <div className="column">
              <Heading text="Build Windows apps using React Native" />
              <div style={{marginBottom: 35}}><MarkdownBlock>{textContent.windowsintro}</MarkdownBlock></div>
              <a
                className="ActionButton primary"
                href={baseUrl + "docs/getting-started"}
                target="_self">
                <b style={{fontSize: 24}}>Get started with Windows</b>
              </a>
            </div>

          </div>
        </div>
      </Section>
    );

    const MacIntro = () => (
      <Section background="light">
        <div className="content">
          <div className="row">
            <div className="column">
              <Heading text="Build MacOS apps using React Native" />
              <div style={{marginBottom: 35}}><MarkdownBlock>{textContent.macintro}</MarkdownBlock></div>
              <a
                className="ActionButton primary"
                href={baseUrl + "docs/getting-started"}
                target="_self"
              >
                <b style={{fontSize: 24}}>Get started with Mac</b>
              </a>
            </div>
            <div className="column">
              <img style={{maxWidth: '200%', marginTop: -70, marginBottom: -70}} src="./img/homepage/native_and_js_mac_cropped.png" alt="rnw_cropped"/>
            </div>
          </div>
        </div>
      </Section>
    );

    const Roadmap = () => (
      <Section background="light">
        <div className="content">
          <Heading text="Status and Roadmap" />
          <h2>Windows</h2>
          <MarkdownBlock>{textContent.roadmapwindows}</MarkdownBlock>
          <h2>Mac</h2>
          <MarkdownBlock>{textContent.roadmapmac}</MarkdownBlock>
        </div>
      </Section>
    );

    const Resources = () => (
      <Section background="tint">
        <div className="content">
          <Heading text="Resources" />
          <MarkdownBlock>{textContent.resources}</MarkdownBlock>
        </div>
      </Section>
    );

    const Tutorials = () => (
      <Section background="tint">
        <div className="CenterContent" style={{marginTop: -50}}>
          <div>
            <a href="videos"><h1 style={{textAlign: 'center', color: '#0e53bd'}}>Take Your App Further</h1></a>
            <p style={{textAlign: 'center', marginTop: -10}}>Build on the basics to constructing your first React Native for Windows + Mac app</p>

            <div className="row">
              <div className="column">
                <VideoCardItem
                  videolength="10 mins"
                  videotitle="Community Modules for Mac"
                  videotype="Walkthrough"
                  videodifficulty="Beginner"
                  speakername="alloy"
                  imgurl="./img/homepage/eloy_rn4m_preview.png"/>
              </div>
              <div className="column">
                <VideoCardItem
                  videolength="0 mins"
                  videotitle="Example Card"
                  videotype="Type of Video"
                  videodifficulty="Difficulty"
                  speakername="reactwindows"
                  imgurl="./img/homepage/video_learning_image-small.png"/>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );

    return (
      <div className="homepage">
        <HeaderHero />
        <Intro />
        <WindowsIntro/>
        <MacIntro/>
        <Tutorials/>
      </div>
    );
  }
}

module.exports = Index;
