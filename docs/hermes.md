---
id: hermes
title: Hermes on Windows + macOS
---

# Hermes
The [Hermes](https://hermesengine.dev/) engine is an open source JavaScript engine created by Facebook to optimize building and running React Native applications.

To learn more about what it is and how to use it, check out the [React Native](https://reactnative.dev/docs/hermes#docsNav) documentation for it.

## Available on macOS
Hermes is available on React Native for macOS, provided you are using version 0.62 or higher.
To learn how to upgrade to the latest version, check out the **Upgrading** section of the [macOS Getting Started guide](rnm-getting-started.md).

After you have upgraded to the latest version of React Native for macOS, install and add the following:

1.  Install the npm package `yarn add 'hermes-engine-darwin@^0.4.3'`
2. Add (or uncomment) the following pod dependencies to your macOS target in your `Podfile`:<br>
```
pod 'React-Core/Hermes', :path => '../node_modules/react-native-macos/'
pod 'hermes', :path => '../node_modules/hermes-engine-darwin'
pod 'libevent', :podspec => '../node_modules/react-native-macos/third-party-podspecs/libevent.podspec'
```
3. Run `pod install`

> Be sure to set your target's deployment target to at least 10.14 before running `pod install`

## Hermes on Windows:
We are working on bringing Hermes support to React Native for Windows through the official [Microsoft fork of Hermes](https://github.com/microsoft/hermes-windows).

Hermes for React Native for Windows has been updated to support the latest version 0.4.3 and can be turned on with a build flag for experimental use while we complete the feature set and get it ready for shipping.

Here are the instructions to enable it:
1.	Uncomment the Hermes reference in [`vnext/Microsoft.ReactNative/packages.config`](https://github.com/microsoft/react-native-windows/blob/917adf8349ddf7f1a9943fc89096df7e2303ae7c/vnext/Microsoft.ReactNative/packages.config#L10)
2.	Build RNW with `USE_HERMES=true`, or set it to true in [`vnext/PropertySheets/React.Cpp.props`](https://github.com/microsoft/react-native-windows/blob/917adf8349ddf7f1a9943fc89096df7e2303ae7c/vnext/PropertySheets/React.Cpp.props#L29)
3.	Set `host.InstanceSettings().JSIEngineOverride(Microsoft::ReactNative::JSIEngine::Hermes)`

You can also see an [example of how to enable it here](https://github.com/microsoft/react-native-windows/blob/917adf8349ddf7f1a9943fc89096df7e2303ae7c/packages/playground/windows/playground/MainPage.cpp#L64) for reference.
