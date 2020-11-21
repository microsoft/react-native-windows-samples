---
id: IReactContext
title: IReactContext
---

Kind: `interface`



## Description
The `IReactContext` object is given to native modules to communicate with other native modules, views, application, and the React Native instance. <br/>It has the same lifetime as the React instance. When the React instance is reloaded or unloaded, the `IReactContext` is destroyed. <br/>- Use the Properties to share native module's data with other components. <br/>- Use the Notifications to exchange events with other components. <br/>- Use `CallJSFunction` to call JavaScript functions, and `EmitJSEvent` to raise JavaScript events.

## Properties
### BundleRootPath
`readonly`  string `BundleRootPath`

### DebugBundlePath
`readonly`  string `DebugBundlePath`

### DebuggerBreakOnNextLine
`readonly`  bool `DebuggerBreakOnNextLine`

### DebuggerPort
`readonly`  uint16_t `DebuggerPort`

### JSDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `JSDispatcher`

Get `ReactDispatcherHelper::JSDispatcherProperty` from the Properties property bag.

### JavaScriptBundleFile
`readonly`  string `JavaScriptBundleFile`

### JsiRuntime
`readonly`  [`JsiRuntime`](JsiRuntime) `JsiRuntime`

Get the JSI runtime for the running React instance. It can be null if Web debugging is used.

### Notifications
`readonly`  [`IReactNotificationService`](IReactNotificationService) `Notifications`

Notifications shared with the [`ReactInstanceSettings.Notifications`](ReactInstanceSettings#notifications). They can be used to exchange events between components. <br/>All subscriptions added to the `IReactContext.Notifications` are automatically removed after the `IReactContext` is destroyed. <br/>The subscriptions added to the `ReactInstanceSettings.Notifications` are kept as long as `ReactInstanceSettings` is alive.

### Properties
`readonly`  [`IReactPropertyBag`](IReactPropertyBag) `Properties`

Properties shared with the [`ReactInstanceSettings.Properties`](ReactInstanceSettings#properties-1). It can be used to share values and state between components.

### SourceBundleHost
`readonly`  string `SourceBundleHost`

### SourceBundlePort
`readonly`  uint16_t `SourceBundlePort`

### UIDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `UIDispatcher`

Get `ReactDispatcherHelper::UIDispatcherProperty` from the Properties property bag.

### UseDirectDebugger
`readonly`  bool `UseDirectDebugger`

### UseFastRefresh
`readonly`  bool `UseFastRefresh`

### UseWebDebugger
`readonly`  bool `UseWebDebugger`



## Methods
### CallJSFunction
void **`CallJSFunction`**(string moduleName, string methodName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Call the JavaScript function named `methodName` of `moduleName`.

### DispatchEvent
void **`DispatchEvent`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string eventName, [`JSValueArgWriter`](JSValueArgWriter) eventDataArgWriter)

> Deprecated: Use `DispatchEvent` on [`XamlUIService`](XamlUIService) instead

### EmitJSEvent
void **`EmitJSEvent`**(string eventEmitterName, string eventName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Call JavaScript module event. It is a specialized `CallJSFunction` call where method name is always 'emit'.


