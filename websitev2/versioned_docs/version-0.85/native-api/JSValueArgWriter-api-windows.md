---
id: JSValueArgWriter
title: JSValueArgWriter
---


## New Architecture

Kind: `delegate`

The `JSValueArgWriter` delegate is used to pass values to ABI API. 
In a function that implements the delegate use the provided `writer` to stream custom values.

### Invoke
void **`Invoke`**([`IJSValueWriter`](IJSValueWriter) writer)

### Referenced by
- [`EmitEventSetterDelegate`](EmitEventSetterDelegate)
- [`EventEmitter`](EventEmitter)
- [`IReactContext`](IReactContext)
- [`ReactNativeIsland`](ReactNativeIsland)
- [`ReactViewOptions`](ReactViewOptions)

## Old Architecture

Kind: `delegate`

The `JSValueArgWriter` delegate is used to pass values to ABI API. 
In a function that implements the delegate use the provided `writer` to stream custom values.

### Invoke
void **`Invoke`**([`IJSValueWriter`](IJSValueWriter) writer)

### Referenced by
- [`EmitEventSetterDelegate`](EmitEventSetterDelegate)
- [`IReactContext`](IReactContext)
- [`ReactRootView`](ReactRootView)
- [`ReactViewOptions`](ReactViewOptions)
- [`XamlHelper`](XamlHelper)
- [`XamlUIService`](XamlUIService)

