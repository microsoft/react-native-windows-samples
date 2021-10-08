---
id: version-0.64-rnw-dependencies
title: System Requirements
original_id: rnw-dependencies
---

You can run React-Native for Windows apps only on Windows 10 devices with Windows version: 10.0.16299.0 (aka 1709, aka Redstone 3, aka Fall Creators Update) or higher. Some features may not work on all versions. See [Windows 10 Compatibility](win10-compat.md) for version support details.

To develop React-Native for Windows apps, you need to install several dependencies.

## Install the development dependencies
To check or install dependencies, run the script [`rnw-dependencies.ps1`](https://aka.ms/rnw-deps.ps1) in an elevated PowerShell window.

**Run this command:**
Start an **elevated** PowerShell window and run:

```powershell
Set-ExecutionPolicy Unrestricted -Scope Process -Force;
iex (New-Object System.Net.WebClient).DownloadString('https://aka.ms/rnw-deps.ps1')
```

<details>
<summary>Manual setup instructions</summary>
> The recommended way is to use the script above as the information in this manual section is likely to get out of date

Alternatively, you can setup your environment manually:
- Ensure Developer Mode is turned ON in Windows Settings App.
- Install [Visual Studio 2019 (version 16.5 or greater)](https://www.visualstudio.com/downloads) **with the following options checked**:
  - Workloads
    - Universal Windows Platform development
      - Include `C++ (v142) Universal Windows Platform tools` (under 'Optional')
    - Desktop development with C++
    - .NET Desktop development
  - Individual Components
    - Development activities
      - Node.js development support (optional)

You will also need to ensure that certain settings are enabled:
- Long path support
- Developer mode enabled

#### React Native Development Dependencies

- Install the [standard React Native dependencies](https://reactnative.dev/docs/environment-setup)
- Install [Node.js](https://nodejs.org) via one of the following methods:
  - Using [Chocolatey](https://chocolatey.org/) (_React Native recommended_). To use chocolatey, from an elevated Command Prompt, run:
  ```bat
  choco install nodejs-lts
  ```
  - Directly from [Node.js](https://nodejs.org/en/download/)
  - By selecting the "Node.js development support" component in the Visual Studio 2019 installer (above)

- Install [Chrome](https://www.google.com/chrome/) (_optional_, but needed for JS debugging)
- Install [Yarn](https://yarnpkg.com/en/docs/install) (_optional_ if only consuming react-native-windows, but **required** to contribute to react-native-windows)

</details>

### Troubleshooting

- If after running the app, the packager does not update (or) app does not show React Native content - close the packager command prompt window and the app, make sure browser is open, run `yarn start` and run the app from Visual Studio again.
- If you get a red error box in your UWP app window with the error message : `ERROR: Instance failed to start. A connection with the server cannot be established`, make sure you have the packager running using `yarn start` and run the app again.
