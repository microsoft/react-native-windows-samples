---
id: version-0.62-rnw-dependencies
title: System Requirements
original_id: rnw-dependencies
---

# Windows Development Dependencies
You can run React-Native for Windows apps only on Windows 10 devices with Windows version: 10.0.16299.0 (aka 1709, aka Redstone 3, aka Fall Creators Update) or higher. Some features may not work on all versions. See [Windows 10 Compatibility](win10-compat.md) for version support details.

To develop React-Native for Windows apps, you need to install several dependencies.

### Script to check and install all dependencies
To check or install dependencies, run the script [`rnw-dependencies.ps1`](https://aka.ms/rnw-vs2019-deps.ps1) in an elevated PowerShell window.

**Run this command:**
`Start-Process -Verb RunAs powershell -ArgumentList @("-command", "iex ((New-Object System.Net.WebClient).DownloadString('https://aka.ms/rnw-vs2019-deps.ps1'))")`

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
  ```
  choco install nodejs.install --version=12.9.1
  ```
  - Directly from [Node.js](https://nodejs.org/en/download)
  - By selecting the "Node.js development support" component in the Visual Studio 2019 installer (above)
  > For both of the non-chocolatey installations, ensure that you are installing version 12.9.1 as that is the recommended version when building React Native Windows apps.

- Install [Chrome](https://www.google.com/chrome/) (_optional_, but needed for JS debugging)
- Install [Yarn](https://yarnpkg.com/en/docs/install) (_optional_ if only consuming react-native-windows, but **required** to contribute to react-native-windows)

## Troubleshooting

- If after running the app, the packager does not update (or) app does not show React Native content - close the packager command prompt window and the app, make sure browser is open, run `yarn start` and run the app from Visual Studio again.
- If you get a red error box in your UWP app window with the error message : `ERROR: Instance failed to start. A connection with the server cannot be established`, make sure you have the packager running using `yarn start` and run the app again.
