---
id: version-0.63-ireactpackagebuilder-api
title: IReactPackageBuilder
original_id: ireactpackagebuilder-api
---

A `ReactPackageBuilder` provides the react instance with all the NativeModules and ViewManagers that will be available in the react instance.

# Reference

## Methods

### `AddModule()`

```csharp
void AddModule(String moduleName, ReactModuleProvider moduleProvider);
```

Adds a custom NativeModule. See [ReactModuleProvider](#reactmoduleprovider).

### `AddViewManager()`

```csharp
void AddViewManager(String viewManagerName, ReactViewManagerProvider viewManagerProvider);
```

Adds a custom NativeModule. See [ReactViewManagerProvider](#reactviewmanagerprovider).


## Delegates

### `ReactModuleProvider`

```csharp
delegate Object ReactModuleProvider(IReactModuleBuilder moduleBuilder);
```

Provides information about a custom NativeModule.  See [IReactModuleBuilder](IReactModuleBuilder-api-windows.md).

### `ReactViewManagerProvider`

```csharp
delegate IViewManager ReactViewManagerProvider();
```

Provides information about a custom ViewManager.  See [IViewManager](IViewManager-api-windows.md).


<!-- // Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "IReactContext.idl";
import "IReactModuleBuilder.idl";
import "IViewManager.idl";

namespace Microsoft.ReactNative {

  delegate Object ReactModuleProvider(IReactModuleBuilder moduleBuilder);
  delegate IViewManager ReactViewManagerProvider();

  [webhosthidden]
  interface IReactPackageBuilder {
    void AddModule(String moduleName, ReactModuleProvider moduleProvider);
    void AddViewManager(String viewManagerName, ReactViewManagerProvider viewManagerProvider);
  }

  [webhosthidden]
  interface IReactPackageBuilderExperimental
    requires IReactPackageBuilder {
    void AddTurboModule(String moduleName, ReactModuleProvider moduleProvider);
  }
} // namespace Microsoft.ReactNative -->
