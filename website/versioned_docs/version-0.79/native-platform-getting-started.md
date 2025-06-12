---
id: version-0.79-native-platform-getting-started
title: "Native Platform: Getting Started"
sidebar_label: Getting Started
original_id: native-platform-getting-started
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Similar to how the [Getting Started for Windows](getting-started.md) guide takes you through the process of creating a base React Native *app* (which supports iOS and Android), and then adding Windows support, this guide will take you through the steps of creating a base React Native *library*, and then adding Windows support.

Before you get started, make sure you have installed all of the [development dependencies](rnw-dependencies.md).

> **Note:** There have always been multiple ways to create base React Native libraries, each creating a slightly different setup. This guide uses the `create-react-native-library` tool (with specific options) to start a brand new library, because that is the specific setup tested by the React Native for Windows team. Your experience may differ when attempting to add Windows support to (existing) libraries created by other tools.

## Create a new React Native library project

Call the following from the place where you want your project directory to live:

<!-- Note, make sure `--react-native-version "XYZ"` are pointing to the correct NPM tags in the command below. -->

<!-- 1. For the next version (i.e. in docs/getting-started.md) use "nightly" for the RN version -->
<!-- 2. For stable versions in versioned_docs use the semantic version, i.e. "^0.73.0" for the RN version -->

<!-- See https://www.npmjs.com/package/react-native?activeTab=versions for the RN version tags. -->

```bat
npx --yes create-react-native-library@0.48.9 --react-native-version "^0.79.0" <projectName>
```

> **Note:** Replace `<projectName>` with the name of your library. The rest of this guide will assume you named your project `testlib`.

You'll then be prompted for more information about the library you're trying to create (though you can also specify the answers at the command-line). Most are self-explanatory, but for this guide, you'll want to choose:

| Option | Value | CLI Argument |
|:-------|:-------|:-------------|
| Package Name | testlib | `--slug testlib` |
| Library Type | Turbo module | `--type turbo-module` |
| Languages | Kotlin & Objective-C | `--languages kotlin-objc` |

> **Note:** For more information on all of the available options, see [create-react-native-library's documentation](https://callstack.github.io/react-native-builder-bob).

### Navigate into this newly created directory

The command will create your project in a new sub-directory, which you must enter before continuing:

```bat
cd <projectName>
```

### Add React Native for Windows to your project's node dependencies

<!-- Note, make sure "version" is pointing to the correct react-native-windows NPM tag in the command below. -->

<!-- 1. For the next version (i.e. in docs/getting-started.md) use "canary" -->
<!-- 2. For other versions in versioned_docs use the version in the format "^0.XY.0" -->

Next you'll want to add `react-native-windows` as a dependency:

```bat
yarn add react-native-windows@^0.79.0 --dev
yarn add react-native-windows@* --peer
yarn install
```

### Initialize the React Native for Windows native code and projects

Lastly, initialize the React Native for Windows library with the [init-windows command](init-windows-cli.md) and the `cpp-lib` template:

```bat
npx react-native init-windows --template cpp-lib --overwrite
```

> **Note:** The command will not only initialize the Windows code for the library project itself, but it will also initialize the Windows code for the example app created by `create-react-native-library` in the `example` folder.

## Running the React Native for Windows example app

If you followed this guide and added Windows support to the base project created by `create-react-native-library`, you should be able to launch the provided `example` app with the [run-windows command](run-windows-cli.md):

```bat
yarn react-native run-windows
```

> **Note:** For our `example` app, you can either run the given command from within the `example` folder, or run `yarn example react-native run-windows` directly from the library's root folder.

## Next Steps

After you've initialized a new project to support Windows, your next step is to implement that Windows support in native code.

If you're implementing a Native Module (i.e. exposing non-UI native code), continue with [Native Platform: Native Modules](native-platform-modules.md).

If you're implementing a Native Component (i.e. exposing native Windows UI), continue with [Native Platform: Native Components](native-platform-components.md).
