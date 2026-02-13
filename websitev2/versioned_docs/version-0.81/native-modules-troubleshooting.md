---
id: native-modules-troubleshooting
title: Troubleshooting Native Modules
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

> For the latest information on native development on Windows, see [Native Platform: Overview](native-platform.md).

So you added a new native module or a new method to a module but it isn't working, **now what?!**

## Common Issues

### My native method isn't being hit in the VS debugger

A possible reason a method isn't called is a mismatch between the expected and actual types that your method accepts/returns.

To debug into what is rejecting the call, set a breakpoint in `facebook::react::CxxNativeModule::invoke`. This breakpoint is bound to be hit a lot (every time a call to a native method is made), so we want to make sure we only break when *our* method of interest is involved.

Right-click on the breakpoint to add a Condition. Suppose the method you are interested in catching is called `getString`. 
The conditional breakpoint condition to enter should compare the name of the method to that string: `strcmp(method.name._Mypair._Myval2._Bx._Ptr, "getString")==0`

### `Compile error 'XamlMetaDataProvider': is not a member of 'winrt::MyModuleName'`
```
Error	C2039	'XamlMetaDataProvider': is not a member of 'winrt::MyModuleName'
Error	C2039	'MyModuleName_XamlTypeInfo': is not a member of 'winrt::MyModuleName'
```

This can happen if your module includes some XAML markup and you aren't referencing the XAML type information from your C++ app.
To fix this, add the following to your C++ app's `pch.h` file:
```cpp
#include <winrt/MyModuleName.MyNamespaceName_XamlTypeInfo.h>
```
(usually `MyModuleName` and `MyNamespaceName` will be the same, you can check it in the C# project's properties pane under **Root Namespace**).

### App crashes when trying to load the C# component or instantiate one of its types
**`Error 0x80131040 "The located assembly’s manifest definition does not match the assembly reference"`**

C++ apps consuming native modules written in C# need special care. There is a bug in the interop between C# and C++: https://github.com/microsoft/dotnet/issues/1196.

The symptoms are that building the app will work fine but the C++ app will crash at runtime when trying to load the C# module with the error `0x80131040 : The located assembly's manifest definition does not match the assembly reference.`

A write-up of the problem can be found [here](https://devblogs.microsoft.com/oldnewthing/20200615-00/?p=103868/). 

As of RNW 0.62, you can enable a `ConsumeCSharpModules` property in your C++ app to fix the issue:

1. In your .vcxproj file, set this property within `<PropertyGroup Label="ReactNativeWindowsProps">`:
```diff
<PropertyGroup Label="ReactNativeWindowsProps">
  <ReactNativeWindowsDir Condition="'$(ReactNativeWindowsDir)' == ''">$([MSBuild]::GetDirectoryNameOfFileAbove($(MSBuildThisFileDirectory), 'node_modules\react-native-windows\package.json'))\node_modules\react-native-windows\</ReactNativeWindowsDir>
+  <ConsumeCSharpModules>true</ConsumeCSharpModules>
</PropertyGroup>
```

If the above workaround doesn't work, you can try two other (older) workarounds:

1. Set your C# component's target Windows version to Windows 10 version 1703 (Build 15063) or lower.
1. Reference the .NET Native NuGet packages in your C++ app:
  - Right click on the app's .vcxproj file → **Manage NuGet Packages**.
  - Search for `Microsoft.Net.Native.Compiler`, and install it.
  - Then add the following properties to the .vcxproj file:
    ```xml
    <PropertyGroup>
      <UseDotNetNativeToolchain Condition="'$(Configuration)'=='Release'">true</UseDotNetNativeToolchain>
      <DotNetNativeVersion>2.2.3</DotNetNativeVersion>
    </PropertyGroup>
    ```

## Additional resources
For more information and troubleshooting instructions, see the following articles:

- [C++ and WinRT APIs](https://docs.microsoft.com/windows/uwp/cpp-and-winrt-apis/troubleshooting)
- [Create a Windows Runtime component in C++/WinRT](https://docs.microsoft.com/windows/uwp/winrt-components/create-a-windows-runtime-component-in-cppwinrt)
