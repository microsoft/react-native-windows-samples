---
id: version-0.63-XamlUIService
title: XamlUIService
original_id: XamlUIService
---

Kind: `class`





## Methods
### DispatchEvent
void **`DispatchEvent`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string eventName, [`JSValueArgWriter`](JSValueArgWriter) eventDataArgWriter)



### ElementFromReactTag
[`DependencyObject`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.DependencyObject) **`ElementFromReactTag`**(int64_t reactTag)



### FromContext
`static` [`XamlUIService`](XamlUIService) **`FromContext`**([`IReactContext`](IReactContext) context)



### GetXamlRoot
`static` [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) **`GetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)



### SetXamlRoot
`static` void **`SetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) xamlRoot)




