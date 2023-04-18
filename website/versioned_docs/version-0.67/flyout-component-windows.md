---
id: version-0.67-flyout-component
title: Flyout
original_id: flyout-component
---

# Reference

## Props

Inherits [View Props](https://reactnative.dev/docs/view#props).

### `horizontalOffset`

Specifies horizontal offset from spawn point.

| type | required |
|:--|:--|
| number | No |

### `verticalOffset`

Specifies vertical offset from spawn point.

| type | required |
|:--|:--|
| number | No |

### `isLightDismissEnabled`

Whether or not the flyout will close if the user clicks outside of it.

Set to false if you want your flyout to be modal.

| type | required |
|:--|:--|
| bool | No |

### `isOverlayEnabled`

Specifies whether the area outside the flyout is darkened.

| type | required |
|:--|:--|
| bool | No |

### `isOpen`

A boolean that returns true when the flyout is active/open, and false when it's not.

| type | required |
|:--|:--|
| bool | No |

### `onDismiss`

An event that fires when the flyout is dismissed.

This must update the [`isOpen`](#isopen) property.

| type | required |
|:--|:--|
| function | Yes |

### `target`

A component that the flyout is attached to and will show from when [`isOpen`](#isopen) is true.

| type | required |
|:--|:--|
| `React.ReactNode` | Yes |

### `placement`

The relative placement of the flyout in relation to the [`target`](#target) set.

Accepted placements value types are:

- `top`
- `bottom`
- `left`
- `right`
- `full`
- `top-edge-aligned-left`
- `top-edge-aligned-right`
- `bottom-edge-aligned-left`
- `bottom-edge-aligned-right`
- `left-edge-aligned-top`
- `right-edge-aligned-top`
- `left-edge-aligned-bottom`
- `right-edge-aligned-bottom`

| type | required |
|:--|:--|
| type | No |

## Examples

Examples can be found in the [React Native Gallery App](https://github.com/microsoft/react-native-gallery/blob/main/src/examples/FlyoutExamplePage.tsx) available in the [Microsoft Store](http://aka.ms/reactnativegalleryapp)
