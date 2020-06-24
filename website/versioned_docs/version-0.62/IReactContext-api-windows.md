---
id: version-0.62-ireactcontext-api
title: IReactContext
original_id: ireactcontext-api
---

The IReactContext is given to native modules to communicate with other native modules, views, application, and the ReactNative instance.

It has the same lifetime as the React instance. When the React instance is reloaded or unloaded, the IReactContext is destroyed.

- Use the Properties to share native module's data with other components.
- Use the Notifications to exchange events with other components.
- Use CallJSFunction to call JavaScript functions, and EmitJSEvent to raise JavaScript events.

# Reference

## Methods

### `DispatchEvent()`

```csharp
void DispatchEvent(XAML_NAMESPACE.FrameworkElement view, String eventName, JSValueArgWriter eventDataArgWriter);
```

> Deprecated: Use DispatchEvent on [XamlUIService](XamlUIService-api-windows.md) instead

### `CallJSFunction()`

```csharp
void CallJSFunction(String moduleName, String methodName, JSValueArgWriter paramsArgWriter);
```

Call JavaScript function methodName of moduleName.

### `EmitJSEvent()`

```csharp
void EmitJSEvent(String eventEmitterName, String eventName, JSValueArgWriter paramsArgWriter);
```

Call JavaScript module event. It is a specialized CallJSFunction call where method name is always 'emit'.


## Properties

### `Properties`

```csharp
IReactPropertyBag Properties { get; }
```

Properties shared with the IReactInstanceSettings.Properties. It can be used to share values and state between components.

### `Notifications`

```csharp
IReactNotificationService Notifications { get; }
```

Notifications shared with the IReactInstanceSettings.Notifications. They can be used to exchange events between components.
All subscriptions added to the IReactContext.Notifications are automatically removed after the IReactContext is destroyed.
The subscriptions added to IReactInstanceSettings.Notifications kept as long as IReactInstanceSettings alive.

### `UIDispatcher`

```csharp
IReactDispatcher UIDispatcher { get; }
```

Get ReactDispatcherHelper::UIDispatcherProperty from the Properties property bag.

### `JSDispatcher`

```csharp
IReactDispatcher JSDispatcher { get; }
```

Get ReactDispatcherHelper::JSDispatcherProperty from the Properties property bag.


<!-- // Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import "IJSValueWriter.idl";
import "IReactNotificationService.idl";
import "IReactPropertyBag.idl";

#include "NamespaceRedirect.h"

namespace Microsoft.ReactNative {

  // The IReactContext is given to native modules to communicate with
  // other native modules, views, application, and the ReactNative instance.
  // It has the same lifetime as the React instance. When the React instance is reloaded or unloaded,
  // the IReactContext is destroyed.
  // Use the Properties to share native module's data with other components.
  // Use the Notifications to exchange events with other components.
  // Use CallJSFunction to call JavaScript functions, and EmitJSEvent to raise JavaScript events.
  [webhosthidden]
  interface IReactContext {
    // Properties shared with the IReactInstanceSettings.Properties. It can be used to share values and state between components.
    IReactPropertyBag Properties { get; };

    // Notifications shared with the IReactInstanceSettings.Notifications. They can be used to exchange events between components.
    // All subscriptions added to the IReactContext.Notifications are automatically removed after the IReactContext is destroyed.
    // The subscriptions added to IReactInstanceSettings.Notifications kept as long as IReactInstanceSettings alive.
    IReactNotificationService Notifications { get; };

    // Get ReactDispatcherHelper::UIDispatcherProperty from the Properties property bag.
    IReactDispatcher UIDispatcher { get; };

    // Get ReactDispatcherHelper::JSDispatcherProperty from the Properties property bag.
    IReactDispatcher JSDispatcher { get; };

    // Deprecated: Use DispatchEvent on XamlUIService instead
    void DispatchEvent(XAML_NAMESPACE.FrameworkElement view, String eventName, JSValueArgWriter eventDataArgWriter);

    // Call JavaScript function methodName of moduleName.
    void CallJSFunction(String moduleName, String methodName, JSValueArgWriter paramsArgWriter);

    // Call JavaScript module event. It is a specialized CallJSFunction call where method name is always 'emit'.
    void EmitJSEvent(String eventEmitterName, String eventName, JSValueArgWriter paramsArgWriter);
  }
} // namespace Microsoft.ReactNative -->
