---
id: ReactApplication
title: ReactApplication
---

Kind: `class`

Extends: [`Application`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Application)



`ReactApplication` provides a base application class for use in applications that are entirely written in React Native. `ReactApplication` will load the React instance on launch of your app for you and provide accessors to your application's [`ReactInstanceSettings`](ReactInstanceSettings) and [`ReactNativeHost`](ReactNativeHost) to customize your React instance.

## Properties
### Host
`readonly`  [`ReactNativeHost`](ReactNativeHost) `Host`

Access to the [`ReactNativeHost`](ReactNativeHost) of your application.

### InstanceSettings
 [`ReactInstanceSettings`](ReactInstanceSettings) `InstanceSettings`

Provides access to your application's [`ReactInstanceSettings`](ReactInstanceSettings).  Generally, changes to these settings will not take effect if the React instance is already loaded, unless the React instance is reloaded, so most settings should be set in your applications constructor.

### JavaScriptBundleFile
 string `JavaScriptBundleFile`

See [`ReactInstanceSettings.JavaScriptBundleFile`](ReactInstanceSettings#javascriptbundlefile).

### JavaScriptMainModuleName
 string `JavaScriptMainModuleName`

> **Deprecated**: Use [`JavaScriptBundleFile`](#javascriptbundlefile) instead

See [`ReactInstanceSettings.JavaScriptMainModuleName`](ReactInstanceSettings#javascriptmainmodulename).

### PackageProviders
`readonly`  [`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`IReactPackageProvider`](IReactPackageProvider)> `PackageProviders`

Provides access to the list of `IReactPackageProvider`'s that the instance will use to provide native modules to the application. This can be used to register additional package providers, such as package providers from community modules. See [`ReactNativeHost`](ReactNativeHost) for more information.

### UseDeveloperSupport
 bool `UseDeveloperSupport`

Should the developer experience features such as the developer menu and `RedBox` be enabled.  See [`ReactInstanceSettings.UseDeveloperSupport`](ReactInstanceSettings#usedevelopersupport).


## Constructors
### ReactApplication
 **`ReactApplication`**()





