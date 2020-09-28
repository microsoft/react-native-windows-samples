---
id: native-modules-setup
title: Native Module Setup
---

> **This documentation and the underlying platform code is a work in progress.**
> **Examples (C# and C++/WinRT):**
>
> - [Native Module Sample in microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/tree/master/samples/NativeModuleSample)
> - [Sample App in microsoft/react-native-windows/packages/microsoft-reactnative-sampleapps](https://github.com/microsoft/react-native-windows/tree/master/packages/microsoft-reactnative-sampleapps)

This guide will help set you up with the Visual Studio infrastructure to author your own stand-alone native module for React Native Windows. In this document we'll be creating the scaffolding for a `MyLibrary` native module.

## Development Environment

Make sure you have installed all of the [development dependencies](rnw-dependencies.md).

## Choose your own adventure

Once your development environment has been correctly configured, you have several options about how to access native APIs. You can either:

- [Reference the APIs directly from within a React Native for Windows project](#Referencing-Windows-APIs-within-a-React-Native-for-Windows-app-project)
- [Create a new native module library that can be can be distributed separately from your app](#Creating-a-new-native-module-library-project)
- [Add Windows support to an existing community library](#adding-windows-support-to-an-existing-library)

## Referencing Windows APIs within a React Native for Windows app project

If you are only planning on adding a native module to your existing React Native Windows app, ie:

1. You followed the [Getting Started](.\getting-started.md) guide, where
1. You ran `npx react-native-windows-init` to add Windows to your project, and
1. You are just adding your native code to the app project under the `windows` folder.

Then you can simply open the Visual Studio solution in the `windows` folder and add the new files directly to the app project.

## Creating a new native module library project

The steps to create a new native module library project are:
1. Follow the official React Native instructions to create a blank native module project
1. Add Windows support to the newly created library

### Creating a blank native module project

Follow the official React Native instructions at https://reactnative.dev/docs/native-modules-setup.

```bat
npx create-react-native-module --module-name "MyLibrary" MyLibrary
cd MyLibrary
yarn install
```

Now you'll have a new native module project under `MyLibrary`. Be sure to look at the command output for further steps you'll want to do before publishing the project.

At this point, follow the steps below to add Windows support to the newly created library.

## Adding Windows support to an existing library

> The steps below are written as if you're working with the `MyLibrary` example above, in the root folder of the project. Substitute the name of the library you're actually working on where appropriate, and ensure that you're working in the appropriate root folder of the library.

### Updating your package.json

Many native module libraries (including the default library template) target older versions of `react` and `react-native` than Windows supports, so you'll need to upgrade to newer versions in order to add support for `react-native-windows`.

> Properly defining your NPM dependencies is an essential part of creating and maintaining a React Native library, especially one that supports multiple platforms. The instructions here represent the minimum steps required to start targeting `react-native-windows`. If you're adding Windows support to a library you don't own, you'll need to work with the library owners to make sure any changes made to `package.json` are appropriate.
>
> For more information on how NPM dependencies work, see [Specifying dependencies and devDependencies in a package.json file](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).

You can use the `npm info` command to find the correct versions to use. Let's assume you plan on building against the latest `canary` version of `react-native-windows`.

Use the following command to find the matching versions of `react`:

```bat
npm info react-native-windows@canary devDependencies.react
```

Take the result of that command (let's say it's `16.13.1`) and use it to upgrade the dev dependency:

```bat
yarn upgrade react@16.13.1 --dev
```

You'll need to repeat the steps for `react-native`, ie:

```bat
npm info react-native-windows@canary devDependencies.react-native
```

Again, take the result of that command (let's say it's `0.0.0-a36d9cd7e`) and use it to upgrade the dev dependency:

```bat
yarn upgrade react-native@0.0.0-a36d9cd7e --dev
```

Now you should be ready to add Windows support with `react-native-windows-init`. The process is similar to adding Windows support to an app project, but you'll need to specify `--projectType lib`:

```bat
npx react-native-windows-init --version canary --projectType lib --overwrite
```

This defaults to a C++/WinRT project. If you want to create a C# based native module project, use:

```bat
npx react-native-windows-init --version canary --projectType lib --language cs --overwrite
```

That's it, you should be able to open `windows\MyLibrary.sln` and start working on your project.

### Testing your Build

To make sure that everything is working, you'll want to try building `MyLibrary`. First you'll want to make sure you've chosen a supported platform:

1. At the top, change the `Solution Platform` to `x86` or `x64`.
1. In the `Build` menu, select `Build Solution`.

### Next Steps

You have now created the scaffolding to build a native module or view manager. Now it's time to add the business logic to the module - follow the steps described in the [Native Modules](native-modules.md) and [View Managers](view-managers.md) documents.

### Making your module ready for consumption in an app

If you've followed the steps above, your module should be ready for consumption thanks to [Autolinking](native-modules-autolinking.md).

However, there are some things you may need to check:

1. If you are writing a C++/WinRT module and have added any NuGet package dependencies, you'll see references to those packages in your vcxproj file as relative references e.g. `..\packages\...`. We need these to use the solution directory instead, so replace all mentions of `..\packages\` with `$(SolutionDir)\`.

**Example:**

```diff
-<Import Project="..\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props" Condition="Exists('..\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props')" />
+<Import Project="$(SolutionDir)\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props" Condition="Exists('$(SolutionDir)\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props')" />
```

### Testing the module before it gets published

#### Option 1: Create a new test app
1. Follow the [getting started guide](getting-started.md) to create a new React Native Windows app.
2. Run `npm i <module-local-path> --save` (e.g. `npm i D:\MyLibrary --save`) to install the local module.
3. [Link the native module](native-modules-using.md).

#### Option 2: Adding Windows support to existing sample app

If you are working on an existing module that already has iOS and Android samples, and want to add Windows support to the existing test app, follow these steps (example of WebView module test app can be found [here](https://github.com/react-native-community/react-native-webview/tree/master/example)).

1. In a different directory, follow the [getting started guide](getting-started.md) and create a new React Native Windows app.
2. Copy the `Windows` folder from the blank RNW app into the existing sample app's sample app's folder. (The RNW CLI helps create the correct project setup that you can then copy directly into the sample app.)
3. Open `sln` and `vxcproj` files and check `node_module` reference paths. Fix the paths if necessary based on how the folders are structured in native module repo ([example](https://github.com/react-native-community/react-native-webview/blob/master/example/windows/WebViewWindows.sln#L11-L42)).
4. Open the solution with Visual Studio and [link native module](native-modules-using.md).
> The project should build correctly at this point, but we still need to setup some special metro configurations for Windows in order to run the app without breaking iOS and Android bundling.

5. Add `metro.config.windows` for Windows bundling ([example](https://github.com/react-native-community/react-native-webview/blob/master/metro.config.windows.js)). Make sure the config file is at the root of the repo (see [Metro bug #588](https://github.com/facebook/metro/issues/588)).
6. In `package.json`, add a separate start command for windows and attach a special argument to tell metro to use the windows config we just created ([example](https://github.com/react-native-community/react-native-webview/blob/master/package.json#L18)).
7. Add `react-native.config.js` to parse the special argument we added ([example](https://github.com/react-native-community/react-native-webview/blob/master/react-native.config.js#L28-L33)).
8. Update JS main module path (relative path to metro projectRoot) in `App.cpp` if necessary ([example](https://github.com/react-native-community/react-native-webview/blob/master/example/windows/WebViewWindows/App.cpp#L25)).

### Adding tests for your module
We are using Appium + WinAppDriver for UI testing. More details [here](https://github.com/microsoft/react-native-windows/blob/master/docs/e2e-testing.md#appium), there's also a comprehensive [course on PluralSight](https://app.pluralsight.com/library/courses/getting-started-ui-testing-appium/table-of-contents) about Appium. For real world examples, check out [react-native-webview](https://github.com/react-native-community/react-native-webview) or [progress-view](https://github.com/react-native-community/progress-view).

### Setup CI (continuous integration) pipeline for your module

When done developing your module, it's good practice to setup a CI pipeline with automated build and tests to avoid any future regressions. There are many services available for setting up a CI pipeline. We'll use [GitHub Actions](https://docs.github.com/en/actions/getting-started-with-github-actions/about-github-actions) as an example here since it doesn't require any extra account setup if you are already hosting your code on GitHub, also the default VM image has all the tools we needed pre-installed.

The vm images supported by GitHub Actions CI/CD can be found [here](https://github.com/actions/virtual-environments#github-actions-virtual-environments), check the pre-installed tools and compare them with [React Native Windows development dependencies](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies), find the image that meets the requirments.

Next you need to create a YAML file for GitHub Actions, the basic steps are:
- Checkout code and setup the environment
```yaml
    - uses: actions/checkout@v2
      name: Checkout Code

    - name: Setup Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '12.9.1'

    - name: Setup MSBuild
      uses: microsoft/setup-msbuild@v1.0.0
      with:
        vs-version: 16.5

    - name: Setup NuGet
      uses: NuGet/setup-nuget@v1.0.2

    - name: Check node modules cache
      uses: actions/cache@v1
      id: yarn-cache
      with:
        path: ./node_modules
        key: ${{ runner.os }}-yarn-${{ hashFiles('yarn.lock') }}
        restore-keys: |
          ${{ runner.os }}-yarn-

    - name: Install node modules
      if: steps.yarn-cache.outputs.cache-hit != 'true'
      run: yarn --pure-lockfile

    - name: yarn build
      if: steps.yarn-cache.outputs.cache-hit == 'true'
      run: |
        yarn build
        yarn tsc
```
- Build and run the project
```yaml
    - name: Run Windows x64 release
      run: npx react-native run-windows --arch x64 --release --no-packager --logging
```
- Run tests
```yaml
    - name: Start Appium server
      shell: powershell
      run: Start-Process PowerShell -ArgumentList "yarn appium"

    - name: Run tests
      run: yarn test:windows
```
Check out the full [react-native-webview example](https://github.com/react-native-community/react-native-webview/blob/master/.github/workflows/windows-ci.yml) as well as their [official example](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/) for more info.

Add the YAML file to `.github\workflows\` and then commit. To know more about the YAML syntax, check out [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions).

> GitHub Actions should be enabled by default, if it's not enabled for some reason you can go to Settings->Actions tab of the repo to enable it (requires owner access).

Now push your changes and the CI pipeline should be up and running.
