---
id: native-modules-marshalling-data
title: Marshalling Data
---

>**This documentation and the underlying platform code is a work in progress.**

## Overview

Within Microsoft.ReactNative, JS objects are currently marshalled from the JS VM into the native code as `folly::dynamic` objects, and vise-versa. When those objects need to be further marshalled outside of Microsoft.ReactNative (across the WinRT ABI boundary) they are done serially via the high-performance `IJSValueReader` and `IJSValueWriter` interfaces, which completely avoid further heap allocations.

//TODO

## Examples

For examples of using data automatically marshalled into static native types, see the `DataMarshallingExamples` module within the [Native Module Sample](https://github.com/microsoft/react-native-windows-samples/tree/master/samples/NativeModuleSample). Implementations for both C# and C++/WinRT are provided.

For examples of using data automatically marshalled into the dynamic JSValue type, see [Marshalling Data](native-modules-marshalling-data.md).

For examples of marshalling data manually with `IJSValueReader` and `IJSValueWriter`, see [Native Modules (Advanced)](native-modules-advanced.md).
