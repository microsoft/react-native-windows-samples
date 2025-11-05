---
id: version-0.80-popup-component
title: Popup
original_id: popup-component
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

> **Old Architecture Only:** This documentation describes a feature only supported by React Native's "Old" or "Legacy" Architecture. We are still in the progress of updating all of the documentation, but in the meantime, for information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

# Reference

## Props

Inherits [View Props](https://reactnative.dev/docs/view#props).

### `isOpen`

A boolean that returns true when the `Popup` is active/open, and false when it's not.

| type | required |
|:--|:--|
| bool | No |

### `isLightDismissEnabled`

Whether or not the `Popup` will close if the user clicks outside of it.

Set to false if you want your `Popup` to be modal.

| type | required |
|:--|:--|
| bool | No |

### `horizonalOffset`

Specifies horizontal offset from spawn point.

| type | required |
|:--|:--|
| number | No |

### `verticalOffset`

Specifies vertical offset from spawn point.

| type | required |
|:--|:--|
| number | No |

### `onDismiss`

An event that fires when the `Popup` is dismissed.

This must update the [`isOpen`](#isopen) property.

| type | required |
|:--|:--|
| function | Yes |

### `target`

A component that the `Popup` is attached to and will show from when [`isOpen`](flyout-component-windows.md#isopen) is true.

| type | required |
|:--|:--|
| `React.ReactNode` | Yes |

### `autoFocus`

Specifies and sets whether the `Popup` will get focus automatically when the page loads or not.

| type | required |
|:--|:--|
| bool | No |

## Examples

Examples can be found in the [React Native Gallery App](https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PopupExamplePage.tsx) available in the [Microsoft Store](https://apps.microsoft.com/detail/9NPG0B292H4R)
