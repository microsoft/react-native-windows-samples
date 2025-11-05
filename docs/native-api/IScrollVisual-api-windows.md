---
id: IScrollVisual
title: IScrollVisual
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

Implements: [`IVisual`](IVisual)

> **EXPERIMENTAL**

## Properties
### Horizontal
 bool `Horizontal`

### ScrollPosition
`readonly`  [`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) `ScrollPosition`

## Methods
### Brush
void **`Brush`**([`IBrush`](IBrush) brush)

### ContentSize
void **`ContentSize`**([`Vector2`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector2) size)

### OnPointerPressed
void **`OnPointerPressed`**([`PointerRoutedEventArgs`](PointerRoutedEventArgs) args)

### ScrollBy
void **`ScrollBy`**([`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) offset, bool animate)

### ScrollEnabled
void **`ScrollEnabled`**(bool isScrollEnabled)

### SetDecelerationRate
void **`SetDecelerationRate`**([`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) decelerationRate)

### SetMaximumZoomScale
void **`SetMaximumZoomScale`**(float maximumZoomScale)

### SetMinimumZoomScale
void **`SetMinimumZoomScale`**(float minimumZoomScale)

### SetSnapPoints
void **`SetSnapPoints`**(bool snapToStart, bool snapToEnd, [`IVectorView`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVectorView-1)<float> offsets)

### TryUpdatePosition
void **`TryUpdatePosition`**([`Vector3`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Numerics.Vector3) position, bool animate)

## Events
### `ScrollBeginDrag`
Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<[`IScrollPositionChangedArgs`](IScrollPositionChangedArgs)>
### `ScrollEndDrag`
Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<[`IScrollPositionChangedArgs`](IScrollPositionChangedArgs)>
### `ScrollMomentumBegin`
Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<[`IScrollPositionChangedArgs`](IScrollPositionChangedArgs)>
### `ScrollMomentumEnd`
Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<[`IScrollPositionChangedArgs`](IScrollPositionChangedArgs)>
### `ScrollPositionChanged`
Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<[`IScrollPositionChangedArgs`](IScrollPositionChangedArgs)>

## Referenced by
- [`ICompositionContext`](ICompositionContext)

