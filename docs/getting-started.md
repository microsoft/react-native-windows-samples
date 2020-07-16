---
id: getting-started
title: Get Started with Windows
---

This guide will help you get started on setting up your very first React Native for Windows app.

Make sure you have installed all of the [development dependencies](rnw-dependencies.md).

For information around how to set up React Native, see the [React Native Getting Started Guide](https://reactnative.dev/docs/getting-started).

## Install React Native for Windows

Remember to call `react-native init` from the place you want your project directory to live.

```
npx react-native init <projectName> --template react-native@^0.62.2
```
>To create TypeScript template, run `npx react-native init <projectName> --template react-native-template-typescript@6.4.*`.<br><br>
> If you've installed react native globally in the past, via `npm install -g react-native`, and are having issues with the new instructions, try adding `--ignore-existing` to your npx command:<br>
> `npx --ignore-existing react-native init <projectName> --template react-native@^0.62.2` instead.

### Navigate into this newly created directory

Once your project has been initialized, React Native will have created a new sub directory where all your generated files live.

```
cd <projectName>
```

### Install the Windows extension

Lastly, install the React Native for Windows packages.

```
npx react-native-windows-init --overwrite
```

> The --overwrite flag is a temporary measure that ensures the correct files are copied to metro.config.js for the metro bundler to work with Windows. If you are starting a new app, this should have no impact. If you are adding Windows to your existing app and you have modified the metro.config.js file, please back up your changes, run the command and copy over to take effect. We are tracking [this issue here](https://github.com/microsoft/react-native-windows/issues/4698).

Here are the options that `react-native-windows-init` takes:
```none
Options:
  --help       Show help                                               [boolean]
  --version    The version of react-native-windows to use.              [string]
  --namespace  The native project namespace.                            [string]
  --verbose    Enables logging.                                        [boolean]
  --language   Which language the app is written in.
                                [string] [choices: "cs", "cpp"] [default: "cpp"]
  --overwrite  Overwrite any existing files without prompting          [boolean]
  --useWinUI3  Targets WinUI 3.0 Alpha instead of UWP XAML             [boolean]
  ```

## Running a React Native Windows App

> Make sure a browser is launched and running before running a React Native Windows app.
> Also ensure your system meets all the [requirements](rnw-dependencies.md) to build a Windows app as well.

- Without Using Visual Studio

  In your React Native Windows project directory, run:

  ```
  npx react-native run-windows
  ```

  A new Command Prompt window will open with the React packager as well as a `react-native-windows` app. This step may take a while during first run since it involves building the entire project and all dependencies. You can now start developing! :tada:

- Using Visual Studio

  - Open the solution file in the application folder in Visual Studio (e.g., `AwesomeProject/windows/AwesomeProject.sln` if you used `AwesomeProject` as `<projectName>`)
  - Select the `Debug` configuration and the `x64` platform from the combo box controls to the left of the `Run` button and underneath the `Team` and `Tools` menu item.
  - Run `yarn start` from your project directory, and wait for the React Native packager to report success.
  - Click the `Run` button to the right of the platform combo box control in VS, or select the `Debug`->`Start without Debugging` menu item. You now see your new app and Chrome should have loaded `http://localhost:8081/debugger-ui/` in a new tab. Press `F12` or `Ctrl+Shift+I` in Chrome to open its Developer Tools. :tada:

- With VS Code
  - Open your applications folder in VS Code.
  - Install the [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) plugin for VS Code.
  - Create a new file in the applications root directory, `.vscode/launch.json` and paste the following configuration:
  ```
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
  - Press `F5` or navigate to the debug menu (alternatively press `Ctrl+Shift+D`) and in the Debug dropdown select "Debug Windows" and press the green arrow to run the application.

## Authoring Native Modules

See [Native Modules and React Native Windows](native-modules.md).

## Building a standalone React Native Windows App

Follow these steps to build a version of your app that you can install or publish to the store. This version will package your bundle and assets into the appx package so you don't need to run Metro.

- Open the solution in Visual Studio
- Select the Release configuration from the Configuration Manager dropdown.
- Build the solution. You can now launch without first launching Metro.
- If you want to build an appx package to share or publish, use the Project => Publish => Create App Packages... option.

See also this article for additional details: https://techcommunity.microsoft.com/t5/windows-dev-appconsult/getting-started-with-react-native-for-windows/ba-p/912093#
</body>
</html>
