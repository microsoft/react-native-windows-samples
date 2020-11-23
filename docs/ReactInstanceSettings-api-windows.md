---
id: ReactInstanceSettings
title: ReactInstanceSettings
---

Kind: `class`



Provides configuration of the react instance.

## Properties
### BundleRootPath
 string `BundleRootPath`

**Default value**: `ms-appx:///Bundle/`

Base path used for the location of the bundle.

### ByteCodeFileUri
 string `ByteCodeFileUri`

Set this to a location the application has write access to in order for bytecode to be successfully cached. See [`EnableByteCodeCaching`](#enablebytecodecaching).

### DebugBundlePath
 string `DebugBundlePath`

When loading from a bundle server (such as metro), this is the path that will be requested from the server.  If this is not provided the value of [`JavaScriptBundleFile`](#javascriptbundlefile) or [`JavaScriptMainModuleName`](#javascriptmainmodulename) is used.

### DebugHost
 string `DebugHost`

> **Deprecated**: This has been replaced with [`SourceBundleHost`](#sourcebundlehost) and [`SourceBundlePort`](#sourcebundleport) and will be removed in a future version.

**Default value**: `localhost:8081`

When using a [`UseFastRefresh`](#usefastrefresh), [`UseLiveReload`](#uselivereload) or [`UseWebDebugger`](#usewebdebugger) this is the server that will be used to load the bundle from.

### DebuggerBreakOnNextLine
 bool `DebuggerBreakOnNextLine`

For direct debugging, whether to break on the next line of JavaScript that is executed.  This can help debug issues hit early in the JavaScript bundle load.<br/>***Note: this is not supported with the Chakra JS engine which is the currently used JavaScript engine***

### DebuggerPort
 uint16_t `DebuggerPort`

**Default value**: `9229`

When [`UseDirectDebugger`](#usedirectdebugger) is enabled, this controls the port that the JavaScript engine debugger will run on.

### EnableByteCodeCaching
 bool `EnableByteCodeCaching`

**Default value**: `false`

For JS engines that support bytecode generation, this controls if bytecode should be generated when a JavaScript bundle is first loaded.<br/>Subsequent runs of the application should be faster as the JavaScript will be loaded from bytecode instead of the raw JavaScript.  <br/>[`ByteCodeFileUri`](#bytecodefileuri) must be set to a location the application has write access to in order for the bytecode to be successfully cached.

### EnableDeveloperMenu
 bool `EnableDeveloperMenu`

> **Deprecated**: This property has been replaced by [`UseDeveloperSupport`](#usedevelopersupport). In version 0.63 both properties will do the same thing.

This controls whether various developer experience features are available for this instance.  In particular the developer menu, the default `RedBox` experience and the loading UI during bundle load.

### EnableJITCompilation
 bool `EnableJITCompilation`

**Default value**: `true`

Flag controlling whether the JavaScript engine uses JIT compilation.

### JSIEngineOverride
 [`JSIEngine`](JSIEngine) `JSIEngineOverride`

### JavaScriptBundleFile
 string `JavaScriptBundleFile`

**Default value**: `index.windows`

The name of the JavaScript bundle file to load. This should be a relative path from [`BundleRootPath`](#bundlerootpath).  `.bundle` will be appended to the end, when looking for the bundle file.

### JavaScriptMainModuleName
 string `JavaScriptMainModuleName`

> **Deprecated**: use JavaScriptBundleFile instead

Name of the JavaScript bundle file.  If [`JavaScriptBundleFile`](#javascriptbundlefile) is specified it is used instead.

### Notifications
`readonly`  [`IReactNotificationService`](IReactNotificationService) `Notifications`

Provides access to the `IReactNotificationService`, which allows easy communication between custom native modules or view managers.

### PackageProviders
`readonly`  [`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`IReactPackageProvider`](IReactPackageProvider)> `PackageProviders`

Provides a list of additional native modules and custom view managers that should be included in the instance.

### Properties
`readonly`  [`IReactPropertyBag`](IReactPropertyBag) `Properties`

Properties are shared with [`IReactContext.Properties`](IReactContext#properties-1). It can be used to configure and share values and state between components.

### RedBoxHandler
 [`IRedBoxHandler`](IRedBoxHandler) `RedBoxHandler`

Provides an extension point to allow custom error handling within the react instance. See [`IRedBoxHandler`](IRedBoxHandler) for more information.

### SourceBundleHost
 string `SourceBundleHost`

**Default value**: `localhost`

When using a [`UseFastRefresh`](#usefastrefresh), [`UseLiveReload`](#uselivereload) or [`UseWebDebugger`](#usewebdebugger) this is the server hostname that will be used to load the bundle from.

### SourceBundlePort
 uint16_t `SourceBundlePort`

**Default value**: `8081`

When using a [`UseFastRefresh`](#usefastrefresh), [`UseLiveReload`](#uselivereload) or [`UseWebDebugger`](#usewebdebugger) this is the server port that will be used to load the bundle from.

### UIDispatcher
 [`IReactDispatcher`](IReactDispatcher) `UIDispatcher`

Control the main UI dispatcher to be used by the React instance.  If the [`ReactSettingsInstance`](ReactSettingsInstance) object is initially created on a UI thread, then this will default to that thread.  The value provided here will be available to native modules and view managers using [`IReactContext.UIDispatcher`](IReactContext#uidispatcher)

### UseDeveloperSupport
 bool `UseDeveloperSupport`

This controls whether various developer experience features are available for this instance.  In particular the developer menu, the default `RedBox` and `LogBox` experience and loading UI during bundle load.

### UseDirectDebugger
 bool `UseDirectDebugger`

Enables debugging in the JavaScript engine (if supported).  <br/>For Chakra this enables you to debug the JS runtime directly within your app using Visual Studio -> Attach to process (Script)

### UseFastRefresh
 bool `UseFastRefresh`

Should the instance trigger the hot module reload logic when it first loads the instance.<br/>Most edits should be visible within a second or two without the instance having to reload.<br/>Non-compatible changes still cause full reloads.<br/>See [Fast Refresh](https://reactnative.dev/docs/fast-refresh) for more information on Fast Refresh.

### UseJsi
 bool `UseJsi`

This controls if the JavaScript bridge should use the newer JSI runtime or use the legacy executor.  The JSI runtime is used by default, and the legacy executor will be removed in a future release. <br/>> **It is not recommended to change this setting.**

### UseLiveReload
 bool `UseLiveReload`

Enable live reload to load the source bundle from the React Native packager.<br/>When the file is saved, the packager will trigger reloading.<br/>**For general use this has been replaced by [`UseFastRefresh`](#usefastrefresh).**

### UseWebDebugger
 bool `UseWebDebugger`

Should the instance run in a remote environment such as within a browser.<br/>By default, this is using a browser navigated to  http://localhost:8081/debugger-ui served by Metro/Haul.<br/>Debugging will start as soon as the react native instance is loaded.


## Constructors
### ReactInstanceSettings
 **`ReactInstanceSettings`**()





## Events
### `InstanceCreated`
Type: [`InstanceCreatedEventArgs`](InstanceCreatedEventArgs)
### `InstanceDestroyed`
Type: [`InstanceDestroyedEventArgs`](InstanceDestroyedEventArgs)
### `InstanceLoaded`
Type: [`InstanceLoadedEventArgs`](InstanceLoadedEventArgs)
