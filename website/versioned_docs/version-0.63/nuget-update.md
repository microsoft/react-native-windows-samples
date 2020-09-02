---
id: version-0.63-nuget-update
title: Updating NuGet packages
original_id: nuget-update
---

>**This documentation and the underlying platform code is a work in progress.**

The versions of the [NuGet](nuget.md) packages used in your project must match the version of the react-native-windows npm package.

# Determine npm version
You can find the npm version by opening `package.json` at the root of your project and looking in the dependencies section:
```json
{
  "name": "MyProject"
  ...
  "dependencies": {
    ...
    "react-native-windows": "0.63.0"
  },
  ...
```
In this example the npm version for `react-native-windows` is `0.63.0`.  Note that if you use preview, Your version might include a preview marker like `0.64.0-preview.3`. 

# Determine and update the NuGet version
For Windows there are two project types: C++ and C#. If you don't know which one you can look in the `windows/MyProject` folder. 
If you find a `MyProject.vcxproj` file, you have a C++ project.
If you find a `MyProject.csproj` file, you have a C# project.
Each project type has different instructions. For either you can use both the Visual Studio IDE or a text editor.
Note: The [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) only runs on Windows and is not the same as [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432). 
If you use [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/mac/), please follow the text editor instructions.

* C#
  * [Text editor](#c-project---text-editor)
  * [Visual Studio IDE](#c-project---visual-studio-ide)
* C++
  * [Text editor](#c-project---text-editor-1)
  * [Visual Studio IDE](#c-project---visual-studio-ide-1)


## C# project - Text editor
1. Open `windows/MyProject/MyProject.csproj` in a text editor
1. Find the Package reference section:
   ```xml
    <PackageReference Include="Microsoft.ReactNative.Managed">
      <Version>0.63.0</Version>
    </PackageReference>
    ```
1. Change the version element.

## C# project - Visual Studio IDE
1. Open the solution in Visual Studio
1. Right-Click on the C# project file `MyProject (Universal Windows)` in the Solution Explorer window

   ![Visual Studio Solution Explorer showing the csproj project selected](assets/nuget-update-cs-project.png)
1. Select "Managed NuGet Packages..."
1. Select the "Installed" tab

   ![Visual Studio Manage NuGet dialog showing the installed tab selected](assets/nuget-update-packages-manager-installed-tab.png)
1. If the npm version has a hyphen with a preview marker, you must check the "Include Prerelease" per the image above.
1. Select the package `Microsoft.ReactNative.Managed`
1. Select the version of your npm package in the version dropdown on the right side.

   ![Visual Studio Managed NuGet dialog with the version dropdown selected.](assets/nuget-update-select-package.png)
1. Click `install`
1. Close the dialog and save your project

## C++ project - Text editor
1. Open `windows/MyProject/packages.config` in a text editor.
1. Update the version attributes of both `Microsoft.ReactNative` and `Microsoft.ReactNative.Cxx` packages
1. Open `windows/MyProject/MyProject.vcxproj` in a text editor.
1. Perform a search and replace for: 
   * `packages\Microsoft.ReactNative.0.63.0`
   * `packages\Microsoft.ReactNative.Cxx.0.63.0`
   and replace it with the the version number of the npm package.
   There should be multiple strings to replace.

## C++ project - Visual Studio IDE
1. Open the solution in Visual Studio
1. Right-Click on the C++ project file `MyProject (Universal Windows)` in the Solution Explorer window

   ![Visual Studio Solution Explorer showing the vcxproj project selected](assets/nuget-update-cpp-project.png)
1. Select "Managed NuGet Packages..."
1. Select the "Installed" tab

   ![Visual Studio Manage NuGet dialog showing the installed tab selected](assets/nuget-update-packages-manager-installed-tab.png)
1. If the npm version has a hyphen with a preview marker, you must check the "Include Prerelease" per the image above.
1. Perform the next two steps for both `Microsoft.ReactNative` and `Microsoft.ReactNative.Cxx` packages:
   1. On the right side, from the version dropdown select the version of your npm package

      ![Visual Studio Managed NuGet dialog with the version dropdown selected.](assets/nuget-update-select-package.png)
   1. Click `install`
1. Close dialog and save your project
