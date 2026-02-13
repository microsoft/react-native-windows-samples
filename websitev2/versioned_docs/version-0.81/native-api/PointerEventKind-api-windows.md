---
id: PointerEventKind
title: PointerEventKind
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `enum`

> **EXPERIMENTAL**

| Name |  Value | Description |
|--|--|--|
|`None` | 0x0  |  Default pointer event kind that corresponding to events that should be ignored by the React root view pointer event handler.|
|`Start` | 0x1  |  Pointer event kind corresponding to [`UIElement.PointerPressedEvent`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement.PointerPressedEvent) on the React root view.|
|`End` | 0x2  |  Pointer event kind corresponding to [`UIElement.PointerReleasedEvent`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement.PointerReleasedEvent) on the React root view.|
|`Move` | 0x3  |  Pointer event kind corresponding to [`UIElement.PointerMovedEvent`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement.PointerMovedEvent) on the React root view.|
|`Cancel` | 0x4  |  Pointer event kind corresponding to [`UIElement.PointerCanceledEvent`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement.PointerCanceledEvent) on the React root view.|
|`CaptureLost` | 0x5  |  Pointer event kind corresponding to [`UIElement.PointerCaptureLostEvent`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement.PointerCaptureLostEvent) on the React root view.|

## Referenced by
- [`ReactPointerEventArgs`](ReactPointerEventArgs)

