---
id: version-0.65-IReactViewInstance
title: IReactViewInstance
original_id: IReactViewInstance
---

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
