---
id: version-0.80-new-architecture
title: New vs. Old Architecture
original_id: new-architecture
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

React Native's [New Architecture](https://reactnative.dev/architecture/landing-page) brings many framework improvements including the advanced [Fabric](https://reactnative.dev/architecture/fabric-renderer) rendering system. It greatly improves the speed and responsiveness of React Native apps over the previous *Legacy* or *Old Architecture* and its *Paper* renderer. The New Architecture was enabled by default for the *iOS* and *Android* platforms in [react-native@0.76.0](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here).

React Native for Windows also supports the New Architecture for the *Windows* platform. It was first available as an opt-in preview in [react-native-windows@0.76.0](https://devblogs.microsoft.com/react-native/2025-01-29-new-architecture-on-0-76-0-77/) and became the default for *new* app projects in `react-native-windows@0.80.0`. For more information on the differences between the architectures on Windows, see [New vs. Old Architecture Differences](#new-vs-old-architecture-differences).

> **Important:** Nearly all future investments to React Native (and React Native for Windows) will be toward the New Architecture, and we highly recommend that all projects migrate as soon as possible. React Native (and therefore React Native for Windows) deprecated the Old Architecture as of [react-native@0.82.0](https://reactnative.dev/blog/2025/10/08/react-native-0.82#new-architecture-only).

Unfortunately, React Native for Windows does not support simply "enabling" the New Architecture for existing projects, nor easily switching between the two architectures with a simple setting. Developers must choose their target architecture by selecting the appropriate template (New or Old) when initializing their native Windows app project. For more details, see [Choosing the React Native Architecture on Windows](#choosing-the-react-native-architecture-on-windows) below.

Furthermore, we also acknowledge that the React Native for Windows New Architecture experience is not yet at 100% feature parity with its Old Architecture experience, nor at 100% parity with the upstream platforms. While we encourage all developers to try the New Architecture (and help us find the gaps), it remains possible to keep existing apps (and/or create new ones) on the Old Architecture for the time being.

For more information on the feature parity and known issues, see [New Architecture Feature Parity](#new-architecture-feature-parity).

For answers to common questions, see the [FAQ](#faq).

## New vs. Old Architecture Differences

### Better Cross-Platform Alignment

In moving to the New Architecture, React Native consolidated several responsibilities away from the individual platforms into a shared core of cross-platform native code, particularly with the Fabric render. React Native for Windows also uses this shared code in the New Architecture.

This change means that React Native for Windows New Architecture applications should behave more like the other React Native platforms at runtime.

### Better Developer Experience

React Native for Windows publishes both source packages to [NPM](https://www.npmjs.com/package/react-native-windows) and as pre-built native binary packages on [NuGet](https://www.nuget.org/packages/Microsoft.ReactNative/). While consuming the pre-built binaries was an experimental feature for the Old Architecture, it is the default supported option for all New Architecture projects.

This change means reduced dev machine requirements, including drastically improved build times (up to 5x faster) and reduced disk usage (up to 75% less space needed).

### From UWP to Windows App SDK

On Windows, the implementation of the (Old Architecture) Paper renderer used the [Universal Windows Platform](https://learn.microsoft.com/en-us/windows/uwp/) (or UWP). To meet the requirements of the new Fabric renderer, the Windows implementation now uses the modern [Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/). This evolution allowed us to utilize the upstream React Native cross-platform rendering logic while also enabling us to better implement the Windows-specific platform code.

This change means that React Native for Windows New Architecture applications are now Win32, Windows App SDK applications. This aligns with the current recommendations for Windows application development, providing React Native for Windows developers with greater access to the latest Windows' frameworks. All React Native for Windows Old Architecture applications will continue to target UWP.

### From UWP XAML to the Window App SDK Visual Layer

On Windows, React Native host components (that is, React Native components that are directly backed by native UI) were implemented with [UWP XAML](https://learn.microsoft.com/en-us/windows/uwp/xaml-platform/xaml-overview) controls in the Old Architecture.

For the New Architecture, rather than moving to [Windows App SDK's WinUI 3](https://learn.microsoft.com/en-us/windows/apps/winui/winui3/) (the direct successor to UWP XAML), we instead implemented host components using [Windows App SDK's Visual Layer](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/composition) (commonly known as "Composition" or the "Windows App SDK Scene Graph").

This change makes it easier for React Native for Windows to implement expected behavior of React Native UI without having to work around how XAML behaves.

## Choosing the React Native Architecture on Windows

Developers choose the React Native Architecture (New or Old) for their Windows application when (re-)initializing Windows platform support for their project. This choice is determined by the `--template` argument when running the [init-windows command](init-windows-cli.md).

Starting with `react-native-windows@0.80.0`, calling `init-windows` for the *first time* in an application project (as seen in the [Getting Started](getting-started.md) guide) will default to using the New Architecture template if none is specified. If you re-run `init-windows` on a project without specifying a template, the command will default to the previously used template. See [Default Options and Re-initializing Projects](init-windows-cli.md#default-options-and-re-initializing-projects) for more details.

> **Note:** The choice described here only applies for your project's Windows build and is independent of the choice you make for other React Native platforms, i.e. your Android and iOS builds can target a different architecture than your Windows build.

### Choosing the New Architecture for applications

To (re-)initialize Windows with the New Architecture, you'll want to specify `--template cpp-app` when calling the [init-windows command](init-windows-cli.md) in your application project:

```bat
yarn react-native init-windows --template cpp-app
```

> **Note**: 

### Choosing the Old Architecture for applications

To (re-)initialize Windows with the Old Architecture, you'll want to specify `--template old/uwp-cpp-app`  when calling the [init-windows command](init-windows-cli.md) in your application project:

```bat
yarn react-native init-windows --template old/uwp-cpp-app
```

> **Note:** If you want to use the old C# template, specify `old/uwp-cs-app` instead, but be sure to check out [.NET and C# Support](#net-and-c-support) in the FAQ below.

### Switching or migrating your application project to a different architecture

At a high-level, switching your application project means re-initializing Windows support with the correct template.

> **Important:** Now's a good time to make sure you're using version control so you're able to abort the attempt and/or revert the changes.

If you've made zero manual changes to the `windows` folder since you first added Windows support, this switch can be as "easy" as:

1. Deleting the `windows` folder in your project
2. Re-running `init-windows` and specifying the correct template
3. Running `run-windows` to build and launch the new native app

However, if you've made any changes to the `windows` folder (anything from changing native code to creating app icons, store assets, etc.) then you'll need to re-apply those changes.

Even if you fix up your `windows` folder, the native libraries you depend on may or may not support the architecture you're switching to. This can produce build and/or runtime failures, which may require more troubleshooting on your part to successfully migrate.

## New Architecture Feature Parity

Developers should expect that the vast majority of core components, APIs, and functionality in React Native (i.e. from the `react-native` package) are already available in React Native for Windows in the New Architecture. However there are some gaps and we're not at 100% feature parity with the other platforms.

### Library Support

Unfortunately, the level of parity can be even lower when taking into consideration native library support, whether via local or community modules. If you're using a native library which supported Windows on the Old Architecture, and it does not provide any new native UI components, chances are the library can easily support Windows on the New Architecture, if it doesn't already.

However if a library exposed new native UI, then chances are the library will need to re-implement that native UI for Windows.

### Windows-Only Core Components

The following core components were created for and included in React Native for Windows Old Architecture and are not currently supported in the New Architecture:

- [Flyout](flyout-component-windows.md)
- [Popup](popup-component-windows.md)
- [Glyph](glyph-component-windows.md)

> **Note:** Flyout and Popup were designed to workaround the inability to properly implement the [Modal](https://reactnative.dev/docs/modal) core component in UWP XAML. Modal is now supported in the New Architecture on Windows, and developers are encouraged to migrate to it where possible.

## Send us your Feedback

You're sure to encounter some bumps, challenges and rough edges with trying out the New Architecture. We've already logged many issues tracking properties and features that are on our to-do list, but if you come across significant concerns that aren't yet covered, please [open an issue](https://github.com/microsoft/react-native-windows/issues/new/choose) in the `react-native-windows` repo. You can also leave comments on [existing issues](https://github.com/microsoft/react-native-windows/issues) to help us prioritize what to tackle first!

## FAQ

### Migrating from Old to New

#### Can I keep using the Old Architecture?

Yes, for now. The React Native for Windows Old Architecture templates are still available for both creating new and upgrading existing application projects.

React Native for Windows won't automatically migrate Old Architecture Windows projects to use the New Architecture. Developers continuing to use the Old Architecture on Windows will eventually need to migrate manually by re-initializing their Windows native project.

#### Can I still publish New Architecture applications to the Windows Store?

Yes, the new `cpp-app` template uses a Windows Packaging project so you can still publish your application to the Windows Store.

#### How do I migrate a library project to support the New Architecture?

React Native for Windows library projects can support both New and Old Architecture applications with the latest supported template. See [Native Platform: Getting Started](native-platform-getting-started.md) for details.

#### I've found something that doesn't work as expected in the New Architecture, what can I do?

First, search [React Native for Windows Open Issues](https://github.com/microsoft/react-native-windows/issues) to see if the issue you're seeing has already been reported, and if has, give it a comment or up-vote, especially if it's blocking you migration.

If you don't find an existing issue, please [Open a new issue](https://github.com/microsoft/react-native-windows/issues/new/choose) and let us know what you're seeing.

### Migrating from UWP to Windows App SDK

#### Why the change from UWP to Windows App SDK?

For years, React Native for Windows has built Windows apps using the [Universal Windows Platform](https://learn.microsoft.com/en-us/windows/uwp/) and its [XAML](https://learn.microsoft.com/en-us/windows/uwp/xaml-platform/xaml-overview) technologies.

However, this implementation has never been perfect. UWP XAML has its own expectations and limitations with rendering UI, which has often come into conflict with React Native's expectations. This has always generated a certain class of issues that simply couldn't be solved by React Native for Windows.

Furthermore, many requirements of the New Architecture, particularly the faster, more polished UI enabled by the Fabric renderer, would not be possible without extensive, fundamental changes to UWP XAML.

Now, the current recommendation for new Windows apps is to build using the [Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/). There are many benefits for Windows developers to migrate their apps off UWP and onto the Windows App SDK. Most importantly for React Native for Windows, the Windows App SDK gives us the tools to implement the New Architecture properly.

#### Why the change from XAML to Composition?

It is not always possible to adapt the XAML framework, let alone specific controls, to meet the API requirements, behaviors and expectations of React Native. However, thanks to the Windows App SDK, we're now able to "drop down" and use the layer of UI primitives under XAML, the [Windows App SDK Visual Layer](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/composition) aka Composition.

So now, instead of trying to implement React Native components with fully-featured XAML controls (and perhaps fight their default behavior) we're now able to implement those components more directly in Composition, giving us the power to align with React Native's expectations rather than XAML's.

#### What if I still need/want XAML controls?

We understand that customers may still want to use XAML controls (whether it's any of the rich controls included with Windows App SDK's WinUI 3, third-party libraries, or any of their own existing custom controls) within their React Native for Windows application's UI.

We are actively working on enabling this, but it's not quite production ready yet. We fully expect to support that developers, especially community module developers, will be able to implement New Architecture `ComponentView`s by loading XAML controls, rather than requiring them to implement the controls "from scratch" using the base Composition APIs.

#### Will the New Architecture ever target UWP? Will the Old Architecture ever target Windows App SDK?

No. The New Architecture only targets Windows App SDK and the Old Architecture only targets UWP. Previous experimental features that enabled different scenarios are not supported.

### .NET and C# Support

#### Does React Native for Windows support C# in the New Architecture?

While Windows App SDK does support writing applications and libraries using C# and modern .NET, React Native for Windows doesn't yet. Most React Native for Windows applications and libraries, not to mention React Native for Windows itself, are written in C++ so the team prioritized C++ support first.

While there are plans and some basic infrastructure set up to support C#, what exists is not nearly robust enough to support the React Native ecosystem.

To see give feedback on our progress toward C# support, see [Issues tagged "Workstream: New Arch C# Support"](https://github.com/microsoft/react-native-windows/issues?q=is%3Aissue%20state%3Aopen%20label%3A%22Workstream%3A%20New%20Arch%20C%23%20Support%22).

#### Can I migrate my Old Architecture C# application to New Architecture C++?

Yes, in some cases. It depends on how much your application project depends upon actual C# code, either directly or indirectly. Without native C# support in the New Architecture, any functionality your project uses which is written in C# will need to be re-written (if possible) in C++ or removed / replaced. This includes any native libraries (local or community) your application uses.

If you made no changes to your native Windows code (i.e. the code in your projects `windows` folder) and rely on no native libraries (local or community) that were written in C#, then there's a good chance you can simply re-initialize your project as a New Architecture project.
