---
id: LayoutService
title: LayoutService
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `class`

Provides access to Yoga layout functionality.

## Properties
### IsInBatch
`readonly`  bool `IsInBatch`

Determines whether the UIManager is currently processing a batch of node updates.This is useful for optimizing layout and ensuring that applying layout to a particular node will not cause tearing in the rendered UI.

## Methods
### ApplyLayout
void **`ApplyLayout`**(int64_t reactTag, float width, float height)

Recursively applies layout from the given React node with the supplied size constraints. This method will trigger a Yoga layout operation on the given node and its descendants and apply the layout results to these nodes.

### ApplyLayoutForAllNodes
void **`ApplyLayoutForAllNodes`**()

Recursively applies layout to all root nodes. This method will trigger a Yoga layout operation on roots attached to the React instance and apply the layout results to all descendant nodes.

### FromContext
`static` [`LayoutService`](LayoutService) **`FromContext`**([`IReactContext`](IReactContext) context)

Use this method to get access to the [`LayoutService`](LayoutService) associated with the [`IReactContext`](IReactContext).

### MarkDirty
void **`MarkDirty`**(int64_t reactTag)

Mark a particular React node as dirty for Yoga layout.

