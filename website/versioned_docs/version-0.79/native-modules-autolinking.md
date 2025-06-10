---
id: version-0.79-native-modules-autolinking
title: Autolinking Native Modules
original_id: native-modules-autolinking
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

> For the latest information on native development on Windows, see [Native Platform: Overview](native-platform.md).

Autolinking is a mechanism that allows your React Native app project to discover and use native modules and view managers provided by React Native libraries.

This document covers autolinking for the Windows platform. It is an extension to the [React Native CLI Autolinking doc](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).

Add a library using your favorite package manager and run the build:

```bat
yarn add react-native-webview
npx react-native run-windows
```

That's it. No more editing native files to use native code.

## How does it work

From the [React Native CLI Autolinking doc](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md#how-does-it-work):

> Each platform defines its own [`platforms`](https://github.com/react-native-community/cli/blob/master/docs/platforms.md) configuration. It instructs the CLI on how to find information about native dependencies. This information is exposed through the [`config`](https://github.com/react-native-community/cli/blob/master/docs/commands.md#config) command in a JSON format. It's then used by the scripts run by the platform's build tools. Each script applies the logic to link native dependencies specific to its platform.

The information provided by `config` is described in [React Native Config Schema](config.md).

## Autolinking process

Autolinking is performed automatically as a part of the [run-windows command](run-windows-cli.md):

1. At build time, autolinking is performed first, before `msbuild.exe` is invoked and the build actually started. It uses the information provided by `config` to both generate and modify certain native files consumed by your app project.
    1. The `AutolinkedNativeModules.g.props` and `AutolinkedNativeModules.g.targets` file contains the necessary references to the dependency projects that must be built.
        > Your app's solution file may also be modified to ensure the dependency projects will be built.

    1. The `AutolinkedNativeModules.g.(cpp|cs)` files contain a `RegisterAutolinkedNativeModulePackages` method which registers all of the specified `IReactPackageProvider`s from the dependencies.
1. At build time, while `msbuild.exe` is running, but before compiling your app project, a check will verify that the autolinked files are up-to-date, and warn you if they aren't.
    > If you're using `run-windows` this check should always pass. However, if you've manually edited the generated files, or changed your npm dependencies and are building manually with Visual Studio, then the check might fail. See [manually run autolinking](#manually-run-autolinking).
1. At runtime, when your app is starting up it will call `RegisterAutolinkedNativeModulePackages`, registering the native dependencies with React Native, making them available to JS code.

## Alternatives

### Manually run autolinking

If you would like to run the autolinking process outside of the build, you can run the [autolink-windows command](autolink-windows-cli.md) manually at any time.

### Skipping autolinking

If you would like to skip the autolinking process during [run-windows command](run-windows-cli.md) you can pass `--no-autolink` option:

```bat
npx react-native run-windows --no-autolink
```
