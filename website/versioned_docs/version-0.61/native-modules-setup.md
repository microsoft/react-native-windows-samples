---
id: version-0.61-native-modules-setup
title: Native Module Setup
original_id: native-modules-setup
---

> **This documentation is a work in progress and version-specific. Please check that the version of this document (top of page) matches the version of RN/RNW you're targeting.**
> **Examples (C# and C++/WinRT):**
>
> - [Native Module Sample in microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/tree/main/samples/NativeModuleSample)
> - [Sample App in microsoft/react-native-windows/packages/microsoft-reactnative-sampleapps](https://github.com/microsoft/react-native-windows/tree/main/packages/sample-apps)

This guide will help set you up with the Visual Studio infrastructure to author your own stand-alone native module for React Native Windows. In this document we'll be creating the scaffolding for a `NativeModuleSample` native module.

## Development Environment

Make sure you have installed all of the [development dependencies](rnw-dependencies.md).

If you're planning on writing in C++, you *must* install the [C++/WinRT Visual Studio Extension](https://marketplace.visualstudio.com/items?itemName=CppWinRTTeam.cppwinrt101804264).

## Choose your own adventure

Once your development environment has been correctly configured, you have several options about how to access native APIs. You can either:

- [Reference the APIs directly from within a React Native for Windows project](#Referencing-Windows-APIs-within-a-React-Native-for-Windows-project)
- [Create a new native module library that can be can be distributed separately from your app](#Creating-a-new-native-module-library-project)
- [Add Windows support to an existing community library](#Adding-Windows-support-to-an-existing-library) 

## Referencing Windows APIs within a React Native for Windows project

If you are only planning on adding a native module to your existing React Native Windows app, i.e.:

1. You followed the [Getting Started](getting-started.md) guide, where
1. You ran `npx react-native-windows-init` to add Windows to your project, and
1. You are just adding your native code to the app project under the `windows` folder.

Then you can simply open the Visual Studio solution in the `windows` folder and add the new files directly to the app project.

## Creating a new native module library project

The steps to create a new native module library project are:
1. Follow the official React Native instructions to create a blank native module project
1. Add Windows support to the newly created library

### Creating a blank native module project

Follow the official React Native instructions at https://reactnative.dev/docs/native-modules-setup.

```bat
npx create-react-native-module --module-name "NativeModuleSample" NativeModuleSample
cd NativeModuleSample
yarn install
```

Now you'll have a new native module project under `NativeModuleSample`. Be sure to look at the command output for further steps you'll want to do before publishing the project.

At this point, follow the steps below to add Windows support to the newly created library.

## Adding Windows support to an existing library

> The steps below are written as if you're working with the `NativeModuleSample` example above, in the root folder of the project. Substitute the name of the library you're actually working on where appropriate, and ensure that you're working in the appropriate root folder of the library.

### Updating your package.json

Many native module libraries (including the default library template) target older versions of `react` and `react-native` than Windows supports, so you'll need to upgrade to newer versions in order to add support for `react-native-windows`.

> Properly defining your NPM dependencies is an essential part of creating and maintaining a React Native library, especially one that supports multiple platforms. The instructions here represent the minimum steps required to start targeting `react-native-windows`. If you're adding Windows support to a library you don't own, you'll need to work with the library owners to make sure any changes made to `package.json` are appropriate.
> 
> For more information on how NPM dependencies work, see [Specifying dependencies and devDependencies in a package.json file](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).

You can use the `npm info` command to find the correct versions to use. Let's assume you plan on building against the `v0.61-stable` version of `react-native-windows`.

Use the following command to find the matching versions of `react`:

```bat
npm info react-native-windows@v0.61-stable devDependencies.react
```

Take the result of that command (let's say it's `16.9.0`) and use it to upgrade the dev dependency:

```bat
yarn upgrade react@16.9.0 --dev
```

You'll need to repeat the steps for `react-native`, i.e.:

```bat
npm info react-native-windows@v0.61-stable devDependencies.react-native
```

Again, take the result of that command (let's say it's `0.61.5`) and use it to upgrade the dev dependency:

```bat
yarn upgrade react-native@0.61.5 --dev
```

Now you should be ready to add `react-native-windows`.

```bat
yarn add react-native-windows@v0.61-stable --dev
```

### Creating the Visual Studio Project / Solution

Now it's time to switch into Visual Studio and create a new project.

> **These are the version specific manual steps for setting up the native projects and solutions. If you upgrade your module to RN >= 0.64, the `react-native-windows-init` command can create the correct projects and solutions for you, using the `--projectType lib` flag.**

Open Visual Studio and select `Create a new project`. You're going to create a new `Windows Runtime Component` project, which produces a library that is compatible with Windows UWP apps.

If you're planning on writing your native module in C#, you'll want to choose the C# `Windows Runtime Component (Universal Windows)`:

![C# Windows Runtime Component (Universal Windows)](assets/native-modules-setup-new-cs-project.png)

If you're planning on writing your native module in C++, you'll want to choose `Windows Runtime Component (C++/WinRT)`:

![Windows Runtime Component (C++/WinRT)](assets/native-modules-setup-new-cpp-project.png)

> **Important:** You want *C++/WinRT*, not *C++/CX*. Do **not** choose the C++/CX `Windows Runtime Component (Universal)` project-type:
> 
> ![Wrong Windows Runtime Component (Universal)](assets/native-modules-setup-wrong-cpp-project.png)
> 
> If you don't see the `Windows Runtime Component (C++/WinRT)` project type, go back and install the _C++/WinRT Visual Studio Extension_ under [Development Environment](#development-environment).

1. Set the `Project Name` to `NativeModuleSample`.
1. Set the `Location` to the native module directory (typically the same directory with the `ios` and `android` sub-directories).
1. Set the `Solution Name` to `NativeModuleSample`.
1. Click `Create`.

Next you'll be prompted to select the versions of Windows you'll support. This should match the values for React Native Windows, which as of version 0.61, are:

1. Set the `Target version` to `Windows 10, version 1903 (10.0; Build 18362)`.
1. Set the `Minimum version` to `Windows 10 Creators Update (10.0; Build 15063)`.

You should now have a new `NativeModuleSample` solution file at `.\NativeModuleSample\NativeModuleSample.sln` and a `NativeModuleSample` project at `.\NativeModuleSample\NativeModuleSample\NativeModuleSample.csproj` for C# or `.\NativeModuleSample\NativeModuleSample\NativeModuleSample.vcxproj` for C++.

Additionally, for C++/WinRT projects, you'll need to change the following:

1. Right click on the project and choose `Manage Nuget Packages...`
    1. Select version 2.0.190730.2 for Microsoft.Windows.CppWinRT package.
1. Right-click on the project and choose `Properties`
    1. Under `Linker > Windows Metadata` set `Generate Windows Metadata` to `Yes`.

Now, before we go any further we'll want to rename the root directory of the Windows native code to `windows` to match the peer `android` and `ios` directories:

1. Close the solution with `File` > `Close Solution`.
1. Rename that top `NativeModuleSample` directory `windows`.
1. Re-open the solution file at `windows\NativeModuleSample.sln`.

> *Optional*: Whether you're creating a new native module from scratch, or adding windows support to an existing ios/android module, if you're using git, you'll want to add Visual Studio-specific entries in your project's `.gitignore`.
> The simplest way to do this is to get [VisualStudio.gitignore](https://raw.githubusercontent.com/github/gitignore/master/VisualStudio.gitignore) and save it as `windows\.gitignore`.

Now it's time to add React Native Windows into the solution.

### Adding React Native Windows to the Visual Studio Solution

We're going to add several React Native Windows projects to your solution. So to avoid confusing them with your own code, we're first going to create a solution folder called `ReactNative`:

1. Open the Solution Explorer sidebar.
1. Right-click on `Solution 'NativeModuleSample'` at the top.
1. Select `Add` > `New Solution Folder`.
1. Name the folder `ReactNative`.

Now we're going to add all of the following React Native Windows projects to that `ReactNative` folder. All of these projects are located under the `node_modules\react-native-windows` directory in the root of your `react-native-my-library` project directory.

>*For more details about what these projects do, see [Project Structure](https://github.com/microsoft/react-native-windows/blob/0.61-stable/docs/project-structure.md).*

| VS Project                          | Project File                                                                     |
| :---------------------------------- | :------------------------------------------------------------------------------- |
| Common                              | `Common\Common.vcxproj`                                                          |
| Folly                               | `Folly\Folly.vcxproj`                                                            |
| JSI.Universal                       | `JSI\Universal\JSI.Universal.vcxproj`                                            |
| Microsoft.ReactNative               | `Microsoft.ReactNative\Microsoft.ReactNative.vcxproj`                            |
| ReactCommon                         | `ReactCommon\ReactCommon.vcxproj`                                                |
| ReactWindowsCore                    | `ReactWindowsCore\ReactWindowsCore.vcxproj`                                      |
| Chakra                              | `Chakra\Chakra.vcxitems`                                                         |
| JSI.Shared                          | `JSI\Shared\JSI.Shared.vcxitems`                                                 |
| Microsoft.ReactNative.Cxx           | `Microsoft.ReactNative.Cxx\Microsoft.ReactNative.Cxx.vcxitems`                   |
| Microsoft.ReactNative.SharedManaged | `Microsoft.ReactNative.SharedManaged\Microsoft.ReactNative.SharedManaged.shproj` |
| Mso                                 | `Mso\Mso.vcxitems`                                                               |
| Shared                              | `Shared\Shared.vcxitems`                                                         |

For each project, you'll do the following:

1. Open the Solution Explorer sidebar.
1. Right-click on the `ReactNative` folder.
1. Select `Add` > `Existing Project...`.
1. Select the project file and click `Open`.

When you are done, your solution should look like this:
![native module dependencies](assets/native-module-dependencies61.png)

You now have all of the React Native Windows projects to your solution. Next we're going to reference them in our `NativeModuleSample` project.

### Referencing React Native Windows in your Project

The only project reference you **must** add is `Microsoft.ReactNative`. To add the reference:

1. Open the Solution Explorer sidebar.
1. Right-click on your `NativeModuleSample` project.
1. Select `Add` > `Reference`.
1. Select `Projects` on the left-hand side.
1. Check the box next to `Microsoft.ReactNative`.
1. Click `OK`.

After you've added the reference, you need to make sure it doesn't copy itself into your build (otherwise it'll cause build conflicts down the line when you're trying on consume your library):

1. Open the Solution Explorer sidebar.
1. Under your `NativeModuleSample` project, expand the `References`.
1. Right-click on `Microsoft.ReactNative`.
1. Select `Properties`.
1. Under `Build`, Change `Copy Local` to `False`.

Now, you're technically ready to go, but in order to improve the developer experience, it's also **highly recommended** to also add a reference to the appropriate helper shared project. These projects contain the attributes (C#) and macros (C++) as described in the [Native Modules](native-modules.md) and [View Managers](view-managers.md) documents.

If you're writing in C#, you'll want to add `Microsoft.ReactNative.SharedManaged`:

1. Open the Solution Explorer sidebar.
1. Right-click on your `NativeModuleSample` project.
1. Select `Add` > `Reference`.
1. Select `Shared Projects` on the left-hand side.
1. Check the box next to `Microsoft.ReactNative.SharedManaged`.
1. Click `OK`.

If you're writing in C++, you'll want to add `Microsoft.ReactNative.Cxx`:

1. Open the Solution Explorer sidebar.
1. Right-click on your `NativeModuleSample` project.
1. Select `Add` > `Reference`.
1. Select `Shared Projects` on the left-hand side.
1. Check the box next to `Microsoft.ReactNative.Cxx`.
1. Click `OK`.

### Testing your Build

To make sure that everything is working, you'll want to try building `NativeModuleSample`. First you'll want to make sure you've chosen a supported platform:

1. At the top, change the `Solution Platform` to `x86` or `x64`.
1. In the `Build` menu, select `Build Solution`.

### Next Steps

You have now created the scaffolding to build a native module or view manager. Now it's time to add the business logic to the module - follow the steps described in the [Native Modules](native-modules.md) and [View Managers](view-managers.md) documents.

### Making your module ready for consumption in an app

If you've followed the steps above, your module will still require a couple tweaks to be ready for consumption. You will need to edit your project file manually to touch up the paths that it uses to reference project references and NuGet packages.

#### 1. Fixing relative Microsoft.ReactNative project paths

When you added a reference to the `Microsoft.ReactNative` project in VS (and to a shared helper), it used a relative path like `..\..\node_modules\react-native-windows\Microsoft.ReactNative\Microsoft.ReactNative.vcxproj`. This however isn't going to work for a different app.

We want to instead search for the root directory of `react-native-windows`.

Open your project file (`windows\NativeModuleSample\NativeModuleSample.vcxproj` for C++ or `windows\NativeModuleSample\NativeModuleSample.csproj` for C#) in a text editor.

You're going to insert the following:

```xml
<PropertyGroup Label="ReactNativeWindowsProps">
  <ReactNativeWindowsDir Condition="'$(ReactNativeWindowsDir)' == ''">$([MSBuild]::GetDirectoryNameOfFileAbove($(SolutionDir), 'node_modules\react-native-windows\package.json'))\node_modules\react-native-windows\</ReactNativeWindowsDir>
</PropertyGroup>
```

**For C++ projects:**

```diff
<Import Project="$(VCTargetsPath)\Microsoft.Cpp.Default.props" />
+<PropertyGroup Label="ReactNativeWindowsProps">
+  <ReactNativeWindowsDir Condition="'$(ReactNativeWindowsDir)' == ''">$([MSBuild]::GetDirectoryNameOfFileAbove($(SolutionDir), 'node_modules\react-native-windows\package.json'))\node_modules\react-native-windows\</ReactNativeWindowsDir>
+</PropertyGroup>
```

**For C# projects:**

```diff
<Import Project="$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
+<PropertyGroup Label="ReactNativeWindowsProps">
+  <ReactNativeWindowsDir Condition="'$(ReactNativeWindowsDir)' == ''">$([MSBuild]::GetDirectoryNameOfFileAbove($(SolutionDir), 'node_modules\react-native-windows\package.json'))\node_modules\react-native-windows\</ReactNativeWindowsDir>
+</PropertyGroup>
```

Now you'll want to replace later path references in the file like `..\..\node_modules\react-native-windows\Microsoft.ReactNative` with `$(ReactNativeWindowsDir)\Microsoft.ReactNative`:

**For C++ and C# projects:**

```diff
<ItemGroup>
-  <ProjectReference Include="..\..\node_modules\react-native-windows\Microsoft.ReactNative\Microsoft.ReactNative.vcxproj">
+  <ProjectReference Include="$(ReactNativeWindowsDir)\Microsoft.ReactNative\Microsoft.ReactNative.vcxproj">
    <Project>{f7d32bd0-2749-483e-9a0d-1635ef7e3136}</Project>
    <Private>false</Private>
  </ProjectReference>
</ItemGroup>
```

**For C++ projects:**

```diff
<ImportGroup Label="Shared">
-  <Import Project="..\..\node_modules\react-native-windows\Microsoft.ReactNative.Cxx\Microsoft.ReactNative.Cxx.vcxitems" Label="Shared" />
+  <Import Project="$(ReactNativeWindowsDir)\Microsoft.ReactNative.Cxx\Microsoft.ReactNative.Cxx.vcxitems" Label="Shared" />
</ImportGroup>
```

**For C# projects:**

```diff
<ImportGroup Label="Shared">
-  <Import Project="..\..\node_modules\react-native-windows\Microsoft.ReactNative.SharedManaged\Microsoft.ReactNative.SharedManaged.projitems" Label="Shared" />
+  <Import Project="$(ReactNativeWindowsDir)\Microsoft.ReactNative.SharedManaged\Microsoft.ReactNative.SharedManaged.projitems" Label="Shared" />
</ImportGroup>
```

#### 2. Fixing relative Nuget paths

If you are writing a C++/WinRT module you'll see references to NuGet packages in your vcxproj file with relative paths e.g. `..\packages\...`. We need these to use the solution directory instead, so replace all mentions of `..\packages\` with `$(SolutionDir)\`.

**Example:**

```diff
-<Import Project="..\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props" Condition="Exists('..\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props')" />
+<Import Project="$(SolutionDir)\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props" Condition="Exists('$(SolutionDir)\packages\NuGetPackage.1.0.0.0\build\native\NuGetPackage.props')" />
```

### Testing the module before it gets published

#### Option 1: Create a new test app
1. Follow the [getting started guide](getting-started.md) to create a new React Native Windows app.
2. Run `npm i <module-local-path> --save` (e.g. `npm i D:\NativeModuleSample --save`) to install the local module.
3. [Link the native module](native-modules-using.md).

#### Option 2: Adding Windows support to existing sample app

If you are working on an existing module that already has iOS and Android samples, and want to add Windows support to the existing test app, follow these steps (example of WebView module test app can be found [here](https://github.com/react-native-community/react-native-webview/tree/master/example)).

1. In a different directory, follow the [getting started guide](getting-started.md) and create a new React Native Windows app. 
2. Copy the `Windows` folder from the blank RNW app into the existing sample app's sample app's folder. (The RNW CLI helps create the correct project setup that you can then copy directly into the sample app.)
3. Open `sln` and `vxcproj` files and check `node_module` reference paths. Fix the paths if necessary based on how the folders are structured in native module repo ([example](https://github.com/react-native-community/react-native-webview/blob/v11.17.2/example/windows/WebViewWindows.sln#L11-L42)).
4. Open the solution with Visual Studio and [link native module](native-modules-using.md).

    
    >The project should build correctly at this point, but we still need to setup some special metro configurations for Windows in order to run the app without breaking iOS and Android bundling.

5. Add `metro.config.windows` for Windows bundling ([example](https://github.com/react-native-community/react-native-webview/blob/v11.17.2/metro.config.windows.js)).
6. In `package.json`, add a separate start command for windows and attach a special argument to tell metro to use the windows config we just created ([example](https://github.com/react-native-community/react-native-webview/blob/v11.17.2/package.json#L18)).
7. Add `react-native.config.js` to parse the special argument we added ([example](https://github.com/react-native-community/react-native-webview/blob/v11.17.2/react-native.config.js#L28-L33)).
8. Update JS main module path (relative path to metro projectRoot) in `App.cpp` if necessary ([example](https://github.com/react-native-community/react-native-webview/blob/v11.17.2/example/windows/WebViewWindows/App.cpp#L25)).

### Documenting Your Module
Once your module is complete, update [react-native-community/directory](https://github.com/react-native-community/directory) so that its information on your native module is up to date. If you are building a native module which will be maintained by Microsoft, please update the Supported Community Modules documentation in [react-native-windows-samples] with your native module's information.
