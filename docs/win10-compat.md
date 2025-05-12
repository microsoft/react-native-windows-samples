---
id: win10-compat
title: Backward compatibility with Windows versions
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

React Native for Windows supports devices running on Windows 10 and higher.
React Native for Windows layers cleanly on top of the [native Windows UI platform](https://github.com/microsoft/microsoft-ui-xaml) which means there are some APIs that may not be supported in all versions of Windows since the corresponding native capabilities were not backward compatible with older OS versions. The following table captures these deltas. If you are using any of the APIs below, they will gracefully fail (no-op) when the app is running on Windows devices of corresponding OS versions.

| [Windows 10 SDK](https://developer.microsoft.com/en-us/windows/downloads/sdk-archive) | React Native for Windows support |
| :-----------------------------------------------------------------------------------: | ----- |
| **May 2020 update**<br> Version 2004 ; Build 10.0.19041.0 | **All APIs, scenarios supported** |
| **May 2019 update**<br> Version 1903 ; Build 10.0.18362.1 | **All APIs, scenarios supported** |
| **October 2018 update**<br> Version 1809 ; Build 10.0.17763.0 | Unsupported: <ul><li>`useNativeDriver` for animations</li><li>`View.transform` property</li><li>React Native for Windows in XAML islands for hosting inside WPF/Win32 scenarios</li><li>When using Hermes engine, the default locale will always be `en_US` and the default time zone will always be `Etc/UTC`, irrespective of the system settings </li> |
| **April 2018 Update**<br> Version 1803 ; Build 10.0.17134.12 | Unsupported : (Same as above plus): <ul><li>Flyout: edge alignments, `ShowAt` capability</li><li>`Picker.editable`, `Picker.text`</li> |
| **Fall Creators Update**<br> Version 1709 ; Build 10.0.16299.91 | Unsupported : Same as above |
| **Creators Update**<br> Version 1703 ; Build 10.0.15063.468 | Unsupported : (Same as above plus): <ul><li>Keyboard events</li><li>`TextInput.placeholderTextColor`</li><li>`TextInput.secureTextEntry` may have some fast typing issues</li> |

## React Native App Supported OS Versions

The following table captures the default versions of Windows 10 that a React Native for Windows app supports. The "Target" is the version of the SDK that the app is compiled against, and the "Minimum" is the lowest version that the app will run on. Note that as of RNW 0.66, developers can easily override these default values to suit their own needs.

| React Native Windows | Target OS Version | Minimum OS Version |
| :--: | :-: | :-: |
| 0.72+ | **May 2020 update**<br> Version 2004 ; Build 10.0.19041.0 | **October 2018 update**<br> Version 1809 ; Build 10.0.17763.0 |
| 0.68 - 0.71 | **May 2020 update**<br> Version 2004 ; Build 10.0.19041.0 | **Fall Creators Update**<br> Version 1709 ; Build 10.0.16299.91 |
| 0.66 - 0.67 | **May 2020 update**<br> Version 2004 ; Build 10.0.19041.0 | **Creators Update**<br> Version 1703 ; Build 10.0.15063.468 |
| 0.62 - 0.65 | **May 2019 update**<br> Version 1903 ; Build 10.0.18362.1 | **Fall Creators Update**<br> Version 1709 ; Build 10.0.16299.91 |
| 0.60 - 0.61 | **May 2019 update**<br> Version 1903 ; Build 10.0.18362.1 | **Creators Update**<br> Version 1703 ; Build 10.0.15063.468 |
