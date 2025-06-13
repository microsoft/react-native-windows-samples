---
id: version-0.79-IPointerPointTransform
title: IPointerPointTransform
original_id: IPointerPointTransform
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

## Properties
### Inverse
`readonly`  [`IPointerPointTransform`](IPointerPointTransform) `Inverse`

## Methods
### TryTransform
bool **`TryTransform`**([`Point`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Point) inPoint, **out** [`Point`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Point) outPoint)

### TryTransformBounds
bool **`TryTransformBounds`**([`Rect`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Rect) inRect, **out** [`Rect`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Rect) outRect)
