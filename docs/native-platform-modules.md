---
id: native-platform-modules
title: "Native Platform: Native Modules"
sidebar_label: Native Modules
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

This guide covers exposing native non-UI functionality from Windows to React Native by implementing a *Native Module* for the Windows platform. For a higher-level overview of native development on Windows, see [Native Platform: Overview](native-platform.md) before reading this guide.

> **Note:** See the [reactnative.dev Native Modules guide](https://reactnative.dev/docs/turbo-native-modules-introduction) for steps for implementing new Native Modules for both the Android and iOS platforms.

> **Architecture Note:** This guide follows the recommendation to create a *Turbo Native Module* to support React Native's New Architecture. However, unlike other platforms, React Native for Windows directly supports Turbo Native Modules for the Old Architecture as well. In short, the Turbo Native Module we create here can be consumed by React Native for Windows apps targeting *either* architecture. For more information on React Native architectures in React Native for Windows, see [New vs. Old Architecture](new-architecture.md).

## High-Level Overview

In order to implement Windows support for a Native Module, you'll need to:

1. Define the API surface for your Native Module in a TypeScript spec file
2. Use React Native for Windows' Native Library Codegen to take the TypeScript spec files and create the C++ headers for the Windows code
3. Write the Windows C++ code to implement the functions specified in the generated headers
4. Use the Native Module in your JavaScript

## Step by Step Guide

### 0. Setup

You'll need a React Native library project initialized with Windows support.

> **Note:** The rest of this guide assumes you've followed the [Native Platform: Getting Started](native-platform-getting-started.md) guide to set up a new library project named `testlib`.

### 1. Define the API surface in TypeScript

The default template for a new library starts with a simple Turbo Native Module based on the name as the project, i.e. our `testlib` project contains with a `TestLib` module, whose API surface is defined in `src\NativeTestlib.ts`:

```ts
import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  multiply(a: number, b: number): number;
}

export default TurboModuleRegistry.getEnforcing<Spec>('Testlib');
```

This spec file declares that React Native expects every platform to implement a Turbo Native Module named `Testlib` which implements a single function named `multiply` with the given arguments and return type.

> **Note:** Every Native Module spec file must be named in the format `Native<moduleName> + .ts` in order to be correctly identified as a spec file and not just a regular TypeScript file in your library.

<!-- TODO: Add FancyMath example. -->

### 2. Use React Native for Windows' Native Library Codegen

Now, before we can implement the native C++ code for our Turbo Native Module(s), we need to run React Native for Windows' Native Library Codegen, i.e. the [codegen-windows command](codegen-windows-cli.md), which will take the TypeScript spec files and generate some C++ headers with the API surface we need to implement.

First, we need to make sure that the `codegenConfig` object is properly defined in our library's `package.json` file:

```json
"codegenConfig": {
    "name": "RNTestlibSpec",
    "type": "modules",
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
      "outputDirectory": "windows/testlib/codegen",
      "separateDataTypes": true
    }
  }
```

Configuration is partially shared with other platforms, but for Windows the relevant fields are `type`, `jsSrcsDirs`, and the `windows` object. For now we're going to leave the configuration as-is, as it is already set up to support our `Testlib` module.

> **Note:** For more information on configuring `codegenConfig`, see [codegen-windows Codegen Config](codegen-windows-cli.md#codegen-config).

The only thing we need to do now is run the codegen-windows command with:

```bat
yarn react-native codegen-windows
```

> **Note:** By default the `codegen-windows` command is run automatically at the start of every native build. In this way, changes to the API surface in the TypeScript spec files will be reflected in the generated headers, thereby enforcing that the native code stays up to date with the required API surface of the module.

Now we should see some files in the project's codegen output directory, i.e. the `windows\testlib\codegen` folder we specified in our config. Specifically, for our `Testlib` module, we should see a `NativeTestlibSpec.g.h` with:

```cpp
/*
 * This file is auto-generated from a NativeModule spec file in js.
 *
 * This is a C++ Spec class that should be used with MakeTurboModuleProvider to register native modules
 * in a way that also verifies at compile time that the native module matches the interface required
 * by the TurboModule JS spec.
 */
#pragma once
// clang-format off


#include <NativeModules.h>
#include <tuple>

namespace testlibCodegen {

struct TestlibSpec : winrt::Microsoft::ReactNative::TurboModuleSpec {
  static constexpr auto methods = std::tuple{
      SyncMethod<double(double, double) noexcept>{0, L"multiply"},
  };

  template <class TModule>
  static constexpr void ValidateModule() noexcept {
    constexpr auto methodCheckResults = CheckMethods<TModule, TestlibSpec>();

    REACT_SHOW_METHOD_SPEC_ERRORS(
          0,
          "multiply",
          "    REACT_SYNC_METHOD(multiply) double multiply(double a, double b) noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(multiply) static double multiply(double a, double b) noexcept { /* implementation */ }\n");
  }
};

} // namespace testlibCodegen
```

The purpose of the `TestlibSpec` type in this file, when included in our native C++ project, is to throw errors if our native C++ implementation does not match the required API surface of the module.

<!-- TODO: Add FancyMath example. -->

### 3. Implement the Windows C++ code

Now with the codegen complete, it's finally time to implement the `Testlib` module and its `multiply()` function.

#### 3.1 Implementing the Turbo Native Module

Conveniently our new project already includes implementations we can look at (for our example, the `testlib.h` and `testlib.cpp` in the `windows\testlib` folder):

<!--DOCUSAURUS_CODE_TABS-->

<!--testlib.h-->

```cpp
#pragma once

#include "pch.h"
#include "resource.h"

#if __has_include("codegen/NativeTestlibDataTypes.g.h")
  #include "codegen/NativeTestlibDataTypes.g.h"
#endif
#include "codegen/NativeTestlibSpec.g.h"

#include "NativeModules.h"

namespace winrt::testlib
{

REACT_MODULE(Testlib)
struct Testlib
{
  using ModuleSpec = testlibCodegen::TestlibSpec;

  REACT_INIT(Initialize)
  void Initialize(React::ReactContext const &reactContext) noexcept;

  REACT_SYNC_METHOD(multiply)
  double multiply(double a, double b) noexcept;

private:
  React::ReactContext m_context;
};

} // namespace winrt::testlib
```

<!--testlib.cpp-->

```cpp
#include "pch.h"

#include "testlib.h"

namespace winrt::testlib
{

// See https://microsoft.github.io/react-native-windows/docs/native-platform for details on writing native modules

void Testlib::Initialize(React::ReactContext const &reactContext) noexcept {
  m_context = reactContext;
}

double Testlib::multiply(double a, double b) noexcept {
  return a * b;
}

} // namespace winrt::testlib
```

<!--END_DOCUSAURUS_CODE_TABS-->

As you can see, the `testlib.h` file defines a `Testlib` struct, attributed with `REACT_MODULE` to signify to React Native for Windows that this struct contains the implementation of the Turbo Native Module named `Testlib`.

The `using ModuleSpec = testlibCodegen::TestlibSpec;` line is what makes sure that the `Testlib` struct will fail to compile if it doesn't meet the required API surface of the module.

> **Note:** When adding Windows support to native modules with out-of-date (or missing) spec files, removing this line will allow your native code to compile even if it doesn't match what the JavaScript side of the library expects. While possible, this is not recommended as it risks the Windows implementation of the module getting out of sync with the other platforms.

The `Initialize()` function is attributed with `REACT_INIT`, indicating it should be run when the module is first created. Looking at the implementation in `testlib.cpp` we see it saves off a [`ReactContext`](native-api/IReactContext-api-windows.md), which your module can later use to interact back with the JavaScript side of your code (i.e. firing JavaScript events during a native operation).

Finally, we also see the `multiply()` function is attributed with `REACT_SYNC_METHOD`, indicating that the function is part of the module's API surface, but also synchronous. Looking at the implementation in `testlib.cpp` we see it does what we'd expect, multiplying the input parameters and returning the result.

<!-- TODO: Add FancyMath. -->

#### 3.2 Adding the Turbo Native Modules's files to the native project

By default the native Windows project (`windows\testlib\testlib.vcxproj` and `windows\testlib\testlib.vcxproj.filters` in our example) already includes the `testlib.h` and `testlib.cpp` files. But if you create new files for your module, you'll need to add those to the native Windows project manually:

<!--DOCUSAURUS_CODE_TABS-->

<!--testlib.vcxproj-->

```diff
  <ItemGroup>
    <ClInclude Include="testlib.h" />
+   <ClInclude Include="NEWFILE.h" />
    <ClInclude Include="ReactPackageProvider.h">
      <DependentUpon>ReactPackageProvider.idl</DependentUpon>
    </ClInclude>
    <ClInclude Include="resource.h" />
    <ClInclude Include="pch.h" />
    <ClInclude Include="targetver.h" />
  </ItemGroup>
  <ItemGroup>
    <ClCompile Include="testlib.cpp" />
+   <ClCompile Include="NEWFILE.cpp" />
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
+   <ClInclude Include="NEWFILE.h">
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
+   <ClCompile Include="NEWFILE.cpp">
+     <Filter>Source Files</Filter>
+   </ClCompile>
    <ClCompile Include="pch.cpp">
      <Filter>Source Files</Filter>
    </ClCompile>
  </ItemGroup>
```

<!--END_DOCUSAURUS_CODE_TABS-->

> **Note:** All of the the headers created by codegen in the `windows/testlib/codegen` folder are already included and do not need to be added manually here.

#### 3.3 Registering the Turbo Native Module with the React Package Provider

Every React Native for Windows library contains an [`IReactPackageProvider`](native-api/IReactPackageProvider-api-windows.md) which contains all of the library's Native Modules and/or Components so React Native can use them at runtime.

The final bit of native work we need is to make sure `ReactPackageProvider::CreatePackage` adds all the attributed modules in `windows\testlib\ReactPackageProvider.cpp`:

```cpp
#include "pch.h"

#include "ReactPackageProvider.h"
#if __has_include("ReactPackageProvider.g.cpp")
#include "ReactPackageProvider.g.cpp"
#endif

#include "testlib.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::testlib::implementation {

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept {
  AddAttributedModules(packageBuilder, true);
}

} // namespace winrt::testlib::implementation
```

Conveniently our new project already includes the code to include our `Testlib` Turbo Native Module.

The key bit here is the `#include "testlib.h"` include and the call to the `AddAttributedModules` function. This call makes sure that every Turbo Native Module (every struct attributed with `REACT_MODULE`), from every included header file, gets included in the library's package.

### 4. Use the Native Module in your JavaScript

Now, if we go back to the `NativeTestlib.ts` TypeScript spec file, we'll see that exports a type that is the Turbo Native Module named `Testlib` with an interface matching `Spec`. The next step is to use that exported object in our JavaScript code.

Since the purpose of the library is to expose the native functionality to code outside of the library (aka our React Native for Windows app code), the default is to export the functionality in the project's index, in this case, in `src\index.tsx`:

```tsx
import Testlib from './NativeTestlib';

export function multiply(a: number, b: number): number {
  return Testlib.multiply(a, b);
}
```

We can see then, that the `testlib` JavaScript module exports a `multiply()` function which internally simply calls the `Testlib.multiply()` function.

> **Note:** Libraries are not required to expose any of their Native Module functions directly to their consumers. This sample just illustrates the simplest case of a pass-through call to the Native Module function. Libraries can and often do have lots of functionality written in JavaScript, and may provide a wholly different API surface to their customers.

## Next Steps

After you've implemented your native library, the final step is consume it in your React Native for Windows app. Continue with [Native Platform: Using Native Libraries](native-platform-using.md).
