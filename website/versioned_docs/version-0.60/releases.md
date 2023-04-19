---
id: version-0.60-releases
title: Release Strategy (vNext)
original_id: releases
---

This document describes the release strategy for the [vNext](https://github.com/microsoft/react-native-windows/blob/main/README.md) effort for React Native for Windows.

The vNext versioning will generally follow the same strategy as outlined in current [Releases](https://github.com/microsoft/react-native-windows/blob/0.60-stable/current/docs/Releases.md).

Specifically,

- We release in lock-step with [`facebook/react-native`](https://github.com/facebook/react-native). I.e., for every release of `react-native`, we create a release of `react-native-windows` with a matching major version.
- We will use a prerelease flag: `-vnext` - to differentiate this C++ implementation followed by the current vNext version number.

For example:

```
...
react-native@0.57.* -> react-native-windows@0.57.0-vnext.*
react-native@0.58.* -> react-native-windows@0.58.0-vnext.*
...
```
