---
id: version-0.74-Timer
title: Timer
original_id: Timer
---

Kind: `class`



Used to create timers.



## Methods
### Create
`static` [`ITimer`](ITimer) **`Create`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Creates a UI timer.  Must be called on the UI thread.  Using this rather than System/Windows.DispatcherQueue.CreateTimer works when applications have provided custom Timer implementations using [`ReactCoreInjection.SetTimerFactory`](ReactCoreInjection#settimerfactory)




