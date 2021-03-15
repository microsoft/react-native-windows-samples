---
id: version-0.64-XamlUIService
title: XamlUIService
original_id: XamlUIService
---

Kind: `class`



Provides access to XAML UI-specific functionality. It provides access to APIs to get a XAML element from a react tag, and to dispatch events to JS components.



## Methods
### DispatchEvent
void **`DispatchEvent`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string eventName, [`JSValueArgWriter`](JSValueArgWriter) eventDataArgWriter)

Dispatch an event to a JS component.



### ElementFromReactTag
[`DependencyObject`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.DependencyObject) **`ElementFromReactTag`**(int64_t reactTag)

Get the backing XAML element from a react tag.



### FromContext
`static` [`XamlUIService`](XamlUIService) **`FromContext`**([`IReactContext`](IReactContext) context)

Use this method to gain access to the `XamlUIService` from a `ReactContext`.



### GetXamlRoot
`static` [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) **`GetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)



### SetXamlRoot
`static` void **`SetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) xamlRoot)




