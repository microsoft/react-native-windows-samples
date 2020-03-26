---
id: popup-component
title: Popup
---

# Reference

## Props

Inherits [View Props](https://facebook.github.io/react-native/docs/view#props).

### isOpen

A boolean that returns true when the flyout is active/open, and false when it's not.

| type | required |
|:--|:--|
| bool | No |

### isLightDismissEnabled

Whether or not the flyout will close if the user clicks away from the popup.

Set to false if you want your flyout to be modal.

| type | required |
|:--|:--|
| bool | No |

### horizonalOffset

Specifies horizontal offset from spawn point.

| type | required |
|:--|:--|
| number | No |

### verticalOffset

Specifies vertical offset from spawn point.

| type | required |
|:--|:--|
| number | No |

### onDismiss

An event that fires when the flyout is dismissed.

This must update the [`isOpen`](#isopen) property.

| type | required |
|:--|:--|
| function | Yes |

### target

A component that the flyout is attached to and will show from when [`isOpen`](flyout-component-windows.md#isopen) is true.

| type | required |
|:--|:--|
| React.ReactNode | Yes |
