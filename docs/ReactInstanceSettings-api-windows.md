---
id: reactinstancesettings-api
title: ReactInstanceSettings
---

*Describe the API*

# Reference

## Properties

### ```IReactPropertyBag Properties { get; }```

TODO: Fill in stub

### ```String MainComponentName { get; set; }```

TODO: Fill in stub

### ```UseDeveloperSupport```

```csharp
bool UseDeveloperSupport { get; set; };
```

**Not currently supported**

This property will replace [EnableDeveloperMenu](#EnableDeveloperMenu) in a future version. 

### ```String JavaScriptMainModuleName { get; set; }```

TODO: Fill in stub

### ```String JavaScriptBundleFile { get; set; }```

TODO: Fill in stub

### ```UseWebDebugger```

```csharp
bool UseWebDebugger { get; set; }
```
Should the instance run in a remote environment such as within a browser.
By default, this is using a browser navigated to  http://localhost:8081/debugger-ui served
by Metro/Haul. Debugging will start as soon as the react native instance is loaded.

### ```UseFastRefresh```

```csharp
bool UseFastRefresh { get; set; }
```

Should the instance trigger the hot module reload logic when it first loads the instance.
Most edits should be visible within a second or two without the instance having to reload.
Non-compatible changes still cause full reloads.
See [Fast Refresh](https://reactnative.dev/docs/fast-refresh) for more information on Fast Refresh.

### ```UseLiveReload```

```csharp
bool UseLiveReload { get; set; }
```

Enable live reload to load the source bundle from the React Native packager.
When the file is saved, the packager will trigger reloading.
**For general use this has been replaced by [UseFastRefresh](#usefastrefresh).**

### ```UseDirectDebugger```

```csharp
bool UseDirectDebugger { get; set; };
```

Enables debugging in the JavaScript engine (if supported).  

For Chakra this enables you to debug the JS runtime directly within your app using VisualStudio -> Attach to process (Script)

### ```DebuggerBreakOnNextLine```

```csharp
bool DebuggerBreakOnNextLine { get; set; }
```

For direct debugging, whether to break on the next line of JavaScript that is executed.  This can help debug issues hit early in the JavaScript bundle load.

***Note: this is not supported with the Chakra JS engine which is the currently used JavaScript engine***

### ```Boolean UseJsi { get; set; }```

```csharp
bool UseJsi { get; set; }
```

This controls if the JavaScript bridge should use the newer JSI runtime or use the legacy executor.  The JSI runtime is used by default, and the legacy executor will be removed in a future release. **It is not recommended to change this setting.**


### ```EnableJITCompilation```

```csharp
bool EnableJITCompilation { get; set; }
```

default: true

Flag controlling whether the JavaScript engine uses JIT compilation.

### ```EnableByteCodeCaching```

```csharp
bool EnableByteCodeCaching { get; set; }
```

default: false

For JS engines that support bytecode generation, this controls if bytecode should be generated when a JavaScript bundle is first loaded.  Subsequent runs of the application should be faster as the JavaScript will be loaded from bytecode instead of the raw JavaScript.  [ByteCodeFileUri](#bytecodefileuri) must be set to a location the application has write access to in order for the bytecode to be successfully cached.

### ```EnableDeveloperMenu```

```csharp
bool EnableDeveloperMenu { get; set; };
```

This controls whether various developer experience features are availiable for this instance.  In particular the developer menu, the default RedBox experience and the loading UI during bundle load.

### ```ByteCodeFileUri```

```csharp
string ByteCodeFileUri { get; set; }
```

Set this to a location the application has write access to in order for bytecode to be successfully cached. See [EnableByteCodeCaching](#enablebytecodecaching).

### ```String DebugHost { get; set; }```

default: `localhost:8081`

When using a [UseFastRefresh](#usefastrefresh), [UseLiveReload](#uselivereload) or [UseWebDebugger](#usewebdebugger) this is the server that will be used to load the bundle from.


### ```String DebugBundlePath { get; set; }```

TODO: Fill in stub

### ```BundleRootPath```

```csharp
string BundleRootPath { get; set; }
```

Base path used for the location of the bundle.  If not specified then "ms-appx:///Bundle/" will be used as the base path.

### ```DebuggerPort```

```csharp
ushort DebuggerPort { get; set; }
```

default: `9229`

When [UseDirectDebugger](#usedirectdebugger) is enabled, this controls the port that the JavaScript engine debugger will run on.

### ```RedBoxHandler```

```csharp
IRedBoxHandler RedBoxHandler { get; set; };
```

Provides an extension point to allow custom error handling within the react instance. See [IRedBoxHandler](iredboxhandler-api-windows.md) for more information.


<!-- namespace Microsoft.ReactNative
{
    [webhosthidden]
    runtimeclass ReactInstanceSettings 
    {
    ReactInstanceSettings();

    IReactPropertyBag Properties { get; };
    String MainComponentName { get; set; };
    Boolean UseDeveloperSupport { get; set; };
    String JavaScriptMainModuleName { get; set; };
    String JavaScriptBundleFile { get; set; };
    Boolean UseWebDebugger { get; set; };
    Boolean UseFastRefresh { get; set; };
    Boolean UseLiveReload { get; set; };
    Boolean UseDirectDebugger { get; set; };
    Boolean DebuggerBreakOnNextLine { get; set; };
    Boolean UseJsi { get; set; };
    Boolean EnableJITCompilation { get; set; };
    Boolean EnableByteCodeCaching { get; set; };
    Boolean EnableDeveloperMenu { get; set; };
    String ByteCodeFileUri { get; set; };
    String DebugHost { get; set; };
    String DebugBundlePath { get; set; };
    String BundleRootPath { get; set; };
    UInt16 DebuggerPort { get; set; };
    IRedBoxHandler RedBoxHandler { get; set; };
    }
} -->
