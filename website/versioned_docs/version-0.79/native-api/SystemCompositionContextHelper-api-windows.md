---
id: version-0.79-SystemCompositionContextHelper
title: SystemCompositionContextHelper
original_id: SystemCompositionContextHelper
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `class`

> **EXPERIMENTAL**

A helper static class to create a [`ICompositionContext`](ICompositionContext) based on Windows.Composition Visuals. This is not for general consumption and is expected to be removed in a future release.

## Methods
### CreateContext
`static` [`ICompositionContext`](ICompositionContext) **`CreateContext`**([`Compositor`](https://docs.microsoft.com/uwp/api/Windows.UI.Composition.Compositor) compositor)

> **EXPERIMENTAL**

Creates a [`ICompositionContext`](ICompositionContext) from a Compositor

### CreateVisual
`static` [`IVisual`](IVisual) **`CreateVisual`**([`Visual`](https://docs.microsoft.com/uwp/api/Windows.UI.Composition.Visual) visual)

> **EXPERIMENTAL**

Creates a [`IVisual`](IVisual) from a Visual

### InnerBrush
`static` [`CompositionBrush`](https://docs.microsoft.com/uwp/api/Windows.UI.Composition.CompositionBrush) **`InnerBrush`**([`IBrush`](IBrush) brush)

> **EXPERIMENTAL**

### InnerCompositor
`static` [`Compositor`](https://docs.microsoft.com/uwp/api/Windows.UI.Composition.Compositor) **`InnerCompositor`**([`ICompositionContext`](ICompositionContext) context)

> **EXPERIMENTAL**

### InnerDropShadow
`static` [`DropShadow`](https://docs.microsoft.com/uwp/api/Windows.UI.Composition.DropShadow) **`InnerDropShadow`**([`IDropShadow`](IDropShadow) shadow)

> **EXPERIMENTAL**

### InnerSurface
`static` [`ICompositionSurface`](https://docs.microsoft.com/uwp/api/Windows.UI.Composition.ICompositionSurface) **`InnerSurface`**([`IDrawingSurfaceBrush`](IDrawingSurfaceBrush) surface)

> **EXPERIMENTAL**

### InnerVisual
`static` [`Visual`](https://docs.microsoft.com/uwp/api/Windows.UI.Composition.Visual) **`InnerVisual`**([`IVisual`](IVisual) visual)

> **EXPERIMENTAL**
