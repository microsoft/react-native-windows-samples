---
id: IReactContext
title: IReactContext
---

Kind: `interface`



The `IReactContext` object is given to native modules to communicate with other native modules, views, application, and the React Native instance. 
It has the same lifetime as the React instance. When the React instance is reloaded or unloaded, the `IReactContext` is destroyed. 
- Use the Properties to share native module's data with other components. 
- Use the Notifications to exchange events with other components. 
- Use [`CallJSFunction`](#calljsfunction) to call JavaScript functions, and [`EmitJSEvent`](#emitjsevent) to raise JavaScript events. 
- Use [`UIDispatcher`](#uidispatcher) to schedule work in the UI thread. 
- Use [`JSDispatcher`](#jsdispatcher) to schedule work in the JavaScript thread.

## Properties
### JSDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `JSDispatcher`

Get the JS thread dispatcher. 
It is a shortcut for the [`ReactDispatcherHelper.JSDispatcherProperty`](ReactDispatcherHelper#jsdispatcherproperty) from the [`Properties`](#properties-1) property bag.

### JSRuntime
`readonly`  Object `JSRuntime`

Get the JavaScript runtime for the running React instance. It can be null if Web debugging is used.

### Notifications
`readonly`  [`IReactNotificationService`](IReactNotificationService) `Notifications`

Notifications shared with the [`ReactInstanceSettings.Notifications`](ReactInstanceSettings#notifications). They can be used to exchange events between components. 
All subscriptions added to the `IReactContext.Notifications` are automatically removed after the `IReactContext` is destroyed. 
The subscriptions added to the `ReactInstanceSettings.Notifications` are kept as long as `ReactInstanceSettings` is alive.

### Properties
`readonly`  [`IReactPropertyBag`](IReactPropertyBag) `Properties`

Properties shared with the [`ReactInstanceSettings.Properties`](ReactInstanceSettings#properties-1). It can be used to share values and state between components.

### SettingsSnapshot
`readonly`  [`IReactSettingsSnapshot`](IReactSettingsSnapshot) `SettingsSnapshot`

Get settings snapshot that were used to start the React instance.

### UIDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `UIDispatcher`

Get the UI thread dispatcher. 
It is a shortcut for the [`ReactDispatcherHelper.UIDispatcherProperty`](ReactDispatcherHelper#uidispatcherproperty) from the [`Properties`](#properties-1) property bag.



## Methods
### CallJSFunction
void **`CallJSFunction`**(string moduleName, string methodName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Call the JavaScript function named `methodName` of `moduleName`.



### DispatchEvent
void **`DispatchEvent`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string eventName, [`JSValueArgWriter`](JSValueArgWriter) eventDataArgWriter)

> **Deprecated**: Use [`XamlUIService.DispatchEvent`](XamlUIService#dispatchevent) instead



### EmitJSEvent
void **`EmitJSEvent`**(string eventEmitterName, string eventName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Call JavaScript module event. It is a specialized `CallJSFunction` call where method name is always 'emit'.






## Referenced by
- [`IViewManagerWithReactContext`](IViewManagerWithReactContext)
- [`InitializerDelegate`](InitializerDelegate)
- [`InstanceCreatedEventArgs`](InstanceCreatedEventArgs)
- [`InstanceDestroyedEventArgs`](InstanceDestroyedEventArgs)
- [`InstanceLoadedEventArgs`](InstanceLoadedEventArgs)
- [`ReactNativeHost`](ReactNativeHost)
- [`XamlUIService`](XamlUIService)
