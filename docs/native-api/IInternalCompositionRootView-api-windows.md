---
id: IInternalCompositionRootView
title: IInternalCompositionRootView
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

> **EXPERIMENTAL**

Custom ViewComponents need to implement this interface to be able to provide a custom visual using the composition context that allows custom compositors.  This is only required for custom components that need to support running in RNW instances with custom compositors.  Most custom components can just override CreateVisual on ViewComponentView. This interface will be removed in future versions

## Properties
### InternalRootVisual
 [`IVisual`](IVisual) `InternalRootVisual`

The RootVisual associated with the ReactNativeIsland (unresolved reference). It must be set to show any React UI elements.

## Methods
### OnMounted
void **`OnMounted`**()

### OnUnmounted
void **`OnUnmounted`**()

### SendMessage
int64_t **`SendMessage`**(uint32_t Msg, uint64_t WParam, int64_t LParam)

Forward input to the RootView. Only required when not using ContentIslands

### SetWindow
void **`SetWindow`**(uint64_t hwnd)

Hosting Window that input is coming from. Only required when not using ContentIslands
