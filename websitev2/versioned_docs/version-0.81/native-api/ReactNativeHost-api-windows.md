---
id: ReactNativeHost
title: ReactNativeHost
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

## New Architecture

Kind: `class`

This is the main entry-point to create a React instance.
The `ReactNativeHost` object exists to configure the instance using [`ReactInstanceSettings`](ReactInstanceSettings) before it is loaded, as well as enabling control of when to load the instance.
Use [`ReactInstanceSettings`](ReactInstanceSettings) events to observe instance creation, loading, and destruction.

### Properties
#### InstanceSettings
 [`ReactInstanceSettings`](ReactInstanceSettings) `InstanceSettings`

Provides access to this host's [`ReactInstanceSettings`](ReactInstanceSettings) to configure the react instance.

#### PackageProviders
`readonly`  [`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`IReactPackageProvider`](IReactPackageProvider)> `PackageProviders`

Provides access to the list of [`IReactPackageProvider`](IReactPackageProvider)'s that the React instance will use to provide native modules to the application. This can be used to register additional package providers, such as package providers from community modules or other shared libraries.

### Constructors
#### ReactNativeHost
 **`ReactNativeHost`**()

### Methods
#### FromContext
`static` [`ReactNativeHost`](ReactNativeHost) **`FromContext`**([`IReactContext`](IReactContext) reactContext)

Returns the [`ReactNativeHost`](ReactNativeHost) instance associated with the given [`IReactContext`](IReactContext).

#### LoadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`LoadInstance`**()

Loads a new React instance. It is an alias for [`ReloadInstance`](#reloadinstance) method.

#### ReloadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`ReloadInstance`**()

Unloads the current React instance and loads a new one.
The React instance loading creates an instance of the JavaScript engine, and launches the provided JavaScript code bundle.
If a React instance is already running in this host, then [`ReloadInstance`](#reloadinstance) shuts down the already the running React instance, and loads a new React instance.
The React instance lifecycle can be observed with the following events:- The [`ReactInstanceSettings.InstanceCreated`](ReactInstanceSettings#instancecreated) event is raised when the React instance is just created.
- The [`ReactInstanceSettings.InstanceLoaded`](ReactInstanceSettings#instanceloaded) event is raised when the React instance completed  loading the JavaScript bundle.
- The [`ReactInstanceSettings.InstanceDestroyed`](ReactInstanceSettings#instancedestroyed) event is raised when the React instance is destroyed.

#### UnloadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`UnloadInstance`**()

Unloads current React instance.
After the React instance is unloaded, all the React resources including the JavaScript engine environment are cleaned up.
The React instance destruction can be observed with the [`ReactInstanceSettings.InstanceDestroyed`](ReactInstanceSettings#instancedestroyed) event.

### Referenced by
- [`IReactViewHost`](IReactViewHost)
- [`ReactCoreInjection`](ReactCoreInjection)
- [`ReactNativeWin32App`](ReactNativeWin32App)
- [`RedBoxHelper`](RedBoxHelper)

## Old Architecture

Kind: `class`

This is the main entry-point to create a React instance.
The `ReactNativeHost` object exists to configure the instance using [`ReactInstanceSettings`](ReactInstanceSettings) before it is loaded, as well as enabling control of when to load the instance.
Use [`ReactInstanceSettings`](ReactInstanceSettings) events to observe instance creation, loading, and destruction.

### Properties
#### InstanceSettings
 [`ReactInstanceSettings`](ReactInstanceSettings) `InstanceSettings`

Provides access to this host's [`ReactInstanceSettings`](ReactInstanceSettings) to configure the react instance.

#### PackageProviders
`readonly`  [`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`IReactPackageProvider`](IReactPackageProvider)> `PackageProviders`

Provides access to the list of [`IReactPackageProvider`](IReactPackageProvider)'s that the React instance will use to provide native modules to the application. This can be used to register additional package providers, such as package providers from community modules or other shared libraries.

### Constructors
#### ReactNativeHost
 **`ReactNativeHost`**()

### Methods
#### FromContext
`static` [`ReactNativeHost`](ReactNativeHost) **`FromContext`**([`IReactContext`](IReactContext) reactContext)

Returns the [`ReactNativeHost`](ReactNativeHost) instance associated with the given [`IReactContext`](IReactContext).

#### LoadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`LoadInstance`**()

Loads a new React instance. It is an alias for [`ReloadInstance`](#reloadinstance) method.

#### ReloadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`ReloadInstance`**()

Unloads the current React instance and loads a new one.
The React instance loading creates an instance of the JavaScript engine, and launches the provided JavaScript code bundle.
If a React instance is already running in this host, then [`ReloadInstance`](#reloadinstance) shuts down the already the running React instance, and loads a new React instance.
The React instance lifecycle can be observed with the following events:- The [`ReactInstanceSettings.InstanceCreated`](ReactInstanceSettings#instancecreated) event is raised when the React instance is just created.
- The [`ReactInstanceSettings.InstanceLoaded`](ReactInstanceSettings#instanceloaded) event is raised when the React instance completed  loading the JavaScript bundle.
- The [`ReactInstanceSettings.InstanceDestroyed`](ReactInstanceSettings#instancedestroyed) event is raised when the React instance is destroyed.

#### UnloadInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`UnloadInstance`**()

Unloads current React instance.
After the React instance is unloaded, all the React resources including the JavaScript engine environment are cleaned up.
The React instance destruction can be observed with the [`ReactInstanceSettings.InstanceDestroyed`](ReactInstanceSettings#instancedestroyed) event.

### Referenced by
- [`IReactViewHost`](IReactViewHost)
- [`ReactApplication`](ReactApplication)
- [`ReactCoreInjection`](ReactCoreInjection)
- [`ReactRootView`](ReactRootView)
- [`RedBoxHelper`](RedBoxHelper)

