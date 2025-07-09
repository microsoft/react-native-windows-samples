---
id: version-0.79-PointerPoint
title: PointerPoint
original_id: PointerPoint
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `class`

## Properties
### FrameId
`readonly`  uint32_t `FrameId`

### Inner
`readonly`  [`PointerPoint`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Input.PointerPoint) `Inner`

### IsInContact
`readonly`  bool `IsInContact`

### PointerDeviceType
`readonly`  [`PointerDeviceType`](PointerDeviceType) `PointerDeviceType`

### PointerId
`readonly`  uint32_t `PointerId`

### Position
`readonly`  [`Point`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Point) `Position`

### Properties
`readonly`  [`PointerPointProperties`](PointerPointProperties) `Properties`

### Timestamp
`readonly`  uint64_t `Timestamp`

## Methods
### GetOffsetPoint
[`PointerPoint`](PointerPoint) **`GetOffsetPoint`**([`Point`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Point) offset)

## Referenced by
- [`PointerRoutedEventArgs`](PointerRoutedEventArgs)
