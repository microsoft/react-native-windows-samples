---
id: native-modules-marshalling-data
title: Marshaling Data
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

> For the latest information on native development on Windows, see [Native Platform: Overview](native-platform.md).

>**This documentation and the underlying platform code is a work in progress.**

## Overview

React Native applications are composed of multiple components and layers, some of which have boundaries that require the marshaling of data. This document intends to cover how this data marshaling occurs in React Native Windows.

Here's the layout of a minimal React Native Windows UWP application:

![RNW UWP Application Layout](assets/rn-windows-app-layout.png)

The first boundary is perhaps the most obvious - the boundary between the JavaScript VM (Chakra in this case), hosting the bundled JS code of the running application, and the native code of React Native Windows. Across this boundary, JS objects are marshaled into the native code as `folly::dynamic` objects, and vise-versa.

This all happens within `Microsoft.ReactNative`, the compiled library of React Native Windows code. Within the library, the C++ [folly::dynamic](https://github.com/facebook/folly/blob/master/folly/docs/Dynamic.md) objects are the primary mechanism for working with JS data.

Now, here's the layout of a React Native Windows UWP application that uses an external [Native Module](native-modules.md):

![RNW UWP Application Layout with Native Modules](assets/rn-windows-app-layout-with-native-modules.png)

> With external native modules, we mean both those defined in stand-alone Windows Runtime Component libraries and those defined in the host UWP application. 

Since we are dealing with a UWP application and need to support external native modules written in both C# and C++/WinRT, the `Microsoft.ReactNative` library is a Windows Runtime Component. This means a WinRT ABI surface, and as such, external native modules interact with React Native Windows across a WinRT boundary.

A lot of work has gone into designing an ABI surface that is as fast and future-proof as possible, especially around the marshaling of JS data.

So after the JS objects have been marshaled into `folly::dynamic` objects internally, we have to further marshal those objects across the WinRT ABI boundary. We do this serially via the high-performance `IJSValueReader` and `IJSValueWriter` interfaces. These interfaces let us (de)serialize data across the WinRT boundary without heap allocations and in a fast, minimal, and future-proof way.

While you can manually use the `IJSValueReader` and `IJSValueWriter` interfaces, we also provide two shared projects, `Microsoft.ReactNative.SharedManaged` for C# and `Microsoft.ReactNative.Cxx` for C++/WinRT, which provides a robust infrastructure for automatically marshaling out both simple and complex native static types.

The end-to-end data flow looks something like this:

![Data marshaling Flow](assets/data-marshaling-flow.png)

## Examples

For examples of using data automatically marshaled into both static and dynamic native types, see the `DataMarshalingExamples` module within the [Native Module Sample in `microsoft/react-native-windows-samples`](https://github.com/microsoft/react-native-windows-samples/tree/main/samples-old/NativeModuleSample). Implementations for both C# and C++/WinRT are provided.

For further examples of using the dynamic `JSValue` type, see [Using `JSValue`](native-modules-jsvalue.md).

For examples of marshaling data manually with `IJSValueReader` and `IJSValueWriter`, see [Native Modules (Advanced)](native-modules-advanced.md).
