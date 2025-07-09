---
id: PointerRoutedEventArgs
title: PointerRoutedEventArgs
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `class`

Implements: [`RoutedEventArgs`](RoutedEventArgs)

## Properties
### Handled
 bool `Handled`

### KeyModifiers
`readonly`  [`VirtualKeyModifiers`](https://docs.microsoft.com/uwp/api/Windows.System.VirtualKeyModifiers) `KeyModifiers`

### OriginalSource
`readonly`  int `OriginalSource`

### Pointer
`readonly`  [`Pointer`](Pointer) `Pointer`

## Methods
### GetCurrentPoint
[`PointerPoint`](PointerPoint) **`GetCurrentPoint`**(int tag)

## Referenced by
- [`ComponentView`](ComponentView)
- [`IScrollVisual`](IScrollVisual)
