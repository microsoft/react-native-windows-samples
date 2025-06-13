---
id: version-0.79-MicrosoftCompositionContextHelper
title: MicrosoftCompositionContextHelper
original_id: MicrosoftCompositionContextHelper
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `class`

> **EXPERIMENTAL**

A helper static class to create a [`ICompositionContext`](ICompositionContext) based on Microsoft.Composition Visuals. Generally it should not be required to call this directly. Instead you should call CompositionUIService.SetCompositor (unresolved reference). This is not for general consumption and is expected to be removed in a future release.

## Methods
### CreateContext
`static` [`ICompositionContext`](ICompositionContext) **`CreateContext`**([`Compositor`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Compositor) compositor)

> **EXPERIMENTAL**

Creates a [`ICompositionContext`](ICompositionContext) from a Compositor

### CreateVisual
`static` [`IVisual`](IVisual) **`CreateVisual`**([`Visual`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Visual) visual)

> **EXPERIMENTAL**

Creates a [`IVisual`](IVisual) from a Visual

### InnerBrush
`static` [`CompositionBrush`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.CompositionBrush) **`InnerBrush`**([`IBrush`](IBrush) brush)

> **EXPERIMENTAL**

### InnerCompositor
`static` [`Compositor`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Compositor) **`InnerCompositor`**([`ICompositionContext`](ICompositionContext) context)

> **EXPERIMENTAL**

### InnerDropShadow
`static` [`DropShadow`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.DropShadow) **`InnerDropShadow`**([`IDropShadow`](IDropShadow) shadow)

> **EXPERIMENTAL**

### InnerSurface
`static` [`ICompositionSurface`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.ICompositionSurface) **`InnerSurface`**([`IDrawingSurfaceBrush`](IDrawingSurfaceBrush) surface)

> **EXPERIMENTAL**

### InnerVisual
`static` [`Visual`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Visual) **`InnerVisual`**([`IVisual`](IVisual) visual)

> **EXPERIMENTAL**
