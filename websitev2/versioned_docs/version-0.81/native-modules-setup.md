---
id: native-modules-setup
title: Native Module Setup
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

> For the latest information on native development on Windows, see [Native Platform: Overview](native-platform.md).

> **This documentation is a work in progress and version-specific. Please check that the version of this document (top of page) matches the version of RN/RNW you're targeting.**

This guide will set you up with our recommendations for authoring a native module for React Native for Windows. After completing this setup, you should be able to answer the question: *Where do I need to implement the native code so it's available at runtime?*

With this question answered, you should be ready to start implementing the native module you wish to expose to your RNW app.

## Development Environment

First, make sure you have installed all of the [React Native for Windows development dependencies](rnw-dependencies.md).

## Decide where to host your native module

Once your development environment has been correctly configured, next you need to choose *where* your native module will live. You have three main options:

1. [Create a native module within your React Native for Windows app project](#option-1-create-a-native-module-within-your-react-native-for-windows-app-project)
2. [Add Windows support to an existing native module library](#option-2-add-windows-support-to-an-existing-native-module-library)
3. [Create a new native module library](#option-3-create-a-new-native-module-library)

### Option 1: Create a native module within your React Native for Windows app project

The quickest route to exposing native functionality to your React Native for Windows app is to just create a new native module within your existing app project. That is, assuming:

1. You followed the [Getting Started](getting-started.mdx) guide, where
1. You used the [React Native Community CLI's `init` command](https://github.com/react-native-community/cli/blob/main/docs/init.md) to create a new React Native project, and
1. You added `react-native-windows` as a dependency for the project, and
1. You used the [React Native Windows CLI's `init-windows` command](init-windows-cli.md) to initialize the native Windows code for the project

Then you should be able implement any RNW native modules directly within the native Windows app project, without the need of creating any separate projects, libraries or packages. This option is especially suitable if your native requirements are very small, such as you only need to expose native functionality to a single Windows app and don't intend to share it other apps nor implement the functionality for non-Windows platforms.

So, the answer to *Where do I need to implement the native code so it's available at runtime?*:

You're going to implement the native code inside your native Windows app project. I.e. if your app is named `MyApp`, you'll be creating and modifying files in the `windows\MyApp\` folder of your project.

If you've chosen this option, you can skip straight to [Next Steps](#next-steps).

> **Note:** The RNW app templates already include a built-in `IReactPackageProvider` to take care of registering any such native modules with React Native at runtime. You just need to implement the native Windows and JS/TS code of the module itself.

### Option 2: Add Windows support to an existing native module library

There are a variety of existing (community) native module libraries which expose the native functionality of other platforms such as Android and iOS. If the library doesn't already support Windows, you can try to add Windows support yourself. This option is suitable if you already own (or are heavily invested in using) an existing library, and you're willing to work with the library owner(s) to add Windows support.

First, you'll need to get the library's source. If the library is open source (many are), you can often find a link to its source repository in its npmjs.com listing.

Once you have the source set up on your dev machine, you should be go to [Add Windows support to a native module library](#add-windows-support-to-a-native-module-library).

> **Note:** Sometimes (community) libraries change owners, get abandoned, and/or are unwilling to add and maintain Windows support. There's currently no easy way to extend libraries you can't contribute to, other than by making and publishing your own fork of the code. So it's a good idea to figure out your plan and communicate with the library owner before you get too far in the implementation process.

### Option 3: Create a new native module library

If you want a library that can be used and re-used by multiple app projects, and an existing library doesn't already exist (or you don't have permission to modify it) the best option is to create a new library project to host the native module and its functionality.

The basic steps to create a new native module library project are:

1. Create a new, base React Native library project
1. Add `react-native-windows` as a dependency for the project
1. Use the [React Native Windows CLI's `init-windows` command](init-windows-cli.md) to initialize the native Windows code for the project

Unfortunately, neither React Native nor the React Native Community CLI provide a method for creating new React Native library projects. However, there are many popular third-party CLI tools for doing so. Specifically, RNW tests its supported library templates against projects created by the [`create-react-native-library` CLI tool](https://callstack.github.io/react-native-builder-bob/create).

To start creating a new library project named `my-library`, using `create-react-native-library`, run:

```bat
npx --yes create-react-native-library@latest my-library
```

You will be prompted to answer several questions about your new library. The tool supports a variety of different project types, but since our goal  here is to create a new project that we can add a Windows native module to, we recommend the following options:

1. **Type:** The native code you expect to expose and the types of apps you want to support will dictate the option you select here:
    1. If you're exposing non-UI functionality (i.e. new native functions), choose either:
        1. `Turbo module` (i.e. `--template module-new`) if you only want to support New Architecture apps, or
        1. `Turbo module with backward compat` (i.e. `--template module-mixed`) if you want to support both New and Old Architecture apps
    1. If you're exposing UI functionality (i.e. new native views), choose either:
        1. `Fabric view` (i.e. `--template view-new`) if you only want to support New Architecture apps, or
        1. `Fabric view with backward compat` (i.e. `--template view-mixed`) if you want to support both New and Old Architecture apps
    1. If you want to expose both UI and non-UI functionality, you have two options:
        1. Create two separate libraries, one for UI, one for non-UI
        1. Just pick one option to start and expect you'll need to do some more manual work to add the other later. A library can easily support both UI and non-UI, you just won't have any sample code for the option you don't choose first.
1. **Languages:** This choice only impacts the language(s) you will use to implement Android and iOS native code.
    > **Note:** If you pick `C++ for Android & iOS` with the intention of also sharing C++ code with Windows, there's some manual work you'll have to do to include and use that shared C++ code in your RNW library implementation.

1. **Example:** Vanilla (i.e. `--example vanilla`)

> **Note:** Your experience may vary if you choose different options than those recommended above. For more information on all of the options that `create-react-native-library` provides, see [`create-react-native-library` CLI documentation](https://callstack.github.io/react-native-builder-bob/create).

After you've created your base React Native library, navigate to the folder you created and run: 

```cmd
yarn install
```

Now you should be ready to continue on to [Add Windows support to a native module library](#add-windows-support-to-a-native-module-library).

## Add Windows support to a native module library

Once you have a base React Native library (whether one you created or you found) the next step is to add and initialize React Native for Windows support.

### Add `react-native-windows` as a dependency

> Properly defining your NPM dependencies is an essential part of creating and maintaining a React Native library, especially one that supports multiple platforms. The instructions here represent the minimum steps required to start targeting `react-native-windows`. If you're adding Windows support to a library you don't own, you'll need to work with the library owners to make sure any changes made to `package.json` are appropriate.
>
> For more information on how NPM dependencies work, see [Specifying `dependencies` and `devDependencies` in a `package.json` file](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).

With React Native for Windows app projects you usually add a direct dependency on a version of `react-native-windows` with the same major/minor version of `react-native` that the app is using. However, most library projects are expected to work for apps targeting a range of React Native versions - as such for library projects you'll typically add both *dev* and *peer* dependencies on `react-native-windows` instead.

The dev dependency specifies the version of a package that you want to use to develop the library itself. You'll typically want to add the latest major/minor version of `react-native-windows` that matches the same major/minor version of `react-native` that the library has as a dev dependency.

So, for example, if you check the library's `package.json`, and see a `devDependency` specifying RN 0.76, you'll want to add a dev dependency for RNW 0.76. You can do this with `yarn`:

```bat
yarn add react-native-windows@^0.76.0 --dev
```

The peer dependency specifies the versions of a package the library needs or supports. If you look at your library's `package.json`, the `react-native` peer dependency you'll most likely see is `*`, meaning any version, but sometimes you'll see a more specific version range. Whatever it is, a peer dependency essentially means "I need this package (and version range), but don't download it on my behalf, I'll try to use whichever version someone else (typically the app) specifies". For RNW, you'll most likely want to add a similar peer dependency for `react-native-windows` to the existing `react-native` peer dependency.

So, for example, if you check the library's `package.json`, and see a `devDependency` specifying RN \*, you'll want to add a dev dependency for RNW \*. You can do this with `yarn`:

```bat
yarn add react-native-windows@* --peer
```

That's it, you're ready to initialize the native Windows code for the project.

> **Note:**: Many native module libraries often (claim to) support older versions of RN than RNW supports, so you may need to upgrade the library to newer versions first in order to properly support for `react-native-windows`. While it is possible to create, say, a more restrictive version range for the peer dependency (i.e. the library may claim support for `react-native@*` but you choose `react-native-windows@>=0.76.0`) you'll want to stick to the same major/minor pairing for the dev dependency to avoid unexpected behavior.

### Initialize the native Windows code for a library project

At this point you should be ready to add Windows support with the [init-windows command](init-windows-cli.md). The process is similar to adding Windows support to an app project, but you'll need to specify a library template:

```bat
npx @react-native-community/cli init-windows --template cpp-lib --overwrite
```

This adds the native code for a C++/WinRT library project.

So, the answer to *Where do I need to implement the native code so it's available at runtime?*:

You're going to implement the native code inside your native Windows library project. I.e. if your library is named `MyLib`, you'll be creating and modifying files in the `windows\MyLib\` folder of your project.

That's it, you can continue on to [Next Steps](#next-steps).

> **Note:** There are two older library templates, `old/uwp-cpp-lib` for creating C++/WinRT UWP projects and `old/uwp-cs-lib` for C# UWP projects. Both are planned for eventual deprecation and neither are recommended for initializing new projects. They should only be used by developers with specific legacy requirements.

## Next Steps

You have now created the scaffolding to build a native module or view manager. Now it's time to add the business logic to the module - follow the steps described in the [Native Modules](native-modules.md) and [View Managers](view-managers.md) documents.

## Other Tasks

Here are some other common tasks you wish to do when authoring a native module.

### Building an example app for testing

If you're implementing your native module directly within your React Native for Windows app, then your app is right there ready to test it. Alternatively, if you're implementing your native module in a separate library, it may or may not already include a example app for testing the other React Native platforms.

If such an app already exists, you can simply add Windows support to it like any other RN app by following the steps in the [Getting Started](getting-started.mdx) guide.

> **Note:** If you (or the library author) used `create-react-native-library` to create the library, then there's usually an example app already in the project's `example` folder. When you ran `init-windows --template cpp-lib` to initialize Windows support for the library, the RNW CLI will detect that `example` folder and automatically attempt to set up and initialize Windows support using `init-windows --template cpp-app` for you.

### Making your module ready for consumption in an app

If you've followed the steps above, your module should already be ready for consumption by other apps thanks to [Autolinking](native-modules-autolinking.md).

### Testing the module before it gets published

### Adding tests for your module
We are using WebdriverIO + WinAppDriver for UI testing. More details [here](https://github.com/microsoft/react-native-windows/blob/main/docs/e2e-testing.md#appium). For real world examples, check out [`react-native-webview`](https://github.com/react-native-community/react-native-webview) or [progress-view](https://github.com/react-native-community/progress-view).

### Setup CI (continuous integration) pipeline for your module

When done developing your module, it's good practice to setup a CI pipeline with automated build and tests to avoid any future regressions. See the [Setup Continuous Integration Pipeline for an RNW App](setup-ci.md) for more information.

### Documenting Your Module
Once your module is complete, update [react-native-community/directory](https://github.com/react-native-community/directory) so that its information on your native module is up to date. If you are building a native module which will be maintained by Microsoft, please update the Supported Community Modules documentation in [react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/blob/main/docs/supported-community-modules.md) with your native module's information.
