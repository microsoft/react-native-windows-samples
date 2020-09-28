---
id: platform
title: Platform Detection
---

When building cross-platform applications, you will sometimes need to dynamically detect the platform your code is running on. React Native for Windows supports the same [platform detection mechanisms](https://reactnative.dev/docs/platform-specific-code.html) as Android and iOS. React Native for Windows reports a `Platform.OS` of `windows`, and uses the `.windows` platform-specific extension.

```js
import { Platform } from 'react-native';

if (Platform.OS === 'windows') {
  // Windows-specific code
}
```

### Detecting OS Version
Like Android and iOS, React Native for Windows allows detecting OS version through `Platform.Version`. Similar to Android, Windows represents this version as a number corresponding to API version. This more specifically maps to the platform's version of `Windows.Foundation.UniversalApiContract`. This number can be used to test the availability of native APIs ([see UWP documentation here](https://docs.microsoft.com/en-au/uwp/extension-sdks/device-families-overview)).

```js
import { Platform } from 'react-native';

if (Platform.Version >= 4) {
  // We can use an API from UniversalApiContract 4
} else {
  // Fallback
}
```