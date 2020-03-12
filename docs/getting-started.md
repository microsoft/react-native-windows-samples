---
id: getting-started
title: Getting Started
---

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.invisible {
  visibility: hidden;
  display: none;
}
.visible {
  visibility: visible;
}
.toggler {
    margin-bottom: 1em;
}
.toggler ul {
    width: 100%;
    display: inline-block;
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-bottom: 1px solid #6d6d6d;
    cursor: default;
}
.toggleActive{
  font-weight: 700;
}
.toggleInactive{
  font-weight: 400;
}
</style>
</head>
<body>

<script>
function displayTab(tabType) {
  if (tabType === 'stable') {
    document.getElementById("stableTab").className = "toggleActive";
    document.getElementById("betaTab").className = "toggleInactive";
    document.getElementById("beta").className = "invisible";
    document.getElementById("stable").className = "visible";
  }
  else {
    document.getElementById("stableTab").className = "toggleInactive";
    document.getElementById("betaTab").className = "toggleActive";
    document.getElementById("beta").className = "visible";
    document.getElementById("stable").className = "invisible";
  }
}
</script>

This guide will help you get started on setting up your very first React Native for Windows app.

If you're looking to build directly from the repo or you want to make contributions to the react-native-windows, check out the guide for [building the react-native-windows repo](building-rnw.md).

For information around how to set up React Native, see the [React Native Getting Started Guide](http://facebook.github.io/react-native/docs/getting-started.html).

<div>
  <div class="toggler">
    <ul role="tablist">
      <li aria-selected="true" role="tab" tabindex="0" id="stableTab" class="toggleActive" onclick="displayTab('stable')"> Stable </li>
      <li aria-selected="false" role="tab" tabindex="0" id="betaTab" onclick="displayTab('beta')"> Beta </li>
    </ul>    
  </div>
  <div id="stable">
The latest and recommended release to use.

## Install React Native for Windows

Remember to call this ``react-native init`` in the directory you want your project to live.

```
npx react-native init <project name> --version ^0.60.0
```

### Navigate into this newly created directory

Once your project has been initialized, React Native will have created a new sub directory where all your generated files live.

```
cd <project name>
```

### Install the React Native Windows CLI

Now you'll want to install all the Windows React Native [command line instructions](https://www.npmjs.com/package/rnpm-plugin-windows).

```
yarn add rnpm-plugin-windows
```

>**If using NPM**
>
>```npm install --save rnpm-plugin-windows```

### Install the Windows extension

Lastly, install the React Native for Windows packages.

```
npx react-native windows
```

  </div>
  <div id="beta" class="invisible">

>The newest release guaranteed to get the features and content first; however, not all bugs or framework quirks have been fixed.
>
>Once Beta has been completely vetted for bugs and has been out long enough to be considered fit for mass consumption, it will become the new Stable.

## Install React Native for Windows (beta)

Remember to call this ``react-native init`` in the directory you want your project to live.

```
npx react-native init <project name> --version ^0.61.5
```

### Navigate into this newly created directory

Once your project has been initialized, React Native will have created a new sub directory where all your generated files live.

```
cd <project name>
```

### Install the React Native Windows CLI

Now you'll want to install all the Windows React Native [command line instructions](https://www.npmjs.com/package/rnpm-plugin-windows).

```
yarn add rnpm-plugin-windows
```

>**If using NPM**
>
>```npm install --save rnpm-plugin-windows```

### Install the Windows extension

Lastly, install the React Native for Windows packages.

```
npx react-native windows --template beta
```

  </div>  
</div>

## Running a React Native Windows App

_Note: Make sure a browser is launched and running before running a React Native Windows app._

- Without Visual Studio

  :exclamation: **We are seeing issues with msbuild with the below command. This is being investigated in [Issue 3263](https://github.com/microsoft/react-native-windows/issues/3263). Until this is fixed, please use the With Visual Studio option below.**

  In your React Native Windows project directory, run:

  ```
  npx react-native run-windows
  ```

  A new Command Prompt window will open with the React packager as well as a `react-native-windows` app. This step may take a while during first run since it involves building the entire project and all dependencies. You can now start developing! :tada:

- With Visual Studio

  - Open the solution file in the application folder in Visual Studio (e.g., `AwesomeProject/windows/AwesomeProject.sln`)
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
- Select the DebugBundle or ReleaseBundle configuration from the Configuration Manager dropdown. DebugBundle is similar to Debug in that it adds more debugging info to the native code. Use this if you want to debug the native code. ReleaseBundle is similar to Release, you'll typically use this when producing a final package to publish to the store.
- Build the solution. You can now launch without first launching Metro.
- If you want to build an appx package to share or publish, use the Project => Publish => Create App Packages... option.

</body>
</html>
