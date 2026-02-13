---
id: ReactDispatcherHelper
title: ReactDispatcherHelper
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `class`

Helper methods for the [`IReactDispatcher`](IReactDispatcher) implementation.

## Properties
### JSDispatcherIdleWaitCompletedEventName
`static`   `readonly`  [`IReactPropertyName`](IReactPropertyName) `JSDispatcherIdleWaitCompletedEventName`

Gets the name of the `JSDispatcherIdleWaitCompletedEventName` property for the [`IReactNotificationService`](IReactNotificationService).
This notification name is to be used with IReactNotificationService.

### JSDispatcherIdleWaitStartingEventName
`static`   `readonly`  [`IReactPropertyName`](IReactPropertyName) `JSDispatcherIdleWaitStartingEventName`

Gets the name of the `JSDispatcherIdleWaitStartingEventName` property for the [`IReactNotificationService`](IReactNotificationService).
This notification name is to be used with IReactNotificationService.

### JSDispatcherProperty
`static`   `readonly`  [`IReactPropertyName`](IReactPropertyName) `JSDispatcherProperty`

> **Deprecated**: Use [`IReactContext.CallInvoker`](IReactContext#callinvoker) instead

Gets name of the `JSDispatcher` property for the [`IReactPropertyBag`](IReactPropertyBag).
Generally you can use [`IReactContext.JSDispatcher`](IReactContext#jsdispatcher) to get the value of this property for a specific React instance.

### JSDispatcherTaskStartingEventName
`static`   `readonly`  [`IReactPropertyName`](IReactPropertyName) `JSDispatcherTaskStartingEventName`

Gets the name of the `JSDispatcherTaskStartingEventName` property for the [`IReactNotificationService`](IReactNotificationService).
This notification name is to be used with IReactNotificationService.

### UIDispatcherProperty
`static`   `readonly`  [`IReactPropertyName`](IReactPropertyName) `UIDispatcherProperty`

Gets name of the `UIDispatcher` property for the [`IReactPropertyBag`](IReactPropertyBag).
Generally you can use [`IReactContext.UIDispatcher`](IReactContext#uidispatcher) to get the value of this property for a specific React instance.

### UIThreadDispatcher
`static`   `readonly`  [`IReactDispatcher`](IReactDispatcher) `UIThreadDispatcher`

Gets or creates a [`IReactDispatcher`](IReactDispatcher) for the current UI thread.
This can be used with [`ReactInstanceSettings.UIDispatcher`](ReactInstanceSettings#uidispatcher) to launch a React instance from a non-UI thread. This API must be called from a UI thread. It will return null if called from a non-UI thread.

## Methods
### CreateSerialDispatcher
`static` [`IReactDispatcher`](IReactDispatcher) **`CreateSerialDispatcher`**()

Creates a new serial dispatcher that uses thread pool to run tasks.

