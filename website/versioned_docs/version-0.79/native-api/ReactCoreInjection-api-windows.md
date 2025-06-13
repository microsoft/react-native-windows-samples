---
id: version-0.79-ReactCoreInjection
title: ReactCoreInjection
original_id: ReactCoreInjection
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `class`

> **EXPERIMENTAL**

Used to inject platform specific implementations to create react-native targets targeting non-XAML platforms.

## Methods
### GetTopLevelWindowId
`static` uint64_t **`GetTopLevelWindowId`**([`IReactPropertyBag`](IReactPropertyBag) properties)

> **EXPERIMENTAL**

Gets the window handle HWND (as an UInt64) for the active top level application window.

### MakeViewHost
`static` [`IReactViewHost`](IReactViewHost) **`MakeViewHost`**([`ReactNativeHost`](ReactNativeHost) host, [`ReactViewOptions`](ReactViewOptions) viewOptions)

> **EXPERIMENTAL**

Custom ReactViewInstances use this to create a host to connect to.

### PostToUIBatchingQueue
`static` void **`PostToUIBatchingQueue`**([`IReactContext`](IReactContext) context, [`ReactDispatcherCallback`](ReactDispatcherCallback) callback)

> **EXPERIMENTAL**

Post something to the main UI dispatcher using the batching queue

### SetPlatformNameOverride
`static` void **`SetPlatformNameOverride`**([`IReactPropertyBag`](IReactPropertyBag) properties, string platformName)

> **EXPERIMENTAL**

Override platform name. This will change the platform used when requesting bundles from metro. Default: \"windows\"

### SetTimerFactory
`static` void **`SetTimerFactory`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`TimerFactory`](TimerFactory) timerFactory)

> **EXPERIMENTAL**

Sets a factory method for creating custom timers, in environments where system dispatch timers should not be used.

### SetTopLevelWindowId
`static` void **`SetTopLevelWindowId`**([`IReactPropertyBag`](IReactPropertyBag) properties, uint64_t windowId)

> **EXPERIMENTAL**

Sets the window handle HWND (as an UInt64) for the active top level application window.This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) object when using ReactNativeWindowswithout XAML for certain APIs work correctly.

### SetUIBatchCompleteCallback
`static` void **`SetUIBatchCompleteCallback`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`UIBatchCompleteCallback`](UIBatchCompleteCallback) xamlRoot)

> **EXPERIMENTAL**

Sets the Callback to call when a UI batch is completed.
