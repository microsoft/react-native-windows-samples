---
id: version-0.67-IReactNotificationService
title: IReactNotificationService
original_id: IReactNotificationService
---

Kind: `interface`



The notification service that can be used to send notifications between different components in an app.
Use the [`Subscribe`](#subscribe) method to subscribe to notifications and the [`SendNotification`](#sendnotification) method to send notifications.



## Methods
### SendNotification
void **`SendNotification`**([`IReactPropertyName`](IReactPropertyName) notificationName, Object sender, Object data)

Sends the notification with `notificationName`.
- `notificationName` is the name of the notification to send. It must not be null.
- `sender` is the object that sends notification. It can be null.
- `data` is the data associated with the notification. It can be null.
Consider using [`IReactPropertyBag`](IReactPropertyBag) for sending semi-structured data. It can be created using the [`ReactPropertyBagHelper.CreatePropertyBag`](ReactPropertyBagHelper#createpropertybag) method.



### Subscribe
[`IReactNotificationSubscription`](IReactNotificationSubscription) **`Subscribe`**([`IReactPropertyName`](IReactPropertyName) notificationName, [`IReactDispatcher`](IReactDispatcher) dispatcher, [`ReactNotificationHandler`](ReactNotificationHandler) handler)

Subscribes to a notification.
- `notificationName` is a non-null notification name that can belong to a specific namespace  like any [`IReactPropertyName`](IReactPropertyName).
- `dispatcher` is used to call notification handlers. If it is null, then the handler is called synchronously.
- `handler` is a delegate that can be implemented as a lambda to handle notifications.
The method returns a [`IReactNotificationSubscription`](IReactNotificationSubscription) that must be kept alive while the subscription is active. The subscription is removed when the [`IReactNotificationSubscription`](IReactNotificationSubscription) is destroyed.






## Referenced by
- [`IReactContext`](IReactContext)
- [`IReactNotificationSubscription`](IReactNotificationSubscription)
- [`ReactInstanceSettings`](ReactInstanceSettings)
- [`ReactNotificationServiceHelper`](ReactNotificationServiceHelper)
