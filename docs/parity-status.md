---
id: parity-status
title: React Native Windows Components and APIs
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

## Core APIs and Components

[React Native Components and APIs](https://reactnative.dev/docs/components-and-apis) that are a part of the [React Native Lean Core](https://github.com/facebook/react-native/issues/23313) effort are now all supported in React Native for Windows.

For a more closely monitored look at our work in progress, check out the [API Completion](https://github.com/microsoft/react-native-windows/labels/API:%20Completion) label on issues in our repo.

> Please feel free to leave comments or give us a 👍 on issues to help us prioritize better!

A few methods or props may be missing on some types and we are actively working to add support for those in our [upcoming milestones](https://github.com/microsoft/react-native-windows/milestones).

If you encounter an unsupported API that should be tracked, please [submit an issue](https://github.com/microsoft/react-native-windows/issues/new/choose) to let us know.

## Windows APIs and Components

In addition to the React Native core APIs, there are a handful of APIs that are either new in React Native for Windows to support desktop (like keyboarding, mouse, pop-ups, windowing, multi-instance, etc.,) scenarios as well as signature scenarios on Windows 10 and higher (like Themes, brushes etc.,). You can find documentation on these under the [APIs](https://microsoft.github.io/react-native-windows/docs/flyout-component) tab. 

## More APIs and Components

In addition to the above, there are several community modules that are supported in Windows. Please see [Supported Community Modules](https://microsoft.github.io/react-native-windows/docs/supported-community-modules) for details.
