---
id: native-platform-components
title: "Native Platform: Native Components (Fabric)"
sidebar_label: Native Components (Fabric)
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

This guide covers exposing native UI views from Windows to React Native by implementing a *Native Component* for the Windows platform. For a higher-level overview of native development on Windows, see [Native Platform: Overview](native-platform.md) before reading this guide.

> **Note:** See the [reactnative.dev Native Components guide](https://reactnative.dev/docs/fabric-native-components-introduction) for steps for implementing new Native Components for both the Android and iOS platforms.

> **Architecture Note:** This guide follows the recommendation to create a *Fabric Native Component* to support React Native's New Architecture. It will *not* work with Old Architecture apps. To support React Native for Windows apps targeting the Old Architecture, see [Native Platform: Native Components (Paper)](native-platform-components-paper.md). For more information on React Native architectures in React Native for Windows, see [New vs. Old Architecture](new-architecture.md).

## High-Level Overview

In order to implement Windows support for a Native Component, you'll need to:

1. Define the API surface for your Native Component in a TypeScript spec files
2. Use React Native for Windows' Native Codegen to take the TypeScript spec files and create the C++ headers for the Windows code
3. Write the Windows C++ code to implement the *Component View* specified by the generated headers
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

Now, before we can implement the native C++ code for our Fabric Native Component(s), we need to run React Native for Windows' Native Library Codegen, i.e. the [codegen-windows command](codegen-windows-cli.md), which will take the TypeScript spec files and generate some C++ headers with the API surface we need to implement.

First, we need to make sure that the `codegenConfig` object is properly defined in our library's `package.json` file:

```json
"codegenConfig": {
    "name": "RNTestlibSpec",
    "type": "all",
    "jsSrcsDir": "src",
    "outputDir": {
      "ios": "ios/generated",
      "android": "android/generated"
    },
    "android": {
      "javaPackageName": "com.testlib"
    },
    "includesGeneratedCode": true,
    "windows": {
      "namespace": "testlibCodegen",
      "generators": [
        "modulesWindows",
        "componentsWindows"
      ],
      "outputDirectory": "windows/testlib/codegen",
      "separateDataTypes": true
    }
  }
```

Configuration is partially shared with other platforms, but for Windows the relevant fields are `type`, `jsSrcsDirs`, and the `windows` object. While the default configuration was correctly set up to support the library's Native Modules, we've needed to modify it to support our need for Native Components.

Specifically, to enable Native Component codegen, we've changed `"type: "modules"` to `"type": "all"` and we've added the `"generators": [ "modulesWindows", "componentsWindows" ]` array.

> **Note:** For more information on configuring `codegenConfig`, see [codegen-windows Codegen Config](codegen-windows-cli.md#codegen-config).

The only thing we need to do now is run the codegen-windows command with:

```bat
yarn react-native codegen-windows
```

> **Note:** By default the `codegen-windows` command is run automatically at the start of every native build. In this way, changes to the API surface in the TypeScript spec files will be reflected in the generated headers, thereby enforcing that the native code stays up to date with the required API surface of the component.

Now we should see some files in the project's codegen output directory, i.e. the `windows\testlib\codegen` folder we specified in our config. Codegen files for Native Components are further put under the `react\components\RNTestlibSpec` folder. Specifically, for our `CircleMask` component, we should see a rather large `CircleMask.g.h` (truncated below):

```cpp
/*
 * This file is auto-generated from CircleMaskNativeComponent spec file in flow / TypeScript.
 */
// clang-format off
#pragma once

#include <NativeModules.h>

#ifdef RNW_NEW_ARCH
#include <JSValueComposition.h>

#include <winrt/Microsoft.ReactNative.Composition.h>
#include <winrt/Microsoft.UI.Composition.h>
#endif // #ifdef It will not work with Old Architecture apps.

#ifdef RNW_NEW_ARCH

namespace testlibCodegen {

REACT_STRUCT(CircleMaskProps)
struct CircleMaskProps : winrt::implements<CircleMaskProps, winrt::Microsoft::ReactNative::IComponentProps> {
  // Implementation truncated
};

struct CircleMaskEventEmitter {
  // Implementation truncated
};

template<typename TUserData>
struct BaseCircleMask {
  // Implementation truncated
};

template <typename TUserData>
void RegisterCircleMaskNativeComponent(
    winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder,
    std::function<void(const winrt::Microsoft::ReactNative::Composition::IReactCompositionViewComponentBuilder&)> builderCallback) noexcept {
  packageBuilder.as<winrt::Microsoft::ReactNative::IReactPackageBuilderFabric>().AddViewComponent(
      L"CircleMask", [builderCallback](winrt::Microsoft::ReactNative::IReactViewComponentBuilder const &builder) noexcept {
        // Implementation truncated
      });
}

} // namespace testlibCodegen

#endif // #ifdef RNW_NEW_ARCH
```

The generated code contains three native types of note:

1. A `CircleMaskProps` struct capturing the specified props of the TypeScript `CircleMaskProps` interface
2. A `CircleMaskEventEmitter` struct so the component can fire any specified JavaScript events
3. A `BaseCircleMask` struct to be used as the base type for a `CircleMask` Fabric Component View
4. A `RegisterCircleMaskNativeComponent` function to register the `CircleMask` Fabric Component View

Also note the use of `#ifdef RNW_NEW_ARCH` to ensure these types are only included when the library is used by New Architecture apps.

> **Note:** For a non-truncated version of this file, see the [Native Module Sample's `CircleMask.g.h`](https://github.com/microsoft/react-native-windows-samples/blob/main/samples/NativeModuleSample/cpp-lib/windows/NativeModuleSample/codegen/react/components/NativeModuleSampleSpec/CircleMask.g.h).

### 3. Implement the Windows C++ code

Now with the codegen complete, it's time to implement a `CircleMaskComponentView` in Windows code. React Native for Windows Component Views are implemented in C++ and render UI using the APIs in the `Microsoft::UI::Composition` namespace, also known as the [Windows App SDK/WinUI 3 Visual layer](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/composition).

#### 3.1 Implementing the Fabric Component View

To create our new Fabric Component View we're going to need to create two new files (for our example, `CircleMask.h` and `CircleMask.cpp` in the `windows\testlib` folder):

<!--DOCUSAURUS_CODE_TABS-->

<!--CircleMask.h-->

```cpp
#pragma once

#include "pch.h"

#ifdef RNW_NEW_ARCH

#include "codegen/react/components/RNTestlibSpec/CircleMask.g.h"

#include <winrt/Microsoft.ReactNative.Composition.Experimental.h>

#endif

namespace winrt::testlib::implementation {

void RegisterCircleMaskNativeComponent(
    winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept;

#ifdef RNW_NEW_ARCH

struct CircleMaskComponentView : winrt::implements<CircleMaskComponentView, winrt::IInspectable>,
                                 testlibCodegen::BaseCircleMask<CircleMaskComponentView> {
  winrt::Microsoft::UI::Composition::Visual CreateVisual(
      const winrt::Microsoft::ReactNative::ComponentView &view) noexcept override;
  void Initialize(const winrt::Microsoft::ReactNative::ComponentView & /*view*/) noexcept override;

 private:
  winrt::Microsoft::ReactNative::ComponentView::LayoutMetricsChanged_revoker m_layoutMetricChangedRevoker;
  winrt::Microsoft::UI::Composition::SpriteVisual m_visual{nullptr};
};

#endif // #ifdef RNW_NEW_ARCH

} // namespace winrt::testlib::implementation
```

<!--CircleMask.cpp-->

```cpp
#include "pch.h"

#include "CircleMask.h"

namespace winrt::testlib::implementation {

void RegisterCircleMaskNativeComponent(
    winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept {
#ifdef RNW_NEW_ARCH
  testlibCodegen::RegisterCircleMaskNativeComponent<CircleMaskComponentView>(
      packageBuilder,
      [](const winrt::Microsoft::ReactNative::Composition::IReactCompositionViewComponentBuilder &builder) {
        // Turn off default border handling, as it overrides the Clip property of the visual and doesn't render
        // correctly anyway This means we would have to implement drawing our own borders (which we don't do in this
        // example)
        builder.SetViewFeatures(
            winrt::Microsoft::ReactNative::Composition::ComponentViewFeatures::Default &
            ~winrt::Microsoft::ReactNative::Composition::ComponentViewFeatures::NativeBorder);
      });
#endif
}

#ifdef RNW_NEW_ARCH

winrt::Microsoft::UI::Composition::Visual CircleMaskComponentView::CreateVisual(
    const winrt::Microsoft::ReactNative::ComponentView &view) noexcept {
  auto compositor = view.as<winrt::Microsoft::ReactNative::Composition::ComponentView>().Compositor();

  m_visual = compositor.CreateSpriteVisual();

  auto ellipseGeometry = compositor.CreateEllipseGeometry();
  auto clip = compositor.CreateGeometricClip();
  clip.Geometry(ellipseGeometry);
  m_visual.Clip(clip);

  return m_visual;
}

void CircleMaskComponentView::Initialize(const winrt::Microsoft::ReactNative::ComponentView &view) noexcept {
  m_layoutMetricChangedRevoker = view.LayoutMetricsChanged(
      winrt::auto_revoke,
      [wkThis = get_weak()](
          const winrt::IInspectable & /*sender*/, const winrt::Microsoft::ReactNative::LayoutMetricsChangedArgs &args) {
        if (auto strongThis = wkThis.get()) {
          auto visual = strongThis->m_visual;

          // Turning off default border handling has the side-effect of also stopping the visual from being positioned,
          // so unless that changes we have to position the visual ourselves
          // See https://github.com/microsoft/react-native-windows/issues/14706
          visual.Size(
              {args.NewLayoutMetrics().Frame.Width * args.NewLayoutMetrics().PointScaleFactor,
               args.NewLayoutMetrics().Frame.Height * args.NewLayoutMetrics().PointScaleFactor});
          visual.Offset({
              args.NewLayoutMetrics().Frame.X * args.NewLayoutMetrics().PointScaleFactor,
              args.NewLayoutMetrics().Frame.Y * args.NewLayoutMetrics().PointScaleFactor,
              0.0f,
          });

          auto ellipseGeometry = strongThis->m_visual.Clip()
                                     .as<winrt::Microsoft::UI::Composition::CompositionGeometricClip>()
                                     .Geometry()
                                     .as<winrt::Microsoft::UI::Composition::CompositionEllipseGeometry>();
          winrt::Windows::Foundation::Numerics::float2 radius = {
              args.NewLayoutMetrics().Frame.Width * args.NewLayoutMetrics().PointScaleFactor / 2,
              args.NewLayoutMetrics().Frame.Height * args.NewLayoutMetrics().PointScaleFactor / 2};
          ellipseGeometry.Center(radius);
          ellipseGeometry.Radius(radius);
        }
      });
}

#endif // #ifdef RNW_NEW_ARCH

} // namespace winrt::testlib::implementation
```

<!--END_DOCUSAURUS_CODE_TABS-->

As you can see, the `CircleMask.h` file defines two things:

1. A `RegisterCircleMaskNativeComponent` function to register the `CircleMask` Fabric Component View with React Native
2. A `CircleMaskComponentView` struct containing the `CircleMask` Fabric Component View

Both of these depend on the types provided in the `CircleMask.g.h` file we generated earlier. Then within `CircleMask.cpp` we have the implementation specifics for our new Native Component. Again, note the use of `#ifdef RNW_NEW_ARCH` to ensure the Fabric Component View code is on included when the library is used by New Architecture apps.

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

> **Note:** All of the the headers created by codegen in the `windows/testlib/codegen` folder are already included and do not need to be added manually here.

#### 3.3 Registering the Fabric Component View with the React Package Provider

Every React Native for Windows library contains an [`IReactPackageProvider`](native-api/IReactPackageProvider-api-windows.md) which contains all of the library's Native Modules and/or Components so React Native can use them at runtime. The final bit of native work we need is to update `ReactPackageProvider::CreatePackage` in `windows\testlib\ReactPackageProvider.cpp`:

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

After you've implemented your native library, the final step is consume it in your React Native for Windows app. Continue with [Native Platform: Using Native Libraries](native-platform-using.md).
