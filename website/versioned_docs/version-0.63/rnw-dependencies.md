---
id: version-0.63-rnw-dependencies
title: System Requirements
original_id: rnw-dependencies
---

# Windows Development Dependencies
You can run React-Native for Windows apps only on Windows 10 devices with Windows version: 10.0.16299.0 (aka 1709, aka Redstone 3, aka Fall Creators Update) or higher. Some features may not work on all versions. See [Windows 10 Compatibility](win10-compat.md) for version support details.

To develop React-Native for Windows apps, you need to install several dependencies.

### Script to check and install all dependencies
To check or install dependencies, run the script [rnw-dependencies.ps1](https://github.com/microsoft/react-native-windows/blob/master/vnext/Scripts/rnw-dependencies.ps1) in an elevated PowerShell window.

**Run this command:**
Start an **elevated** PowerShell window and run:
<html>
<body>
  <div>
    <div style="padding: 10px; font-family: monospace; font-size: 9pt; display: inline-block; width: 90%; background: #dddddd; border-radius: 6px;" id="rnwdepCmd">Set-ExecutionPolicy Unrestricted -Scope Process -Force; iex (New-Object System.Net.WebClient).DownloadString('<font color="#2020cc">https://raw.githubusercontent.com/microsoft/react-native-windows/master/vnext/Scripts/rnw-dependencies.ps1</font>')</div>
    <inline style="font-size: 24pt; cursor: pointer" onClick="javascript:navigator.clipboard.writeText(document.getElementById('rnwdepCmd').innerText)">📋</inline>
  </div>
</body>
</html>

### Manual setup
Alternatively, you can setup your environment manually:
- Ensure Developer Mode is turned ON in Windows Settings App.
- Install [Visual Studio 2019](https://www.visualstudio.com/downloads) **with the following options checked**:
  - Workloads
    - Universal Windows Platform development
    - Desktop development with C++
  - Individual Components
    - Development activities
      - Node.js development support (optional)

## React Native Development Dependencies

- Install the [standard React Native dependencies](https://reactnative.dev/docs/getting-started#node-python2-jdk)
- Install [Node.js](https://nodejs.org) via one of the following methods:
  - Using [Chocolatey](https://chocolatey.org/) (_React Native recommended_). To use chocolatey, from an elevated Command Prompt, run:
  ```bat
  choco install nodejs.install --version=12.9.1
  ```
  - Directly from [NodeJs](https://nodejs.org/en/download/)
  - By selecting the "Node.js development support" component in the Visual Studio 2019 installer (above)
  > For both of the non-choco installations, ensure that you are installing version 12.9.1 as that is the recommended version when building React Native Windows apps.

- Install [Chrome](https://www.google.com/chrome/) (_optional_, but needed for JS debugging)
- Install [Yarn](https://yarnpkg.com/en/docs/install) (_optional_ if only consuming react-native-windows, but **required** to contribute to react-native-windows)

## Troubleshooting

- If after running the app, the packager does not update (or) app does not show React Native content - close the packager command prompt window and the app, make sure browser is open, run `yarn start` and run the app from Visual Studio again.
- If you get a red error box in your UWP app window with the error message : `ERROR: Instance failed to start. A connection with the server cannot be established`, make sure you have the packager running using `yarn start` and run the app again.
