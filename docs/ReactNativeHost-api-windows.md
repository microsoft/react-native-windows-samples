---
id: reactnativehost-api
title: ReactNativeHost
---

*Describe the API*

# Reference

## Methods

### ```OnSuspend()```

TODO: Fill in stub

### ```OnEnteredBackground()```

TODO: Fill in stub

### ```OnLeavingBackground()```

TODO: Fill in stub

### ```OnResume(OnResumeAction action)```

TODO: Fill in stub

### ```Windows.UI.Xaml.UIElement GetOrCreateRootView(IInspectable initialProps)```

TODO: Fill in stub

## Properties

### ```ReactInstanceManager ReactInstanceManager```

TODO: Fill in stub

### ```ReactInstanceSettings InstanceSettings ```

TODO: Fill in stub

### ```Boolean HasInstance```

TODO: Fill in stub

### ```overridable IVectorView<Microsoft.ReactNative.Bridge.IReactPackage> Packages```

TODO: Fill in stub

### ```overridable String MainComponentName```

TODO: Fill in stub

### ```overridable Boolean UseDeveloperSupport```

TODO: Fill in stub

### ```overridable String JavaScriptMainModuleName```

TODO: Fill in stub

### ```overridable String JavaScriptBundleFile```

TODO: Fill in stub

## Events

### `OnResumeAction()`

TODO: Fill in stub


<!-- // Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import "IReactPackage.idl";
import "NativeModuleBase.idl";
import "ReactInstanceManager.idl";
import "ReactInstanceSettings.idl";
import "ReactRootView.idl";

namespace Microsoft.ReactNative
{
  [webhosthidden]
  delegate void OnResumeAction();

  [webhosthidden]
  [default_interface]
  unsealed runtimeclass ReactNativeHost
  {
    ReactNativeHost();

    ReactInstanceManager ReactInstanceManager{ get; };
    ReactInstanceSettings InstanceSettings { get; };

    Boolean HasInstance{ get; };

    overridable IVectorView<Microsoft.ReactNative.Bridge.IReactPackage> Packages{ get; };

    overridable String MainComponentName{ get; };
    overridable Boolean UseDeveloperSupport{ get; };
    overridable String JavaScriptMainModuleName{ get; };
    overridable String JavaScriptBundleFile{ get; };

    Windows.UI.Xaml.UIElement GetOrCreateRootView(IInspectable initialProps);

    void OnSuspend();
    void OnEnteredBackground();
    void OnLeavingBackground();
    void OnResume(OnResumeAction action);
  };
} -->
