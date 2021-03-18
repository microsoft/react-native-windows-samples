---
id: version-0.64-IReactNotificationService
title: IReactNotificationService
original_id: IReactNotificationService
---

Kind: `interface`



The notification service is used to subscribe to notifications and to send notifications.



## Methods
### SendNotification
void **`SendNotification`**([`IReactPropertyName`](IReactPropertyName) notificationName, Object sender, Object data)

Sends the notification with `notificationName`.
The `notificationName` must not be null.
The `sender` is the object that sends notification. It can be null.
The `data` is the data associated with the notification. It can be null.
Consider using [`IReactPropertyBag`](IReactPropertyBag) for sending semi-structured data. It can be created using the [`ReactPropertyBagHelper.CreatePropertyBag`](ReactPropertyBagHelper#createpropertybag) method.



### Subscribe
[`IReactNotificationSubscription`](IReactNotificationSubscription) **`Subscribe`**([`IReactPropertyName`](IReactPropertyName) notificationName, [`IReactDispatcher`](IReactDispatcher) dispatcher, [`ReactNotificationHandler`](ReactNotificationHandler) handler)

Subscribes to a notification.
The `notificationName` is a non-null property name and can belong to a specific namespace.
The `dispatcher` is used to call notification handlers. If it is null, then the handler is called synchronously.
The `handler` is a delegate that can be implemented as a lambda to handle notifications.
The method returns a [`IReactNotificationSubscription`](IReactNotificationSubscription) that must be kept alive while the subscription is active. The subscription is removed when the [`IReactNotificationSubscription`](IReactNotificationSubscription) is destroyed.






## Referenced by
- [`IReactContext`](IReactContext)
- [`IReactNotificationSubscription`](IReactNotificationSubscription)
- [`ReactInstanceSettings`](ReactInstanceSettings)
- [`ReactNotificationServiceHelper`](ReactNotificationServiceHelper)
