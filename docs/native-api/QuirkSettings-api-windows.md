---
id: QuirkSettings
title: QuirkSettings
---

Kind: `class`

> **EXPERIMENTAL**

This can be used to add settings that allow react-native-windows behavior to be maintained across version updates to facilitate upgrades. Settings in this class are likely to be removed in future releases, so apps should try to update their code to not rely on these settings.

## Methods

### SetAcceptSelfSigned

`static` void **`SetAcceptSelfSigned`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

> **EXPERIMENTAL**

Runtime setting allowing Networking (HTTP, WebSocket) connections to skip certificate validation.

### SetBackHandlerKind

`static` void **`SetBackHandlerKind`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, [`BackNavigationHandlerKind`](BackNavigationHandlerKind) kind)

> **EXPERIMENTAL**

By default `react-native-windows` will handle various back events and forward them to JavaScript. Setting this to [`BackNavigationHandlerKind.Native`](BackNavigationHandlerKind) prevents `react-native-windows` from handling these events, including forwarding to JavaScript. This will allow applications to handle back navigation in native code, but will prevent the `BackHandler` native module from receiving events.

### SetMatchAndroidAndIOSStretchBehavior

`static` void **`SetMatchAndroidAndIOSStretchBehavior`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

> **EXPERIMENTAL**

**Default value**: `true`

Older versions of react-native-windows did not use [Yoga](https://github.com/facebook/yoga)'s legacy stretch behavior. This meant that react-native-windows would layout views slightly differently that in iOS and Android.
Set this setting to false to maintain the behavior from react-native-windows <= 0.62.
