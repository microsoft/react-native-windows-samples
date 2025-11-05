---
id: new-arch-missingProps
title: Missing Properties
---

![Architecture](https://img.shields.io/badge/architecture-new_only-green)

> **New Architecture Only:** This page lists properties that are not yet implemented in the New Architecture. If you depend on one of these properties and would like to prioritize its implementation, please open an issue here: [RNW GitHub link](https://github.com/microsoft/react-native-windows/issues).

## Missing Props List

### `overflow`

| type | default |
|:--|:--|
| enum('visible', 'hidden') | 'visible' |

### `opacity`

Sets the transparency of the view.

| type | required |
|:--|:--|
| number | No |

### `snapToInterval`

When set, causes the scroll view to stop at multiples of the value of snapToInterval. This can be used for paginating through children that have lengths smaller than the scroll view. Typically used in combination with snapToAlignment and decelerationRate="fast". Overrides less configurable pagingEnabled prop.

| type | required |
|:--|:--|
| number | No |

### `snapToAlignment`

When snapToInterval is set, snapToAlignment will define the relationship of the snapping to the scroll view.

| type | required |
|:--|:--|
| enum('start', 'center', 'end') | No |

### `pagingEnabled`

When true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.

| type | default |
|:--|:--|
| bool | false |

### `selectable`

Lets the user select text, to use the native copy and paste functionality.

| type | default |
|:--|:--|
| bool | false |

### `selectionColor`

The highlight color of the text.

| type | required |
|:--|:--|
| color | No |

### `textAlign`

Align the input text to the left, center, or right sides of the input field.

Possible values for textAlign are:

- left
- center
- right

| type | required |
|:--|:--|
| enum('left', 'center', 'right') | No |

### `contextMenuHidden`

If true, context menu is hidden. The default value is false.

| type | required |
|:--|:--|
| bool | No |

### `writingDirection`

The writing direction of the text.

| type | required |
|:--|:--|
| enum('auto', 'ltr', 'rtl') | No |

### `keyboardType`

Determines which keyboard to open, e.g.numeric

| type | required |
|:--|:--|
| enum('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password') | No |