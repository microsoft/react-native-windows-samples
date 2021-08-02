---
id: version-0.65-IReactModuleBuilder
title: IReactModuleBuilder
original_id: IReactModuleBuilder
---

Kind: `interface`



Builds native module inside of ReactNative code based on the provided meta-data.
See [Native Modules](native-modules) for more usage information.



## Methods
### AddConstantProvider
void **`AddConstantProvider`**([`ConstantProviderDelegate`](ConstantProviderDelegate) constantProvider)

Adds a constant provider method to define constants for the native module. See [`ConstantProviderDelegate`](ConstantProviderDelegate).



### AddInitializer
void **`AddInitializer`**([`InitializerDelegate`](InitializerDelegate) initializer)

Adds an initializer method called on the native module initialization.
It provides the native module with the [`IReactContext`](IReactContext) for the running ReactNative instance. See [`InitializerDelegate`](InitializerDelegate).
There can be multiple initializer methods which are called in the order they were registered.



### AddMethod
void **`AddMethod`**(string name, [`MethodReturnType`](MethodReturnType) returnType, [`MethodDelegate`](MethodDelegate) method)

Adds an asynchronous method to the native module. See [`MethodDelegate`](MethodDelegate).



### AddSyncMethod
void **`AddSyncMethod`**(string name, [`SyncMethodDelegate`](SyncMethodDelegate) method)

Adds a synchronous method to the native module. See [`SyncMethodDelegate`](SyncMethodDelegate).






## Referenced by
- [`ReactModuleProvider`](ReactModuleProvider)
