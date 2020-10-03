---
id: version-0.63-releases
title: Release Strategy
original_id: releases
---

For every major version update of `react-native`, React Native for Windows releases a matching version. In addition, there are three release distributions with corresponding npm package distribution tags:
1.	Canary (@canary)
2.	Preview (@preview)
3.	Latest (@latest)

`canary` builds are built directly from our master branch. These builds provide no guarantees around upstream React version, breaking changes, or overall stability. These builds should be used for development or to test bleeding edge functionality but should not be relied upon for production use. Master builds are versioned as 0.0.0-canary.x.

`preview` builds are the first released by stable branches. These builds aim to become increasingly polished over time and have fewer breaking changes than in canary. react-native-windows-init will work out of the box with preview builds when none else are available, but will warn users before installing them. Preview builds are versioned as 0.x.0-preview.y, where x matches the minor release of React Native.

`latest` builds corresponding to our "released" version. Breaking changes should not be made to stable branches after promotion to latest. Caution must be taken to not compromise the stability of our non-prerelease branches. Only low risk changes critical to customer scenarios should be back-ported. Released builds are versioned as 0.x.y where x matches the minor release of React Native.
