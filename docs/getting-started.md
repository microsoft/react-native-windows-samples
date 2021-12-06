---
id: getting-started
title: Get Started with Windows
---

This guide will help you get started on setting up your very first React Native for Windows app.

Make sure you have installed all of the [development dependencies](rnw-dependencies.md).

For information around how to set up React Native, see the [React Native Getting Started Guide](https://reactnative.dev/docs/getting-started).

## Install React Native for Windows

Remember to call `react-native init` from the place you want your project directory to live.

```bat
npx react-native init <projectName> --template react-native@^0.66.0
```
>To create TypeScript template, run `npx react-native init <projectName> --template react-native-template-typescript`.<br><br>

### Navigate into this newly created directory

Once your project has been initialized, React Native will have created a new sub directory where all your generated files live.

```bat
cd projectName
```

### Install the Windows extension

Lastly, install the React Native for Windows packages.

```bat
npx react-native-windows-init --overwrite
```

> The --overwrite flag copies a custom `metro.config.js` file. If you are starting a new app, this should have no impact. If you are adding Windows to your existing app and you have modified the `metro.config.js` file, please back up your changes, run the command and copy over to take effect.

Here are the options that `react-native-windows-init` takes:
| Option          | Input Type                                  | Description                                      |
|-----------------|---------------------------------------------|--------------------------------------------------|
| `--help`        | boolean                                     | Show help.                                       |
| `--version`     | string                                      | The version of react-native-windows to use.      |
| `--namespace`   | string                                      | The native project namespace.                    | 
| `--verbose`     | boolean                                     | Enables logging.                                 |
| `--language`    | string ["`cs`","`cpp`"] [default: "`cpp`"]  | Which language the app is written in.            |
| `--projectType` | string ["`app`","`lib`"] [default: "`app`"] | The type of project to initialize.               |
| `--overwrite`   | boolean                                     | Overwrite any existing files without prompting.  |
| `--useWinUI3`   | boolean                                     | Targets WinUI 3.0 (Preview) instead of UWP XAML. |
| `--useHermes`   | boolean                                     | Use Hermes instead of Chakra as the JS engine (supported on 0.64+ for C++ projects) |
| `--no-telemetry`| boolean                                     | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |

This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See the `react-native-windows-init` README for more details.

## Running a React Native Windows App

> Make sure a browser is launched and running before running a React Native Windows app.
> Also ensure your system meets all the [requirements](rnw-dependencies.md) to build a Windows app as well.

- Without Using Visual Studio

  In your React Native Windows project directory, run:

  ```bat
  npx react-native run-windows
  ```

Here are the options that `react-native run-windows` takes:
| Option                | Input Type | Description                                      |
|-----------------------|------------|--------------------------------------------------|
| `--release`           | boolean    | Specifies a Release build                        |
| `--root`              | string     | Override the root directory for the windows build which contains the windows folder. (default: `E:\\test63`) |
| `--arch`              | string     | The build architecture (`ARM64`, `x86`, `x64`). defaults to system architecture |
| `--singleproc`        | boolean    | Disables multi-proc build                        |
| `--emulator`          | boolean    | Deploys the app to an emulator                   |
| `--device`            | boolean    | Deploys the app to a connected device            |
| `--target`            | string     | Deploys the app to the specified `GUID` for a device |
| `--remote-debugging`  | boolean    | Deploys the app in remote debugging mode.        |
| `--logging`           | boolean    | Enables logging                                  |
| `--no-packager`       | boolean    | Do not launch packager while building            |
| `--bundle`            | boolean    | Enable Bundle configuration and it would be `ReleaseBundle`/`DebugBundle` other than `Release`/`Debug` |
| `--no-launch`         | boolean    | Do not launch the app after deployment           |
| `--no-autolink`       | boolean    | Do not run autolinking                           |
| `--no-build`          | boolean    | Do not build the solution                        |
| `--no-deploy`         | boolean    | Do not deploy the app                            |
| `--deploy-from-layout`| boolean    | Force deploy from layout, even in release builds |
| `--sln`               | string     | Override the app solution file determined by 'react-native config', e.g. `windows\myApp.sln` |
| `--proj`              | string     | Override the app project file determined by 'react-native config', e.g. `windows\myApp\myApp.vcxproj` |
| `--msbuildprops`      | string     | Comma separated props to pass to MSBuild, e.g. `prop1=value1,prop2=value2` |
| `--buildLogDirectory` | string     | Optional directory where MSBuild log files should be stored |
| `--info`              | boolean    | Dump environment information                     |
| `--direct-debugging`  | number     | Enable direct debugging on specified port        |
| `--no-telemetry`      | boolean    | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |
| `-h`, `--help`        | boolean    | output usage information                         |

  A new Command Prompt window will open with the React packager as well as a `react-native-windows` app. This step may take a while during first run since it involves building the entire project and all dependencies. You can now start developing! :tada:

  This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See the `@react-native-windows/cli` [README](https://github.com/microsoft/react-native-windows/edit/main/packages/@react-native-windows/cli/README.md) for more details.
  
- Using Visual Studio

  - From the root of the project directory, run the following script which will automatically link your app's dependencies:
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

See [Native Modules and React Native Windows](native-modules.md).

## Building a standalone React Native Windows App

Follow these steps to build a version of your app that you can install or publish to the store. This version will package your bundle and assets into the APPX package so you don't need to run Metro.

- Open the solution in Visual Studio
- Select the Release configuration from the Configuration Manager drop-down.
- Build the solution. You can now launch without first launching Metro.
- If you want to build an APPX package to share or publish, use the **Project** > **Publish** > **Create App Packages...** option.

> The Debug configuration uses the Web Debugger by default, which means the application's JavaScript code runs in Chrome.<br>
> If you're getting different runtime behavior between the Release and Debug configurations, consider disabling the `UseWebDebugger` setting in [`App.cpp`](https://github.com/microsoft/react-native-windows/blob/6b415659aa017dbc41e3f28e817fb768a8e80435/vnext/template/cpp-app/src/App.cpp#L30) or [`App.xaml.cs`](https://github.com/microsoft/react-native-windows/blob/6b415659aa017dbc41e3f28e817fb768a8e80435/vnext/template/cs-app/src/App.xaml.cs#L20) to get the same behavior in the Debug configuration.

See also this article for additional details: https://techcommunity.microsoft.com/t5/windows-dev-appconsult/getting-started-with-react-native-for-windows/ba-p/912093#
</body>
</html>
