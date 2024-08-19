---
id: ReactPointerEventArgs
title: ReactPointerEventArgs
---

Kind: `class`



> **EXPERIMENTAL**

Event arguments wrapper for [`IViewManagerWithPointerEvents`](IViewManagerWithPointerEvents).

## Properties
### AllowUncaptured
 bool `AllowUncaptured`

> **EXPERIMENTAL**

Gets or sets a flag that allows the ReactRootView to handle pointer events even when it does not capture the pointer. This is particularly useful for view managers that seek to capture the pointer to handle move events for a gesture (e.g., dragging), but conditionally may allow the ReactRootView to emit events (e.g., if the [`PointerEventKind.End`](PointerEventKind#end) event is received before a drag threshold is hit.

### Args
`readonly`  [`PointerRoutedEventArgs`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Input.PointerRoutedEventArgs) `Args`

> **EXPERIMENTAL**

Gets the wrapped routed pointer event.

### Kind
 [`PointerEventKind`](PointerEventKind) `Kind`

> **EXPERIMENTAL**

Gets or sets the pointer event kind. The only valid override is [`PointerEventKind.CaptureLost`](PointerEventKind#capturelost) to [`PointerEventKind.End`](PointerEventKind#end) to handle cases where PointerCaptureLost events on ReactRootView can be safely treated as PointerReleased events, e.g., for pointer events on selectable text.

### Target
 Object `Target`

> **EXPERIMENTAL**

Gets or sets the React target for the pointer event.






## Referenced by
- [`IViewManagerWithPointerEvents`](IViewManagerWithPointerEvents)
