---
id: version-0.79-IReactViewInstance
title: IReactViewInstance
original_id: IReactViewInstance
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `interface`

> **EXPERIMENTAL**

Used to implement a non-XAML platform ReactRootView.

## Methods
### InitRootView
void **`InitRootView`**([`IReactContext`](IReactContext) context, [`ReactViewOptions`](ReactViewOptions) viewOptions)

Initialize ReactRootView with the reactInstance and view-specific settings

### UninitRootView
void **`UninitRootView`**()

Uninitialize ReactRootView and destroy UI tree

### UpdateRootView
void **`UpdateRootView`**()

Update ReactRootView with changes in ReactInstance

## Referenced by
- [`IReactViewHost`](IReactViewHost)
