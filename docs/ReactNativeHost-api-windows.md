---
id: reactnativehost-api
title: ReactNativeHost
---

This is the main entry-point to create a react-native instance.  The ReactNativeHost object exists to configure the instance using [ReactInstanceSettings](ReactInstanceSettings-api-windows.md) before its loaded, as well as enabling control of when to load the instance. 


_In the future more lifecycle events will be added to this object to provide better information on when an instance is loaded and unloaded._

# Reference

## Methods

### `ReloadInstance()`

```csharp
void ReloadInstance();
```

This is used to load the instance, which will create an instance of the JS engine and launch your JavaScript code.  If an instance of this host is already running, this will shutdown the already runnng instance, and load a new instance. 

## Properties

### `PackageProviders`

```csharp
IVector<IReactPackageProvider> PackageProviders { get; }
```


Provides access to the list of `IReactPackageProvider`'s that the react instance will use to provide native modules to the application.  This can be used to register additional package providers, such as package providers from community modules or other shared libraries

```csharp
  PackageProviders.Add(new Microsoft.ReactNative.Managed.ReactPackageProvider()); // Includes any modules in this project
  PackageProviders.Add(new SomeCommunityPackage.ReactPackageProvider());
  PackageProviders.Add(new AnotherCommunityPackage.ReactPackageProvider());
```

### `InstanceSettings`

```csharp
ReactInstanceSettings InstanceSettings { get; set; }
```

Provides access to your this host's [ReactInstanceSettings](ReactInstanceSettings-api-windows.md) to configure the react instance.

<!-- // Copyright (c) Microsoft Corporation. All rights reserved.
namespace Microsoft.ReactNative {

  [webhosthidden]
  delegate void OnResumeAction();

  [webhosthidden]
  [default_interface]
  runtimeclass ReactNativeHost {
    ReactNativeHost();

    IVector<IReactPackageProvider> PackageProviders { get; set; };
    ReactInstanceSettings InstanceSettings { get; set; };

    void ReloadInstance();
  }
} // namespace Microsoft.ReactNative

-->
