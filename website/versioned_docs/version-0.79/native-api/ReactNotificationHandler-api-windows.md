---
id: version-0.79-ReactNotificationHandler
title: ReactNotificationHandler
original_id: ReactNotificationHandler
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `delegate`

Delegate to handle notifications.
- The `sender` parameter is the object that sent the notification. It can be null.
- The `args` contain the notification-specific data and the notification subscription.

## Invoke
void **`Invoke`**(Object sender, [`IReactNotificationArgs`](IReactNotificationArgs) args)

## Referenced by
- [`IReactNotificationService`](IReactNotificationService)
