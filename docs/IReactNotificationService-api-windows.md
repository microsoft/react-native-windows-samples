---
id: IReactNotificationService
title: IReactNotificationService
---

Kind: `interface`



## Description
The notification service is used to subscribe to notifications and to send notifications



## Methods
### SendNotification
void **`SendNotification`**([`IReactPropertyName`](IReactPropertyName) notificationName, Object sender, Object data)

Send the notification with `notificationName`. The sender is the object that sends notification and can be null. The `data` is the data associated with the notification and can be null. Consider using [`IReactPropertyBag`](IReactPropertyBag.md) for sending semi-structured data. It can be created using the [`ReactPropertyBagHelper.CreatePropertyBag`](ReactPropertyBagHelper.md#CreatePropertyBag) method.

### Subscribe
[`IReactNotificationSubscription`](IReactNotificationSubscription) **`Subscribe`**([`IReactPropertyName`](IReactPropertyName) notificationName, [`IReactDispatcher`](IReactDispatcher) dispatcher, [`ReactNotificationHandler`](ReactNotificationHandler) handler)

Subscribe to a notification.     The `notificationName` is a non-null property name and can belong to a specific namespace. <br/>    The dispatcher is used to call notification handlers. If it is null, then the handler is called synchronously.     The handler is a delegate that can be implemented as a lambda to handle notifications.     The method returns a [`IReactNotificationSubscription`](IReactNotificationSubscription.md) that must be kept alive while the subscription     is active. The subscription is removed when the [`IReactNotificationSubscription`](IReactNotificationSubscription.md) is destroyed.


