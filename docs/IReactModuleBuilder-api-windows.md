---
id: IReactModuleBuilder
title: IReactModuleBuilder
---

Kind: `interface`



## Description
Builds native modules inside of React native code based on the provided meta-data. See [Native Modules](native-modules.md) for more usage information.



## Methods
### AddConstantProvider
void **`AddConstantProvider`**([`ConstantProviderDelegate`](ConstantProviderDelegate) constantProvider)

The JavaScript values written by the [`ConstantProviderDelegate`](ConstantProviderDelegate) will be available as constants on the native module is JavaScript.

### AddInitializer
void **`AddInitializer`**([`InitializerDelegate`](InitializerDelegate) initializer)

An initializer is a method that will be called when the react instance starts.  It provides the native module with the [`IReactContext`](IReactContext) for the running instance. See [`InitializerDelegate`](#initializerdelegate).

### AddMethod
void **`AddMethod`**(string name, [`MethodReturnType`](MethodReturnType) returnType, [`MethodDelegate`](MethodDelegate) method)



### AddSyncMethod
void **`AddSyncMethod`**(string name, [`SyncMethodDelegate`](SyncMethodDelegate) method)

Adds a synchronous method to the native module.  See [`SyncMethodDelegate`](SyncMethodDelegate).


