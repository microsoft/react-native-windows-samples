---
id: native-code
title: Working with native code on Windows
---

## What is a React Native for Windows app?

A RNW app is a [Universal Windows Platform app](https://docs.microsoft.com/windows/uwp/get-started/universal-application-platform-guide) (aka UWP or Windows 10 app).

The Universal Windows Platform allows you to access a set of common functionality on all Windows devices via the [Windows Runtime](https://docs.microsoft.com/windows/uwp/winrt-components/) (WinRT). WinRT APIs can be accessed from C++ (via [C++/WinRT](https://docs.microsoft.com/windows/uwp/cpp-and-winrt-apis/)), or via .NET C#. 

#### WinRT support in .NET
The current publicly supported version of .NET has built-in support for WinRT ([.NET UWP](https://docs.microsoft.com/windows/uwp/winrt-components/creating-windows-runtime-components-in-csharp-and-visual-basic)) whereas future versions of .NET Core starting with .NET Core 5 will only be able to access WinRT APIs via [C#/WinRT](https://docs.microsoft.com/windows/uwp/csharp-winrt/) in a way similar to what the C++/WinRT projection enables today. 



## Win32 Desktop apps vs. RNW apps

Whether you are new to Windows development, or you are a Win32 desktop app veteran, the following FAQs should answer some common questions.

When you add Windows support to a react native app via the steps described in the [Install the windows extension](getting-started.md#install-the-windows-extension) section, the react-native-windows CLI will create a UWP app for you. 

Therefore, <u>**RNW apps are UWP apps**</u> and therefore have the following characteristics:

### API surface
The set of APIs these app can access are a subset of all Windows APIs (i.e. those accessible via WinRT). See:
- [Win32 and COM APIs for UWP apps](https://docs.microsoft.com/uwp/win32-and-com/win32-and-com-for-uwp-apps)
- [CRT functions not supported in Universal Windows Platform apps](https://docs.microsoft.com/cpp/cppcx/crt-functions-not-supported-in-universal-windows-platform-apps)
- [Alternatives to Windows APIs in Universal Windows Platform (UWP) apps](https://docs.microsoft.com/uwp/win32-and-com/alternatives-to-windows-apis-uwp)

### Isolation
The app runs inside of an app container - a type of sandbox. This provides apps with a secure way to install, access system resources like the filesystem, and lets the system manage their lifetime (e.g. suspending the app when it isn't on the foreground). This means that by default an RNW app cannot access arbitrary filesystem locations, start arbitrary processes, etc. UWP apps that need to access these kinds of capabilities may be able to do so via [App capability declarations](https://docs.microsoft.com/windows/uwp/packaging/app-capability-declarations).

### Packaging

React Native Windows apps are signed and packaged. [Packaging](https://docs.microsoft.com/windows/uwp/packaging/) is a mechanism through which an app and its dependencies acquire an identity, which is used to determine whether API calls that require system capabilities (e.g. filesystem access) should succeed or not.


### Distribution
React Native Windows apps can be distributed, installed and updated in the following ways:

  - via [the Microsoft Store](https://docs.microsoft.com/windows/apps/desktop/modernize/desktop-to-uwp-distribute).
  - via [your private Store](https://docs.microsoft.com/microsoft-store/distribute-apps-to-your-employees-microsoft-store-for-business) if you are a business or educational organization. See also [Distribute LOB apps to enterprises](https://docs.microsoft.com/windows/uwp/publish/distribute-lob-apps-to-enterprises).
  - using [App Installer](https://docs.microsoft.com/windows/msix/app-installer/installing-windows10-apps-web).

It's worth noting that you cannot just "_copy an exe_" as the app package contains more than just the main executable, including an app manifest, assets, dependent framework libraries, etc.

In addition, the Store submission process has this requirements:
- UWP apps submitted to the store must pass [Windows App Certification Kit](https://docs.microsoft.com/windows/uwp/debug-test-perf/windows-app-certification-kit) (WACK) validation.
- UWP apps written in C# or other managed languages submitted to the store must be built using the [.NET Native toolchain](https://docs.microsoft.com/dotnet/framework/net-native/). This is the default when building C# apps in Release mode, **but not in Debug**, so apps built in Debug will be rejected by the Store.


### Use of non-WinRT libraries
Any libraries you use should be built as WinRT components. In other words, you cannot easily link libraries built for win32 desktop apps without additional work.
  - C++/CX is a dialect of C++ that allows writing UWP apps, however this is **not supported** for writing a RNW app. The article [How to use existing C++ code in a Universal Windows Platform app](https://docs.microsoft.com/cpp/porting/how-to-use-existing-cpp-code-in-a-universal-windows-platform-app) talks about how to consume non-WinRT libraries in a WinRT context using C++/CX, but most of the content should be applicable to using C++/WinRT which is the supported way to write RNW apps.
  - See also the guide for [moving from C++/CX to C++/WinRT](https://docs.microsoft.com/windows/uwp/cpp-and-winrt-apis/move-to-winrt-from-cx).
  - Libraries built for .NET desktop framework cannot be directly accessed by UWP. You can create a .NET Standard library that calls into the .NET framework one, and call from the UWP app into the .NET Standard middleware.

### Local testing and inner loop
For internal development, you can deploy your app for test purposes by side-loading and deploying via [loose-file registration](https://docs.microsoft.com/windows/uwp/debug-test-perf/loose-file-registration). When building in **Debug** mode (which is the default), `npx react-native run-windows` performs loose-file registration of your app in order to install it locally. When running `npx react-native run-windows` with the `--release` switch, the CLI will install the real package onto your local machine. This requires the app to be signed and for the certificate it uses for signing to be trusted by the machine the app is going to be installed on. See [Create a certificate for package signing](https://docs.microsoft.com/windows/msix/package/create-certificate-package-signing) and [Intro to certificates](https://docs.microsoft.com/windows/uwp/security/certificates).


## C# vs. C++ for Native Modules

Although React Native for Windows supports writing modules in both C# and C++, you should be aware that your choice of language could impact performance of apps that consume your module. 

That said, we recognize the engineering efficiency that comes with writing a module in C#. We strive to maintain parity in developer experience between C# and C++. If your app or module already uses C#, you should feel empowered to continue to use C#. That said, modules that Microsoft contributes to will be written in C++ to ensure the highest level of performance. 

<div class="warning">
  <h3>Important</h3>
  <h4>Mixing C# and C++</h4>
</div>

### App crashes when trying to load the C# component or instantiate one of its types
**Error 0x80131040 “The located assembly’s manifest definition does not match the assembly reference”**

C++ apps consuming native modules written in C# need special care. There is a bug in the interop between C# and C++: https://github.com/microsoft/dotnet/issues/1196.

The symptoms are that building the app will work fine but the C++ app will crash at runtime when trying to load the C# module with the error `0x80131040 : The located assembly's manifest definition does not match the assembly reference.`

A write-up of the problem can be found [here](https://devblogs.microsoft.com/oldnewthing/20200615-00/?p=103868/). 
To work around this problem there are three options:
1. Set your C# component's target Windows version to Windows 10 version 1703 (Build 15063) or lower.
1. Reference the .NET Native nuget packages in your C++ app:
   - Right click on the app's .vcxproj file → **Manage NuGet Packages**.
   - Search for `Microsoft.Net.Native.Compiler`, and install it.
   - Then add the following properties to the .vcxproj file:
    ```xml
    <PropertyGroup>
      <UseDotNetNativeToolchain Condition="'$(Configuration)'=='Release'">true</UseDotNetNativeToolchain>
      <DotNetNativeVersion>2.2.3</DotNetNativeVersion>
    </PropertyGroup>
    ```
1. In your .vcxproj file, set this property in the first `<PropertyGroup>`:
   ```xml
   <ConsumeCSharpModules>true</ConsumeCSharpModules>
   ```

## Troubleshooting and debugging C++ native modules

So you added a new native module or a new method to a module but it isn't working, **now what?!**

If your method isn't being hit in the VS debugger, something is blocking the call due to a mismatch, likely between the expected and actual types that your method takes/returns.

To debug into what is rejecting the call, set a breakpoint in `CxxNativeModule::invoke` (See [ReactCommon\react-native-patched\ReactCommon\cxxreact\CxxNativeModule.cpp](https://github.com/facebook/react-native/blob/0b8a82a6eeeb3508b80ee137d313f64fe323db06/ReactCommon/cxxreact/CxxNativeModule.cpp#L97)). This breakpoint is bound to be hit a lot (every time a call to a native method is made), so we want to make sure we only break when *our* method of interest is involved.

Right-click on the breakpoint to add a Condition. Suppose the method you are interested in catching is called `getString`. 
The conditional breakpoint condition to enter should compare the name of the method to that string: `strcmp(method.name._Mypair._Myval2._Bx._Ptr, "getString")==0`

### Compile error 'XamlMetaDataProvider': is not a member of 'winrt::MyModuleName'
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

## Additional resources
For more information and troubleshooting instructions, see the following articles:

- [C++ and WinRT APIs](https://docs.microsoft.com/windows/uwp/cpp-and-winrt-apis/troubleshooting)
- [Create a Windows Runtime component in C++/WinRT](https://docs.microsoft.com/windows/uwp/winrt-components/create-a-windows-runtime-component-in-cppwinrt)