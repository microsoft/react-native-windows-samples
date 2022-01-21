---
id: IReactNotificationArgs
title: IReactNotificationArgs
---

Kind: `interface`



Notification args provided to the notification handler.

## Properties
### Data
`readonly`  Object `Data`

The data sent with the notification. It can be any WinRT type. Consider using [`IReactPropertyBag`](IReactPropertyBag) for sending semi-structured data. It can be null if the notification has no data associated with it.

### Subscription
`readonly`  [`IReactNotificationSubscription`](IReactNotificationSubscription) `Subscription`

The notification subscription that can be used to unsubscribe in the notification handler. It also has the name and dispatcher associated with the notification.






## Referenced by
- [`ReactNotificationHandler`](ReactNotificationHandler)
