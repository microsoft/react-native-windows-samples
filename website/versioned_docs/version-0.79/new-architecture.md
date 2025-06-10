---
id: version-0.79-new-architecture
title: New vs. Old Architecture
original_id: new-architecture
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

React Native's [New Architecture](https://reactnative.dev/architecture/landing-page) has become the default with [version 0.76](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here), bringing many framework improvements including the advanced rendering system [Fabric](https://reactnative.dev/architecture/fabric-renderer). While React Native for Windows isn't quite yet ready to make the New Architecture the default, we've been hard at work and are excited to offer a sneak peek into adopting it on Windows.

> **Important:** At this stage, React Native for Windows' New Architecture support comes with some important caveats, and is best suited for early adopters comfortable with a work-in-progress experience with incomplete documentation. For those willing to dive in, the New Architecture offers a glimpse into the exciting future of React Native Windows development.

## From UWP to WinAppSDK

On Windows, the implementation of the (Old Architecture) Paper render used the [Universal Windows Platform](https://learn.microsoft.com/en-us/windows/uwp/). To meet the requirements of the new Fabric renderer, the Windows implementation now uses the modern [Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/). This evolution allows us to utilize the upstream React Native cross-platform rendering logic while also enabling us to better implement the Windows-specific platform code.

This also means that all React Native for Windows New Architecture apps will now be Win32, WinAppSDK-based applications. This aligns with the current recommendations for Windows app development, providing React Native for Windows developers with greater access to the latest Windows' frameworks.

All React Native for Windows Old Architecture apps will remain UWP applications. It is still possible and supported to create and maintain apps that target the Old Architecture and UWP (see the list of ["old" templates](init-windows-cli.md#templates) still available).

However, understand that while there are no immediate plans to deprecate support for Old Architecture applications, almost all future investments are focused on the New Architecture, and as React Native eventually deprecates Old Architecture support, so too will React Native for Windows. We will provide clear migration guidance for apps once New Architecture support is better established. 

> **Important:** There are no plans to support New Architecture on UWP nor Old Architecture on WinAppSDK. Previous experimental features that enabled either scenario are not officially supported.

For more information about the reasoning behind the change from UWP to WinAppSDK, see the [FAQ](#faq) below.

## Creating a New Architecture application

Starting a React Native Windows project with the new architecture is simple! Follow the steps outlined in our [Getting Started](getting-started.md) guide, but make sure to use a [New Architecture template](init-windows-cli.md#templates) when initializing your project with init-windows.

For example, if you previously set up a project using the Old Architecture, you might have used a command like this:

```bat
yarn react-native init-windows --overwrite
```

To create a project with the New Architecture, use the same command but ensure you're specifying a New Architecture template, such as `cpp-app`:

```bat
yarn react-native init-windows --template cpp-app --overwrite
```

> **Note:** There are only two supported New Architecture templates available at this time: `cpp-app` and `cpp-lib`.

## Development Status

### The Good Stuff

Starting with this New Architecture Preview, it is now possible to create a New Architecture application by following the steps above and using the new `cpp-app` template. Developers should expect that the vast majority of core components, APIs, and functionality in React Native (i.e. from the `react-native` package) are already available in React Native for Windows.

In terms of build developer experience, be sure to look out for drastically improved build speeds and reduced dev machine requirements as we default to using pre-built binaries for New Architecture projects.

### The Not-So-Good Stuff

However there are still some important gaps, especially with respect to community module support. First off, community modules that provide UI components by implementing new UI (i.e. via the Paper `IViewManager` interfaces) will not work with New Architecture apps. Those modules will need to implement new Fabric `ComponentView`s, and while technically possible, the experience is not quite ready for wide adoption.

The story is better for non-UI community modules. Some purely non-UI community modules, built to target the existing Old Architecture apps, may still work "out-of-the-box" with your New Architecture apps. But due to the varied state of Windows support in community modules, you may find that even some of those non-UI modules will need updating.

> **Note:** We do have a new library template, `cpp-lib`, which can be used to build non-UI community modules targeting the New Architecture. There are even accommodations within that template to continue to support Old Architecture apps simultaneously with one codebase. However, the template does not yet contain any examples for implementing custom UI for either architecture. The goal will be a single library template that supports both Old and New, UI and non-UI, with examples, but it isn't ready yet.

### Remaining Work

Our work on React Native Windows' New Architecture follows a series of milestones designed to guide our development priorities. Currently, our focus is on enabling community modules alongside full API parity and improving accessibility features.

To track real-time progress and specific milestones, visit our [New Architecture for React Native for Windows Issue](https://github.com/microsoft/react-native-windows/issues/12042). This page is regularly updated with our latest development goals, roadmap items, and areas we’re actively working on. We encourage developers to check there for the latest on what’s available, what’s in progress, and what’s coming next.

## React Native Component Parity

The New Architecture introduces the most significant updates in how UI is rendered. By moving from UWP to the WinAppSDK, we gain the flexibility to implement components that weren't previously available while also reducing the parity gap for existing components.

Perhaps the most notable change is we're finally implementing React Native's [`Modal`](https://reactnative.dev/docs/modal), thereby removing the necessity of using the Windows-only[`Flyout`](https://microsoft.github.io/react-native-windows/docs/flyout-component) or [`Popup`](https://microsoft.github.io/react-native-windows/docs/popup-component) components.

Below you'll find a list of components we plan to support in the New Architecture.

### Supported Components

The plan is to support all React Native core host components in React Native for Windows. Each component below links to the corresponding issue label in our GitHub repo that tracks the progress of its parity with the New Architecture:

- [View](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20View%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Text](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Text%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Image](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Image%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [TextInput](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20TextInput%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [ScrollView](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20ScrollView%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Modal](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Modal%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22&page=1)
- [ActivityIndicator](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20ActivityIndicator%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [Switch](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20Switch%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)
- [RefreshControl](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Area%3A%20RefreshControl%22%20%20label%3A%22Workstream%3A%20Component%20Parity%22%20label%3A%22Area%3A%20Fabric%22%20)

### Unsupported Components

The following components were created and included in React Native for Windows Old Architecture in order to tackle the unique compatibility problems posed by using UWP XAML. There is no plan to include built-in support for these Windows-specific components within React Native for Windows (though they may possibly be supported by future community modules).

- [Flyout](https://github.com/microsoft/react-native-windows/issues/11921)
- [Popup](https://github.com/microsoft/react-native-windows/issues/11921)
- [Glyph](https://github.com/microsoft/react-native-windows/issues/11961)

## Send us your Feedback

You're sure to encounter some bumps, challenges and rough edges with trying out the New Architecture. We've already logged many issues tracking properties and features that are on our to-do list, but if you come across significant concerns that aren't yet covered, please [open an issue](https://github.com/microsoft/react-native-windows/issues/new/choose) in the react-native-windows repo. You can also leave comments on [existing issues](https://github.com/microsoft/react-native-windows/issues) to help us prioritize what to tackle first!

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
