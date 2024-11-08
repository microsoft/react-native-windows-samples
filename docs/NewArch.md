---
id: new-arch
title: New vs. Old Architecture
---

React Native's [new architecture](https://reactnative.dev/docs/0.75/the-new-architecture/landing-page) has become the default with [version 0.76](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here), bringing many framework improvements including the advanced rendering system [Fabric](https://reactnative.dev/architecture/fabric-renderer). While React Native for Windows isn't quite yet ready to make the new architecture the default, we've been hard at work and are excited to offer a sneak peek into how you can start adopting the new architecture for Windows.

On Windows, the implementation of the "Paper" rendering architecture was based on UWP and WinUI. To meet the requirements of the new "Fabric" rendering architecture, the Windows implementation now uses the modern [Windows App SDK Scene Graph](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/composition). This evolution aims to unify rendering logic cross-platform in C++ and aligns more closely with the Windows App SDK and WinUI3 that favor Win32 applications. This means that apps built with the new architecture will default to Win32 rather than UWP, a change made to enhance compatibility with Windows’ latest frameworks. Apps will also be able to take advantage of the modern WinUI3 control set from the Windows App SDK. 

For developers using RNW based on UWP, **UWP Paper applications remain fully supported** and there are no immediate plans to remove support. However, **UWP and Fabric together are currently not supported**. We will provide clear migration guidance for UWP Paper apps once Fabric support is fully established. At this stage, Fabric on Windows is best suited for early adopters comfortable with a work-in-progress experience, and the documentation may not yet be as comprehensive. For those willing to dive in, the new architecture offers a glimpse into the future of React Native Windows development.

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

## Development Progress

Our work on React Native Windows' new architecture follows a series of milestones designed to guide our development priorities. Currently, our focus is on achieving full API parity and improving accessibility features. **Community modules are not yet fully supported in this soft launch phase**, so most, if not all, modules will not be compatible with new architecture applications at this stage.

To track real-time progress and specific milestones, visit our [Fabric for React Native for Windows Issue](https://github.com/microsoft/react-native-windows/issues/12042). This page is regularly updated with our latest development goals, roadmap items, and areas we’re actively working on. We encourage developers to check there for the latest on what’s available, what’s in progress, and what’s coming next.

## Work in Progress

As this is a soft launch of our new architecture, you may encounter some bumps and challenges along the way. We've already logged many issues tracking properties and features that are on our to-do list, but if you come across significant concerns that aren’t yet covered, please [open an issue](https://github.com/microsoft/react-native-windows/issues/new/choose) in the react-native-windows repo. You can also leave comments on [existing issues](https://github.com/microsoft/react-native-windows/issues) to help us prioritize what to tackle first!

## Components

The new architecture introduces significant updates. By moving away from XAML, we gain the flexibility to incorporate components that weren’t previously available and reduce technical debt from legacy XAML components. Below is a list of components we plan to support in the new architecture, as well as those we are looking to deprecate. For developers currently using Flyout or Popup, we hope they’ll find Modal a suitable alternative.

### Supported Components

Each component below links to the corresponding issue label in our GitHub repo that tracks the progress of its parity with the new architecture

- [View](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20View%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Text](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Text%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Image](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Image%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [TextInput](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20TextInput%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [ScrollView](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20ScrollView%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Modal](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Modal%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22&page=1)
- [ActivityIndicator](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20ActivityIndicator%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Switch](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Switch%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [RefreshControl](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20RefreshControl%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)

### Deprecated Components

- [Flyout](https://github.com/microsoft/react-native-windows/issues/11921)
- [Popup](https://github.com/microsoft/react-native-windows/issues/11921)
- [Glyph](https://github.com/microsoft/react-native-windows/issues/11961)
