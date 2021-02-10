---
id: supported-community-modules
title: Supported Community Modules
---

## `ReactNative.Directory`

The [React Native Directory](https://reactnative.directory/) lists libraries and native modules that are available across all of the React Native platforms including iOS, Android, Windows, macOS, and more. 

To view which modules are available for a specific platform, you can use the Filters function on the website, or visit these pre-filtered URLs:

- [Modules that support Windows](https://reactnative.directory/?windows=true)
- [Modules that support macOS](https://reactnative.directory/?macos=true)

## Modules with Microsoft contributions

The React Native team at Microsoft has worked together with community maintainers to add Windows and macOS implementations to several community modules. These modules are listed below.

### Ejected Modules

The React Native [Lean Core](https://github.com/facebook/react-native/issues/23313) effort slims down the core functionality of React Native by ejecting specific modules into their own repos. 

The following modules have either been ejected from core, or are on path to be ejected as part of this effort:

| Name | Version Supported (Windows) | Version Supported (macOS) |
|:-|:-|:-|
| <ins>[`async-storage`](https://github.com/react-native-community/async-storage)</ins> | 0.61 | 0.61 |
| <ins>[`datetimepicker`](https://github.com/react-native-community/datetimepicker)</ins> | 0.62 | [Not yet ejected](https://github.com/microsoft/react-native-macos/issues/389) |
| <ins>[`react-native-checkbox`](https://github.com/react-native-community/react-native-checkbox)</ins> | 0.62 | x |
| <ins>[`react-native-netinfo`](https://www.github.com/react-native-community/react-native-netinfo)</ins> | 0.61 | 0.61 |
| <ins>[`react-native-picker`](https://github.com/react-native-community/react-native-picker)</ins> | 0.61 | [Not yet ejected](https://github.com/microsoft/react-native-macos/issues/395) |
| <ins>[`react-native-progress-view`](https://github.com/react-native-community/progress-view)</ins> | 0.62 | [Not yet ejected](https://github.com/microsoft/react-native-macos/issues/391) |
| <ins>[`react-native-slider`](https://github.com/react-native-community/react-native-slider)</ins> | 0.62 | [Not yet ejected](https://github.com/microsoft/react-native-macos/issues/394) |
| <ins>[`react-native-webview`](https://www.github.com/react-native-community/react-native-webview)</ins> | 0.61 | 0.61 |
| <ins>[`clipboard`](https://www.github.com/react-native-community/clipboard)</ins> | 0.61 | 0.61 |

### Community modules

In addition to the ejected modules above, Microsoft has also added implementations for a set of popular and highly requested community modules:

| Name | Version Supported (Windows) | Version Supported (macOS) |
|:-|:-|:-|
| <ins>[react-native-camera](https://www.github.com/react-native-community/react-native-camera)</ins> | 0.61 | x |
| <ins>[react-native-device-info](https://www.github.com/react-native-community/react-native-device-info)</ins> | 0.61 | [In Progress](https://github.com/react-native-community/react-native-device-info/pull/1057) |
| <ins>[react-navigation](https://github.com/react-navigation/react-navigation)</ins> | 0.62 | [Partial](https://github.com/react-navigation/react-navigation/pull/8570) |
| <ins>[react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)</ins> | [Partial](https://github.com/microsoft/react-native-windows/issues/4151) | x |
| <ins>[react-native-video](https://www.github.com/react-native-community/react-native-video)</ins> | 0.61 | x |
| <ins>[react-native-linear-gradient](https://www.github.com/react-native-community/react-native-linear-gradient)</ins> | 0.61 | x |
| <ins>[react-native-orientation-locker](https://github.com/wonday/react-native-orientation-locker)</ins> | 0.63 | x |
| <ins>[react-native-print](https://github.com/christopherdro/react-native-print)</ins> | 0.63 | x |
| <ins>[react-native-pdf](https://github.com/wonday/react-native-pdf)</ins> | 0.63 | x |
| <ins>[react-native-sensitve-info](https://github.com/mCodex/react-native-sensitive-info)</ins> | 0.63 | x |
| <ins>[react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen)</ins> | 0.63 | x |
| <ins>[react-native-permissions](https://github.com/react-native-community/react-native-permissions)</ins> | 0.63 | x |
| <ins>[react-native-config](https://github.com/luggit/react-native-config)</ins> | 0.63 | x |
| <ins>[rn-fetch-blob](https://github.com/joltup/rn-fetch-blob)</ins> | [0.63](https://github.com/joltup/rn-fetch-blob/pull/701) | x |
| <ins>[react-native-code-push](https://github.com/Microsoft/react-native-code-push)</ins> | 0.63 | x |
| <ins>[react-native-tts](https://github.com/ak1394/react-native-tts)</ins> | 0.63 | x |


The React Native team at Microsoft is continually adding native implementations for community modules. Visit the [Community Module Requests project board](https://github.com/microsoft/react-native-windows/projects/23) to see which modules are on our radar.

## Help! A module I need doesn't work with Windows and/or macOS!

If you need a module that doesn't currently have a native Windows and/or macOS implementation, please [submit an issue on GitHub](https://github.com/microsoft/react-native-windows/issues/new/choose) and let us know.

Additionally, you can also file an issue on the module repository to let them know that you need Windows and/or macOS support. If you file an additional issue in the module repository, please be sure to link it to the issue in the React Native Windows repo to help us track.
