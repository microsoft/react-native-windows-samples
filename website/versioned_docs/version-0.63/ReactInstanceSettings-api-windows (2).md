---
id: version-0.63-ReactInstanceSettings
title: ReactInstanceSettings
original_id: ReactInstanceSettings
---

Kind: `class`



## Properties
### BundleRootPath
 string `BundleRootPath`

### ByteCodeFileUri
 string `ByteCodeFileUri`

### DebugBundlePath
 string `DebugBundlePath`

### DebugHost
 string `DebugHost`

### DebuggerBreakOnNextLine
 bool `DebuggerBreakOnNextLine`

### DebuggerPort
 uint16_t `DebuggerPort`

### EnableByteCodeCaching
 bool `EnableByteCodeCaching`

### EnableDeveloperMenu
 bool `EnableDeveloperMenu`

### EnableJITCompilation
 bool `EnableJITCompilation`

### JSIEngineOverride
 [`JSIEngine`](JSIEngine) `JSIEngineOverride`

### JavaScriptBundleFile
 string `JavaScriptBundleFile`

### JavaScriptMainModuleName
 string `JavaScriptMainModuleName`

### Notifications
`readonly`  [`IReactNotificationService`](IReactNotificationService) `Notifications`

### PackageProviders
`readonly`  [`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`IReactPackageProvider`](IReactPackageProvider)> `PackageProviders`

### Properties
`readonly`  [`IReactPropertyBag`](IReactPropertyBag) `Properties`

### RedBoxHandler
 [`IRedBoxHandler`](IRedBoxHandler) `RedBoxHandler`

### SourceBundleHost
 string `SourceBundleHost`

### SourceBundlePort
 uint16_t `SourceBundlePort`

### UIDispatcher
 [`IReactDispatcher`](IReactDispatcher) `UIDispatcher`

### UseDeveloperSupport
 bool `UseDeveloperSupport`

### UseDirectDebugger
 bool `UseDirectDebugger`

### UseFastRefresh
 bool `UseFastRefresh`

### UseJsi
 bool `UseJsi`

### UseLiveReload
 bool `UseLiveReload`

### UseWebDebugger
 bool `UseWebDebugger`


## Constructors
### ReactInstanceSettings
 **`ReactInstanceSettings`**()







## Referenced by
- [`QuirkSettings`](QuirkSettings)
- [`ReactApplication`](ReactApplication)
- [`ReactNativeHost`](ReactNativeHost)
