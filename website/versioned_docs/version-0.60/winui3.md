---
id: version-0.60-winui3
title: WinUI 3
original_id: winui3
---

# WinUI 3 Support in RNW

[WinUI](https://microsoft.github.io/microsoft-ui-xaml/) is the modern native UI platform of Windows. For more information about **WinUI 3** see [this link](https://docs.microsoft.com/en-us/windows/apps/winui/winui3/). 

We are working on adding **WinUI 3** support for RNW and have made some good progress towards an alpha.

## Current status

For the most up-to-date information on RNW support for Windows App SDK, see [RNW + WinAppSDK Roadmap](https://aka.ms/rnw-roadmap)


As of November 19th 2020, we support the **WinUI 3.0 Preview 4** release for:

* Creating a new RNW app with either C++/WinRT or C#. 
* The Playground app is able to build a `WinUI 3`-targeting version.

## Not yet supported

* **NPM package** - we need to create NPM package for **WinUI 3**-enabled `Microsoft.ReactNative`.
* **Native modules support** - we need to figure out how community Native Modules will factor into using **WinUI 3** - right now if you try to load system XAML (with or without WinUI 2.x) and WinUI 3, we will crash the process, since this likely would lead to harder to diagnose issues in trying to inter-operate between the two flavors of the framework.

## How to create a RNW-on-WinUI 3 app

In order to create a **WinUI 3** enabled C++ or C# app, pass the `--useWinUI3` flag when running `react-native-windows-init`, in addition to any other flags like `--language cpp`, etc.

Example:
```bat
npx react-native-windows-init --useWinUI3 --overwrite --language cpp
```

## How it works
For a RNW app to target WinUI 3, it must use a version of `Microsoft.ReactNative` that targets WinUI 3. All of this is done via one of the following:
* When `react-native-windows-init` creates a WinUI 3 targeted app, it will place a sentinel file called `UseWinUI3` in the solution directory.
* `run-windows` has logic to pass the MSBuild flag `UseWinUI3=true` if this file exists. This in turn affects what version of WinUI is used as well as MIDL, C++ and C# preprocessor defines, which control which version of WinUI the code targets.

## Additional resources

* [WinUI 3](https://docs.microsoft.com/en-us/windows/apps/winui/winui3/)

Follow overall project status in the [Re-target onto OSS XAML](https://github.com/microsoft/react-native-windows/projects/30) project.
