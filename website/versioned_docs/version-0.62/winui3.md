---
id: version-0.62-winui3
title: WinUI 3
original_id: winui3
---

# WinUI 3 Support in RNW

[WinUI](http://aka.ms/winui/) is the modern native UI platform of Windows. As of this writing, **WinUI 3** has published [Preview 1](https://docs.microsoft.com/en-us/windows/apps/winui/winui3/). 

We are working on adding **WinUI 3** support for RNW and have made some good progress towards an alpha.

## Current status

As of June 2020, we support the **WinUI 3.0 Alpha** release for:

* Creating a new RNW app C++/WinRT app. 
* The Playground app is able to build a `WinUI 3` Configuration (you can change this in VS). This corresponds to a `Debug` build but it targets WinUI 3.

## Not yet supported

* **`Release` builds** - this is an in-development feature so it really isn't intended for release/publishing yet. You'll see build breaks when switching to Release since the `WinUI3` is based on the `Debug` configuration.
* **WinUI 3 Preview** builds.
* **C# apps**. This will require to have the app template use  `using Windows.UI.Xaml` / `using Microsoft.UI.Xaml` as appropriate.
* **NPM package** - we need to create NPM package for **WinUI 3**-enabled `Microsoft.ReactNative`.
* **Native modules support** - we need to figure out how community Native Modules will factor into using **WinUI 3** - right now it probably won't work to try to mix and match WinUI 2.x (MUXC) with 3.0.

## How to create a RNW-on-WinUI 3 app

In order to create a **WinUI 3** enabled C++ app, pass the `--useWinUI3` flag when running `react-native-windows-init` (you'll pass `--language cpp` too to create a C++ app).

Example:
```powershell
npx react-native-windows-init --useWinUI3 --overwrite --language cpp
```

Follow overall project status in the [Re-target onto OSS XAML](https://github.com/microsoft/react-native-windows/projects/30) project.
