---
id: version-0.63-IReactContext
title: IReactContext
original_id: IReactContext
---

Kind: `interface`



## Properties
### JSDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `JSDispatcher`

### Notifications
`readonly`  [`IReactNotificationService`](IReactNotificationService) `Notifications`

### Properties
`readonly`  [`IReactPropertyBag`](IReactPropertyBag) `Properties`

### UIDispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `UIDispatcher`



## Methods
### CallJSFunction
void **`CallJSFunction`**(string moduleName, string methodName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)



### DispatchEvent
void **`DispatchEvent`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string eventName, [`JSValueArgWriter`](JSValueArgWriter) eventDataArgWriter)



### EmitJSEvent
void **`EmitJSEvent`**(string eventEmitterName, string eventName, [`JSValueArgWriter`](JSValueArgWriter) paramsArgWriter)






## Referenced by
- [`IViewManagerWithReactContext`](IViewManagerWithReactContext)
- [`InitializerDelegate`](InitializerDelegate)
- [`XamlUIService`](XamlUIService)
