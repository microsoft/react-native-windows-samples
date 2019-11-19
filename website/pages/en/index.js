const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock;
const siteConfig = require(process.cwd() + "/siteConfig.js");
const { baseUrl } = siteConfig;

const textContent = {
  intro: `
[React Native] enables you to build world-class native application 
experiences on multiple platforms using a consistent developer 
experience based on Javascript and [React].

**React Native for Windows brings React Native support for the
[Windows 10 SDK]**. With this, you can use Javascript to build native
Windows apps for [all devices supported by Windows 10] including PCs,
tablets, 2-in-1s, Xbox, Mixed reality devices, etc.

[React Native]: http://facebook.github.io/react-native
[React]: https://reactjs.org/
[Windows 10 SDK]: https://developer.microsoft.com/en-us/windows/downloads
[all devices supported by Windows 10]: https://developer.microsoft.com/en-us/windows/get-started-windows-10
  `,
  nativeCode: `
React primitives render to native platform UI, meaning your app uses the
same native platform APIs other apps do.

**Many platforms**, one React. Create platform-specific versions of components
so a single codebase can share code across platforms. With React Native,
one team can maintain two platforms and share a common technology—React.
  `,
  codeExample: `
\`\`\`jsx
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';

const WelcomeScreen = () => 
  <View>
    <Header title="Welcome to React Native"/>
    <Text style={header}>Step One</Text>
    <Text>
      Edit App.js to change this screen and turn it
      into your app.
    </Text>
    <Text style={header}>See Your Changes</Text>
    <Text>
      Press Cmd + R inside the simulator to reload
      your app’s code.
    </Text>
    <Text style={header}>Debug</Text>
    <Text>
      Press Cmd + M or Shake your device to open the
      React Native Debug Menu.
    </Text>
    <Text style={header}>Learn</Text>
    <Text>
      Read the docs to discover what to do next:
    </Text>
   </View>
   \`\`\`
  `,
  forEveryone: `
React Native lets you create truly native apps and doesn't compromise on your users' experience.
It provides a core set of platform agnostic native components like \`View\`, \`Text\`, and \`Image\`
that map directly to the platform’s native UI building blocks.
  `,
  crossPlatform: `
React components wrap existing native code and interact with native APIs via
React’s declarative UI paradigm and JavaScript. This enables native app development
for whole new teams of developers, and can let existing native teams work much faster.
  `,
  fastRefresh: `
**See your changes as soon as you save.** With the power of JavaScript,
React Native lets you iterate at lightning speed. No more waiting for native builds to finish.
Save, see, repeat.
  `,
  talks: `
Members of the React Native team frequently speak at various
conferences.

You can follow the latest news from the React Native team on
Twitter
  `,
  community: `
In 2018, React Native had the [2nd highest] number of contributors for any repository in GitHub.
Today, React Native is supported by contributions from individuals and companies around the world 
including [Callstack], [Expo], [Infinite Red], [Microsoft], and [Software Mansion].

Our community is always shipping exciting new projects and exploring platforms beyond Android and iOS
with repos like React Native Windows and React Native Web.

[2nd highest]: https://octoverse.github.com/projects#repositories
[Callstack]: https://callstack.com/
[Expo]: https://expo.io/
[Infinite Red]: https://infinite.red/
[Microsoft]: https://www.microsoft.com/en-gb/
[Software Mansion]: https://swmansion.com/
  `
};

function Heading({ text }) {
  return <h2 className="Heading">{text}</h2>;
}

function ActionButton({ href, type = "primary", target, children }) {
  return (
    <a className={`ActionButton ${type}`} href={href} target={target}>
      {children}
    </a>
  );
}

function TextColumn({ title, text, moreContent }) {
  return (
    <React.Fragment>
      <Heading text={title} />
      <MarkdownBlock>{text}</MarkdownBlock>
      {moreContent}
    </React.Fragment>
  );
}

function HomeCallToAction() {
  return (
    <div>
      <ActionButton
        type="primary"
        href={baseUrl + "docs/getting-started"}
        target="_self"
      >
        Get started
      </ActionButton>
      {/* <ActionButton
        type="secondary"
        href={baseUrl + 'docs/tutorial'}
        target="_self">
        Learn basics
      </ActionButton> */}
    </div>
  );
}

function TwitterButton({ showCount = false }) {
  return (
    <a
      href="https://twitter.com/reactwindows?ref_src=twsrc%5Etfw"
      className="twitter-follow-button"
      data-size="large"
      data-show-count={`${showCount}`}
    >
      Follow @ReactWindows
    </a>
  );
}

function GitHubButton() {
  return (
    <a
      className="github-button"
      href="https://github.com/facebook/react-native"
      data-icon="octicon-star"
      data-size="large"
      aria-label="Star facebook/react-native on GitHub"
    >
      Star
    </a>
  );
}

