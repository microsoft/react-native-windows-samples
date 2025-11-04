---
id: IViewManagerWithPointerEvents
title: IViewManagerWithPointerEvents
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `interface`

> **EXPERIMENTAL**

Experimental interface enabling view managers to release pointer capture from the React root view and start handling pointer events itself.

## Methods
### OnPointerEvent
void **`OnPointerEvent`**(Object view, [`ReactPointerEventArgs`](ReactPointerEventArgs) args)

When pointer events are received on the React root view, the top-level pointer event handler invokes this callback for each React view ancestor of the [`RoutedEventArgs.OriginalSource`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.RoutedEventArgs.OriginalSource) element with a view manager that implements [`IViewManagerWithPointerEvents`](IViewManagerWithPointerEvents) to allow the view manager to modify handling for the pointer event. This can be used to refine the target view. E.g., setting the [`ReactPointerEventArgs.Target`](ReactPointerEventArgs#target) property to null will force the React root view to choose one of the view's ancestors as the hit target. Alternatively, the view manager may also set the [`ReactPointerEventArgs.Target`](ReactPointerEventArgs#target) to any descendent of provided view to enable hit testing on views that do not derive from [`UIElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement).

