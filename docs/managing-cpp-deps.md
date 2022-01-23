---
id: managing-cpp-deps
title: Managing C++ dependencies
---

Details to consider when consuming a Visual C++ project as a source dependency of your app.

### Details

Applications with native code, either written on `C#` or `C++`, may add source dependencies on native Visual C++ (`.vcxproj`) projects.\
Meaning, such dependencies will be built as part of the application.

Starting with version `0.68`, React Native for Windows apps use the [`PackageReference`](https://docs.microsoft.com/en-us/nuget/consume-packages/package-references-in-project-files) restore project style for native `C++` NuGet dependencies.\
The main change consists in NuGet packages being directly loaded from the user account's `globalPackagesFolder` cache instead of also copying them into a local folder relative to the Visual Studio Solution location (see [repositoryPath](https://docs.microsoft.com/en-us/nuget/reference/nuget-config-file)).

This may conflict with Node/Visual C++ dependencies that use the more common [`packages.config`](https://docs.microsoft.com/en-us/nuget/reference/packages-config) project style (i.e. [React Native Picker](https://github.com/react-native-picker/picker#react-native-pickerpicker)).

## Updating your app

### Add the React Native Windows C++ Dependency (i.e. RN Picker)

```
yarn add @react-native-picker/picker
```

### Add a `packages.config` file to your app's project directory

The React Native Windows build system will try to build the dependency from source.\
Because it uses the `packages.config` restore style, it will most likely expect its own NuGet dependencies to be restored at `$(SolutionDir)packages\`.

#### See [node_modules\@react-native-picker\picker\windows\ReactNativePicker\ReactNativePicker.vcxproj](https://github.com/react-native-picker/picker/blob/v2.2.1/windows/ReactNativePicker/ReactNativePicker.vcxproj#L156)

```xml title="ReactNativePicker.vcxproj"
<Import Project="$(SolutionDir)\packages\Microsoft.Windows.CppWinRT.2.0.210312.4\build\native\Microsoft.Windows.CppWinRT.targets" Condition="Exists('$(SolutionDir)\packages\Microsoft.Windows.CppWinRT.2.0.210312.4\build\native\Microsoft.Windows.CppWinRT.targets')" />
<Import Project="$(SolutionDir)\packages\$(WinUIPackageName).$(WinUIPackageVersion)\build\native\$(WinUIPackageName).targets" Condition="Exists('$(SolutionDir)\packages\$(WinUIPackageName).$(WinUIPackageVersion)\build\native\$(WinUIPackageName).targets')" />
```

#### `windows\<C++ or C# app directory>\packages.config`

```xml title="packages.config"
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="Microsoft.Windows.CppWinRT" version="2.0.210312.4" targetFramework="native" />
  <package id="Microsoft.UI.Xaml" version="2.3.191129002" targetFramework="native" />
</packages>
```

This way, your React Native Windows app will restore the external NuGet dependencies into the expected location.
