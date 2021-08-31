---
id: version-0.65-win10-compat
title: Backward compatibility with Windows versions
original_id: win10-compat
---

React Native for Windows supports devices running on Windows 10 and higher.
React Native for Windows layers cleanly on top of the [native Windows UI platform](https://github.com/microsoft/microsoft-ui-xaml) which means there are some APIs that may not be supported in all versions of Windows since the corresponding native capabilities were not backward compatible with older OS versions. The following table captures these deltas. If you are using any of the APIs below, they will gracefully fail (no-op) when the app is running on Windows devices of corresponding OS versions.

_Note : There is an ongoing effort to decouple the Windows UI platform from the UWP SDK and ship out of band – [WinUI 3.0](https://github.com/microsoft/microsoft-ui-xaml/blob/master/docs/roadmap.md#winui-3-q4-2019---2020). React Native for Windows will layer on top of this lifted WinUI platform once it is available at which time several of the below unsupported APIs may start lighting up. For more information on WinUI 3 support and status, see [this page](winui3.md)._

| [Windows 10 SDK](https://developer.microsoft.com/en-us/windows/downloads/sdk-archive) | React Native for Windows support |
| :-----------------------------------------------------------------------------------: | ----- |
| **May 2019 update**<br> Version 1903 ; Build 10.0.18362.1 | **All APIs, scenarios supported** |
| **October 2018 update**<br> Version 1809 ; Build 10.0.17763.0 | Unsupported: <ul><li>`useNativeDriver` for animations</li><li>`View.transform` property</li><li>React Native for Windows in XAML islands for hosting inside WPF/Win32 scenarios</li> |
| **April 2018 Update**<br> Version 1803 ; Build 10.0.17134.12 | Unsupported : (Same as above plus): <ul><li>Flyout: edge alignments, `ShowAt` capability</li><li>`Picker.editable`, `Picker.text`</li> |
| **Fall Creators Update**<br> Version 1709 ; Build 10.0.16299.91 | Unsupported : Same as above |
| **Creators Update**<br> Version 1703 ; Build 10.0.15063.468 | Unsupported : (Same as above plus): <ul><li>Keyboard events</li><li>`TextInput.placeholderTextColor`</li><li>`TextInput.secureTextEntry` may have some fast typing issues</li> |

## React Native App Supported OS Versions

The following table captures the versions of Windows 10 that a React Native for Windows app supports. The "Target" is the version of the SDK that the app is compiled against, and the "Minimum" is the lowest version that the app will run on.

| React Native Windows | Target OS Version | Minimum OS Version |
| :--: | :-: | :-: |
| 0.62 - 0.65 | **May 2019 update**<br> Version 1903 ; Build 10.0.18362.1 | **Fall Creators Update**<br> Version 1709 ; Build 10.0.16299.91 |
| 0.60 - 0.61 | **May 2019 update**<br> Version 1903 ; Build 10.0.18362.1 | **Creators Update**<br> Version 1703 ; Build 10.0.15063.468 |
