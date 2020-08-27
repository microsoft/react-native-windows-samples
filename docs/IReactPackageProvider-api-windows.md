---
id: ireactpackageprovider-api
title: IReactPackageProvider
---

This interface is to be implemented by package creators.


# Reference

## Methods

### `CreatePackage()`

```csharp
void CreatePackage(IReactPackageBuilder packageBuilder);
```

Provides a [`IReactPackageBuilder`](IReactPackageBuilder-api-windows.md) which the app or package will use to register custom native modules and ViewManagers.

<!-- 
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "IReactPackageBuilder.idl";

namespace Microsoft.ReactNative {

  // This interface is to be implemented by package creators.
  [webhosthidden]
  interface IReactPackageProvider {
    void CreatePackage(IReactPackageBuilder packageBuilder);
  };

} // namespace Microsoft.ReactNative -->
