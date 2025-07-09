---
id: version-0.79-IReactDispatcher
title: IReactDispatcher
original_id: IReactDispatcher
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `interface`

`IReactDispatcher` provides the core threading/task management interface for ensuring that the code execution happens in the right order on the right thread.
One primary dispatcher that applications may require is the [`IReactContext.UIDispatcher`](IReactContext#uidispatcher) which provides native modules access to the UI thread associated with this React instance. Another one is the [`IReactContext.JSDispatcher`](IReactContext#jsdispatcher) which allows apps to post tasks to the JS engine thread.

## Properties
### HasThreadAccess
`readonly`  bool `HasThreadAccess`

`true` if the dispatcher uses current thread.

## Methods
### Post
void **`Post`**([`ReactDispatcherCallback`](ReactDispatcherCallback) callback)

Posts a task to the dispatcher.
The `callback` will be called asynchronously on the thread/queue associated with this dispatcher.

## Referenced by
- [`IReactContext`](IReactContext)
- [`IReactNotificationService`](IReactNotificationService)
- [`IReactNotificationSubscription`](IReactNotificationSubscription)
- [`ReactDispatcherHelper`](ReactDispatcherHelper)
- [`ReactInstanceSettings`](ReactInstanceSettings)
