---
id: IViewManagerWithOnLayout
title: IViewManagerWithOnLayout
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `interface`

Enables view managers to receive callback when Yoga layout props are applied. 

## Methods
### OnLayout
void **`OnLayout`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, float left, float top, float width, float height)

Invoked just before `onLayout` event is emitted for a view. Note: this callback is invoked any time the Yoga node returns true from YGNodeHasNewLayout. React Native Windows suppresses `onLayout` events when the final layout has not changed, so this method may be called without a corresponding `onLayout` event in JavaScript.

