---
id: NuGet
title: Using Microsoft.ReactNative NuGet packages
---

>**This documentation and the underlying platform code is a work in progress.**

The default for React Native Windows has been to build all code from source. This includes building all the code shipped by the team in the npm package from source. This code can be quite large and take a long time to build as well as require a high-performance computer. Some configurations have problems building this code with only 8 GB of memory. Especially if you are used to working only with managed code, this can be a big surprise.

Starting with version 0.64 the team offers experimental NuGet packages that can be used as a replacement of compiling the sources.

> Disclaimer: There are known compatibility issues with [community modules](supported-community-modules.md), as they still rely on building the shared code from source. So the solution still needs to have all the source projects which puts all the build performance problems back.

The benefit of using NuGet packages is that you get improved compilation times for your Windows project and can develop on a less powerful computer.

The other benefit will be that it will be easier to update your projects to future versions of `react-native-windows`.

# How to enable on new projects
 When creating a new project in [Get Started with Windows](getting-started.md), the templates used by the [init-windows command](init-windows-cli.md) default to building against source. Follow the instructions below if you wish to try using the NuGet packages.

> Note: The formerly recommended [React Native Windows Init CLI](https://microsoft.github.io/react-native-windows/init-cli) still supports an `--experimentalNuGetDependency true` flag to set up a new project which uses the NuGet packages, but as that command is planned for deprecation, it's not recommended.

# How to update a previously created project
The steps below will help you modify your RNW project so you can consume the RNW NuGet packages.

> Note: If you're in the process of upgrading your app to a new version of RNW (See [Upgrading App to Latest Version of React Native Windows](upgrade-app.md)), and you've already set the `<UseExperimentalNuGet>true</UseExperimentalNuGet>` flag (as per below), the [init-windows command](init-windows-cli.md) will try to respect that setting so you shouldn't have to re-apply the manual steps below after the upgrade.

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
