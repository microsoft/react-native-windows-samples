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
Hermes is experimentally supported on Windows, generally providing better performance characteristics than the default Chakra engine.

### Enabling Hermes for new projects
The easiest way to enable Hermes is to pass the `--useHermes` flag to `react-native-windows-init` when creating a new project. This will set up your project to use the Hermes engine and to generate bundles as Hermes bytecode instead of JavaScript.

### Using Hermes in an existing project
Hermes can be enabled in existing projects with a few edits.

First, set the `UseHermes` property to `true` in the `BuildFlags.props` file in your project's `windows` directory:

```xml
<PropertyGroup Label="Microsoft.ReactNative Build Flags">
  ...
  <UseHermes>true</UseHermes>
</PropertyGroup>
```

Second, add the Hermes NuGet package to `packages.config`, found next to your projects `vcxproj` file:

```xml
<packages>
  ...
  <package id="ReactNative.Hermes.Windows" version="0.7.1" targetFramework="native" />
</packages>
```

Finally, edit the `ExtensionTargets` ItemGroup in your project's `vcxproj` file to import targets from the NuGet package:

```xml
<ImportGroup Label="ExtensionTargets">
  ...
  <Import Project="..\packages\ReactNative.Hermes.Windows.0.7.1\build\native\ReactNative.Hermes.Windows.targets" Condition="Exists('..\packages\ReactNative.Hermes.Windows.0.7.1\build\native\ReactNative.Hermes.Windows.targets')" />
</ImportGroup>
```

### Disabling Hermes
If you've built a project using Hermes and want to opt-out, the above instructions may be reversed.

### Known limitations
- Hermes is not yet supported when using C# projects
- Hermes debugger is not yet supported
- Enabling Hermes leads to a very large download on initial build. This will become smaller in the future
- Hermes is not yet compatible with other experimental features, like NuGet distribution or WinUI3
- The binary for Hermes is not yet signed by Microsoft
