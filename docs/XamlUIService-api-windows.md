---
id: xamluiservice-api
title: XamlUIService
---

`XamlUIService` provides access to XAML UI specific functionality.  It provides access to APIs to get a XAML element from a react tag, and to dispatch events to JS components.

# Reference

## Methods

### `FromContext()`

```csharp
static XamlUIService FromContext(IReactContext context);
```

Use this method to gain access to the `XamlUIService` from a `ReactContext`.

### `ElementFromReactTag()`

```csharp
Windows.UI.Xaml.DependencyObject ElementFromReactTag(Int64 reactTag);
```

Get the backing XAML element, from a react tag.

### `DispatchEvent()`

```csharp
void DispatchEvent(Windows.UI.Xaml.FrameworkElement view, String eventName, JSValueArgWriter eventDataArgWriter);
```

Dispatch an event to a JS component.  


<!-- // Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
 
import "IReactContext.idl";

namespace Microsoft.ReactNative {

  [default_interface]
  [webhosthidden]
  runtimeclass XamlUIService {
    static XamlUIService FromContext(IReactContext context);

    Windows.UI.Xaml.DependencyObject ElementFromReactTag(Int64 reactTag);

    // Dispatch UI event. This method is to be moved to IReactViewContext.
    void DispatchEvent(Windows.UI.Xaml.FrameworkElement view, String eventName, JSValueArgWriter eventDataArgWriter);
  }

} // namespace Microsoft.ReactNative
-->
