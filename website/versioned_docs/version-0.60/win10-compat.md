---
id: version-0.60-win10-compat
title: Windows OS Compatibility
original_id: win10-compat
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

React Native for Windows apps require the **Windows 10 May 2019 Update** (i.e. version 1903, build 10.18362.0) or higher to run.

> **Note:** Old Architecture apps only require the **Windows 10 October 2018 Update** (i.e. version 1809, Build 10.0.17763.0) or higher to run. For more information on React Native architectures in React Native for Windows, see [New vs. Old Architecture](new-architecture.md).

## Supported OS Versions

The following table captures the default versions of Windows that a React Native for Windows app supports. The "Target OS" is the version of the SDK that the app is compiled against, and the "Minimum OS" is the lowest version of Windows that the app will run on.

| React Native Windows | Target OS Version | Minimum OS Version |
| :--: | :-: | :-: |
| 0.76+ | **Windows 11 2022 Update**<br>Version 22H2 ; Build 10.0.22621.0 | New Arch: **Windows 10 May 2019 Update**<br>Version 1903 ; Build 10.0.18362.0<br><br>Old Arch: **Windows 10 October 2018 Update**<br>Version 1809 ; Build 10.0.17763.0 |
| 0.75 | **Windows 11 2022 Update**<br>Version 22H2 ; Build 10.0.22621.0 | **Windows 10 October 2018 Update**<br>Version 1809 ; Build 10.0.17763.0 |
| 0.72 - 0.74 | **Windows 10 May 2020 Update**<br>Version 2004 ; Build 10.0.19041.0 | **Windows 10 October 2018 Update**<br>Version 1809 ; Build 10.0.17763.0 |

> **Note:** To override the default SDK versions, see [Customizing SDK versions](customizing-SDK-versions.md).

## Backwards Compatibility

React Native for Windows uses native Windows APIs that necessitate the minimum requirement of the **Windows 10 May 2019 Update** in order to run with all APIs and scenarios supported. Older versions of the Windows OS, when supported at all, may by missing certain functionality due to the lack of certain Windows APIs. The following table captures this missing functionality:

> **Note:** If you are using any of the APIs below, they should gracefully fail (no-op) when the app is running on Windows devices of the corresponding OS versions.

| [Windows SDK](https://developer.microsoft.com/en-us/windows/downloads/sdk-archive) | React Native for Windows support |
| :-----------------------------------------------------------------------------------: | :----- |
| **Windows 10<br>May 2019 Update**<br>Version 1903<br>Build 10.0.18362.1 | **All APIs, scenarios supported** |
| **Windows 10<br>October 2018 Update**<br>Version 1809<br>Build 10.0.17763.0 | **Unsupported:** <ol><li>`useNativeDriver` for animations</li><li>`View.transform` property</li><li>React Native for Windows in XAML islands for hosting inside WPF/Win32 scenarios</li><li>When using Hermes engine, the default locale will always be `en_US` and the default time zone will always be `Etc/UTC`, irrespective of the system settings </li></ol> |
| **Windows 10<br>April 2018 Update**<br>Version 1803<br>Build 10.0.17134.12 | **Unsupported:** (Same as above plus): <ol><li>Flyout: edge alignments, `ShowAt` capability</li><li>`Picker.editable`, `Picker.text`</li></ol> |
| **Windows 10<br>Fall Creators Update**<br>Version 1709<br>Build 10.0.16299.91 | **Unsupported:** (Same as above) |
| **Windows 10<br>Creators Update**<br>Version 1703<br>Build 10.0.15063.468 | **Unsupported:** (Same as above plus): <ol><li>Keyboard events</li><li>`TextInput.placeholderTextColor`</li><li>`TextInput.secureTextEntry` may have some fast typing issues</li></ol> |
