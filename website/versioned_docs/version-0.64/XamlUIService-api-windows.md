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

Dispatches an event to a JS component.



### ElementFromReactTag
[`DependencyObject`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.DependencyObject) **`ElementFromReactTag`**(int64_t reactTag)

Gets the backing XAML element from a react tag.



### FromContext
`static` [`XamlUIService`](XamlUIService) **`FromContext`**([`IReactContext`](IReactContext) context)

Use this method to get access to the [`XamlUIService`](XamlUIService) associated with the [`IReactContext`](IReactContext).



### GetXamlRoot
`static` [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) **`GetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Retrieves the default [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) for the app.



### SetXamlRoot
`static` void **`SetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) xamlRoot)

Sets the [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) element for the app. This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) object when using XAML Islands so that certain APIs work correctly.
For more information, see [Host WinRT XAML Controls in desktop apps (XAML Islands)](https://docs.microsoft.com/windows/apps/desktop/modernize/xaml-islands).




