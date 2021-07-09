---
id: version-0.65-ReactApplication
title: ReactApplication
original_id: ReactApplication
---

Kind: `class`

Extends: [`Application`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Application)



The `ReactApplication` is a base application class for use in applications that are entirely written in React Native. When the app launches, the `ReactApplication` will load the React instance. Use [`ReactInstanceSettings`](ReactInstanceSettings) and [`ReactNativeHost`](ReactNativeHost) properties to customize React instance in your application's constructor.

## Properties
### Host
`readonly`  [`ReactNativeHost`](ReactNativeHost) `Host`

Access to the [`ReactNativeHost`](ReactNativeHost) of your application.

### InstanceSettings
 [`ReactInstanceSettings`](ReactInstanceSettings) `InstanceSettings`

Provides access to your application's [`ReactInstanceSettings`](ReactInstanceSettings).
Generally, changes to these settings will not take effect if the React instance is already loaded, unless the React instance is reloaded, so most settings should be set in your application's constructor.

### JavaScriptBundleFile
 string `JavaScriptBundleFile`

See [`ReactInstanceSettings.JavaScriptBundleFile`](ReactInstanceSettings#javascriptbundlefile).

### PackageProviders
`readonly`  [`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`IReactPackageProvider`](IReactPackageProvider)> `PackageProviders`

Provides access to the list of `IReactPackageProvider`'s that the instance will use to provide native modules to the application. This can be used to register additional package providers, such as package providers from community modules. See [`ReactNativeHost`](ReactNativeHost) for more information.

### UseDeveloperSupport
 bool `UseDeveloperSupport`

Controls whether the developer experience features such as the developer menu and `RedBox` are enabled.
See [`ReactInstanceSettings.UseDeveloperSupport`](ReactInstanceSettings#usedevelopersupport).


## Constructors
### ReactApplication
 **`ReactApplication`**()

Creates a new instance of [`ReactApplication`](ReactApplication)





