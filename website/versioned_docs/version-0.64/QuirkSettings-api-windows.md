---
id: version-0.64-QuirkSettings
title: QuirkSettings
original_id: QuirkSettings
---

Kind: `class`



This can be used to add settings that allow react-native-windows behavior to be maintained across version updates to facilitate upgrades. Settings in this class are likely to be removed in future releases, so apps should try to update their code to not rely on these settings.



## Methods
### SetAcceptSelfSigned
`static` void **`SetAcceptSelfSigned`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

Runtime setting allowing Networking (HTTP, WebSocket) connections to skip certificate validation.



### SetEnableFabric
`static` void **`SetEnableFabric`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)



### SetMatchAndroidAndIOSStretchBehavior
`static` void **`SetMatchAndroidAndIOSStretchBehavior`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, bool value)

**Default value**: `true`

Older versions of react-native-windows did not use [Yoga](https://github.com/facebook/yoga)'s legacy stretch behavior. This meant that react-native-windows would layout views slightly differently that in iOS and Android.
Set this setting to false to maintain the behavior from react-native-windows <= 0.62.




