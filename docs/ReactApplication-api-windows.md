---
id: reactapplication-api
title: ReactApplication
---

ReactApplication provides a BaseApplication class for use in applications that are entirely written in react-native.  ReactApplication will load the react instance on launch of your app for you and provide accessors to your application's [ReactInstanceSettings](ReactInstanceSettings-api-windows.md) and [ReactNativeHost](ReactNativeHost-api-windows.md) to customize your react instance.
*Describe the API*

# Reference

## Properties

### ```ReactInstanceSettings InstanceSettings { get; set; }```

Provides access to your application's [ReactInstanceSettings](ReactInstanceSettings-api-windows.md).  Generally changes to these settings will not take affect if the react instance is already loaded, unless the react instance is reloaded.  So most settings should be set in your applications constructor.

### ```IVector<IReactPackageProvider> PackageProviders { get; }```

Provides access to the list of `IReactPackageProvider`'s that the instance will use to provide native modules to the application.  This can be used to register additional package providers, such as package providers from community modules. See [ReactNativeHost](ReactNativeHost-api-windows.md) for more information.

### ```ReactNativeHost Host { get; }```

TODO: Fill in stub

### ```Boolean UseDeveloperSupport { get; set; }```

TODO: Fill in stub

### ```String JavaScriptMainModuleName { get; set; }```

TODO: Fill in stub

### ```String JavaScriptBundleFile { get; set; }```

TODO: Fill in stub

<!-- // Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import "ReactNativeHost.idl";
import "ReactApplicationDelegate.idl";


namespace Microsoft.ReactNative {

  [webhosthidden]
  [default_interface]
  unsealed runtimeclass ReactApplication : XAML_NAMESPACE.Application {
    ReactApplication();

    ReactInstanceSettings InstanceSettings { get; set; };
    IVector<IReactPackageProvider> PackageProviders { get; };
    ReactNativeHost Host { get; };

    Boolean UseDeveloperSupport { get; set; };
    String JavaScriptMainModuleName { get; set; };
    String JavaScriptBundleFile { get; set; };
  }
} // namespace Microsoft.ReactNative
-->


