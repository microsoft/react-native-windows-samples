---
id: ICompositionContext
title: ICompositionContext
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

> **EXPERIMENTAL**

## Methods
### CreateActivityVisual
[`IActivityVisual`](IActivityVisual) **`CreateActivityVisual`**()

### CreateCaretVisual
[`ICaretVisual`](ICaretVisual) **`CreateCaretVisual`**()

### CreateColorBrush
[`IBrush`](IBrush) **`CreateColorBrush`**([`Color`](https://docs.microsoft.com/uwp/api/Windows.UI.Color) color)

### CreateDrawingSurfaceBrush
[`IDrawingSurfaceBrush`](IDrawingSurfaceBrush) **`CreateDrawingSurfaceBrush`**([`Size`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Size) surfaceSize, [`DirectXPixelFormat`](https://docs.microsoft.com/uwp/api/Windows.Graphics.DirectX.DirectXPixelFormat) pixelFormat, [`DirectXAlphaMode`](https://docs.microsoft.com/uwp/api/Windows.Graphics.DirectX.DirectXAlphaMode) alphaMode)

### CreateDropShadow
[`IDropShadow`](IDropShadow) **`CreateDropShadow`**()

### CreateFocusVisual
[`IFocusVisual`](IFocusVisual) **`CreateFocusVisual`**()

### CreateRoundedRectangleVisual
[`IRoundedRectangleVisual`](IRoundedRectangleVisual) **`CreateRoundedRectangleVisual`**()

### CreateScrollerVisual
[`IScrollVisual`](IScrollVisual) **`CreateScrollerVisual`**()

### CreateSpriteVisual
[`ISpriteVisual`](ISpriteVisual) **`CreateSpriteVisual`**()

## Referenced by
- [`IInternalComponentView`](IInternalComponentView)
- [`MicrosoftCompositionContextHelper`](MicrosoftCompositionContextHelper)
- [`SystemCompositionContextHelper`](SystemCompositionContextHelper)
- [`UriBrushFactory`](UriBrushFactory)
