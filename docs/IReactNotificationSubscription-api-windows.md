---
id: IReactNotificationSubscription
title: IReactNotificationSubscription
---

Kind: `interface`



A subscription to a notification.<br/>The subscription is removed when this object is deleted or the [`Unsubscribe`](#unsubscribe) method is called.

## Properties
### Dispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `Dispatcher`

The [`IReactDispatcher`](IReactDispatcher) provided when the notification subscription created.<br/>All notifications will be handled using this dispatcher.<br/>In case if it is null, the events are handled synchronously.

### IsSubscribed
`readonly`  bool `IsSubscribed`

True if the subscription is still active.<br/>This property is checked before notification handler is invoked.

### NotificationName
`readonly`  [`IReactPropertyName`](IReactPropertyName) `NotificationName`

Name of the notification.

### NotificationService
`readonly`  [`IReactNotificationService`](IReactNotificationService) `NotificationService`

The notification service for the subscription.<br/>It can be null if [`IsSubscribed`](#issubscribed) is true and the service is already deleted.



## Methods
### Unsubscribe
void **`Unsubscribe`**()

Removes the subscription.<br/>Because of the multi-threaded nature of the notifications, the handler can be still called after the [`Unsubscribe`](#unsubscribe) method called if the [`IsSubscribed`](#issubscribed) property is already checked. Consider calling the [`Unsubscribe`](#unsubscribe) method and the handler in the same [`IReactDispatcher`](IReactDispatcher) to ensure that no handler is invoked after the [`Unsubscribe`](#unsubscribe) method call.






## Referenced by
- [`IReactNotificationArgs`](IReactNotificationArgs)
- [`IReactNotificationService`](IReactNotificationService)
