---
id: iviewwindowsprops-api
title: IViewWindowsProps
---

This extends the [View Props](https://reactnative.dev/docs/view#props) and [`IKeyboardProps`](ikeyboardprops-api-windows.md) APIs.

# Reference

## Methods

### `accessibilityLandmarkType`

Specifies the automation landmark type for the View. Choose one of the known UIA Landmark types (preferred) or enter a custom string to give the landmark a different name.  

Predefined UIA Landmark Types:
- Form
- Main
- Navigation
- None 
- Search

| type | required |
|:--|:--|
| string | No |

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
