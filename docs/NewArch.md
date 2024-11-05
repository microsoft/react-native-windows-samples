---
id: new-arch
title: New vs. Old Architecture
---

The [New Architecture](https://reactnative.dev/docs/0.75/the-new-architecture/landing-page) is React Native's advanced rendering system which became the default in React Native 0.76. While React Native for Windows isn't yet making the New Architecture the default, we're excited to offer a sneak peek of the hard work that’s gone into supporting it, allowing developers to create applications using the new architecture.

With Fabric, RNW shifts from the previous "Paper" model, which relied heavily on XAML, to a Composition-first approach that can also host XAML islands as needed. This evolution aims to unify rendering logic cross-platform in C++, aligning more closely with the new WinAppSDK and WinUI3 that favor Win32 applications. This means that apps built with the new architecture will default to Win32 rather than UWP, a change made to enhance compatibility with Windows’ latest frameworks.

For those using UWP with RNW, rest assured: we’ll provide clear migration guidance once Fabric support is fully established. At this stage, Fabric on Windows is best suited for early adopters comfortable with a work-in-progress experience, and the documentation may not yet be as comprehensive. For those willing to dive in, the new architecture brings a glimpse into the future of React Native Windows development.

## Creating a new Architecture Application

1. Create a new React Native Application.

```bat
npx --yes @react-native-community/cli@latest init MyApp --version "latest"
```

2. Add React Native Windows as a dependency.

```bat
yarn add react-native-windows@latest
```

3. Add the New Architecture Template to your project. (Other templates can be found in [init-windows-cli](init-windows-cli.md#templates))

```bat
yarn react-native init-windows --template cpp-app --overwrite --logging
```

4. Run your App.

```bat
yarn react-native run-windows --logging
```

## Milestones

Our development progress is organized into milestones, each with clear goals to guide our work. We are currently focused on achieving full API parity and enhancing accessibility. Note that **community modules are not yet supported** in this soft launch phase, so most (if not all) won’t work in new architecture applications at this stage.

| Milestone | Milestone Nickname | Milestone Description | 
| -- | -- | -- | 
| ☑️ M0 | Proof of Concept | <li>Internal contributors can manually create a Win32 app that renders JSX using Composition</li> | 
| ☑️ M1  | Experimental | <li>User can successfully initialize, build, and run a React Native Windows app on the new architecture. </li><li>User can use the _most common_ props/API’s.</li><li>User can use the _most common_ accessibility props/API’s. </li><li>User can observe _basic_ accessibility support within their app.</li><li>User will _not_ have access to full API parity with Paper.</li><li>User can use community modules within their app.</li><li>User _cannot_ use community modules with native UI within their app.</li> | 
| 🔜 M2 | Parity and Accessibility | <ul><li>User can use all props/API’s that were supported on Paper. </li><li>User can use all accessibility props/API’s that were supported on Paper. </li><li>User can observe compliant/delightful accessibility support within their app.</li></ul> | 
| ⬜ M3 | Ready for Modules | <li>User can use the _subset_ of community modules with native UI which have support for Fabric on Windows. </li> | 
| ⬜ M4 | Production Ready **_(Fabric now officially in support)_** | <li>User can use most community modules with native UI which had been supported on Paper.</li><li>User can view documentation for the new architecture on the React Native Windows website. </li><li>Platform will be validated against _most common_ app scenarios. </li> | 
| ⬜ M5 | New Default | <li>Platform will be validated against all app scenarios.</li><li>Paper architecture will be _deprecated_; Fabric will be the new default.</li> | 

## Work in Progress

As this is a soft launch of our new architecture, you may encounter some bumps and challenges along the way. We've already logged many issues tracking properties and features that are on our to-do list, but if you come across significant concerns that aren’t yet covered, feel free to open an issue in our [repo](https://github.com/microsoft/react-native-windows/issues). You can also leave comments on existing issues to help us prioritize what to tackle first!

## Components

The new architecture introduces significant updates. By moving away from XAML, we gain the flexibility to incorporate components that weren’t previously available and reduce technical debt from legacy XAML components. Below is a list of components we plan to support in the new architecture, as well as those we are looking to deprecate. For developers currently using Flyout or Popup, we hope they’ll find Modal a suitable alternative.

### Supported Components

<li>View</li>
<li>Text</li>
<li>Image</li>
<li>TextInput</li>
<li>ScrollView</li>
<li>Modal</li>
<li>ActivityIndicator</li>
<li>Switch</li>
<li>RefreshControl</li>

### Deprecated Components

<li>Flyout</li>
<li>Popup</li>
