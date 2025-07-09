---
id: version-0.75-NuGet
title: Using Microsoft.ReactNative NuGet packages
original_id: NuGet
---

>**This documentation and the underlying platform code is a work in progress.**

Traditionally, the default for React Native Windows has been to build all code from source. This includes building all the code shipped by the team in the npm package from source. The amount of code is quite large and takes both a long time to build as well as requiring a high-performance computer. Some configurations have problems building this code with only 8 GB of memory. Especially if you are used to working only with managed code, this can be a big surprise.

Starting with the (currently experimental) New Architecture (i.e. Fabric) app and module projects, React Native Windows will default to consuming pre-built binary NuGet packages instead of requiring you to compile everything yourself.

The benefit of using NuGet packages is that you get improved compilation times for your Windows project and can develop on a less powerful computer. This will also translate into a smoother update experience for newer versions of `react-native-windows`.

When creating a new project in [Get Started with Windows](getting-started.md), the type of template selected for the [init-windows command](init-windows-cli.md) will determine whether or not the project will built against the `react-native-windows` source or the pre-built NuGet packages.

> **Note on new projects:** Building from source will remain the default for new Old Architecture projects. This is because there are known compatibility issues with [community modules](supported-community-modules.md), as they often still rely on building the shared code from source, making the parallel use of NuGets problematic. Newly created New Architecture projects will build using the NuGets starting with `react-native-windows@0.75.1`.

> **Note on existing projects:** Previously exposed methods (see below) for building Old Architecture projects against NuGets were experimental and are being deprecated, and therefore should not be used. If you're in the process of upgrading an existing Old Architecture project that *did* use those experimental methods, the [init-windows command](init-windows-cli.md) will try to respect that setting until the methods are formally deprecated and removed.

## Enabling NuGets for Old Architecture Projects (Not Recommended)

The formerly recommended [React Native Windows Init CLI](https://microsoft.github.io/react-native-windows/init-cli) still supports an `--experimentalNuGetDependency true` flag to set up an Old Architecture project which uses NuGet packages, but that command will not work to create/upgrade RNW projects after RNW 0.75, and use of that flag remains strictly experimental.

If you have an existing Old Architecture project, the steps below may help you modify your RNW Old Architecture project so you can consume the RNW NuGet packages.

<!--DOCUSAURUS_CODE_TABS-->
<!--C# projects-->
1. Update the solution file `windows\<projectName>.sln`:
   1. Open the project in Visual Studio
   1. Remove all projects except your own app project
1. Edit the file `windows\ExperimentalFeatures.props`
   1. Set the following to true
      ```xml
      <UseExperimentalNuGet>true</UseExperimentalNuGet>
      ```
1. Edit the project file `windows\<projectName>\<projectName.csproj>`
   1. Remove any `<ProjectReference>` or `<PackageReference>` references for `Microsoft.ReactNative.*` projects.

1. Update the C# logic for the new [compile-time C# codeGen](native-modules-csharp-codegen.md)

<!--C++ projects-->
> Note: Starting with version 0.68, React Native for Windows apps use `PackageReference`s for native `C++` NuGet dependencies. See [Managing C++ dependencies](managing-cpp-deps.md) about migrating away from use the older, `packages.config` for managing NuGet dependencies.

1. Update the solution file `windows\<projectName>.sln`:
   1. Open the project in Visual Studio
   1. Remove all projects that are not your project
1. Edit the file `windows\ExperimentalFeatures.props`
   1. Set the following to true
      ```xml
      <UseExperimentalNuGet>true</UseExperimentalNuGet>
      ```
1. Edit the project file `windows\<projectName>\<projectName.vcxproj>`
   1. Remove any `<ProjectReference>` or `<PackageReference>` references for `Microsoft.ReactNative.*` projects.

<!--END_DOCUSAURUS_CODE_TABS-->
