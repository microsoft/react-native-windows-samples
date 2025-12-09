---
id: ReactRootView
title: ReactRootView
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `class`

Extends: [`Grid`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Controls.Grid)

A XAML component that hosts React Native UI elements.

## Properties
### ComponentName
 string `ComponentName`

The name of the root UI component registered in JavaScript with help of the [`AppRegistry.registerComponent`](https://reactnative.dev/docs/appregistry#registercomponent) method.

### InitialProps
 [`JSValueArgWriter`](JSValueArgWriter) `InitialProps`

The [`JSValueArgWriter`](JSValueArgWriter) that is used to serialize the main component initial properties.

### IsPerspectiveEnabled
 bool `IsPerspectiveEnabled`

**Default value**: `true`

XAML's default projection in 3D is orthographic (all lines are parallel) However React Native's default projection is a one-point perspective. This property enables setting a default perspective projection on the main control to mimic this.

### ReactNativeHost
 [`ReactNativeHost`](ReactNativeHost) `ReactNativeHost`

The [`ReactNativeHost`](ReactNativeHost) associated with the [`ReactRootView`](ReactRootView). It must be set to show any React UI elements.

## Constructors
### ReactRootView
 **`ReactRootView`**()

## Methods
### ReloadView
void **`ReloadView`**()

Reloads the current [`ReactRootView`](ReactRootView) UI components.

## Referenced by
- [`XamlUIService`](XamlUIService)

