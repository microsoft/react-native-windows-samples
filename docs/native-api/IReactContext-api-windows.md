﻿---
id: IReactContext
title: IReactContext
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

## New Architecture

Kind: `interface`

The `IReactContext` object is a weak pointer to the React instance. It allows native modules and view managers to communicate with the application, and with other native modules and view managers.
Since the [`IReactContext`](IReactContext) is a weak pointer to the React instance, some of its functionality becomes unavailable after the React instance is unloaded. When a React instance is reloaded inside of the [`ReactNativeHost`](ReactNativeHost), the previous React instance is unloaded and then a new React instance is created with a new [`IReactContext`](IReactContext).
- Use the [`Properties`](#properties-1) to share native module's data with other components.
- Use the [`Notifications`](#notifications) to exchange events with other components.
- Use [`CallJSFunction`](#calljsfunction) to call JavaScript functions, and [`EmitJSEvent`](#emitjsevent) to raise JavaScript events.
- Use [`UIDispatcher`](#uidispatcher) to post asynchronous work in the UI thread.
- Use [`JSDispatcher`](#jsdispatcher) to post asynchronous work in the JavaScript engine thread.

### Properties
#### CallInvoker
`readonly`  [`CallInvoker`](CallInvoker) `CallInvoker`

used to schedule work on the JS runtime. Most direct usage of this should be avoided by using ReactContext.CallInvoker.

#### JSDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `JSDispatcher`

> **Deprecated**: Use [`IReactContext.CallInvoker`](IReactContext#callinvoker) instead

Gets the JavaScript engine thread dispatcher.
It is a shortcut for the [`ReactDispatcherHelper.JSDispatcherProperty`](ReactDispatcherHelper#jsdispatcherproperty) from the [`Properties`](#properties-1) property bag.

#### JSRuntime
`readonly`  Object `JSRuntime`

Gets the JavaScript runtime for the running React instance.
It can be null if Web debugging is used.
**Note: do not use this property directly. It is an experimental property will be removed in a future version.
Deprecated for new Arch: Use [`IReactContext.CallInvoker`](IReactContext#callinvoker) instead.

#### LoadingState
`readonly`  [`LoadingState`](LoadingState) `LoadingState`

Gets the state of the ReactNative instance.

#### Notifications
`readonly`  [`IReactNotificationService`](IReactNotificationService) `Notifications`

Gets the [`IReactNotificationService`](IReactNotificationService) shared with the [`ReactInstanceSettings.Notifications`](ReactInstanceSettings#notifications).
It can be used to send notifications events between components and the application.
All notification subscriptions added to the [`IReactContext.Notifications`](IReactContext#notifications) are automatically removed after the [`IReactContext`](IReactContext) is destroyed.
The notification subscriptions added to the [`ReactInstanceSettings.Notifications`](ReactInstanceSettings#notifications) are kept as long as the [`ReactInstanceSettings`](ReactInstanceSettings) is alive.

#### Properties
`readonly`  [`IReactPropertyBag`](IReactPropertyBag) `Properties`

Gets the [`IReactPropertyBag`](IReactPropertyBag) shared with the [`ReactInstanceSettings.Properties`](ReactInstanceSettings#properties-1).
It can be used to share values and state between components and the applications.

#### SettingsSnapshot
`readonly`  [`IReactSettingsSnapshot`](IReactSettingsSnapshot) `SettingsSnapshot`

Gets the settings snapshot that was used to start the React instance.

#### UIDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `UIDispatcher`

Gets the UI thread dispatcher.
It is a shortcut for the [`ReactDispatcherHelper.UIDispatcherProperty`](ReactDispatcherHelper#uidispatcherproperty) from the [`Properties`](#properties-1) property bag.

### Methods
#### CallJSFunction
void **`CallJSFunction`**(string moduleName, string methodName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Calls the JavaScript function named `methodName` of `moduleName` with the `paramsArgWriter`.
The `paramsArgWriter` is a [`JSValueArgWriter`](JSValueArgWriter) delegate that receives [`IJSValueWriter`](IJSValueWriter) to serialize the method parameters.

#### EmitJSEvent
void **`EmitJSEvent`**(string eventEmitterName, string eventName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Emits JavaScript module event `eventName` for the `eventEmitterName` with the `paramsArgWriter`.
It is a specialized [`CallJSFunction`](#calljsfunction)` call where the method name is always `emit` and the `eventName` is added to parameters.
The `paramsArgWriter` is a [`JSValueArgWriter`](JSValueArgWriter) delegate that receives [`IJSValueWriter`](IJSValueWriter) to serialize the event parameters.

### Referenced by
- [`ComponentView`](ComponentView)
- [`IReactViewInstance`](IReactViewInstance)
- [`InitializerDelegate`](InitializerDelegate)
- [`InstanceCreatedEventArgs`](InstanceCreatedEventArgs)
- [`InstanceDestroyedEventArgs`](InstanceDestroyedEventArgs)
- [`InstanceLoadedEventArgs`](InstanceLoadedEventArgs)
- [`JsiInitializerDelegate`](JsiInitializerDelegate)
- [`ReactCoreInjection`](ReactCoreInjection)
- [`ReactNativeHost`](ReactNativeHost)
- [`XamlUIService`](XamlUIService)

## Old Architecture

Kind: `interface`

The `IReactContext` object is a weak pointer to the React instance. It allows native modules and view managers to communicate with the application, and with other native modules and view managers.
Since the [`IReactContext`](IReactContext) is a weak pointer to the React instance, some of its functionality becomes unavailable after the React instance is unloaded. When a React instance is reloaded inside of the [`ReactNativeHost`](ReactNativeHost), the previous React instance is unloaded and then a new React instance is created with a new [`IReactContext`](IReactContext).
- Use the [`Properties`](#properties-1) to share native module's data with other components.
- Use the [`Notifications`](#notifications) to exchange events with other components.
- Use [`CallJSFunction`](#calljsfunction) to call JavaScript functions, and [`EmitJSEvent`](#emitjsevent) to raise JavaScript events.
- Use [`UIDispatcher`](#uidispatcher) to post asynchronous work in the UI thread.
- Use [`JSDispatcher`](#jsdispatcher) to post asynchronous work in the JavaScript engine thread.

### Properties
#### CallInvoker
`readonly`  [`CallInvoker`](CallInvoker) `CallInvoker`

used to schedule work on the JS runtime. Most direct usage of this should be avoided by using ReactContext.CallInvoker.

#### JSDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `JSDispatcher`

> **Deprecated**: Use [`IReactContext.CallInvoker`](IReactContext#callinvoker) instead

Gets the JavaScript engine thread dispatcher.
It is a shortcut for the [`ReactDispatcherHelper.JSDispatcherProperty`](ReactDispatcherHelper#jsdispatcherproperty) from the [`Properties`](#properties-1) property bag.

#### JSRuntime
`readonly`  Object `JSRuntime`

Gets the JavaScript runtime for the running React instance.
It can be null if Web debugging is used.
**Note: do not use this property directly. It is an experimental property will be removed in a future version.
Deprecated for new Arch: Use [`IReactContext.CallInvoker`](IReactContext#callinvoker) instead.

#### LoadingState
`readonly`  [`LoadingState`](LoadingState) `LoadingState`

Gets the state of the ReactNative instance.

#### Notifications
`readonly`  [`IReactNotificationService`](IReactNotificationService) `Notifications`

Gets the [`IReactNotificationService`](IReactNotificationService) shared with the [`ReactInstanceSettings.Notifications`](ReactInstanceSettings#notifications).
It can be used to send notifications events between components and the application.
All notification subscriptions added to the [`IReactContext.Notifications`](IReactContext#notifications) are automatically removed after the [`IReactContext`](IReactContext) is destroyed.
The notification subscriptions added to the [`ReactInstanceSettings.Notifications`](ReactInstanceSettings#notifications) are kept as long as the [`ReactInstanceSettings`](ReactInstanceSettings) is alive.

#### Properties
`readonly`  [`IReactPropertyBag`](IReactPropertyBag) `Properties`

Gets the [`IReactPropertyBag`](IReactPropertyBag) shared with the [`ReactInstanceSettings.Properties`](ReactInstanceSettings#properties-1).
It can be used to share values and state between components and the applications.

#### SettingsSnapshot
`readonly`  [`IReactSettingsSnapshot`](IReactSettingsSnapshot) `SettingsSnapshot`

Gets the settings snapshot that was used to start the React instance.

#### UIDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `UIDispatcher`

Gets the UI thread dispatcher.
It is a shortcut for the [`ReactDispatcherHelper.UIDispatcherProperty`](ReactDispatcherHelper#uidispatcherproperty) from the [`Properties`](#properties-1) property bag.

### Methods
#### CallJSFunction
void **`CallJSFunction`**(string moduleName, string methodName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Calls the JavaScript function named `methodName` of `moduleName` with the `paramsArgWriter`.
The `paramsArgWriter` is a [`JSValueArgWriter`](JSValueArgWriter) delegate that receives [`IJSValueWriter`](IJSValueWriter) to serialize the method parameters.

#### DispatchEvent
void **`DispatchEvent`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string eventName, [`JSValueArgWriter`](JSValueArgWriter) eventDataArgWriter)

> **Deprecated**: Use [`XamlUIService.DispatchEvent`](XamlUIService#dispatchevent) instead

Deprecated property. Use [`XamlUIService.DispatchEvent`](XamlUIService#dispatchevent) instead. It will be removed in a future version.

#### EmitJSEvent
void **`EmitJSEvent`**(string eventEmitterName, string eventName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)

Emits JavaScript module event `eventName` for the `eventEmitterName` with the `paramsArgWriter`.
It is a specialized [`CallJSFunction`](#calljsfunction)` call where the method name is always `emit` and the `eventName` is added to parameters.
The `paramsArgWriter` is a [`JSValueArgWriter`](JSValueArgWriter) delegate that receives [`IJSValueWriter`](IJSValueWriter) to serialize the event parameters.

### Referenced by
- [`IReactViewInstance`](IReactViewInstance)
- [`IViewManagerWithReactContext`](IViewManagerWithReactContext)
- [`InitializerDelegate`](InitializerDelegate)
- [`InstanceCreatedEventArgs`](InstanceCreatedEventArgs)
- [`InstanceDestroyedEventArgs`](InstanceDestroyedEventArgs)
- [`InstanceLoadedEventArgs`](InstanceLoadedEventArgs)
- [`JsiInitializerDelegate`](JsiInitializerDelegate)
- [`LayoutService`](LayoutService)
- [`ReactCoreInjection`](ReactCoreInjection)
- [`ReactNativeHost`](ReactNativeHost)
- [`XamlUIService`](XamlUIService)

