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

By default `react-native-windows` will handle various back events and forward them to JavaScript. Setting this to [`BackNavigationHandlerKind.Native`](BackNavigationHandlerKind#native) prevents `react-native-windows` from handling these events, including forwarding to JavaScript.  This will allow applications to handle back navigation in native code, but will prevent the `BackHandler` native module from receiving events.



### SetMapWindowDeactivatedToAppStateInactive
`static` void **`SetMapWindowDeactivatedToAppStateInactive`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

> **EXPERIMENTAL**

**Default value**: `false`

By default `react-native-windows` will only track `active` and `background` `AppState`. Setting this to true enables `react-native-windows` to also track `inactive` `AppState` which [maps closely to iOS.](https://reactnative.dev/docs/appstate)`inactive` tracks the [Window.Activated Event](https://docs.microsoft.com/uwp/api/windows.ui.core.corewindow.activated) when the window is deactivated.



### SetMatchAndroidAndIOSStretchBehavior
`static` void **`SetMatchAndroidAndIOSStretchBehavior`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

> **EXPERIMENTAL**

**Default value**: `true`

Older versions of react-native-windows did not use [Yoga](https://github.com/facebook/yoga)'s legacy stretch behavior. This meant that react-native-windows would layout views slightly differently that in iOS and Android.
Set this setting to false to maintain the behavior from react-native-windows <= 0.62.



### SetSuppressWindowFocusOnViewFocus
`static` void **`SetSuppressWindowFocusOnViewFocus`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

> **EXPERIMENTAL**

When running multiple windows from a single UI thread, focusing a native view causes the parent window of that view to get focus as well. Set this setting to true to prevent focus of a blurred window when a view in that window is programmatically focused.



### SetUseRuntimeScheduler
`static` void **`SetUseRuntimeScheduler`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

> **EXPERIMENTAL**

By default `react-native-windows` will use the new RuntimeScheduler.Setting this to false will revert the behavior to previous scheduling logic.



### SetUseWebFlexBasisBehavior
`static` void **`SetUseWebFlexBasisBehavior`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

> **EXPERIMENTAL**

**Default value**: `false`

There is a chance that cached flex basis values can cause text truncation in some re-layout scenarios. Enabling [Yoga](https://github.com/facebook/yoga)'s experimental web flex basis behavior fixes this issue, however using it may result in performance regressions due to additional layout passes.




