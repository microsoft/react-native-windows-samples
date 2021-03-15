---
id: version-0.64-IReactDispatcher
title: IReactDispatcher
original_id: IReactDispatcher
---

Kind: `interface`



`IReactDispatcher` provides the core threading/task management interface for ensuring code happens in the right order on the right thread. One primary dispatcher that applications may require is the [`IReactContext.UIDispatcher`](IReactContext#uidispatcher) which provides native modules access to the UI thread associated with this react instance.   Another one is the [`IReactContext.JSDispatcher`](IReactContext#jsdispatcher) which allows apps to post tasks to the JS engine thread.

## Properties
### HasThreadAccess
`readonly`  bool `HasThreadAccess`

`true` if the dispatcher uses current thread.



## Methods
### Post
void **`Post`**([`ReactDispatcherCallback`](ReactDispatcherCallback) callback)

Post a task to the dispatcher.  This callback will be called asynchronously on the thread/queue associated with this dispatcher.






## Referenced by
- [`IReactContext`](IReactContext)
- [`IReactNotificationService`](IReactNotificationService)
- [`IReactNotificationSubscription`](IReactNotificationSubscription)
- [`ReactDispatcherHelper`](ReactDispatcherHelper)
- [`ReactInstanceSettings`](ReactInstanceSettings)
