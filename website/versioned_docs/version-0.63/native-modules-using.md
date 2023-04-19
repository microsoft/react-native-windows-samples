---
id: version-0.63-native-modules-using
title: Using Community Native Modules
original_id: native-modules-using
---

Community native modules are usually distributed as npm packages. To understand more about npm packages you may find [this guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry) useful.

Consuming native modules requires updating your app's native build files to depend on the module's native build files, called "linking". Many modules support "autolinking", where these updates are done automatically when running `npx react-native run-windows`. Others may require you to link the module manually.

This document outlines the general steps to manually link a module (`react-native-foo`) to your project.

> Not all community modules have been updated to work with Windows. If you find a module that doesn't work with Windows, please file an [issue on GitHub](https://github.com/microsoft/react-native-windows/issues/new/choose). We're tracking the list of incompatible modules that we're working to add support for [on GitHub](https://github.com/microsoft/react-native-windows/projects/23). 

> Note that individual modules may have different or specific steps for linking to Windows. The steps outlined in this doc are useful if the module repo doesn't outline how to use the module on Windows.

> For more information on how autolinking works, see [Autolinking Native Modules](native-modules-autolinking.md).

## Step 1: Update the solution file

Add the `ReactNativeFooCPP` project to your solution.

1. Open the solution in Visual Studio 2019
2. Right-click Solution icon in Solution Explorer > Add > Existing Project
3. Select `node_modules\react-native-foo\windows\vNext\ReactNativeFooCPP\ReactNativeFooCPP.vcxproj`

## Step 2: Update the .vcxproj file

Add a reference to `ReactNativeFooCpp` to your main application project. From Visual Studio 2019:

1. Right-click main application project > Add > Reference... 
2. Check `ReactNativeFooCpp` from Solution Projects


## Step 3: Update the `pch.h` file

Add `#include "winrt/ReactNativeFooCPP.h"`.

## Step 4: Register the package

Add `PackageProviders().Append(winrt::ReactNativeFooCPP::ReactPackageProvider());` before `InitializeComponent();`.
