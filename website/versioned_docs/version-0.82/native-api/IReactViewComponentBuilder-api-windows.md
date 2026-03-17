---
id: version-0.82-IReactViewComponentBuilder
title: IReactViewComponentBuilder
original_id: IReactViewComponentBuilder
---

Kind: `interface`

> **EXPERIMENTAL**

## Methods
### SetComponentViewInitializer
void **`SetComponentViewInitializer`**([`ComponentViewInitializer`](ComponentViewInitializer) initializer)

### SetCreateProps
void **`SetCreateProps`**([`ViewPropsFactory`](ViewPropsFactory) impl)

Create an implementation of your custom Props type that will be passed to your components Composition.ICompositionViewComponent.UpdateProps method.

### SetCreateShadowNode
void **`SetCreateShadowNode`**([`ViewShadowNodeFactory`](ViewShadowNodeFactory) impl)

### SetCustomCommandHandler
void **`SetCustomCommandHandler`**([`HandleCommandDelegate`](HandleCommandDelegate) impl)

### SetFinalizeUpdateHandler
void **`SetFinalizeUpdateHandler`**([`UpdateFinalizerDelegate`](UpdateFinalizerDelegate) impl)

### SetInitialStateDataFactory
void **`SetInitialStateDataFactory`**([`InitialStateDataFactory`](InitialStateDataFactory) impl)

### SetLayoutHandler
void **`SetLayoutHandler`**([`LayoutHandler`](LayoutHandler) impl)

### SetMeasureContentHandler
void **`SetMeasureContentHandler`**([`MeasureContentHandler`](MeasureContentHandler) impl)

### SetMountChildComponentViewHandler
void **`SetMountChildComponentViewHandler`**([`MountChildComponentViewDelegate`](MountChildComponentViewDelegate) impl)

### SetShadowNodeCloner
void **`SetShadowNodeCloner`**([`ViewShadowNodeCloner`](ViewShadowNodeCloner) impl)

### SetUnmountChildComponentViewHandler
void **`SetUnmountChildComponentViewHandler`**([`UnmountChildComponentViewDelegate`](UnmountChildComponentViewDelegate) impl)

### SetUpdateEventEmitterHandler
void **`SetUpdateEventEmitterHandler`**([`UpdateEventEmitterDelegate`](UpdateEventEmitterDelegate) impl)

### SetUpdatePropsHandler
void **`SetUpdatePropsHandler`**([`UpdatePropsDelegate`](UpdatePropsDelegate) impl)

### SetUpdateStateHandler
void **`SetUpdateStateHandler`**([`UpdateStateDelegate`](UpdateStateDelegate) impl)

## Referenced by
- [`ReactViewComponentProvider`](ReactViewComponentProvider)
