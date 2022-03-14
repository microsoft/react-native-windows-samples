---
id: version-0.63-view-managers
title: Native UI Components
original_id: view-managers
---

> **This documentation and the underlying platform code is a work in progress.**
> **Examples (C# and C++/WinRT):**
>
> - [Native Module Sample in microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/tree/main/samples/NativeModuleSample)
> - [Sample App in microsoft/react-native-windows/packages/microsoft-reactnative-sampleapps](https://github.com/microsoft/react-native-windows/tree/main/packages/sample-apps)

There are tons of native UI widgets out there ready to be used in the latest apps - some of them are part of the platform, others are available as third-party libraries, and still more might be in use in your very own portfolio. React Native has several of the most critical platform components already wrapped, like ScrollView and TextInput, but not all of them, and certainly not ones you might have written yourself for a previous app. Fortunately, we can wrap up these existing components for seamless integration with your React Native application.

Like the [native module guide](native-modules.md), this too is a more advanced guide that assumes you are somewhat familiar with UWP programming. This guide will show you how to build a native UI component, walking you through the implementation of a subset of the existing ImageView component available in the core React Native library.

## Overview

Similarly to authoring native modules, at a high level you must:

1. Author a ViewManager which defines a new Component type and understands how to create and interact with the native UI widget.
2. Register your new ViewManager within the native code of your React Native host application.
3. Reference the new Component within your React Native JSX code.

### Note about UWP XAML controls
Some UWP XAML controls do not support being hosted in environments where 3D transforms are involved (i.e. the [`Transform3D`](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.uielement.transform3d) property is set on the control or on any of the control's ancestors in the XAML tree). 

Currently, React Native for Windows uses a global PerspectiveTransform to provide a 3D look to objects being rotated along the `x` or `y` axes, which means these non-3D-aware controls will not work out of the box (e.g. [InkCanvas](https://docs.microsoft.com/en-us/uwp/api/Windows.UI.Xaml.Controls.InkCanvas)). However, a React Native for Windows app can opt out of the 3D perspective (and in so doing, enable these non-3D-aware controls) by setting the [`IsPerspectiveEnabled`](https://github.com/microsoft/react-native-windows/blob/4e775b9a59c55996d7598aadaeb82c93c40cbb6f/vnext/Microsoft.ReactNative/ReactRootView.idl#L18) property on the `ReactRootView`.

__Important__: The `IsPerspectiveEnabled` property is experimental and support for it may be removed in the future.

## Initial Setup

Prerequisite: Follow the [Native Modules Setup Guide](native-modules-setup.md) to create the Visual Studio infrastructure to author your own stand-alone native module for React Native Windows

Once you have set up your development environment and project structure, you are ready to write code. 

If you are only planning on adding a native module to your existing React Native Windows app, ie:

1. You followed [Getting Started](getting-started.md), where
1. You ran `npx react-native-windows-init --overwrite` to add Windows to your project, and
1. You are just adding your native code to the app project under the `windows` folder.

Then you can simply open the Visual Studio solution in the `windows` folder and add the new files directly to the app project.

If you are instead creating a standalone native module, or adding Windows support to an existing native module, check out the [Native Modules Setup](native-modules-setup.md) guide first.

## Sample ViewManager (C#)

### Attributes

| Attribute                         | Use                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------- |
| `ViewManagerExportedViewConstant` | Specifies a field or property that represents a constant.                               |
| `ViewManagerProperty`             | Specifies a method to be called to set a property on an instance of a native UI widget. |
| `ViewManagerCommand`              | Specifies a method that can be called on an instance of a native UI widget.             |

For this sample, assume we have the following `CustomUserControl` that we want to use in React Native.

_CustomUserControl.cs_

```csharp
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace ViewManagerSample
{
    public sealed class CustomUserControl : Control
    {
        public static DependencyProperty LabelProperty { get; private set; }

        public string Label
        {
            get
            {
                return (string)GetValue(LabelProperty);
            }
            set
            {
                SetValue(LabelProperty, value);
            }
        }

        static CustomUserControl()
        {
            LabelProperty = DependencyProperty.Register(
                nameof(Label),
                typeof(string),
                typeof(CustomUserControl),
                new PropertyMetadata(default(string))
                );
        }

        public CustomUserControl()
        {
            DefaultStyleKey = typeof(CustomUserControl);
        }
    }
}
```

```xml
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:local="using:ViewManagerSample">

    <Style TargetType="local:CustomUserControl" >
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="local:CustomUserControl">
                    <Border
                        Background="{TemplateBinding Background}"
                        BorderBrush="{TemplateBinding BorderBrush}"
                        BorderThickness="{TemplateBinding BorderThickness}">
                        <TextBlock Foreground="{TemplateBinding Foreground}" Text="{TemplateBinding Label}" TextAlignment="Center" />
                    </Border>
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
</ResourceDictionary>
```

### 1. Authoring your View Manager

Here is a sample view manager written in C# called `CustomUserControlViewManager`.

_CustomUserControlViewManager.cs_

```csharp
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Controls;

using Microsoft.ReactNative.Managed;
using System.Collections.Generic;

namespace ViewManagerSample
{
    internal class CustomUserControlViewManager : AttributedViewManager<CustomUserControlCS>
    {
        [ViewManagerProperty("label")]
        public void SetLabel(CustomUserControl view, view, string value)
        {
            if (null != value)
            {
                view.SetValue(CustomUserControl.LabelProperty, value);
            }
            else
            {
                view.ClearValue(CustomUserControl.LabelProperty);
            }
        }

        [ViewManagerProperty("color")]
        public void SetColor(CustomUserControl view, Brush value)
        {
            if (null != value)
            {
                view.SetValue(Control.ForegroundProperty, value);
            }
            else
            {
                view.ClearValue(Control.ForegroundProperty);
            }
        }

        [ViewManagerProperty("backgroundColor")]
        public void SetBackgroundColor(CustomUserControl view, Brush value)
        {
            if (null != value)
            {
                view.SetValue(Control.BackgroundProperty, value);
            }
            else
            {
                view.ClearValue(Control.BackgroundProperty);
            }
        }

        [ViewManagerCommand]
        public void CustomCommand(CustomUserControl view, IReadonlyList<object> commandArgs)
        {
            // Execute command
        }
    }
}
```

### 2. Registering your View Manager

As with native modules, we want to register our new `CustomUserControlViewManager` with React Native so we can actually use it. To do this, first we're going to create a `ReactPackageProvider` which implements [Microsoft.ReactNative.IReactPackageProvider](https://github.com/microsoft/react-native-windows/blob/main/vnext/Microsoft.ReactNative/IReactPackageProvider.idl).

_ReactPackageProvider.cs_

```csharp
using Microsoft.ReactNative.Managed;

namespace ViewManagerSample
{
  public sealed class ReactPackageProvider : IReactPackageProvider
  {
    public void CreatePackage(IReactPackageBuilder packageBuilder)
    {
      packageBuilder.AddViewManagers();
    }
  }
}
```

Here we've implemented the `CreatePackage` method, which receives `packageBuilder` to build contents of the package. Since we use reflection to discover and bind native module, we call `AddViewManagers` extension method to register all the view managers in our assembly.

Now that we have the `ReactPackageProvider`, it's time to register it within our `ReactApplication`. We do that by simply adding the provider to the `PackageProviders` property.

_App.xaml.cs_

```csharp
using Microsoft.ReactNative;

namespace SampleApp
{
    sealed partial class App : ReactApplication
    {
        public App()
        {
            /* Other Init Code */

            PackageProviders.Add(new Microsoft.ReactNative.Managed.ReactPackageProvider()); // Includes any modules in this project
            PackageProviders.Add(new ViewManagerSample.ReactPackageProvider());

            /* Other Init Code */
        }
    }
}
```

This example assumes that the `ViewManagerSample.ReactPackageProvider` we created above is in a different project (assembly) than our application. However you'll notice that by default we also added a `Microsoft.ReactNative.Managed.ReactPackageProvider`.

The `Microsoft.ReactNative.Managed.ReactPackageProvider` is a convenience that makes sure that all native modules and view managers defined within the app project automatically get registered. So if you're creating your view managers directly within the app project, you won't actually want to define a separate `ReactPackageProvider`.

### 3. Using your View Manager in JSX

_ViewManagerSample.js_

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  requireNativeComponent,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';

let CustomUserControl = requireNativeComponent('CustomUserControl');

class ViewManagerSample extends Component {
  onPress() {
    if (_customControlRef) {
      const tag = findNodeHandle(this._customControlRef);
      UIManager.dispatchViewManagerCommand(tag, UIManager.getViewManagerConfig('CustomUserControl').Commands.CustomCommand, ['arg1', 'arg2']);
    }
  }

  render() {
    return (
      <View style={styles.container}>
         <CustomUserControl style={styles.customcontrol} label="CustomUserControl!" ref={(ref) => { this._customControlRef = ref; }} />
         <Button onPress={() => { this.onPress(); }} title="Call CustomUserControl Commands!" />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  customcontrol: {
    color: '#333333',
    backgroundColor: '#006666',
    width: 200,
    height: 20,
    margin: 10,
  },
});

AppRegistry.registerComponent('ViewManagerSample', () => ViewManagerSample);
```

## Sample ViewManager (C++)

For this sample, assume we already have the `CustomUserControl` defined in the C# example.

### 1. Authoring your View Manager

Here is a sample view manager written in C++ called `CustomUserControlViewManager`.

_CustomUserControlViewManager.h_

```cpp
#pragma once

#include "pch.h"

#include "winrt/Microsoft.ReactNative.h"

namespace winrt::ViewManagerSample::implementation {

struct CustomUserControlViewManager : winrt::implements<
                                             CustomUserControlViewManager,
                                             winrt::Microsoft::ReactNative::IViewManager,
                                             winrt::Microsoft::ReactNative::IViewManagerWithNativeProperties,
                                             winrt::Microsoft::ReactNative::IViewManagerWithCommands> {
 public:
  CustomUserControlViewManager() = default;

  // IViewManager
  winrt::hstring Name() noexcept;

  winrt::Windows::UI::Xaml::FrameworkElement CreateView() noexcept;

  // IViewManagerWithNativeProperties
  winrt::Windows::Foundation::Collections::
      IMapView<winrt::hstring, winrt::Microsoft::ReactNative::ViewManagerPropertyType>
      NativeProps() noexcept;

  void UpdateProperties(
      winrt::Windows::UI::Xaml::FrameworkElement const &view,
      winrt::Microsoft::ReactNative::IJSValueReader const &propertyMapReader) noexcept;

   // IViewManagerWithCommands
  winrt::Windows::Foundation::Collections::IVectorView<winrt::hstring> Commands() noexcept;

  void DispatchCommand(
      winrt::Windows::UI::Xaml::FrameworkElement const &view,
      winrt::hstring const &commandId,
      winrt::Microsoft::ReactNative::IJSValueReader const &commandArgsReader) noexcept;
};

}
```

_CustomUserControlViewManager.cpp_

```cpp
#include "pch.h"
#include "CustomUserControlViewManager.h"

#include "JSValueReader.h"
#include "NativeModules.h"

using namespace winrt;
using namespace Microsoft::ReactNative;
using namespace Windows::Foundation;
using namespace Windows::Foundation::Collections;

using namespace Windows::UI::Xaml;
using namespace Windows::UI::Xaml::Media;
using namespace Windows::UI::Xaml::Controls;

namespace winrt::ViewManagerSample::implementation {

// IViewManager
hstring CustomUserControlViewManager::Name() noexcept {
  return L"CustomUserControl";
}

FrameworkElement CustomUserControlViewManager::CreateView() noexcept {
  return winrt::ViewManagerSample::CustomUserControl();
}

// IViewManagerWithNativeProperties
IMapView<hstring, ViewManagerPropertyType> CustomUserControlViewManager::NativeProps() noexcept {
  auto nativeProps = winrt::single_threaded_map<hstring, ViewManagerPropertyType>();

  nativeProps.Insert(L"label", ViewManagerPropertyType::String);
  nativeProps.Insert(L"color", ViewManagerPropertyType::Color);
  nativeProps.Insert(L"backgroundColor", ViewManagerPropertyType::Color);

  return nativeProps.GetView();
}

void CustomUserControlViewManager::UpdateProperties(
    FrameworkElement const &view,
    IJSValueReader const &propertyMapReader) noexcept {
  if (auto control = view.try_as<winrt::ViewManagerSample::CustomUserControl>()) {

    const JSValueObject &propertyMap = JSValue::ReadObjectFrom(propertyMapReader);

    for (auto const &pair : propertyMap) {
      auto const &propertyName = pair.first;
      auto const &propertyValue = pair.second;

      if (propertyName == "label") {
        if (propertyValue != nullptr) {
          auto const &value = winrt::box_value(winrt::to_hstring(propertyValue.String()));
          control.SetValue(winrt::ViewManagerSample::CustomUserControl::LabelProperty(), propertyValue);
        } else {
          control.ClearValue(winrt::ViewManagerSample::CustomUserControl::LabelProperty());
        }
      } else if (propertyName == "color") {
        if (auto value = propertyValue.To<Brush>()) {
          control.SetValue(Control::ForegroundProperty(), value);
        } else {
          control.ClearValue(Control::ForegroundProperty());
        }
      } else if (propertyName == "backgroundColor") {
        if (auto value = propertyValue.To<Brush>()) {
          control.SetValue(Control::BackgroundProperty(), value);
        } else {
          control.ClearValue(Control::BackgroundProperty());
        }
      }
    }
  }
}

// IViewManagerWithCommands
IVectorView<hstring> CustomUserControlViewManager::Commands() noexcept {
    auto commands = winrt::single_threaded_vector<hstring>();
    commands.Append(L"CustomCommand");
    return commands.GetView();
}

void CustomUserControlViewManager::DispatchCommand(
    FrameworkElement const &view,
    winrt::hstring const &commandId,
    winrt::Microsoft::ReactNative::IJSValueReader const &commandArgsReader) noexcept {
  if (auto control = view.try_as<winrt::SampleLibraryCPP::CustomUserControlCPP>()) {
    if (commandId == L"CustomCommand") {
      const JSValueArray &commandArgs = JSValue::ReadArrayFrom(commandArgsReader);
      // Execute command
    }
  }
}

}
```

### 2. Registering your View Manager

As with native modules, we want to register our new `CustomUserControlViewManager` with React Native so we can actually use it. To do this, first we're going to create a `ReactPackageProvider` which implements [Microsoft.ReactNative.IReactPackageProvider](https://github.com/microsoft/react-native-windows/blob/main/vnext/Microsoft.ReactNative/IReactPackageProvider.idl).

_ReactPackageProvider.idl_

```cpp
namespace ViewManagerSample
{
    [webhosthidden]
    [default_interface]
    runtimeclass ReactPackageProvider : Microsoft.ReactNative.IReactPackageProvider
    {
        ReactPackageProvider();
    };
}
```

After that we add the .h and.cpp files:

_ReactPackageProvider.h_

```cpp
#pragma once

#include "ReactPackageProvider.g.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::ViewManagerSample::implementation
{
    struct ReactPackageProvider : ReactPackageProviderT<ReactPackageProvider>
    {
        ReactPackageProvider() = default;

        void CreatePackage(IReactPackageBuilder const& packageBuilder) noexcept;
    };
}

namespace winrt::ViewManagerSample::factory_implementation
{
    struct ReactPackageProvider : ReactPackageProviderT<ReactPackageProvider, implementation::ReactPackageProvider> {};
}
```

_ReactPackageProvider.cpp_

```cpp
#include "pch.h"
#include "ReactPackageProvider.h"
#include "ReactPackageProvider.g.cpp"

#include <ModuleRegistration.h>

// NOTE: You must include the headers of your native modules here in
// order for the AddAttributedModules call below to find them.
#include "CustomUserControlViewManager.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::ViewManagerSample::implementation {

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const& packageBuilder)
noexcept {
  packageBuilder.AddViewManager(
      L"CustomUserControlViewManager", []() { return winrt::make<CustomUserControlViewManager>(); });
}

} // namespace winrt::ViewManagerSample::implementation
```

Here we've implemented the `CreatePackage` method, which receives `packageBuilder` to build contents of the package. And then we call `AddViewManager` with the name of our view manager and a lambda which returns an instance of the view manager.

Now that we have the `ReactPackageProvider`, it's time to register it within our `ReactApplication`. We do that by simply adding the provider to the `PackageProviders` property.

_App.cpp_

```cpp
#include "pch.h"

#include "App.h"
#include "ReactPackageProvider.h"

#include "winrt/ViewManagerSample.h"

namespace winrt::SampleApp::implementation {

App::App() noexcept {
  /* Other Init Code */

  PackageProviders().Append(make<ReactPackageProvider>()); // Includes all modules in this project
  PackageProviders().Append(winrt::ViewManagerSample::ReactPackageProvider());

  /* Other Init Code */
}

} // namespace winrt::SampleApp::implementation
```

This example assumes that the `ViewManagerSample::ReactPackageProvider` we created above is in a different project (assembly) than our application. However you'll notice that by default we also added a `SampleApp::ReactPackageProvider`.

The `SampleApp::ReactPackageProvider` is a convenience that makes sure that all native modules and view managers defined within the app project automatically get registered. So if you're creating your native modules directly within the app project, you won't actually want to define a separate `ReactPackageProvider`.

### 3. Using your View Manager in JSX

_ViewManagerSample.js_

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  requireNativeComponent,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';

let CustomUserControl = requireNativeComponent('CustomUserControl');

class ViewManagerSample extends Component {
  onPress() {
    if (_customControlRef) {
      const tag = findNodeHandle(this._customControlRef);
      UIManager.dispatchViewManagerCommand(tag, UIManager.getViewManagerConfig('CustomUserControl').Commands.CustomCommand, ['arg1', 'arg2']);
    }
  }

  render() {
    return (
      <View style={styles.container}>
         <CustomUserControl style={styles.customcontrol} label="CustomUserControl!" ref={(ref) => { this._customControlRef = ref; }} />
         <Button onPress={() => { this.onPress(); }} title="Call CustomUserControl Commands!" />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  customcontrol: {
    color: '#333333',
    backgroundColor: '#006666',
    width: 200,
    height: 20,
    margin: 10,
  },
});

AppRegistry.registerComponent('ViewManagerSample', () => ViewManagerSample);
```
