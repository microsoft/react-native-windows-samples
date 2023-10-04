---
id: NuGet
title: Using react-native-windows NuGet packages
---

>**This documentation and the underlying platform code is a work in progress.**

The default for react-native-windows has been to build all code from source. This includes building all the code shipped by the react-native-windows team in the npm package from source. This code can be quite large and take a long time to build as well as require a high-performance computer. Some configurations have problems building this code with only 8 GB of memory. Especially if you are used to working only with managed code, this can be a big surprise.

Starting with version 0.64 the team offers experimental NuGet packages that can be used as a replacement of compiling the sources.

> Disclaimer: There are known compatibility issues with [community modules](supported-community-modules.md), as they still rely on building the shared code from source. So the solution still needs to have all the source projects which puts all the build performance problems back.

> Disclaimer: NuGet packages are not compatible with experimental feature [WinUI 3](winui3.md).

The benefit of using NuGet packages is that you get improved compilation times for your Windows project and can develop on a less powerful computer.

The other benefit will be that it will be easier to update your projects to future versions or react-native-windows.

# How to enable on new projects
When you enable react-native-windows on your new project, you can pass `--experimentalNuGetDependency true`:

1. Follow the instructions to create a new project in [Getting Started](getting-started.md) except use:
1. `npx react-native-windows-init --overwrite --experimentalNuGetDependency true` instead when adding windows support to your project

Of course all the other flags still work.

# How to update a previously created project

> Note: It may be easier to attempt upgrading your app with `react-native-windows-init` as if it were a new project (described above), to get the correct changes applied to your project. See [Upgrading App to Latest Version of React Native Windows](upgrade-app.md). Otherwise, you can try applying the manual steps below.

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

# Version match
The versions of the NuGet package in your project must match the npm package version. If you need to update the NuGet packages there is a separate page on [Updating NuGet packages](nuget-update.md)
