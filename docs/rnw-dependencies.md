---
id: rnw-dependencies
title: System Requirements
---

You can run React Native for Windows apps only on:

- All Windows 11 devices
- Windows 10 devices with Windows version: 10.0.16299.0 (aka 1709, aka Redstone 3, aka Fall Creators Update) or higher
  Some features may not work on all versions. See [Windows 10 Compatibility](win10-compat.md) for version support details.

To develop React-Native for Windows apps, you need to install several dependencies.

## Install the development dependencies
To check or install dependencies, run the script [`rnw-dependencies.ps1`](https://aka.ms/rnw-vs2022-deps.ps1) in an elevated PowerShell window.

**Run this command:**
Start an **elevated** PowerShell window and run:

```powershell
Set-ExecutionPolicy Unrestricted -Scope Process -Force;
iex (New-Object System.Net.WebClient).DownloadString('https://aka.ms/rnw-vs2022-deps.ps1')
```

<details>
<summary>Manual setup instructions</summary>

> The recommended way is to use the script above as the information in this manual section is likely to get out of date

Alternatively, you can setup your environment manually:
- Ensure [Developer Mode](https://learn.microsoft.com/en-us/windows/apps/get-started/enable-your-device-for-development) is turned ON in Windows Settings App.
- It is _highly_ recommended to update the Windows system.
- Install the latest version of [Visual Studio 2022](https://www.visualstudio.com/downloads) **with the following options checked**:
  - **Workloads**
    - `Node.js development`, or one of the following alternatives:
      - Install from **Individual Components**:
        - Development activities
          - Node.js development support
      - Install Node.js separately, see below for some options
    - `.NET Desktop development`
    - `Desktop development with C++`
      - Include `MSVC v143 - VS 2022 C++ x64/x86 build tools (Latest)` (check under 'Optional')
    - `Universal Windows Platform development`
      - Include `C++ (v143) Universal Windows Platform tools` (check under 'Optional')
  - **Individual Components**
    - Include `Windows 10 SDK (10.0.19041.0)` (target OS version from [this table](win10-compat.md#react-native-app-supported-os-versions))
    - Include `MSVC v143 - VS 2022 C++ ARM64 build tools (Latest)` (to target ARM64 devices)
- [Enable Long Paths in Windows 10, Version 1607, and Later](https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=registry#enable-long-paths-in-windows-10-version-1607-and-later).
- Install the latest version of the [.NET 6.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

Options to install [Node.js](https://nodejs.org) separately:
  - Using [Chocolatey](https://chocolatey.org/) (_React Native recommended_). To use chocolatey, from an elevated Command Prompt, run:
  ```bat
  choco install nodejs-lts
  ```
  - Using [another package manager](https://nodejs.org/en/download/package-manager/) such as [Scoop](https://scoop.sh/) or [Node Version Switcher (nvs)](https://github.com/jasongin/nvs)
  - Directly from [Node.js](https://nodejs.org/en/download/)

Optional steps that are _highly recommended_:

- Install [Yarn](https://yarnpkg.com/en/docs/install) (**required** to contribute to react-native-windows)
- Install `git` using a method such as:
  - Using a package manager such as [Chocolatey](https://chocolatey.org/) or [Scoop](https://scoop.sh/)
  - Install [git for Windows](https://gitforwindows.org/)
  - Install [GitHub Desktop](https://desktop.github.com/)

</details>

### Troubleshooting

- If after running the app, the packager does not update (or) app does not show React Native content - close the packager command prompt window and the app, make sure browser is open, run `yarn start` and run the app from Visual Studio again.
- If you get a red error box in your UWP app window with the error message : `ERROR: Instance failed to start. A connection with the server cannot be established`, make sure you have the packager running using `yarn start` and run the app again.
