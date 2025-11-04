---
id: XamlUIService
title: XamlUIService
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

## New Architecture

Kind: `class`

Provides access to XAML UI-specific functionality. It provides access to APIs to get a XAML element from a react tag, and to dispatch events to JS components.

### Methods
#### FromContext
`static` [`XamlUIService`](XamlUIService) **`FromContext`**([`IReactContext`](IReactContext) context)

Use this method to get access to the [`XamlUIService`](XamlUIService) associated with the [`IReactContext`](IReactContext).

#### GetAccessibleRoot
`static` [`FrameworkElement`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Xaml.FrameworkElement) **`GetAccessibleRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Retrieves the default [`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) that will be used for the app for accessibility purposes (e.g. to announce).

#### GetIslandWindowHandle
`static` uint64_t **`GetIslandWindowHandle`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Gets the window handle HWND (as an UInt64) used as the XAML Island window for the current React instance.

#### GetXamlRoot
`static` [`XamlRoot`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Xaml.XamlRoot) **`GetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Retrieves the default [`XamlRoot`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) for the app.

#### SetAccessibleRoot
`static` void **`SetAccessibleRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`FrameworkElement`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Xaml.FrameworkElement) accessibleRoot)

Sets the [`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) that will act as the default accessible element for the app. The element must be able to create an automation peer (see [`FrameworkElementAutomationPeer`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Peers.FrameworkElementAutomationPeer)), or have the Landmark type property set (see [`AutomationProperties.LandmarkTypeProperty`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.AutomationProperties.LandmarkTypeProperty)).
This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) when using XAML Islands to have access to functionality related to accessibility.

#### SetIslandWindowHandle
`static` void **`SetIslandWindowHandle`**([`IReactPropertyBag`](IReactPropertyBag) properties, uint64_t windowHandle)

Sets the windowHandle HWND (as an UInt64) to be the XAML Island window for the current React instance.
Pass the value returned by IDesktopWindowXamlSourceNative get_WindowHandle.

#### SetXamlRoot
`static` void **`SetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`XamlRoot`](https://learn.microsoft.com/windows/windows-app-sdk/api/winrt/Microsoft.UI.Xaml.XamlRoot) xamlRoot)

Sets the [`XamlRoot`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) element for the app. This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) object when using XAML Islands so that certain APIs work correctly.
For more information, see [Host WinRT XAML Controls in desktop apps (XAML Islands)](https://docs.microsoft.com/windows/apps/desktop/modernize/xaml-islands).

## Old Architecture

Kind: `class`

Provides access to XAML UI-specific functionality. It provides access to APIs to get a XAML element from a react tag, and to dispatch events to JS components.

### Methods
#### DispatchEvent
void **`DispatchEvent`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string eventName, [`JSValueArgWriter`](JSValueArgWriter) eventDataArgWriter)

Dispatches an event to a JS component.

#### ElementFromReactTag
[`DependencyObject`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.DependencyObject) **`ElementFromReactTag`**(int64_t reactTag)

Gets the backing XAML element from a react tag.

#### FromContext
`static` [`XamlUIService`](XamlUIService) **`FromContext`**([`IReactContext`](IReactContext) context)

Use this method to get access to the [`XamlUIService`](XamlUIService) associated with the [`IReactContext`](IReactContext).

#### GetAccessibleRoot
`static` [`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) **`GetAccessibleRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Retrieves the default [`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) that will be used for the app for accessibility purposes (e.g. to announce).

#### GetIslandWindowHandle
`static` uint64_t **`GetIslandWindowHandle`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Gets the window handle HWND (as an UInt64) used as the XAML Island window for the current React instance.

#### GetReactRootView
[`ReactRootView`](ReactRootView) **`GetReactRootView`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view)

Gets the [`ReactRootView`](ReactRootView) view for a given element.

#### GetXamlRoot
`static` [`XamlRoot`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) **`GetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties)

Retrieves the default [`XamlRoot`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) for the app.

#### SetAccessibleRoot
`static` void **`SetAccessibleRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) accessibleRoot)

Sets the [`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) that will act as the default accessible element for the app. The element must be able to create an automation peer (see [`FrameworkElementAutomationPeer`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Peers.FrameworkElementAutomationPeer)), or have the Landmark type property set (see [`AutomationProperties.LandmarkTypeProperty`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.AutomationProperties.LandmarkTypeProperty)).
This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) when using XAML Islands to have access to functionality related to accessibility.

#### SetIslandWindowHandle
`static` void **`SetIslandWindowHandle`**([`IReactPropertyBag`](IReactPropertyBag) properties, uint64_t windowHandle)

Sets the windowHandle HWND (as an UInt64) to be the XAML Island window for the current React instance.
Pass the value returned by IDesktopWindowXamlSourceNative get_WindowHandle.

#### SetXamlRoot
`static` void **`SetXamlRoot`**([`IReactPropertyBag`](IReactPropertyBag) properties, [`XamlRoot`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) xamlRoot)

Sets the [`XamlRoot`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.XamlRoot) element for the app. This must be manually provided to the [`ReactInstanceSettings`](ReactInstanceSettings) object when using XAML Islands so that certain APIs work correctly.
For more information, see [Host WinRT XAML Controls in desktop apps (XAML Islands)](https://docs.microsoft.com/windows/apps/desktop/modernize/xaml-islands).

