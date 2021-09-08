---
id: hermes
title: Hermes on Windows + macOS
---

# Hermes

The [Hermes](https://hermesengine.dev/) engine is an open source JavaScript engine created by Facebook to optimize building and running React Native applications.

To learn more about what it is and how to use it, check out the [React Native](https://reactnative.dev/docs/hermes#docsNav) documentation for it.

## Hermes on Windows:

Hermes is experimentally supported on Windows, generally providing better performance characteristics than the default Chakra engine.

### Enabling Hermes for new projects

Pass the `--useHermes` flag to `react-native-windows-init` when creating a new project. This will set up your project to use the Hermes engine and to generate bundles as Hermes bytecode instead of JavaScript.

### Using Hermes in an existing project

Set the `UseHermes` property to `true` in the `ExperimentalFeatures.props` file in your project's `windows` directory:

```xml
<PropertyGroup Label="Microsoft.ReactNative Experimental Features">
  ...
  <UseHermes>true</UseHermes>
</PropertyGroup>
```

### Disabling Hermes

Set the `UseHermes` property to `false` in the `ExperimentalFeatures.props` file in your project's `windows` directory:

```xml
<PropertyGroup Label="Microsoft.ReactNative Experimental Features">
  ...
  <UseHermes>false</UseHermes>
</PropertyGroup>
```

### Known limitations

- Hermes is not yet compatible with other experimental features, like NuGet distribution or WinUI 3
- Hermes dll is not signed by Microsoft and the PDBs are not uploaded to the symbol servers

## Hermes on macOS

Hermes is available on React Native for macOS, provided you are using version 0.62 or higher.
To learn how to upgrade to the latest version, check out the **Upgrading** section of the [macOS Getting Started guide](rnm-getting-started.md).

After you have upgraded to the latest version of React Native for macOS, install and add the following:

1. Install the npm package `yarn add 'hermes-engine-darwin@^0.4.3'`
2. Add (or uncomment) the following pod dependencies to your macOS target in your `Podfile`:<br>

```
pod 'React-Core/Hermes', :path => '../node_modules/react-native-macos/'
pod 'hermes', :path => '../node_modules/hermes-engine-darwin'
pod 'libevent', :podspec => '../node_modules/react-native-macos/third-party-podspecs/libevent.podspec'
```

3. Run `pod install`

> Be sure to set your target's deployment target to at least 10.14 before running `pod install`
