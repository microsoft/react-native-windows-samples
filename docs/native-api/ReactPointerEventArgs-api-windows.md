---
id: ReactPointerEventArgs
title: ReactPointerEventArgs
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `class`

> **EXPERIMENTAL**

Event arguments wrapper for [`IViewManagerWithPointerEvents`](IViewManagerWithPointerEvents).

## Properties
### AllowUncaptured
 bool `AllowUncaptured`

> **EXPERIMENTAL**

Gets or sets a flag that allows the ReactRootView to handle pointer events even when it does not capture the pointer. This is particularly useful for view managers that seek to capture the pointer to handle move events for a gesture (e.g., dragging), but conditionally may allow the ReactRootView to emit events (e.g., if the [`PointerEventKind.End`](PointerEventKind) event is received before a drag threshold is hit.

### Args
`readonly`  [`PointerRoutedEventArgs`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Input.PointerRoutedEventArgs) `Args`

> **EXPERIMENTAL**

Gets the wrapped routed pointer event.

### Kind
 [`PointerEventKind`](PointerEventKind) `Kind`

> **EXPERIMENTAL**

Gets or sets the pointer event kind. The only valid override is [`PointerEventKind.CaptureLost`](PointerEventKind) to [`PointerEventKind.End`](PointerEventKind) to handle cases where PointerCaptureLost events on ReactRootView can be safely treated as PointerReleased events, e.g., for pointer events on selectable text.

### Target
 Object `Target`

> **EXPERIMENTAL**

Gets or sets the React target for the pointer event.

## Referenced by
- [`IViewManagerWithPointerEvents`](IViewManagerWithPointerEvents)
