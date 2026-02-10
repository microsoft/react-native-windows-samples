---
id: version-0.82-InstanceLoadedEventArgs
title: InstanceLoadedEventArgs
original_id: InstanceLoadedEventArgs
---

Kind: `class`

The arguments for the [`ReactInstanceSettings.InstanceLoaded`](ReactInstanceSettings#instanceloaded) event.

## Properties
### Context
`readonly`  [`IReactContext`](IReactContext) `Context`

Gets the [`IReactContext`](IReactContext) for the React instance that finished loading the bundle.

### Failed
`readonly`  bool `Failed`

Returns `true` if the JavaScript bundle failed to load.

### RuntimeHandle
`readonly`  Object `RuntimeHandle`

Provides access to the jsi::Runtime for synchronous access using GetOrCreateContextRuntime

## Referenced by
- [`ReactInstanceSettings`](ReactInstanceSettings)