function Section({
  element = "section",
  children,
  className,
  background = "light"
}) {
  const El = element;
  return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function TwoColumns({ columnOne, columnTwo, reverse }) {
  return (
    <div className={`TwoColumns ${reverse ? "reverse" : ""}`}>
      <div className={`column first ${reverse ? "right" : "left"}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? "left" : "right"}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function LogoAnimation() {
  return (
    <div width={400} height={1}>
      <img alt="" src={baseUrl + "img/homepage/cross-platform.png"} />
    </div>
  );
}

function HeaderHero() {
  return (
    <Section background="dark" className="HeaderHero">
      <div className="socialLinks">
        <TwitterButton />
        <GitHubButton />
      </div>
      <TwoColumns
        reverse
        columnOne={<LogoAnimation />}
        columnTwo={
          <React.Fragment>
            <h1 className="title">React Native</h1>
            <p className="tagline">For Windows</p>
            <div className="buttons">
              <HomeCallToAction />
            </div>
          </React.Fragment>
        }
      />
    </Section>
  );
}

function NativeApps() {
  return (
    <Section className="NativeApps" background="light">
      <div className="content">
        <Heading text="Bringing React Native to Windows devices" />
        <MarkdownBlock>{textContent.intro}</MarkdownBlock>
      </div>
    </Section>
  );
}

function NativeCode() {
  return (
    <Section className="NativeCode" background="tint">
      <div className="content">
        <img alt="" src={`${baseUrl}img/homepage/native-and-js.png`} />
      </div>
    </Section>
  );
}

function NativeDevelopment() {
  return (
    <Section className="NativeDevelopment" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            title="Native Development For Everyone"
            text={textContent.forEveryone}
          />
        }
        columnTwo={
          <div className="dissection">
            {[0, 1, 2, 3].map(i => (
              <img
                alt=""
                src={`${baseUrl}img/homepage/dissection/${i}.png`}
                key={i}
              />
            ))}
          </div>
        }
      />
    </Section>
  );
}

function CrossPlatform() {
  return (
    <Section className="CrossPlatform" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Seamless Cross-Platform"
            text={textContent.crossPlatform}
          />
        }
        columnTwo={
          <img alt="" src={`${baseUrl}img/homepage/cross-platform.svg`} />
        }
      />
    </Section>
  );
}

function FastRefresh() {
  return (
    <Section className="FastRefresh" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn title="Fast Refresh" text={textContent.fastRefresh} />
        }
        columnTwo={
          <video
            muted
            autoPlay
            loop
            playsInline
            src={`${baseUrl}img/homepage/ReactRefresh.mp4`}
          />
        }
      />
    </Section>
  );
}

function Talks() {
  return (
    <Section className="Talks" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Talks"
            text={textContent.talks}
            moreContent={<TwitterButton />}
          />
        }
        columnTwo={
          <div className="vidWrapper">
            <iframe
              src="https://www.youtube.com/embed/NCAY0HIfrwc"
              title="Mobile Innovation with React Native, ComponentKit, and Litho"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        }
      />
    </Section>
  );
}

/* Community */

const apps = siteConfig.users.filter(app => app.pinned);

function Community() {
  return (
    <Section className="Community" background="light">
      <div className="content">
        <Heading text="Facebook Supported, Community Driven" />
        <TwoColumns
          columnOne={
            <React.Fragment>
              <p className="firstP">
                <img src={`${baseUrl}img/homepage/fb-logo.svg`} alt="" />
                <span>
                  Facebook released React Native in 2015 and has been
                  maintaining it ever since.
                </span>
              </p>
              <MarkdownBlock>{textContent.community}</MarkdownBlock>
            </React.Fragment>
          }
          columnTwo={
            <React.Fragment>
              <p>
                React Native is being used in thousands of apps, but it's likely
                you've already used it in one of these apps:
              </p>
              {/* <AppList apps={apps} /> */}
              <p>
                and <a href={`${baseUrl}showcase`}>many more</a>.
              </p>
            </React.Fragment>
          }
        />
      </div>
    </Section>
  );
}

function GetStarted() {
  return (
    <Section className="GetStarted" background="dark">
      <div className="content">
        <Heading text="Give it a try" />
        <ol className="steps">
          <li>
            <p>Run this</p>
            <div className="terminal">
              <code>npx react-native init MyTestApp</code>
            </div>
          </li>
          <li>
            <p>Read these</p>
            <HomeCallToAction />
          </li>
        </ol>
      </div>
    </Section>
  );
}

module.exports = function Index() {
  return (
    <main className="HomePage">
      <script src={baseUrl + "js/dissectionAnimation.js"} />
      <script src={baseUrl + "js/headerAnimation.js"} />
      <HeaderHero />
      <NativeApps />
      <NativeCode />
      <NativeDevelopment />
      <CrossPlatform />
      <FastRefresh />
      <Talks />
      <Community />
      <GetStarted />
    </main>
  );
};
