---
id: new-architecture
title: New vs. Old Architecture
---

React Native's [New Architecture](https://reactnative.dev/architecture/landing-page) has become the default with [version 0.76](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here), bringing many framework improvements including the advanced rendering system [Fabric](https://reactnative.dev/architecture/fabric-renderer). While React Native for Windows isn't quite yet ready to make the New Architecture the default, we've been hard at work and are excited to offer a sneak peek into adopting it on Windows.

> **Important:** At this stage, React Native for Windows' New Architecture support comes with some important caveats, and is best suited for early adopters comfortable with a work-in-progress experience with incomplete documentation. For those willing to dive in, the New Architecture offers a glimpse into the exciting future of React Native Windows development.

## From UWP to WinAppSDK

On Windows, the implementation of the (Old Architecture) Paper render used the [Universal Windows Platform](https://learn.microsoft.com/en-us/windows/uwp/). To meet the requirements of the new Fabric renderer, the Windows implementation now uses the modern [Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/). This evolution aims to unify rendering logic cross-platform in C++

This also means that all React Native for Windows New Architecture apps will now be Win32, WinAppSDK-based applications. This aligns with the current recommendations for Windows app development, providing React Native for Windows developers with greater access to the latest Windows' frameworks.

All React Native for Windows Old Architecture apps will remain UWP applications. It is still possible and supported to create and maintain apps that target the Old Architecture and UWP.

However, understand that while there are no immediate plans to deprecate support for Old Architecture applications, almost all future investments are focused on the New Architecture, and as React Native eventually deprecates Old Architecture support, so too will React Native for Windows. We will provide clear migration guidance for apps once New Architecture support is better established. 

> **Important:** There are no plans to support New Architecture on UWP nor Old Architecture on WinAppSDK. Previous experimental features that enabled either scenario are not officially supported.

For more information about the reasoning behind the change from UWP to WinAppSDK, see the [FAQ](#faq) below.

## Creating a new Architecture Application

Starting a React Native Windows project with the new architecture is simple! Follow the steps outlined in our [Getting Started](getting-started.md) guide, but make sure to use the [new architecture template](init-windows-cli.md#templates) when initializing your project with init-windows.

For example, if you previously set up a project using the old architecture, you might have used a command like this:

```bat
yarn react-native init-windows --overwrite
```

To create a project with the new architecture, use the same command but ensure you're specifying the template for the new architecture:

```bat
yarn react-native init-windows --template cpp-app --overwrite
```

## Development Progress

Our work on React Native Windows' new architecture follows a series of milestones designed to guide our development priorities. Currently, our focus is on achieving full API parity and improving accessibility features. **Community modules are not yet fully supported in this preview phase**, so most, if not all, modules will not be compatible with new architecture applications at this stage.

To track real-time progress and specific milestones, visit our [Fabric for React Native for Windows Issue](https://github.com/microsoft/react-native-windows/issues/12042). This page is regularly updated with our latest development goals, roadmap items, and areas we’re actively working on. We encourage developers to check there for the latest on what’s available, what’s in progress, and what’s coming next.

## Work in Progress

As this is a preview of our new architecture, you may encounter some bumps and challenges along the way. We've already logged many issues tracking properties and features that are on our to-do list, but if you come across significant concerns that aren’t yet covered, please [open an issue](https://github.com/microsoft/react-native-windows/issues/new/choose) in the react-native-windows repo. You can also leave comments on [existing issues](https://github.com/microsoft/react-native-windows/issues) to help us prioritize what to tackle first!

## Components

The new architecture introduces significant updates. By moving from UWP to the Windows App SDK Scene Graph we gain the flexibility to incorporate components that weren’t previously available and reduce technical debt from legacy UWP Paper components. Below is a list of components we plan to support in the new architecture, as well as those we are looking to deprecate. For developers currently using [`Flyout`](https://microsoft.github.io/react-native-windows/docs/flyout-component) or [`Popup`](https://microsoft.github.io/react-native-windows/docs/popup-component), we hope they’ll find [`Modal`](https://reactnative.dev/docs/modal) a suitable alternative.

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

## FAQ

### Why the change from UWP to Windows App SDK?

For years, React Native for Windows has built Windows apps using the [Universal Windows Platform](https://learn.microsoft.com/en-us/windows/uwp/) and its [XAML](https://learn.microsoft.com/en-us/windows/uwp/xaml-platform/xaml-overview) technologies.

However, this implementation has never been perfect. UWP XAML has its own expectations and limitations with rendering UI, which has often come into conflict with React Native's expectations. This has always generated a certain class of issues that simply couldn't be solved by React Native for Windows.

Furthermore, many requirements of the New Architecture, particularly the faster, more polished UI enabled by the Fabric renderer, would not be possible without extensive, fundamental changes to UWP XAML.

Now, the current recommendation for new Windows apps is to build using the [Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/). There are many benefits for Windows developers to migrate their apps off UWP and onto the Windows App SDK. Most importantly for React Native for Windows, the Windows App SDK gives us the tools to implement the New Architecture properly.

### Why the change from XAML to Composition?

It is not always possible to adapt the XAML framework, let alone specific controls, to meet the API requirements and expectations of React Native. However, thanks to the Windows App SDK, we're now able to "drop down" and use the layer of UI primitives under XAML, aka Composition, or the [Windows App SDK Scene Graph](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/composition).

So now, instead of trying to implement React Native components with XAML controls (and perhaps fight their default behavior) we're now able to implement those components more directly in Composition, giving us the power to align with React Native's expectations rather than XAML's.

## What if I still need/want XAML controls?

We understand that customers may still want to use XAML controls (whether it's any of the rich controls included with Windows App SDK's WinUI 3, or any of their own existing custom controls) within their React Native for Windows app's UI.

We are actively working on enabling this, but it's not quite production ready yet. We fully expect to support that developers, especially community module developers, will be able to implement New Architecture `ComponentView`s by loading XAML controls, rather than requiring them to implement the controls "from scratch" using the base Composition APIs.

## What about C# support?

We are actively working on adding support for C# app and module developers. The transition from UWP C# to modern .NET C# requires some more extensive project changes than was required for supporting C++.

## Will the Old Architecture ever support targeting Windows App SDK?

No. Then plan is, Old Architecture targets UWP, New Architecture targets Windows App SDK.
