---
id: version-0.79-iviewwindowsprops-api
title: IViewWindowsProps
original_id: iviewwindowsprops-api
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

This extends the [View Props](https://reactnative.dev/docs/view#props) and [`IKeyboardProps`](ikeyboardprops-api-windows.md) APIs.

# Reference

## Methods

### `accessibilityPosInSet`

Indicates to accessibility services that the Component is within a set and has the given numbered position.

| type | required |
|:--|:--|
| number | No |

### `accessibilitySetSize`

Indicates to accessibility services that the Component is within a set with the given size.

| type | required |
|:--|:--|
| number | No |

### `children`

| type | required |
|:--|:--|
| any | No |
