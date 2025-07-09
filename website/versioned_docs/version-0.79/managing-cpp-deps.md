---
id: version-0.79-managing-cpp-deps
title: Managing C++ dependencies
original_id: managing-cpp-deps
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

Details to consider when consuming community modules or other Visual C++ projects.

### Details

Applications with native code, either written on `C#` or `C++`, may add source dependencies on native Visual C++ (`.vcxproj`) projects. Meaning, such dependencies will be built as part of the application.

Starting with version `0.68`, React Native for Windows apps use the [`PackageReference`](https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files) restore project style for native `C++` NuGet dependencies. The main change consists of NuGet packages being placed directly in the user account's `globalPackagesFolder` cache instead of also copying them into a local folder relative to the Visual Studio Solution location (see [`repositoryPath`](https://docs.microsoft.com/nuget/reference/nuget-config-file)).

This may conflict with C++ dependencies that use the more common [`packages.config`](https://docs.microsoft.com/nuget/reference/packages-config) project style, including community modules generated targeting versions older than 0.68.

## Updating your app

### Add the React Native Windows C++ Dependency (i.e. RN Picker)

```
yarn add @react-native-picker/picker
```

### Add a `packages.config` file to your app's project directory

The React Native Windows build system will try to build the dependency from source. Because it uses the `packages.config` restore style, it will most likely expect its own NuGet dependencies to be restored at `$(SolutionDir)packages\`.

#### See [`node_modules\@react-native-picker\picker\windows\ReactNativePicker\ReactNativePicker.vcxproj`](https://github.com/react-native-picker/picker/blob/v2.2.1/windows/ReactNativePicker/ReactNativePicker.vcxproj#L156)

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

## Building with MSBuild.exe (Advanced)

The introduction of `PackageReference` in React Native Windows projects overrides the `packages.config` NuGet restore style in the MSBuild engine.

This means plain `MSBuild.exe` will assume `PackageReference` is being used for all projects and thus, any community projects using `packages.config` added to your app will not have their dependencies restored.

To successfully restore and build your app using only the  MSBuild CLI, run the following commands:
```PowerShell
MSBuild.exe /t:Restore "/p:RestoreProjectStyle=PackagesConfig;RestorePackagesConfig=true" your_solution.sln

MSBuild.exe /restore your_solution.sln
```

The first command explicitly restores any `packages.config` dependencies found within your solution at the predefined destination (usually, the `packages` folder in your solution's path).

The second command implicitly restores and builds the solution using the now default restore style, `PackageReference`, restoring the remaining NuGet dependencies.

Note, these steps are done automatically when building inside Visual Studio or using the React Native Windows CLI.