---
id: IReactNotificationSubscription
title: IReactNotificationSubscription
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `interface`

A subscription to a [`IReactNotificationService`](IReactNotificationService) notification.
The subscription is removed when this object is deleted or the [`Unsubscribe`](#unsubscribe) method is called.

## Properties
### Dispatcher
`readonly`  [`IReactDispatcher`](IReactDispatcher) `Dispatcher`

The [`IReactDispatcher`](IReactDispatcher) that was provided when the notification subscription was created.
All notifications for this subscription will be handled using this dispatcher.
If the dispatcher is null, then the events are handled synchronously.

### IsSubscribed
`readonly`  bool `IsSubscribed`

True if the subscription is still active.
This property is checked internally before the notification handler is invoked.

### NotificationName
`readonly`  [`IReactPropertyName`](IReactPropertyName) `NotificationName`

Name of the notification.

### NotificationService
`readonly`  [`IReactNotificationService`](IReactNotificationService) `NotificationService`

The notification service for the subscription.
It can be null if [`IsSubscribed`](#issubscribed) is true and the notification service was already deleted.

## Methods
### Unsubscribe
void **`Unsubscribe`**()

Removes the subscription.
Because of the multi-threaded nature of the notifications, the handler can be still called after the [`Unsubscribe`](#unsubscribe) method has been called if the [`IsSubscribed`](#issubscribed) property has already been checked. Consider calling the [`Unsubscribe`](#unsubscribe) method and the handler in the same [`IReactDispatcher`](IReactDispatcher) to ensure that no handler is invoked after the [`Unsubscribe`](#unsubscribe) method call.

## Referenced by
- [`IReactNotificationArgs`](IReactNotificationArgs)
- [`IReactNotificationService`](IReactNotificationService)

