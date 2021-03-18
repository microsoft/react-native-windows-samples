---
id: version-0.63-IReactNotificationService
title: IReactNotificationService
original_id: IReactNotificationService
---

Kind: `interface`





## Methods
### SendNotification
void **`SendNotification`**([`IReactPropertyName`](IReactPropertyName) notificationName, Object sender, Object data)



### Subscribe
[`IReactNotificationSubscription`](IReactNotificationSubscription) **`Subscribe`**([`IReactPropertyName`](IReactPropertyName) notificationName, [`IReactDispatcher`](IReactDispatcher) dispatcher, [`ReactNotificationHandler`](ReactNotificationHandler) handler)






## Referenced by
- [`IReactContext`](IReactContext)
- [`ReactInstanceSettings`](ReactInstanceSettings)
- [`ReactNotificationServiceHelper`](ReactNotificationServiceHelper)
