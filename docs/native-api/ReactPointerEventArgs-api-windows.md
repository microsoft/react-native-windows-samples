---
id: ReactPointerEventArgs
title: ReactPointerEventArgs
---

Kind: `class`



> **EXPERIMENTAL**

Event arguments wrapper for [`IViewManagerWithPointerEvents`](IViewManagerWithPointerEvents).

## Properties
### Args
`readonly`  [`PointerRoutedEventArgs`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Input.PointerRoutedEventArgs) `Args`

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
