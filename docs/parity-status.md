---
id: parity-status
title: Component and Module API Parity Status
---

This doc reports the status progress of core components modules/APIs integration for vnext. The high priority components and modules tracked here will be in alignment with the [React Native Lean Core](https://github.com/facebook/react-native/issues/23313) effort, others not in Lean Core we plan on shipping as separate packages in [future milestones](https://github.com/microsoft/react-native-windows/milestones).

If there is a discrepancy here, or features are not being tracked that should be, please [submit an issue](https://github.com/microsoft/react-native-windows/issues/new?) to let us know.

You can keep track of our component and module API parity more closely on our through the [API Completion](https://github.com/microsoft/react-native-windows/labels/API%20Completion) label on our repo, as well as our [GitHub project board](https://github.com/microsoft/react-native-windows/projects/7).

## Lean Core Support

### Components
Below are a list of components and their status towards parity between the lean core components you'd find on iOS and Android and the functionality we have today.

|Component| Status |
|:-|:-|
|ActivityIndicator|**Complete**|
|Button|**Complete**|
|FlatList|**Complete**|
|Image|**Complete**|
|ScrollView|Partial|
|Switch|**Complete**|
|Text|**Complete** <br>*(Some properties not supported due to device platform differences, docs coming soon)*|
|TextInput|Partial|
|KeyboardAvoidingView|**Complete**|
|View|Partial (some Style props left)|
|VirtualizedList|Partial|

### Modules
Below are a list of modules and their status towards parity between the lean core components you'd find on iOS and Android and the functionality we have today.

Also tracked are NativeModules, as they are essential, even if not part of the core set.

|Module| Status |
|:-|:-|
|Accessibility|Partial|
|LayoutProps|**Completed**|
|Alert|**Completed**|
|AppState|**Complete**<br><br>*Deprecation coming in favor of Application*|
|Keyboard|**Complete**<br><br> *keyboardWillShow/WillHide, keyboardWillChangeFrame/DidChangeFrame will no-op in Windows*|
|Linking|Partial|
|LayoutAnimation|Not Started|
|Networking|Partial|

## Community Module Support
These set of components and modules are not part of [React Native Lean Core](https://github.com/facebook/react-native/issues/23313) and hence will be moved into separate packages in React Native for Windows.

| Name | Status | Implemented |
|:-|:-|-:|
| [<ins>react-native-webview</ins>](https://www.github.com/react-native-community/react-native-webview) | **Completed** |Mar 17, 2020 |
| [<ins>react-native-camera</ins>](https://www.github.com/react-native-community/react-native-camera) | **Completed** |Mar 10, 2020 |
| [<ins>react-native-netinfo</ins>](https://www.github.com/react-native-community/react-native-netinfo) | **Completed** |Dec 29, 2019 |
| [<ins>react-native-device-info</ins>](https://www.github.com/react-native-community/react-native-device-info) | **Completed** |Nov 1, 2019 |
| [<ins>react-native-video</ins>](https://www.github.com/react-native-community/react-native-video) | **Completed** |Feb 25, 2020 |
| [<ins>react-native-linear-gradient</ins>](https://www.github.com/react-native-community/react-native-linear-gradient) | **Completed** |Sep 18, 2019 |
| [<ins>react-native-share</ins>](https://www.github.com/react-native-community/react-native-share) | *Out of Date* |Feb 23, 2017 |
| [<ins>hooks</ins>](https://www.github.com/react-native-community/hooks) | No Support | TBD |
| [<ins>react-native-tvos</ins>](https://www.github.com/react-native-community/react-native-tvos) | No Support | TBD |
| [<ins>cli</ins>](https://www.github.com/react-native-community/cli) | No Support | TBD |
| [<ins>lottie-react-native</ins>](https://www.github.com/react-native-community/lottie-react-native) | No Support | TBD |
| [<ins>cookies</ins>](https://www.github.com/react-native-community/cookies) | No Support | TBD |
| [<ins>react-native-maps</ins>](https://www.github.com/react-native-community/react-native-maps) | No Support | TBD |
| [<ins>directory</ins>](https://www.github.com/react-native-community/directory) | No Support | TBD |
| [<ins>progress-view</ins>](https://www.github.com/react-native-community/progress-view) | No Support | TBD |
| [<ins>react-native-permissions</ins>](https://www.github.com/react-native-community/react-native-permissions) | No Support | TBD |
| [<ins>react-native-slider</ins>](https://www.github.com/react-native-community/react-native-slider) | No Support | TBD |
| [<ins>upgrade-support</ins>](https://www.github.com/react-native-community/upgrade-support) | No Support | TBD |
| [<ins>react-native-checkbox</ins>](https://www.github.com/react-native-community/react-native-checkbox) | No Support | TBD |
| [<ins>datetimepicker</ins>](https://www.github.com/react-native-community/datetimepicker) | No Support | TBD |
| [<ins>bob</ins>](https://www.github.com/react-native-community/bob) | No Support | TBD |
| [<ins>react-native-image-picker</ins>](https://www.github.com/react-native-community/react-native-image-picker) | No Support | TBD |
| [<ins>react-native-masked-view</ins>](https://www.github.com/react-native-community/react-native-masked-view) | No Support | TBD |
| [<ins>progress-bar-android</ins>](https://www.github.com/react-native-community/progress-bar-android) | No Support | TBD |
| [<ins>peek-and-pop</ins>](https://www.github.com/react-native-community/peek-and-pop) | No Support | TBD |
| [<ins>async-storage</ins>](https://www.github.com/react-native-community/async-storage) | No Support | TBD |
| [<ins>releases</ins>](https://www.github.com/react-native-community/releases) | No Support | TBD |
| [<ins>react-native-template-typescript</ins>](https://www.github.com/react-native-community/react-native-template-typescript) | No Support | TBD |
| [<ins>react-native-circleci-orb</ins>](https://www.github.com/react-native-community/react-native-circleci-orb) | No Support | TBD |
| [<ins>react-native-multibundle</ins>](https://www.github.com/react-native-community/react-native-multibundle) | No Support | TBD |
| [<ins>react-native-tab-view</ins>](https://www.github.com/react-native-community/react-native-tab-view) | No Support | TBD |
| [<ins>google-signin</ins>](https://www.github.com/react-native-community/google-signin) | No Support | TBD |
| [<ins>clipboard</ins>](https://www.github.com/react-native-community/clipboard) | No Support | TBD |
| [<ins>push-notification-ios</ins>](https://www.github.com/react-native-community/push-notification-ios) | No Support | TBD |
| [<ins>react-native-svg</ins>](https://www.github.com/react-native-community/react-native-svg) | No Support | TBD |
| [<ins>rn-diff-purge</ins>](https://www.github.com/react-native-community/rn-diff-purge) | No Support | TBD |
| [<ins>react-native-picker</ins>](https://www.github.com/react-native-community/react-native-picker) | No Support | TBD |
| [<ins>react-native-audio-toolkit</ins>](https://www.github.com/react-native-community/react-native-audio-toolkit) | No Support | TBD |
| [<ins>voice</ins>](https://www.github.com/react-native-community/voice) | No Support | TBD |
| [<ins>react-native-blur</ins>](https://www.github.com/react-native-community/react-native-blur) | No Support | TBD |
| [<ins>docker-android</ins>](https://www.github.com/react-native-community/docker-android) | No Support | TBD |
| [<ins>react-native-safe-area-view</ins>](https://www.github.com/react-native-community/react-native-safe-area-view) | No Support | TBD |
| [<ins>segmented-control</ins>](https://www.github.com/react-native-community/segmented-control) | No Support | TBD |
| [<ins>upgrade-helper</ins>](https://www.github.com/react-native-community/upgrade-helper) | No Support | TBD |
| [<ins>react-native-image-editor</ins>](https://www.github.com/react-native-community/react-native-image-editor) | No Support | TBD |
| [<ins>react-native-viewpager</ins>](https://www.github.com/react-native-community/react-native-viewpager) | No Support | TBD |
| [<ins>discussions-and-proposals</ins>](https://www.github.com/react-native-community/discussions-and-proposals) | No Support | TBD |
| [<ins>react-native-cameraroll</ins>](https://www.github.com/react-native-community/react-native-cameraroll) | No Support | TBD |
| [<ins>react-native-translucent-modal</ins>](https://www.github.com/react-native-community/react-native-translucent-modal) | No Support | TBD |
| [<ins>protobuf.js</ins>](https://www.github.com/react-native-community/protobuf.js) | No Support | TBD |
| [<ins>rxjs</ins>](https://www.github.com/react-native-community/rxjs) | No Support | TBD |
| [<ins>.github</ins>](https://www.github.com/react-native-community/.github) | No Support | TBD |
| [<ins>react-native-side-menu</ins>](https://www.github.com/react-native-community/react-native-side-menu) | No Support | TBD |
| [<ins>react-native-modal</ins>](https://www.github.com/react-native-community/react-native-modal) | No Support | TBD |
| [<ins>toolbar-android</ins>](https://www.github.com/react-native-community/toolbar-android) | No Support | TBD |
| [<ins>react-native-geolocation</ins>](https://www.github.com/react-native-community/react-native-geolocation) | No Support | TBD |
| [<ins>art</ins>](https://www.github.com/react-native-community/art) | No Support | TBD |
| [<ins>react-native-image-picker-ios</ins>](https://www.github.com/react-native-community/react-native-image-picker-ios) | No Support | TBD |
| [<ins>react-native-localize</ins>](https://www.github.com/react-native-community/react-native-localize) | No Support | TBD |
| [<ins>react-native-statusbar</ins>](https://www.github.com/react-native-community/react-native-statusbar) | No Support | TBD |
| [<ins>tester</ins>](https://www.github.com/react-native-community/tester) | No Support | TBD |
| [<ins>jsc-android-buildscripts</ins>](https://www.github.com/react-native-community/jsc-android-buildscripts) | No Support | TBD |
| [<ins>ci-sample</ins>](https://www.github.com/react-native-community/ci-sample) | No Support | TBD |
| [<ins>fetch</ins>](https://www.github.com/react-native-community/fetch) | No Support | TBD |
| [<ins>react-native-navbar</ins>](https://www.github.com/react-native-community/react-native-navbar) | No Support | TBD |
| [<ins>react-native-platform-touchable</ins>](https://www.github.com/react-native-community/react-native-platform-touchable) | No Support | TBD |
| [<ins>react-native-text-input-mask</ins>](https://www.github.com/react-native-community/react-native-text-input-mask) | No Support | TBD |
| [<ins>boost-for-react-native</ins>](https://www.github.com/react-native-community/boost-for-react-native) | No Support | TBD |
| [<ins>react-native-webgl</ins>](https://www.github.com/react-native-community/react-native-webgl) | No Support | TBD |
| [<ins>react-native-drawer-layout</ins>](https://www.github.com/react-native-community/react-native-drawer-layout) | No Support | TBD |
| [<ins>react-native-button</ins>](https://www.github.com/react-native-community/react-native-button) | No Support | TBD |
| [<ins>apple-authentication</ins>](https://www.github.com/react-native-community/apple-authentication) | No Support | TBD |
| [<ins>template</ins>](https://www.github.com/react-native-community/template) | No Support | TBD |
| [<ins>react-native-simple-share</ins>](https://www.github.com/react-native-community/react-native-simple-share) | No Support | TBD |
| [<ins>react-native-drawer-layout-polyfill</ins>](https://www.github.com/react-native-community/react-native-drawer-layout-polyfill) | No Support | TBD |
| [<ins>react-native-dummy</ins>](https://www.github.com/react-native-community/react-native-dummy) | No Support | TBD |
| [<ins>rncamera-example</ins>](https://www.github.com/react-native-community/rncamera-example) | No Support | TBD |
| [<ins>eslint-plugin-react-native-globals</ins>](https://www.github.com/react-native-community/eslint-plugin-react-native-globals) | No Support | TBD |
| [<ins>cameraview</ins>](https://www.github.com/react-native-community/cameraview) | No Support | TBD |
| [<ins>react-native-google-analytics</ins>](https://www.github.com/react-native-community/react-native-google-analytics) | No Support | TBD |
| [<ins>normalize-css-color</ins>](https://www.github.com/react-native-community/normalize-css-color) | No Support | TBD |
