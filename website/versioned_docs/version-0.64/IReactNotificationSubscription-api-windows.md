---
id: version-0.64-IReactNotificationSubscription
title: IReactNotificationSubscription
original_id: IReactNotificationSubscription
---

Kind: `interface`



A subscription to a notification. The subscription is removed when this object is deleted or the [`Unsubscribe`](#unsubscribe) method is called.

## Properties
### Dispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `Dispatcher`

The [`IReactDispatcher`](IReactDispatcher) provided when the notification subscription created. All notifications will be handled using this dispatcher.

### IsSubscribed
`readonly`  bool `IsSubscribed`

True if the subscription is still active. This property is checked before notification handler is invoked.

### NotificationName
`readonly`  [`IReactPropertyName`](IReactPropertyName) `NotificationName`

Name of the notification.



## Methods
### Unsubscribe
void **`Unsubscribe`**()

Remove the subscription. Because of the multi-threaded nature of the notifications, the handler can be still called after the Unsubscribe method called if the [`IsSubscribed`](#issubscribed) property is already checked. Consider calling the Unsubscribe method and the handler in the same [`IReactDispatcher`](IReactDispatcher) to ensure that no handler is invoked after the Unsubscribe method call.






## Referenced by
- [`IReactNotificationArgs`](IReactNotificationArgs)
- [`IReactNotificationService`](IReactNotificationService)
