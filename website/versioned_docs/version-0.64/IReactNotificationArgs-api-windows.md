---
id: version-0.64-IReactNotificationArgs
title: IReactNotificationArgs
original_id: IReactNotificationArgs
---

Kind: `interface`



Notification args provided to the notification handler.

## Properties
### Data
`readonly`  Object `Data`

The data sent with the notification. It can be any WinRT type. Consider using [`IReactPropertyBag`](IReactPropertyBag) for semi-structured data. It can be null if notification has no data. 

### Subscription
`readonly`  [`IReactNotificationSubscription`](IReactNotificationSubscription) `Subscription`

The notification subscription that can be used to unsubscribe in the notification handler. It also has the name and dispatcher associated with the notification.






## Referenced by
- [`ReactNotificationHandler`](ReactNotificationHandler)
