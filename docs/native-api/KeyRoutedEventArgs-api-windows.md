---
id: KeyRoutedEventArgs
title: KeyRoutedEventArgs
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

Implements: [`RoutedEventArgs`](RoutedEventArgs)

## Properties
### DeviceId
`readonly`  string `DeviceId`

### Handled
 bool `Handled`

### Key
`readonly`  [`VirtualKey`](https://docs.microsoft.com/uwp/api/Windows.System.VirtualKey) `Key`

### KeyStatus
`readonly`  [`PhysicalKeyStatus`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Input.PhysicalKeyStatus) `KeyStatus`

### KeyboardSource
`readonly`  [`KeyboardSource`](KeyboardSource) `KeyboardSource`

### OriginalKey
`readonly`  [`VirtualKey`](https://docs.microsoft.com/uwp/api/Windows.System.VirtualKey) `OriginalKey`

## Referenced by
- [`ComponentView`](ComponentView)
