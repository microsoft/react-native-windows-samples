---
id: ireactmodulebuilder-api
title: IReactModuleBuilder
---

Builds native modules inside of React native code based on the provided meta-data.  See [Native Modules](native-modules.md) for more usage information.

# Reference

## Methods

### `AddInitializer()`

```csharp
void AddInitializer(InitializerDelegate initializer);
```

An initializer is a method that will be called when the react instance starts.  It provides the native module with the [`IReactContext`](IReactContext-api-windows.md) for the running instance. See [`InitializerDelegate`](#initializerdelegate).

### `AddConstantProvider()`

```csharp
void AddConstantProvider(ConstantProviderDelegate constantProvider);
```

The `JSValue` written by the [`ConstantProviderDelegate`](#constantproviderdelegate) will be available as constants on the native module is JavaScript.

### `AddMethod()`

```csharp
void AddMethod(String name, MethodReturnType returnType, MethodDelegate method);
```

The valid values for `MethodReturnType` are:

```csharp
  enum MethodReturnType {
    Void,
    Callback,
    TwoCallbacks,
    Promise,
  };
```

See [`MethodDelegate`](#methoddelegate).

### `AddSyncMethod()`

```csharp
void AddSyncMethod(String name, SyncMethodDelegate method);
```

Adds a synchronous method to the native module.  See [`SyncMethodDelegate`](#syncmethoddelegate).


## Delegates

### `InitializerDelegate`

```csharp
delegate void InitializerDelegate(IReactContext reactContext);
```

A delegate that will set `reactContext` for a module. We use it for a stand-alone initialize method, strongly typed JS events and functions.

### `MethodResultCallback`

```csharp
delegate void MethodResultCallback(IJSValueWriter outputWriter);
```

A callback to call JS code with results.

### `MethodDelegate`

```csharp
delegate void MethodDelegate(IJSValueReader inputReader, IJSValueWriter outputWriter, MethodResultCallback resolve, MethodResultCallback reject);
```

A delegate to call native asynchronous method.

### `SyncMethodDelegate`

```csharp
delegate void SyncMethodDelegate(IJSValueReader inputReader, IJSValueWriter outputWriter);
```

A delegate to call native synchronous method.

### `ConstantProviderDelegate`

```csharp
delegate void ConstantProviderDelegate(IJSValueWriter constantWriter);
```

A delegate to gather constants from native modules.



<!-- // Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "IJSValueReader.idl";
import "IJSValueWriter.idl";
import "IReactContext.idl";

namespace Microsoft.ReactNative {

  // A delegate that will set reactContext for a module.
  // We use it for a stand-alone initialize method, strongly typed JS events and functions.
  delegate void InitializerDelegate(IReactContext reactContext);

  // Native method return type.
  enum MethodReturnType {
    Void,
    Callback,
    TwoCallbacks,
    Promise,
  };

  // A callback to call JS code with results.
  delegate void MethodResultCallback(IJSValueWriter outputWriter);

  // A delegate to call native asynchronous method.
  delegate void MethodDelegate(
      IJSValueReader inputReader,
      IJSValueWriter outputWriter,
      MethodResultCallback resolve,
      MethodResultCallback reject);

  // A delegate to call native synchronous method.
  delegate void SyncMethodDelegate(IJSValueReader inputReader, IJSValueWriter outputWriter);

  // A delegate to gather constants from native modules.
  delegate void ConstantProviderDelegate(IJSValueWriter constantWriter);

  // Builds native modules inside of React native code based on the provided meta-data.
  [webhosthidden]
  interface IReactModuleBuilder {
    void AddInitializer(InitializerDelegate initializer);
    void AddConstantProvider(ConstantProviderDelegate constantProvider);
    void AddMethod(String name, MethodReturnType returnType, MethodDelegate method);
    void AddSyncMethod(String name, SyncMethodDelegate method);
  };
} // namespace Microsoft.ReactNative -->
