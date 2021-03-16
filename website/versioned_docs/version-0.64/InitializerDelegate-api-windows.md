---
id: version-0.64-InitializerDelegate
title: InitializerDelegate
original_id: InitializerDelegate
---

Kind: `delegate`

A delegate that sets `reactContext` for a module.
We use it for a stand-alone initialize method, strongly typed JS events and functions.
Experimental code uses it to initialize TurboModule `CallInvoker`.

## Invoke
void **`Invoke`**([`IReactContext`](IReactContext) reactContext)





## Referenced by
- [`IReactModuleBuilder`](IReactModuleBuilder)
