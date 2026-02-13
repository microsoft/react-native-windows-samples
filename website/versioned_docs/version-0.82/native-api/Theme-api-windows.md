---
id: version-0.82-Theme
title: Theme
original_id: Theme
---

Kind: `class`

> **EXPERIMENTAL**

## Properties
### IsEmpty
`readonly`  bool `IsEmpty`

> **EXPERIMENTAL**

An empty theme is used when the final theme is not yet known.  It will generally return transparent colors.

## Constructors
### Theme
 **`Theme`**([`IReactContext`](IReactContext) reactContext, [`ICustomResourceLoader`](ICustomResourceLoader) resourceLoader)

> **EXPERIMENTAL**

## Methods
### GetDefaultTheme
`static` [`Theme`](Theme) **`GetDefaultTheme`**([`IReactContext`](IReactContext) context)

> **EXPERIMENTAL**

### PlatformBrush
[`CompositionBrush`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.CompositionBrush) **`PlatformBrush`**(string platformColor)

> **EXPERIMENTAL**

### SetDefaultResources
`static` void **`SetDefaultResources`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, [`ICustomResourceLoader`](ICustomResourceLoader) theme)

> **EXPERIMENTAL**

### TryGetPlatformColor
bool **`TryGetPlatformColor`**(string platformColor, **out** [`Color`](https://docs.microsoft.com/uwp/api/Windows.UI.Color) color)

> **EXPERIMENTAL**

## Events
### `ThemeChanged`
> **EXPERIMENTAL**

Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<Object>

## Referenced by
- [`Color`](Color)
- [`ComponentView`](ComponentView)
- [`ReactNativeIsland`](ReactNativeIsland)
