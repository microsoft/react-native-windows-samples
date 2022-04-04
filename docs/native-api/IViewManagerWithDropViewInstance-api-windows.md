---
id: IViewManagerWithDropViewInstance
title: IViewManagerWithDropViewInstance
---

Kind: `interface`



Enables view managers to track when views areremoved from the shadow tree.



## Methods
### OnDropViewInstance
void **`OnDropViewInstance`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view)

Invoked when React has removed the view from its shadow tree. Note this method call is distinct from the XAML Unloaded event, which is asynchronously triggered when the view is removed from the UI tree.




