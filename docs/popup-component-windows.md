---
id: popup-component
title: Popup
---

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
