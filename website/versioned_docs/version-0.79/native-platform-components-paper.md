---
id: version-0.79-native-platform-components-paper
title: Native Platform: Native Components (Paper)
sidebar_label: Native Components (Paper)
original_id: native-platform-components-paper
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

This guide covers exposing native Windows UI to React Native by implementing a *Native Component* for the Windows platform. For a higher-level overview of native development on Windows, see [Native Platform: Overview](native-platform.md) before reading this guide.

> **Note:** See the [reactnative.dev Native Components guide](https://reactnative.dev/docs/fabric-native-components-introduction) for steps for implementing new Native Components for both the Android and iOS platforms.

> **Architecture Note:** This guide shows how to create a *Paper Native Component* to support React Native's Old Architecture. It will *not* work with New Architecture apps. To support React Native for Windows apps targeting the New Architecture, see [Native Platform: Native Components (Fabric)](native-platform-components.md). For more information on React Native architectures in React Native for Windows, see [New vs. Old Architecture](new-architecture.md).

## High-Level Overview

In order to implement Windows support for a Native Component, you'll need to:

1. Define the API surface for your Native Component in a TypeScript spec files
2. Use React Native for Windows' Native Library Codegen to take the TypeScript spec files and create the C++ headers for the Windows code
3. Write the Windows C++ code to implement the *View Manager*
4. Use the Native Component in your JavaScript

## Step by Step Guide

### 0. Setup

You'll need a React Native library project initialized with Windows support.

> **Note:** The rest of this guide assumes you've followed the [Native Platform: Getting Started](native-platform-getting-started.md) guide to set up a new library project named `testlib`.

### 1. Define the API surface in TypeScript

The default template for a new library does not contain an example of a Native Component, so we'll need to make one. For this guide, we're going to implement a component that uses native UI code to force its child component to render within the bounds of a circle, masking out the corners. This `CircleMask` could be used to say, render a user's square account or profile image as a circle.

First, we need to create the component's interface in a new TypeScript spec file `src\CircleMaskNativeComponent.ts`:

```tsx
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps } from 'react-native';

export interface CircleMaskProps extends ViewProps {}

export default codegenNativeComponent<CircleMaskProps>('CircleMask');
```

This spec file declares that React Native expects every platform to implement a Native Component named `CircleMask` which supports the properties of `CircleMaskProps`.

> **Note:** Every Native Component spec file must be named in the format `<componentName> + NativeComponent.ts` in order to be correctly identified as a spec file and not just a regular TypeScript file in your library.

### 2. Use React Native for Windows' Native Library Codegen

When making a Fabric Native Component, the React Native for Windows' Native Library Codegen is used to generate a bunch of C++ code to help you implement the Native Component. Unfortunately this generated code does not help with Paper Native Component implementations. See [Native Platform: Native Components (Fabric)](native-platform-components#2-use-react-native-for-windows-native-library-codegen) for more details.

### 3. Implement the Windows C++ code

Now it's time to implement `CircleMaskViewManager` in Windows code. React Native for Windows Paper View Managers are implemented in C++ and render UI using the `Windows::UI::Xaml` APIs, also known as [UWP XAML](https://learn.microsoft.com/en-us/windows/uwp/xaml-platform/xaml-overview).

#### 3.1 Implementing the Paper View Manager

To create our new Paper View Manager we're going to need to create two new files (for our example, `CircleMask.h` and `CircleMask.cpp` in the `windows\testlib` folder):

<!--DOCUSAURUS_CODE_TABS-->

<!--CircleMask.h-->

```cpp
#pragma once

#include "pch.h"

#ifndef RNW_NEW_ARCH

#include <winrt/Windows.UI.Xaml.Controls.h>
#include <winrt/Windows.UI.Xaml.Data.h>

#endif

namespace winrt::testlib::implementation {

void RegisterCircleMaskNativeComponent(
    winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept;

#ifndef RNW_NEW_ARCH

struct CircleMaskViewManager : winrt::implements<
                                   CircleMaskViewManager,
                                   winrt::Microsoft::ReactNative::IViewManager,
                                   winrt::Microsoft::ReactNative::IViewManagerWithChildren> {
 public:
  CircleMaskViewManager() {}

  // IViewManager
  winrt::hstring Name() noexcept;

  winrt::Windows::UI::Xaml::FrameworkElement CreateView() noexcept;

  // IViewManagerWithChildren

  void AddView(
      winrt::Windows::UI::Xaml::FrameworkElement const &parent,
      winrt::Windows::UI::Xaml::UIElement const &child,
      int64_t /*index*/) noexcept;

  void RemoveAllChildren(winrt::Windows::UI::Xaml::FrameworkElement const &parent) noexcept;

  void RemoveChildAt(winrt::Windows::UI::Xaml::FrameworkElement const &parent, int64_t /*index*/) noexcept;

  void ReplaceChild(
      winrt::Windows::UI::Xaml::FrameworkElement const &parent,
      winrt::Windows::UI::Xaml::UIElement const & /*oldChild*/,
      winrt::Windows::UI::Xaml::UIElement const &newChild) noexcept;
};

struct HeightToCornerRadiusConverter
    : winrt::implements<HeightToCornerRadiusConverter, winrt::Windows::UI::Xaml::Data::IValueConverter> {
 public:
  HeightToCornerRadiusConverter() {}

  winrt::Windows::Foundation::IInspectable Convert(
      winrt::Windows::Foundation::IInspectable const &value,
      winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
      winrt::Windows::Foundation::IInspectable const & /*parameter*/,
      winrt::hstring const & /*language*/) noexcept;

  winrt::Windows::Foundation::IInspectable ConvertBack(
      winrt::Windows::Foundation::IInspectable const &value,
      winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
      winrt::Windows::Foundation::IInspectable const & /*parameter*/,
      winrt::hstring const & /*language*/) noexcept;

  static winrt::Windows::UI::Xaml::Data::IValueConverter Instance() noexcept;

  // IValueConverter
};

#endif // #ifndef RNW_NEW_ARCH

} // namespace winrt::testlib::implementation
```

<!--CircleMask.cpp-->

```cpp
#include "pch.h"

#include "CircleMask.h"

namespace winrt::testlib::implementation {

void RegisterCircleMaskNativeComponent(
    winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept {
#ifndef RNW_NEW_ARCH
  packageBuilder.AddViewManager(L"CircleMaskViewManager", []() { return winrt::make<CircleMaskViewManager>(); });
#endif
}

#ifndef RNW_NEW_ARCH

// IViewManager
winrt::hstring CircleMaskViewManager::Name() noexcept {
  return L"CircleMask";
}

winrt::Windows::UI::Xaml::FrameworkElement CircleMaskViewManager::CreateView() noexcept {
  auto const &view = winrt::Windows::UI::Xaml::Controls::Border();

  auto const &binding = winrt::Windows::UI::Xaml::Data::Binding();
  binding.Source(view);
  binding.Path(winrt::Windows::UI::Xaml::PropertyPath(L"Height"));
  binding.Converter(HeightToCornerRadiusConverter::Instance());

  view.SetBinding(winrt::Windows::UI::Xaml::Controls::Border::CornerRadiusProperty(), binding);

  return view;
}

// IViewManagerWithChildren

void CircleMaskViewManager::AddView(
    winrt::Windows::UI::Xaml::FrameworkElement const &parent,
    winrt::Windows::UI::Xaml::UIElement const &child,
    int64_t /*index*/) noexcept {
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(child);
  }
}

void CircleMaskViewManager::RemoveAllChildren(winrt::Windows::UI::Xaml::FrameworkElement const &parent) noexcept {
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(nullptr);
  }
}

void CircleMaskViewManager::RemoveChildAt(
    winrt::Windows::UI::Xaml::FrameworkElement const &parent,
    int64_t /*index*/) noexcept {
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(nullptr);
  }
}

void CircleMaskViewManager::ReplaceChild(
    winrt::Windows::UI::Xaml::FrameworkElement const &parent,
    winrt::Windows::UI::Xaml::UIElement const & /*oldChild*/,
    winrt::Windows::UI::Xaml::UIElement const &newChild) noexcept {
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(newChild);
  }
}

winrt::Windows::Foundation::IInspectable HeightToCornerRadiusConverter::Convert(
    winrt::Windows::Foundation::IInspectable const &value,
    winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
    winrt::Windows::Foundation::IInspectable const & /*parameter*/,
    winrt::hstring const & /*language*/) noexcept {
  double d = winrt::unbox_value<double>(value);

  if (isnan(d)) {
    d = 0.0;
  }

  return winrt::box_value(winrt::Windows::UI::Xaml::CornerRadiusHelper::FromUniformRadius(d));
}

winrt::Windows::Foundation::IInspectable HeightToCornerRadiusConverter::ConvertBack(
    winrt::Windows::Foundation::IInspectable const &value,
    winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
    winrt::Windows::Foundation::IInspectable const & /*parameter*/,
    winrt::hstring const & /*language*/) noexcept {
  return value;
}

winrt::Windows::UI::Xaml::Data::IValueConverter HeightToCornerRadiusConverter::Instance() noexcept {
  static auto const &instance = winrt::make<HeightToCornerRadiusConverter>();
  return instance;
};

#endif // #ifndef RNW_NEW_ARCH

} // namespace winrt::testlib::implementation
```

<!--END_DOCUSAURUS_CODE_TABS-->

As you can see, the `CircleMask.h` file defines three things:

1. A `RegisterCircleMaskNativeComponent` function to register the `CircleMask` Paper View Manager with React Native
2. A `CircleMaskViewManager` struct containing the `CircleMask` Paper View Manager
3. A `HeightToCornerRadiusConverter` struct with some helper functionality

Then within `CircleMask.cpp` we have the implementation specifics for our new Native Component. Note the use of `#ifndef RNW_NEW_ARCH` to ensure the Paper View Manager code is only included when the library is used by Old Architecture apps.

> **Note:** For a more complete example of how to implement a `CircleMask` component for both Fabric and Paper simultaneously, see the implementation in the [Native Module Sample](https://github.com/microsoft/react-native-windows-samples/tree/main/samples/NativeModuleSample/cpp-lib) project.

#### 3.2 Adding the Native Component's files to the native project

Since we've created some new native files (`CircleMask.h` and `CircleMask.cpp` above), we need to make sure they are included in the native Windows project (`windows\testlib\testlib.vcxproj` and `windows\testlib\testlib.vcxproj.filters` in our example) so that they are included in the native build:

<!--DOCUSAURUS_CODE_TABS-->

<!--testlib.vcxproj-->

```diff
  <ItemGroup>
    <ClInclude Include="testlib.h" />
+   <ClInclude Include="CircleMask.h" />
    <ClInclude Include="ReactPackageProvider.h">
      <DependentUpon>ReactPackageProvider.idl</DependentUpon>
    </ClInclude>
    <ClInclude Include="resource.h" />
    <ClInclude Include="pch.h" />
    <ClInclude Include="targetver.h" />
  </ItemGroup>
  <ItemGroup>
    <ClCompile Include="testlib.cpp" />
+   <ClCompile Include="CircleMask.cpp" />
    <ClCompile Include="pch.cpp">
      <PrecompiledHeader>Create</PrecompiledHeader>
    </ClCompile>
    <ClCompile Include="ReactPackageProvider.cpp">
      <DependentUpon>ReactPackageProvider.idl</DependentUpon>
    </ClCompile>
    <ClCompile Include="$(GeneratedFilesDir)module.g.cpp" />
  </ItemGroup>
```

<!--testlib.vcxproj.filters-->

```diff
  <ItemGroup>
    <ClInclude Include="targetver.h">
      <Filter>Header Files</Filter>
    </ClInclude>
    <ClInclude Include="resource.h">
      <Filter>Header Files</Filter>
    </ClInclude>
    <ClInclude Include="testlib.h">
      <Filter>Header Files</Filter>
    </ClInclude>
+   <ClInclude Include="CircleMask.h">
+     <Filter>Header Files</Filter>
+   </ClInclude>
    <ClInclude Include="pch.h">
      <Filter>Header Files</Filter>
    </ClInclude>
  </ItemGroup>
  <ItemGroup>
    <ClCompile Include="testlib.cpp">
      <Filter>Source Files</Filter>
    </ClCompile>
+   <ClCompile Include="CircleMask.cpp">
+     <Filter>Source Files</Filter>
+   </ClCompile>
    <ClCompile Include="pch.cpp">
      <Filter>Source Files</Filter>
    </ClCompile>
  </ItemGroup>
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### 3.3 Registering the Paper View Manager with the React Package Provider

Every React Native for Windows library contains an [`IReactPackageProvider`](native-api/IReactPackageProvider-api-windows.md) which contains all of the library's Native Modules (and/or Components) so React Native can use them at runtime. The final bit of native work we need is to update `ReactPackageProvider::CreatePackage` in `windows\testlib\ReactPackageProvider.cpp`:

```cpp
#include "pch.h"

#include "ReactPackageProvider.h"
#if __has_include("ReactPackageProvider.g.cpp")
#include "ReactPackageProvider.g.cpp"
#endif

#include "testlib.h"

#include "CircleMask.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::testlib::implementation {

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept {
  AddAttributedModules(packageBuilder, true);
  RegisterCircleMaskNativeComponent(packageBuilder);
}

} // namespace winrt::testlib::implementation
```

The key bit here is adding the `#include "CircleMask.h"` include and adding the call to the `RegisterCircleMaskNativeComponent` function we created earlier. This makes sure the new Native Component is included in the library's package.

### 4. Use the Native Component in your JavaScript

Now, if we go back to the `CircleMaskNativeComponent.ts` TypeScript spec file, we'll see that exports the `CircleMaskProps` interface as well as the Native Component. The next step is to use those exported items in our JavaScript code.

Since the purpose of the library is to expose the native functionality to code outside of the library (aka our React Native for Windows app code), the default is to export the functionality in the project's index, in this case, in `src\index.tsx`:

```tsx
import Testlib from './NativeTestlib';

export function multiply(a: number, b: number): number {
  return Testlib.multiply(a, b);
}

export {default as CircleMask} from './CircleMaskNativeComponent';
export * from './CircleMaskNativeComponent';
```

We can see then, that `testlib` JavaScript module simply exports our new Native Component as `CircleMask` and everything else as-is from the `CircleMaskNativeComponent` module.

> **Note:** Libraries are not required to expose any of their Native Components *directly* to their consumers. This sample just illustrates the simplest case of exporting the `CircleMask` Native Component as-is. Libraries can and often do wrap their Native Components within JavaScript ones, and therefore may provide a wholly different API surface to their customers.

## Next Steps

After you've implemented your native library, the final step is to consume it in your React Native for Windows app. Continue with [Native Platform: Using Native Libraries](native-platform-using.md).
