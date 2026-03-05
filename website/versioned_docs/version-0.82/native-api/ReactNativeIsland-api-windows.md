---
id: version-0.82-ReactNativeIsland
title: ReactNativeIsland
original_id: ReactNativeIsland
---

Kind: `class`

> **EXPERIMENTAL**

A windows composition component that hosts React Native UI elements.

## Properties
### FontSizeMultiplier
`readonly`  float `FontSizeMultiplier`

> **EXPERIMENTAL**

### Island
`readonly`  [`ContentIsland`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Content.ContentIsland) `Island`

> **EXPERIMENTAL**

### ReactViewHost
 [`IReactViewHost`](IReactViewHost) `ReactViewHost`

> **EXPERIMENTAL**

A ReactViewHost specifies the root UI component and initial properties to render in this RootViewIt must be set to show any React UI elements.

### Resources
 [`ICustomResourceLoader`](ICustomResourceLoader) `Resources`

> **EXPERIMENTAL**

Provides resources used for Platform colors within this RootView

### RootTag
`readonly`  int64_t `RootTag`

> **EXPERIMENTAL**

### RootVisual
`readonly`  [`Visual`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Visual) `RootVisual`

> **EXPERIMENTAL**

The RootVisual associated with the [`ReactNativeIsland`](ReactNativeIsland). It must be set to show any React UI elements.

### ScaleFactor
 float `ScaleFactor`

> **EXPERIMENTAL**

ScaleFactor for this windows (DPI/96)

### Size
`readonly`  [`Size`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Size) `Size`

> **EXPERIMENTAL**

### Theme
`readonly`  [`Theme`](Theme) `Theme`

> **EXPERIMENTAL**

## Constructors
### ReactNativeIsland
 **`ReactNativeIsland`**([`Compositor`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Compositor) compositor)

> **EXPERIMENTAL**

### ReactNativeIsland
 **`ReactNativeIsland`**()

## Methods
### Arrange
void **`Arrange`**([`LayoutConstraints`](LayoutConstraints) layoutConstraints, [`Point`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Point) viewportOffset)

> **EXPERIMENTAL**

### CreatePortal
`static` [`ReactNativeIsland`](ReactNativeIsland) **`CreatePortal`**([`PortalComponentView`](PortalComponentView) portal)

> **EXPERIMENTAL**

Used to create react portals, such as a native modal component.

### GetUiaProvider
Object **`GetUiaProvider`**()

> **EXPERIMENTAL**

### Measure
[`Size`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Size) **`Measure`**([`LayoutConstraints`](LayoutConstraints) layoutConstraints, [`Point`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Point) viewportOffset)

> **EXPERIMENTAL**

### NavigateFocus
[`FocusNavigationResult`](FocusNavigationResult) **`NavigateFocus`**([`FocusNavigationRequest`](FocusNavigationRequest) request)

> **EXPERIMENTAL**

Move focus to this [`ReactNativeIsland`](ReactNativeIsland)

### SetProperties
void **`SetProperties`**([`JSValueArgWriter`](JSValueArgWriter) props)

> **EXPERIMENTAL**

Initial props should be set on ReactViewHost. This is used to update props after the initial props are set

## Events
### `SizeChanged`
> **EXPERIMENTAL**

Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<[`RootViewSizeChangedEventArgs`](RootViewSizeChangedEventArgs)>
