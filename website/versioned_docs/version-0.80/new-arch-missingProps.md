---
id: version-0.80-new-arch-missingProps
title: Missing Properties
original_id: new-arch-missingProps
---

![Architecture](https://img.shields.io/badge/architecture-new_only-green)

> **New Architecture Only:** This page lists properties that are not yet implemented in the New Architecture. If you depend on one of these properties and would like to prioritize its implementation, please open an issue here: [RNW GitHub link](https://github.com/microsoft/react-native-windows/issues).

## Missing Props List

### `OnClick`

Called when the element is clicked. Inherited View Prop.

| type | required |
|:--|:--|
| function | No |

### `onKeyDownCapture`

Occurs when the onKeyDown event is being routed. onKeyDown is the corresponding bubbling event. On Windows, this corresponds to PreviewKeyDown

| type | required |
|:--|:--|
| number | No |

### `onKeyUpCapture`

Occurs when the onKeyUp event is being routed. onKeyUp is the corresponding bubbling event. On Windows, this corresponds to PreviewKeyUp.

| type | required |
|:--|:--|
| number | No |

### `overflow`

| type | default |
|:--|:--|
| enum('visible', 'hidden') | 'visible' |

### `zIndex`

zIndex controls which components display on top of others. Normally, you don't use zIndex. Components render according to their order in the document tree, so later components draw over earlier ones. zIndex may be useful if you have animations or custom modal interfaces where you don't want this behavior.

It works like the CSS z-index property - components with a larger zIndex will render on top. Think of the z-direction like it's pointing from the phone into your eyeball. See https://developer.mozilla.org/en-US/docs/Web/CSS/z-index for more details.

| type | required |
|:--|:--|
| number | No |

### `tooltip`

Text shown on hover. While tooltip support isn’t fully available for all components, it does work with some props such as `Text`.

| type | required |
|:--|:--|
| string | No |

### `opacity`

Sets the transparency of the view.

| type | required |
|:--|:--|
| number | No |

### `onMomentumScrollBegin`

Called when the momentum scroll starts (scroll which occurs as the ScrollView starts gliding).

| type | required |
|:--|:--|
| function | No |

### `onMomentumScrollEnd`

Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).

| type | required |
|:--|:--|
| function | No |

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