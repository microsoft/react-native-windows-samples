---
id: native-modules-nuget
title: Using react-native-windows NuGet packages
---

>**This documentation and the underlying platform code is a work in progress.**

The default for react-native-windows has been to build all code from source. This includes building all the code shipped by the react-native-windows team in the npm package from source. This code can be quite large and take a long time to build as well as require a performent computer. Some configurations have problems building this code with only 8Gb of memory. Especially if you are used to working only with managed code this can be a big surprise.

Starting with version 0.63 the team offers experimental nuget packages that can be used as a replacement of compiling the sources.

> Disclaimer: There are known compatibility issues with [community modules](parity-status.md#supported-community-modules), as they still rely on building the shared code from source. So the solution still needs to have all the source projects which puts all the build performance problems back.

> Disclaimer: Nuget packages are not compatible with experimental feature [WinUI3](winui3.md).

The benefit of using nuget pacakges is that you get improved compilation times for your windows project and can do your development on a less powerfull computer.

The other benefit will be that it will be easier to update your projects to future versions or react-native-windows.

We are working on getting the packages on [NuGet.org](https://nuget.org). Until that time the packages will be available on the [react-native-public feed](https://dev.azure.com/ms/react-native/_packaging?_a=feed&feed=react-native-public) on Azure Devops.

# How to enable on new projects
When you eanble react-native-windows on your new project, you can pass `--experimentalNuGetDependency true`:

1. `npx react-native init <projectName>`
1. `pushd <projectName>`
1. `npx react-native-windows-init --overwrite --experimentalNuGetDependency true`

Of course all the other flags still work.

# How to update a previously created project
## CSharp projects
1. Add a nuget configuration file `nuget.config` in the `windows` folder next to the .sln file
   ```xml
   <?xml version="1.0" encoding="utf-8"?>
    <configuration>
    <config>
      <add key="repositoryPath" value="packages" />
    </config>
    <packageSources>
      <add key="Nuget.org" value="https://api.nuget.org/v3/index.json" />
      <add key="react-native" value="https://pkgs.dev.azure.com/ms/react-native/_packaging/react-native-public/nuget/v3/index.json" />
     </packageSources>
   </configuration>
   ```
1. Update the solution file `windows\<projectName>.sln`:
   1. Open the project in Visual Studio
   1. Remove all projects except your own app project
1. Edit the project file `windows\<projectName>\<projectName.csproj>`
   1. Add the the nuget flag to the first property group
      ```diff
      +   <UseExperimentalNuget>true</UseExperimentalNuget>
        </PropertyGroup>
      ```
   1. If you have a project that was created before 0.63, you should remove 
   1. Add a nuget reference to "Microsoft.ReactNative.Managed".
      You can do this either through Visual Studio's UI or by adding:
      ```xml
      <ItemGroup>
        <PackageReference Include="Microsoft.ReactNative.Managed">
          <Version>0.63.0</Version>
        </PackageReference>
      </ItemGroup>
      ```
      > Note: You'll need to match the nuget version with the npm version

1. Update the C# logic for the new [compile-time C# codeGen](native-modules-csharp-codegen.md)

## C++ projects
1. Update the solution file `windows\<projectName>.sln`:
   1. Open the project in Visual Studio
   1. Remove all projects that are not your project
1. Edit the project file `windows\<projectName>\<projectName.vcxproj>`
   1. Add the the nuget flag to the first property group
      ```diff
        <PropertyGroup Label="ReactNativeWindowsProps">
          <ReactNativeWindowsDir Condition="'$(ReactNativeWindowsDir)' == ''">...</ReactNativeWindowsDir>
      +   <UseExperimentalNuget>true</UseExperimentalNuget>
        </PropertyGroup>
      ```
   1. Add a nuget references to both:
      * Microsoft.ReactNative
      * Microsoft.ReactNative.Cxx

      nuget packages. C++ packages do not support `PackageReference` so it is not recommended to manually add these dependencies to the project file, instead add the dependencies via the Visual Studio IDE.
      > Note: You'll need to match the nuget version with the npm version
