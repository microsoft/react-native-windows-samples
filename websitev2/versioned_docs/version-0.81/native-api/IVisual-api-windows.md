---
id: IVisual
title: IVisual
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

Implemented by: 
- [`IActivityVisual`](IActivityVisual)
- [`IRoundedRectangleVisual`](IRoundedRectangleVisual)
- [`IScrollVisual`](IScrollVisual)
- [`ISpriteVisual`](ISpriteVisual)

> **EXPERIMENTAL**

## Properties
### BackfaceVisibility
 [`BackfaceVisibility`](BackfaceVisibility) `BackfaceVisibility`

### Comment
 string `Comment`

## Methods
### AnimationClass
void **`AnimationClass`**([`AnimationClass`](AnimationClass) value)

### GetAt
[`IVisual`](IVisual) **`GetAt`**(uint32_t index)

### InsertAt
void **`InsertAt`**([`IVisual`](IVisual) visual, int index)

### IsVisible
void **`IsVisible`**(bool isVisible)

### Offset
void **`Offset`**([`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) offset)

### Offset
void **`Offset`**([`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) offset, [`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) relativeAdjustment)

### Opacity
void **`Opacity`**(float opacity)

### RelativeSizeWithOffset
void **`RelativeSizeWithOffset`**([`Vector2`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector2) size, [`Vector2`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector2) relativeSizeAdjustment)

### Remove
void **`Remove`**([`IVisual`](IVisual) visual)

### RotationAngle
void **`RotationAngle`**(float angle)

### Scale
void **`Scale`**([`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) scale)

### Size
void **`Size`**([`Vector2`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector2) size)

### TransformMatrix
void **`TransformMatrix`**([`Matrix4x4`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Matrix4x4) transform)

## Referenced by
- [`CreateInternalVisualDelegate`](CreateInternalVisualDelegate)
- [`ICaretVisual`](ICaretVisual)
- [`IFocusVisual`](IFocusVisual)
- [`IInternalCompositionRootView`](IInternalCompositionRootView)
- [`IVisualToMountChildrenIntoDelegate`](IVisualToMountChildrenIntoDelegate)
- [`MicrosoftCompositionContextHelper`](MicrosoftCompositionContextHelper)
- [`SystemCompositionContextHelper`](SystemCompositionContextHelper)

