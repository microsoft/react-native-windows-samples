---
id: CompositionUIService
title: CompositionUIService
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `class`

> **EXPERIMENTAL**

Provides access to Composition UI-specific functionality. 

## Methods
### ComponentFromReactTag
`static` [`ComponentView`](ComponentView) **`ComponentFromReactTag`**([`IReactContext`](IReactContext) context, int64_t reactTag)

> **EXPERIMENTAL**

Gets the ComponentView from a react tag.

### GetCompositor
`static` [`Compositor`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Compositor) **`GetCompositor`**([`IReactPropertyBag`](IReactPropertyBag) properties)

> **EXPERIMENTAL**

Gets the Compositor used by this ReactNative instance.

### SetCompositor
`static` void **`SetCompositor`**([`ReactInstanceSettings`](ReactInstanceSettings) settings, [`Compositor`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Composition.Compositor) compositor)

> **EXPERIMENTAL**

Configures the react instance to use the provided Compositor. Setting this will opt into using the new architecture

