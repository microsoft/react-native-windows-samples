---
id: version-0.69-IViewManagerWithDropViewInstance
title: IViewManagerWithDropViewInstance
original_id: IViewManagerWithDropViewInstance
---

Kind: `interface`



Enables view managers to track when views are removed from the shadow tree. 



## Methods
### OnDropViewInstance
void **`OnDropViewInstance`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view)

Invoked when React has removed the view from its shadow tree. Note this method call is distinct from the XAML Unloaded event, which is asynchronously triggered from when the removal of the view from the UI tree happens. 




