---
id: native-platform
title: "Native Platform: Overview"
sidebar_label: Overview
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Sometimes a React Native app needs to access native functionality that isn't already exposed via `react-native` or an existing community module or library. Whether it's to access a platform API or some other custom native code, React Native was designed to be extensible, making it possible for anyone to write native code and expose that functionality to their app's JavaScript.

The [reactnative.dev Native Platform guide](https://reactnative.dev/docs/native-platform) defines *Native Modules* as native libraries for accessing non-UI native code, and *Native Components* for accessing native platform views. That guide includes steps for implementing new Native Modules (and/or Components) for both the Android and iOS platforms. This guide will cover how to implement new Native Modules (and/or Components) for the Windows platform.

> **Architecture Note:** The React Native guide recommends creating *Turbo Native Modules* and/or *Fabric Native Components* to support React Native's New Architecture, rather than the legacy APIs made for the Old Architecture. This guide will detail how to create a single library which supports both architectures on Windows. For more information on React Native architectures in React Native for Windows, see [New vs. Old Architecture](new-architecture.md).

## Getting Started

Your first step to implement a new Native Module (and/or Component) is to create a new base native library and initialize React Native for Windows support. See [Native Platform: Getting Started](native-platform-getting-started.md).

## Implementing Windows Support

After you've initialized a new project with Windows support, your next step is to implement the Windows support in native code.

If you're implementing a Native Module (i.e. exposing non-UI native code), continue with [Native Platform: Native Modules](native-platform-modules.md).

If you're implementing a Native Component (i.e. native Windows views), continue with [Native Platform: Native Components](native-platform-components.md).

## Using Native Libraries on Windows

After you've implemented your native library, the final step is consume it in your React Native for Windows app. Continue with [Native Platform: Using Native Libraries](native-platform-using.md).

## Native Module Sample

The [Native Module Sample](https://github.com/microsoft/react-native-windows-samples/tree/main/samples/NativeModuleSample/cpp-lib) project is a complete React Native for Windows Library that contains:

* Several Native Modules examples
* A Native Component example with implementations for both Paper and Fabric
* Both New and Old Architecture example apps
