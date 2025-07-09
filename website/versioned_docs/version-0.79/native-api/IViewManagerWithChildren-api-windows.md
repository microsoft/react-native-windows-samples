---
id: version-0.79-IViewManagerWithChildren
title: IViewManagerWithChildren
original_id: IViewManagerWithChildren
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `interface`

## Methods
### AddView
void **`AddView`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) parent, [`UIElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement) child, int64_t index)

### RemoveAllChildren
void **`RemoveAllChildren`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) parent)

### RemoveChildAt
void **`RemoveChildAt`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) parent, int64_t index)

### ReplaceChild
void **`ReplaceChild`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) parent, [`UIElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement) oldChild, [`UIElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.UIElement) newChild)
