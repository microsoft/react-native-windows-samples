---
id: IReactSettingsSnapshot
title: IReactSettingsSnapshot
---

Kind: `interface`



An immutable snapshot of the [`ReactInstanceSettings`](ReactInstanceSettings) used to create the current React instance.

## Properties
### BundleRootPath
`readonly`  string `BundleRootPath`

A read-only snapshot of the [`ReactInstanceSettings.BundleRootPath`](ReactInstanceSettings#bundlerootpath) property value at the time when the React instance was created.
Base path used for the location of the bundle.

### DebugBundlePath
`readonly`  string `DebugBundlePath`

A read-only snapshot of the [`ReactInstanceSettings.DebugBundlePath`](ReactInstanceSettings#debugbundlepath) property value at the time when the React instance was created.
When loading from a bundle server (such as metro), this is the path that will be requested from the server.

### DebuggerBreakOnNextLine
`readonly`  bool `DebuggerBreakOnNextLine`

A read-only snapshot of the [`ReactInstanceSettings.DebuggerBreakOnNextLine`](ReactInstanceSettings#debuggerbreakonnextline) property value at the time when the React instance was created.
For direct debugging, controls whether to break on the next line of JavaScript that is executed.
This can help debug issues hit early in the JavaScript bundle load.
***Note: this is not supported with the Chakra JS engine which is the currently used JavaScript engine. As a workaround you could add the `debugger` keyword in the beginning of the bundle.***

### DebuggerPort
`readonly`  uint16_t `DebuggerPort`

A read-only snapshot of the [`ReactInstanceSettings.DebuggerPort`](ReactInstanceSettings#debuggerport) property value at the time when the React instance was created.
When [`UseDirectDebugger`](#usedirectdebugger) is enabled, this controls the port that the JavaScript engine debugger will run on.

### JavaScriptBundleFile
`readonly`  string `JavaScriptBundleFile`

A read-only snapshot of the [`ReactInstanceSettings.JavaScriptBundleFile`](ReactInstanceSettings#javascriptbundlefile) property value at the time when the React instance was created.
The name of the JavaScript bundle file to load. This should be a relative path from [`BundleRootPath`](#bundlerootpath). The `.bundle` extension will be appended to the end, when looking for the bundle file.

### SourceBundleHost
`readonly`  string `SourceBundleHost`

A read-only snapshot of the [`ReactInstanceSettings.SourceBundleHost`](ReactInstanceSettings#sourcebundlehost) property value at the time when the React instance was created.
When using a [`UseFastRefresh`](#usefastrefresh), [`UseLiveReload`](#uselivereload), or [`UseWebDebugger`](#usewebdebugger) this is the server hostname that will be used to load the bundle from.

### SourceBundlePort
`readonly`  uint16_t `SourceBundlePort`

A read-only snapshot of the [`ReactInstanceSettings.SourceBundlePort`](ReactInstanceSettings#sourcebundleport) property value at the time when the React instance was created.
When using a [`UseFastRefresh`](#usefastrefresh), [`UseLiveReload`](#uselivereload), or [`UseWebDebugger`](#usewebdebugger) this is the server port that will be used to load the bundle from.

### UseDirectDebugger
`readonly`  bool `UseDirectDebugger`

A read-only snapshot of the [`ReactInstanceSettings.UseDirectDebugger`](ReactInstanceSettings#usedirectdebugger) property value at the time when the React instance was created.
Enables debugging in the JavaScript engine (if supported).
For Chakra this enables debugging of the JS runtime directly within the app using Visual Studio -> Attach to process (Script)

### UseFastRefresh
`readonly`  bool `UseFastRefresh`

A read-only snapshot of the [`ReactInstanceSettings.UseFastRefresh`](ReactInstanceSettings#usefastrefresh) property value at the time when the React instance was created.
Controls whether the instance triggers the hot module reload logic when it first loads the instance.
Most edits should be visible within a second or two without the instance having to reload.
Non-compatible changes still cause full reloads.
See [Fast Refresh](https://reactnative.dev/docs/fast-refresh) for more information on Fast Refresh.

### UseWebDebugger
`readonly`  bool `UseWebDebugger`

A read-only snapshot of the [`ReactInstanceSettings.UseWebDebugger`](ReactInstanceSettings#usewebdebugger) property value at the time when the React instance was created.
Controls whether the instance JavaScript runs in a remote environment such as within a browser.
By default, this is using a browser navigated to http://localhost:8081/debugger-ui served by Metro/Haul.
Debugging will start as soon as the react native instance is loaded.






## Referenced by
- [`IReactContext`](IReactContext)
