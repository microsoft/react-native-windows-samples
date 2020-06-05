---
id: ireactmodulebuilder-api
title: IReactModuleBuilder
---

Builds native modules inside of React native code based on the provided meta-data.

# Reference

## Methods

### ```void AddInitializer(InitializerDelegate initializer)```

TODO: Fill in stubs

### ```void AddConstantProvider(ConstantProviderDelegate constantProvider)```

TODO: Fill in stubs

### ```void AddMethod(String name, MethodReturnType returnType, MethodDelegate method)```

TODO: Fill in stubs

### ```void AddSyncMethod(String name, SyncMethodDelegate method)```

TODO: Fill in stubs


## Delegates

### ```delegate void InitializerDelegate(IReactContext reactContext)```

A delegate that will set reactContext for a module. We use it for a stand-alone initialize method, strongly typed JS events and functions.

### ```delegate void MethodResultCallback(IJSValueWriter outputWriter)```

A callback to call JS code with results.

### ```delegate void MethodDelegate(IJSValueReader inputReader, IJSValueWriter outputWriter, MethodResultCallback resolve, MethodResultCallback reject)```

A delegate to call native asynchronous method.

### ```delegate void SyncMethodDelegate(IJSValueReader inputReader, IJSValueWriter outputWriter)```

A delegate to call native synchronous method.

### ```delegate void ConstantProviderDelegate(IJSValueWriter constantWriter)```

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
