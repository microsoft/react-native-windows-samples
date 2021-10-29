---
id: native-code
title: Working with native code on Windows
---

## What is a React Native for Windows app?

When you create a React Native for Windows app with the CLI, you will get a [Universal Windows Platform app](https://docs.microsoft.com/windows/uwp/get-started/universal-application-platform-guide) (aka UWP app).

The Universal Windows Platform allows you to access a set of common functionality on all Windows devices via the [Windows Runtime](https://docs.microsoft.com/windows/uwp/winrt-components/) (WinRT). WinRT APIs can be accessed from C++ (via [C++/WinRT](https://docs.microsoft.com/windows/uwp/cpp-and-winrt-apis/)), or via .NET C#.

#### WinRT support in .NET
The current publicly supported version of .NET ([.NET UWP](https://docs.microsoft.com/windows/uwp/winrt-components/creating-windows-runtime-components-in-csharp-and-visual-basic)) has built-in support for WinRT.


## Win32 Desktop apps vs. RNW apps

Whether you are new to Windows development, or you are a Win32 desktop app veteran, the following FAQs should answer some common questions.

When you add Windows support to a react native app via the steps described in the [Install the windows extension](getting-started.md#install-the-windows-extension) section, the react-native-windows CLI will create a UWP app for you.

> **Note:** By default the `react-native-windows-init` command creates a C++ app, however you can choose to create a C# app instead. The choice of language can impact your performance and your capacity to consume native modules, so if either of those issues are important to you, it's highly recommended that you read [Choosing C++ or C# for native code](native-code-language-choice.md).

Regardless of the language of your app <u>**RNW apps are UWP apps**</u> and therefore have the following characteristics:

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

It's worth noting that you cannot just "_copy an EXE_" as the app package contains more than just the main executable, including an app manifest, assets, dependent framework libraries, etc.

In addition, the Store submission process has these requirements:

- UWP apps submitted to the store must pass [Windows App Certification Kit](https://docs.microsoft.com/windows/uwp/debug-test-perf/windows-app-certification-kit) (WACK) validation.
- UWP apps written in C# or other managed languages submitted to the store must be built using the [.NET Native toolchain](https://docs.microsoft.com/dotnet/framework/net-native/). This is the default when building C# apps in Release mode, **but not in Debug**, so apps built in Debug will be rejected by the Store.

### Use of non-WinRT libraries
Any libraries you use should be built as WinRT components. In other words, you cannot easily link libraries built for Win32 desktop apps without additional work.
  - C++/CX is a dialect of C++ that allows writing UWP apps, however this is **not supported** for writing a RNW app. The article [How to use existing C++ code in a Universal Windows Platform app](https://docs.microsoft.com/cpp/porting/how-to-use-existing-cpp-code-in-a-universal-windows-platform-app) talks about how to consume non-WinRT libraries in a WinRT context using C++/CX, but most of the content should be applicable to using C++/WinRT which is the supported way to write RNW apps.
  - See also the guide for [moving from C++/CX to C++/WinRT](https://docs.microsoft.com/windows/uwp/cpp-and-winrt-apis/move-to-winrt-from-cx).
  - Libraries built for .NET desktop framework cannot be directly accessed by UWP. You can create a .NET Standard library that calls into the .NET framework one, and call from the UWP app into the .NET Standard middleware.

### Local testing and inner loop
For internal development, you can deploy your app for test purposes by side-loading and deploying via [loose-file registration](https://docs.microsoft.com/windows/uwp/debug-test-perf/loose-file-registration). When building in **Debug** mode (which is the default), `npx react-native run-windows` performs loose-file registration of your app in order to install it locally. When running `npx react-native run-windows` with the `--release` switch, the CLI will install the real package onto your local machine. This requires the app to be signed and for the certificate it uses for signing to be trusted by the machine the app is going to be installed on. See [Create a certificate for package signing](https://docs.microsoft.com/windows/msix/package/create-certificate-package-signing) and [Intro to certificates](https://docs.microsoft.com/windows/uwp/security/certificates).

### Debugging crashes and reporting issues
If your app is "hard crashing" (the native code hits an error condition and your app closes), you will want to investigate the native side of the code. If the issue is in the `Microsoft.ReactNative` layer, please file a bug in the [React Native for Windows](https://github.com/microsoft/react-native-windows) repo, and provide a native stack trace, and ideally a crash dump with symbols.
For your convenience, you can use a script to collect a native crash dump and stack traces. Here are the instructions:

1. Download the script at https://aka.ms/RNW/analyze-crash.ps1, for example to C:\temp
2. Open an admin PowerShell
3. if you haven't enabled running unsigned scripts, do that: `Set-ExecutionPolicy Unrestricted`
4. Run the script and pass it the name of your app's exe (usually it will be your app's name): `C:\temp\analyze-crash.ps1 -ExeName MyApp`

The script will set up automatic crash dump collection for your app, download the native debugging tools (including the command line debugger cdb), and ask you to reproduce the crash.

At this point you can launch the app (e.g. from Start menu if you've already deployed it to the local device). When the app crashes, it will generate a crash dump. You can then press enter to resume execution of the script, and the script will use cdb to automatically analyze the crash dump, and output the results to a file `analyze.log`.

The script will then copy the contents of the log to the clipboard, open the log file in notepad, and launch the browser to file an issue in the react-native-windows repo, where you can paste the stack trace into the bug template.