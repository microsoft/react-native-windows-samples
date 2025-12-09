---
id: InstanceCreatedEventArgs
title: InstanceCreatedEventArgs
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `class`

The arguments for the [`ReactInstanceSettings.InstanceCreated`](ReactInstanceSettings#instancecreated) event.

## Properties
### Context
`readonly`  [`IReactContext`](IReactContext) `Context`

Gets the [`IReactContext`](IReactContext) for the React instance that was just created.

### RuntimeHandle
`readonly`  Object `RuntimeHandle`

Provides access to the jsi::Runtime for synchronous access using GetOrCreateContextRuntime

## Referenced by
- [`ReactInstanceSettings`](ReactInstanceSettings)

