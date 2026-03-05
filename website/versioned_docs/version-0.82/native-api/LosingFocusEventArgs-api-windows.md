---
id: version-0.82-LosingFocusEventArgs
title: LosingFocusEventArgs
original_id: LosingFocusEventArgs
---

Kind: `class`

Implements: [`RoutedEventArgs`](RoutedEventArgs)

> **EXPERIMENTAL**

## Properties
### Direction
`readonly`  [`FocusNavigationDirection`](FocusNavigationDirection) `Direction`

> **EXPERIMENTAL**

### NewFocusedComponent
`readonly`  [`ComponentView`](ComponentView) `NewFocusedComponent`

> **EXPERIMENTAL**

### OldFocusedComponent
`readonly`  [`ComponentView`](ComponentView) `OldFocusedComponent`

> **EXPERIMENTAL**

### OriginalSource
`readonly`  int `OriginalSource`

## Methods
### TryCancel
void **`TryCancel`**()

> **EXPERIMENTAL**

### TrySetNewFocusedComponent
void **`TrySetNewFocusedComponent`**([`ComponentView`](ComponentView) component)

> **EXPERIMENTAL**

## Referenced by
- [`ComponentView`](ComponentView)
