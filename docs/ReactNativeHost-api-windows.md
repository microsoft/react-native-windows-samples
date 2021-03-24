---
id: ReactNativeHost
title: ReactNativeHost
---

Kind: `class`



This is the main entry-point to create a react-native instance.  The `ReactNativeHost` object exists to configure the instance using [`ReactInstanceSettings`](ReactInstanceSettings) before its loaded, as well as enabling control of when to load the instance. <br/>_In the future more lifecycle events will be added to this object to provide better information on when an instance is loaded and unloaded._

## Properties
### InstanceSettings
 [`ReactInstanceSettings`](ReactInstanceSettings) `InstanceSettings`

Provides access to your this host's [`ReactInstanceSettings`](ReactInstanceSettings) to configure the react instance.

### PackageProviders
`readonly`  [`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`IReactPackageProvider`](IReactPackageProvider)> `PackageProviders`

Provides access to the list of `IReactPackageProvider`'s that the react instance will use to provide native modules to the application.  This can be used to register additional package providers, such as package providers from community modules or other shared libraries


## Constructors
### ReactNativeHost
 **`ReactNativeHost`**()




## Methods
### FromContext
`static` [`ReactNativeHost`](ReactNativeHost) **`FromContext`**([`IReactContext`](IReactContext) reactContext)



### LoadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`LoadInstance`**()



### ReloadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`ReloadInstance`**()

This is used to load the instance, which will create an instance of the JS engine and launch your JavaScript code.  If an instance of this host is already running, this will shutdown the already running instance, and load a new instance.



### UnloadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`UnloadInstance`**()






## Referenced by
- [`ReactApplication`](ReactApplication)
- [`ReactRootView`](ReactRootView)
- [`RedBoxHelper`](RedBoxHelper)
