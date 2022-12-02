/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const textContent = {
  windowsintro: `
  Take your apps across PC, Xbox, Surface Tablets, and dual-screens with our robust Windows extension to React Native.
  `,
  macintro: `
  Extend your desktop experience to more than just Windows!<br>
  Try out our fully supported macOS extension to React Native.
  `,
  intro: `
## Bring your <u>[React Native]</u> apps to some of the most powerful devices out there

[React Native]: https://reactnative.dev/
  `,
  about: `
**React Native for Windows + macOS brings React Native support for the
[Windows SDK] as well as the [macOS 10.14 SDK]**. With this, you can use JavaScript to build native
Windows apps for [all devices supported by Windows 10 and higher] including PCs,
tablets, 2-in-1s, Xbox, Mixed reality devices, etc., as well as the macOS desktop and laptop ecosystems.

Some build-time tools will send telemetry to Microsoft by default. No telemetry is collected or transmitted in the final app. You can prevent the telemetry from being sent by using the --no-telemetry command line option. See the --help command or README file for more details.

[React Native]: https://reactnative.dev/
[React]: https://reactjs.org/
[Windows SDK]: https://developer.microsoft.com/windows/downloads/windows-sdk/
[macOS 10.14 SDK]: https://developer.apple.com/documentation/macos-release-notes/macos-mojave-10_14-release-notes
[all devices supported by Windows 10 and higher]: https://docs.microsoft.com/windows/apps/get-started/?tabs=rnw
  `,
  resources: `
  Don't forget we are fully **open source**! Head over to our **[React Native for Windows]** or **[React Native for macOS]** GitHubs to learn more, file issues, contribute, or ask questions.

  **Windows Resources**

  - [Get started] developing a React Native for Windows app
  - Learn the **basics of React Native** using the [React Native Tutorial]
  - Learn about the core [React Native Components and APIs]
  - Check out the [React Native Windows Components and APIs] doc for updates on what we support from React Native core
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

  **macOS Resources**
  - Coming soon!

[Get started]: docs/getting-started
[React Native for Windows]: https://github.com/microsoft/react-native-windows
[React Native for macOS]: https://github.com/microsoft/react-native-macos
[React Native Tutorial]: https://reactnative.dev/docs/tutorial
[React Native Components and APIs]: https://reactnative.dev/docs/components-and-apis
[React Native Windows Components and APIs]: docs/parity-status
[Windows Brushes and Themes]: docs/windowsbrush-and-theme
[check out our list here]: docs/flyout-component
[Native modules]: docs/native-modules
[Native UI components]: docs/view-managers
[Calculator app]: https://github.com/microsoft/react-native-windows-samples/tree/main/samples/Calculator
[ToDos Feed app]: https://github.com/microsoft/react-native-windows-samples/tree/main/samples/TodosFeed
[Windows AppConsult blog]: https://techcommunity.microsoft.com/t5/Windows-Dev-AppConsult/Getting-started-with-React-Native-for-Windows/ba-p/912093
  `
};

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Heading = ({ text }) => <h2 className="Heading">{text}</h2>;

    const GetStartedButton = ({ pageName, platformName}) => (
      <a
        className="ActionButton primary"
        href={`${baseUrl}docs/${pageName}`}
        target="_self"
      >
        <b style={{fontSize: 24}}>Get started with {platformName}</b>
      </a>
    );

    const VideoCardItem = ({ videolength, videotitle, videotype, videodifficulty, speakername, imgurl}) => (
      <div className="CenterContent">
        <div className="videocard" style={{maxHeight: 380}}>
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
        href="https://twitter.com/ReactNativeMSFT?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-size="large"
        data-show-count={false}
      >
        Follow @ReactNativeMSFT
      </a>
    );

    const GitHubButton = () => (
      <a
        className="github-button"
        href="https://github.com/microsoft/react-native-windows"
        data-icon="octicon-face"
        data-size="large"
        aria-label="Star microsoft/react-native-windows on GitHub"
      >
        GitHub
      </a>
    );

    const GitHubButtonmacOS = () => (
      <a
        className="github-button"
        href="https://github.com/microsoft/react-native-macos"
        data-icon="octicon-face"
        data-size="large"
        aria-label="Star microsoft/react-native-macos on GitHub"
      >
        GitHub
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
        <TwoColumns
          reverse
          columnOne={
            <React.Fragment>
              <div className="socialLinks">
                <TwitterButton />
              </div>
              <div width={400}>
                <img alt="" src={baseUrl + "img/homepage/cross-platform.png"} />
              </div>
            </React.Fragment>
          }
          columnTwo={
            <React.Fragment>
              <h1 className="title">React Native for</h1>
              <p className="tagline">Windows + macOS</p>
            </React.Fragment>
          }
        />
      </Section>
    );

    const About = () => (
      <Section background="light">
        <div className="content">
          <Heading text="About React Native for Windows + macOS" />
          <MarkdownBlock>{textContent.about}</MarkdownBlock>
        </div>
      </Section>
    );

    const Intro = () => (
      <div background="light" className="SmallSection">
          <div className="CenterContent" style={{paddingTop: -150}}>
            <MarkdownBlock>{textContent.intro}</MarkdownBlock>
          </div>
      </div>
    );

    const WindowsIntro = () => (
      <Section background="tint">
        <div className="content">
          <div className="row">
            <div className="column">
              <img style={{maxWidth: '200%', marginLeft: -300, marginTop: -70, marginBottom: -70}} src="./img/homepage/native_and_js_windows_cropped.png" alt="rnw_cropped"/>
            </div>
            <div className="column">
              <Heading text="Build for Windows" />
              <GitHubButton/>
              <div style={{marginBottom: 35}}>
                <MarkdownBlock>{textContent.windowsintro}</MarkdownBlock>
              </div>
              <GetStartedButton pageName="getting-started" platformName="Windows" />
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
              <Heading text="Build for macOS" />
              <GitHubButtonmacOS/>
              <div style={{marginBottom: 35}}>
                <MarkdownBlock>{textContent.macintro}</MarkdownBlock>
              </div>
              <GetStartedButton pageName="rnm-getting-started" platformName="macOS" />
            </div>
            <div className="column">
              <img style={{maxWidth: '200%', marginTop: -70, marginBottom: -70}} src="./img/homepage/native_and_js_mac_cropped.png" alt="rnw_cropped"/>
            </div>
          </div>
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
            <p style={{textAlign: 'center', marginTop: -10}}>Speed up development with videos on how to build React Native apps for Windows and macOS.</p>

            <div className="row">
              <div className="column">
                <a href={baseUrl + "videos"}>
                  <VideoCardItem
                    videolength="10 mins"
                    videotitle="Community Modules for macOS"
                    videotype="Walkthrough"
                    videodifficulty="Beginner"
                    speakername="alloy"
                    imgurl="./img/homepage/eloy_rn4m_preview_full.png"/>
                  </a>
              </div>
              <div className="column">
                <a href={baseUrl + "videos"}>
                  <VideoCardItem
                    videolength="0 mins"
                    videotitle="Example Card"
                    videotype="Type of Video"
                    videodifficulty="Difficulty"
                    speakername="reactwindows"
                    imgurl="./img/homepage/video_learning_image-small.png"/>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );

    return (
      <div className="homepage">
        <HeaderHero />
        <Intro/>
        <WindowsIntro/>
        <MacIntro/>
        {/*<Tutorials/>*/}
        <About />
      </div>
    );
  }
}

module.exports = Index;
