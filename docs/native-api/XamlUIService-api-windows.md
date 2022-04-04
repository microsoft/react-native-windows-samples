---
id: XamlUIService
title: XamlUIService
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



### GetAccessibleRoot
`static` [`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) **`GetAccessibleRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Retrieves the default [`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) that will be used for the app for accessibility purposes (e.g. to announce).



### GetIslandWindowHandle
`static` uint64_t **`GetIslandWindowHandle`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Gets the window handle HWND (as an UInt64) used as the XAML Island window for the current React instance.



### GetXamlRoot
`static` [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) **`GetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Retrieves the default [`Xaml.XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) for the app.



### SetAccessibleRoot
`static` void **`SetAccessibleRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) accessibleRoot)

Sets the [`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) that will act as the default accessible element for the app. The element must be able to create an automation peer (see [`FrameworkElementAutomationPeer`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Peers.FrameworkElementAutomationPeer)), or have the Landmark type property set (see [`AutomationProperties.LandmarkTypeProperty`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.AutomationProperties.LandmarkTypeProperty)).
This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) when using XAML Islands to have access to functionality related to accessibility.



### SetIslandWindowHandle
`static` void **`SetIslandWindowHandle`**([`IReactPropertyBag`](IReactPropertyBag) properties, uint64_t windowHandle)

Sets the windowHandle HWND (as an UInt64) to be the XAML Island window for the current React instance.
Pass the value returned by IDesktopWindowXamlSourceNative get_WindowHandle.



### SetXamlRoot
`static` void **`SetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) xamlRoot)

Sets the [`Xaml.XamlRoot`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) element for the app. This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) object when using XAML Islands so that certain APIs work correctly.
For more information, see [Host WinRT XAML Controls in desktop apps (XAML Islands)](https://docs.microsoft.com/windows/apps/desktop/modernize/xaml-islands).




