---
id: ireactpackagebuilder-api
title: IReactPackageBuilder
---

*Describe the API*

# Reference

## Methods

### ```void AddModule(String moduleName, ReactModuleProvider moduleProvider)```

TODO: Fill in stubs

### ```void AddViewManager(String viewManagerName, ReactViewManagerProvider viewManagerProvider)```

TODO: Fill in stubs


## Delegates

### ```delegate Object ReactModuleProvider(IReactModuleBuilder moduleBuilder)```

TODO: Fill in stubs

### ```delegate IViewManager ReactViewManagerProvider()```

TODO: Fill in stubs


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
