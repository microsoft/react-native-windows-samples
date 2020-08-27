---
id: ireactdispatcher-api
title: IReactDispatcher
---

IReactDispatcher provides the core threading / task management interface for ensuring code happens in the right order on the right thread.  One primary dispatcher that applications may require is the [UIDispatcher](IReactContext-api-windows.md#uidispatcher) which provides NativeModules access to the UI thread associated with this react instance.   Another one is the [JSDispatcher](IReactContext-api-windows.md#jsdispatcher) which allows apps to post tasks to the JS engine thread.

# Reference

## Methods

### ```Post```

```csharp
   void Post(ReactDispatcherCallback callback);
```

Post a task to the dispatcher.  This callback will be called asynchronously on the thread / queue associated with this dispatcher.

## Properties

### ```HasThreadAccess```

```csharp
bool HasThreadAccess { get; }
```

True if the dispatcher uses current thread.

<!-- // Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

  // The delegate is used to create property value on-demand.
  [webhosthidden]
  delegate void ReactDispatcherCallback();

  [webhosthidden]
  interface IReactDispatcher
  {
    // True if dispatcher uses current thread.
    Boolean HasThreadAccess { get; };

    // Post task for the asynchronous execution.
    void Post(ReactDispatcherCallback callback);
  }

  // Helper methods for the property bag implementation.
  [webhosthidden]
  static runtimeclass ReactDispatcherHelper
  {
    // Get or create IReactDispatcher for the current UI thread.
    static IReactDispatcher UIThreadDispatcher{ get; };

    // Get name of the UIDispatcher property for the IReactPropertyBag.
    static IReactPropertyName UIDispatcherProperty();
  }
} // namespace Microsoft.ReactNative
-->


