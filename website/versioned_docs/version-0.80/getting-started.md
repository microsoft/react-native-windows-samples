---
id: version-0.80-getting-started
title: Get Started with Windows
original_id: getting-started
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

This guide will help you get started on setting up your very first React Native for Windows app.

Make sure you have installed all of the [development dependencies](rnw-dependencies.md).

For information around how to set up React Native, see the [React Native Getting Started Guide](https://reactnative.dev/docs/getting-started).

## Create a new React Native project

Call the following from the place where you want your project directory to live:

<!-- Note, make sure both `@react-native-community/cli@ABC` and `--version XYZ` are pointing to the correct NPM tags in the command below. -->

<!-- 1. For the next version (i.e. in docs/getting-started.md) use `next` for the CLI and `nightly` for the RN version -->
<!-- 2. For stable versions in versioned_docs use `latest` for the CLI and the semantic version, i.e. `^0.73.0` for the RN version -->

<!-- See https://www.npmjs.com/package/@react-native-community/cli?activeTab=versions for the CLI version tags. -->
<!-- See https://www.npmjs.com/package/react-native?activeTab=versions for the RN version tags. -->

```bat
npx --yes @react-native-community/cli@latest init <projectName> --version 0.80.0
```

### Navigate into this newly created directory

The command will create your project in a new sub-directory, which you must enter before continuing:

```bat
cd <projectName>
```

### Add React Native Windows to your project's dependencies

<!-- Note, make sure `version` is pointing to the correct react-native-windows NPM tag in the command below. -->

<!-- 1. For the next version (i.e. in docs/getting-started.md) use `canary` -->
<!-- 2. For other versions in versioned_docs use the version in the format `^0.XY.0` -->

Next you'll want to add `react-native-windows` as a dependency:

<!--DOCUSAURUS_CODE_TABS-->

<!--Using Yarn (Recommended)-->

```bat
yarn add react-native-windows@^0.80.0
```

<!--Using NPM-->

```bat
npm install --save react-native-windows@^0.80.0
```

<!--END_DOCUSAURUS_CODE_TABS-->

### Initialize the React Native Windows native code and projects

Lastly, initialize the React Native for Windows application with the [init-windows command](init-windows-cli.md):

```bat
npx react-native init-windows --overwrite
```

> **Architecture Note:** The default React Native for Windows template for *new* projects targets [React Native's New Architecture](https://reactnative.dev/architecture/landing-page). For more information, including options for continuing to use the Old Architecture, see [New vs. Old Architecture](new-architecture.md). 

> **Metro Note:** React Native Windows overwrites the app project's `metro.config.js` file to enable Windows support. If you are starting a new project, overwriting React Native's default `metro.config.js` should have no impact. However, if you have previously modified your `metro.config.js` file, please make sure to back up and re-apply your modifications after adding React Native Windows.

## Running a React Native Windows App

> Make sure a browser is launched and running before running a React Native Windows app.
> Also ensure your system meets all the [requirements](rnw-dependencies.md) to build a Windows app as well.

- Without Using Visual Studio

  In your React Native Windows project directory, run the [run-windows command](run-windows-cli.md):

  ```bat
  npx react-native run-windows
  ```

  A new Command Prompt window will open with the React packager as well as your React Native for Windows app. This step may take a while during first run since it involves building the entire project and all dependencies. You can now start developing! :tada:

- Using Visual Studio

  - From the root of the project directory, run the [autolink-windows command](autolink-windows-cli.md), which will automatically link your app's dependencies:
    ```bat
    npx react-native autolink-windows
    ```
  - Open the solution file in the application folder in Visual Studio (e.g., `AwesomeProject/windows/AwesomeProject.sln` if you used `AwesomeProject` as `<projectName>`)
  - Select the `Debug` configuration and the `x64` platform from the combo box controls to the left of the `Run` button and underneath the `Team` and `Tools` menu item.
  - Run `yarn start` (or `npm start`) from your project directory, and wait for the React Native packager to report success.
  - Click the `Run` button to the right of the platform combo box control in VS, or select the `Debug`->`Start without Debugging` menu item. You now see your new app and Chrome should have loaded `http://localhost:8081/debugger-ui/` in a new tab. Press `F12` or `Ctrl+Shift+I` in Chrome to open its Developer Tools. :tada:

- With VS Code
  - Open your applications folder in VS Code.
  - Install the [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) plugin for VS Code.
  - Create a new file in the applications root directory, `.vscode/launch.json` and paste the following configuration:
  ```json
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Debug Windows",
        "cwd": "${workspaceFolder}",
        "type": "reactnative",
        "request": "launch",
        "platform": "windows"
      }
    ]
  }
  ```
  - Press `F5` or navigate to the debug menu (alternatively press `Ctrl+Shift+D`) and in the Debug drop-down select "Debug Windows" and press the green arrow to run the application.

## Authoring Native Modules

See [Native Platform: Overview](native-platform.md).

## Building a standalone React Native Windows App

Follow these steps to build a version of your app that you can install or publish to the store. This version will package your bundle and assets into the APPX package so you don't need to run Metro.

- Open the solution in Visual Studio
- Select the Release configuration from the Configuration Manager drop-down.
- Build the solution. You can now launch without first launching Metro.
- If you want to build an APPX package to share or publish, use the **Project** > **Publish** > **Create App Packages...** option.

> The Debug configuration uses the Web Debugger by default, which means the application's JavaScript code runs in Chrome.<br>
> If you're getting different runtime behavior between the Release and Debug configurations, consider disabling the `UseWebDebugger` setting in [`App.cpp`](https://github.com/microsoft/react-native-windows/blob/6b415659aa017dbc41e3f28e817fb768a8e80435/vnext/template/cpp-app/src/App.cpp#L30) or [`App.xaml.cs`](https://github.com/microsoft/react-native-windows/blob/6b415659aa017dbc41e3f28e817fb768a8e80435/vnext/template/cs-app/src/App.xaml.cs#L20) to get the same behavior in the Debug configuration.

See also this article for additional details: https://techcommunity.microsoft.com/t5/windows-dev-appconsult/getting-started-with-react-native-for-windows/ba-p/912093#
