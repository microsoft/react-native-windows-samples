---
id: native-modules-csharp-codegen
title: Compile time code generation for C#
---

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

>**This documentation and the underlying platform code is a work in progress.**

In previous versions of React Native for Windows, code generation for C# modules was performed using reflection. Since 0.63 we improved this by adding a compile time code generation.

There are several benefits to this approach:
* The cost of analyzing and reflecting over your code doesn't have to happen at each application startup, it only happens once at build time.
* Improved error reporting. Because the generator operates on the source code it can provide file and line information when an error is detected. 
* You will discover all errors at compile time, rather than when the code is exercised.

# How to use it
## New projects
If you create a new project from template (the recommended way), there is nothing you need to do to take advantage of this new feature, it is enabled by default.

## Return to use reflection
If you run into issues with compile-time code generation, you can return to previous behavior by editing the MSBuild project (the `.vcxproj` or `.csproj` file) and add:

```diff
   <PropertyGroup>
     ...
+    <ReactNativeCodeGenEnabled>true</ReactNativeCodeGenEnabled>
   </PropertyGourp>
```
Next you will have to add the reflection-based generation. Open `ReactPackageProvider.cs` and make the following changes:

1. Add a using statement at the top of the file
   ```diff
     using Microsoft.ReactNative;
   + using Microsoft.ReactNative.Managed;
   ```

1. Replace the call to the generated implementation with a reflection-based call.
   ```diff
            public void CreatePackage(IReactPackageBuilder packageBuilder)
            {
   -            CreatePackageImplementation(packageBuilder);
   +            packageBuilder.AddReflectionReactPackageProvider<ReactPackageProvider>();
            }
   ```

> Disclaimer: The reflection logic may be removed in the near future.

## Upgrading old projects
When you upgrade an existing 0.62 project to a later version you will already have imports for the shared files so you will get the codegen by default.
It might be the case that your C# code is not yet set up for this. To enable codegen you'll need to do the following:

1. Add a file `ReactPackageProvider.cs` with the following content, filling in the correct namespace of your application:
   ```c#
   using Microsoft.ReactNative;

   namespace ...
   {
       public partial class ReactPackageProvider : IReactPackageProvider
       {
           public void CreatePackage(IReactPackageBuilder packageBuilder)
           {
               CreatePackageImplementation(packageBuilder);
           }
   
           /// <summary>
           /// This method is implemented by the C# code generator
           /// </summary>
           partial void CreatePackageImplementation(IReactPackageBuilder packageBuilder);
       }
   }
   ```
2. Hook up the registration in the constructor in `App.xaml.cs`:
   ```diff
           public App()
           {
              ...

              PackageProviders.Add(new Microsoft.ReactNative.Managed.ReactPackageProvider());
   +          PackageProviders.Add(new ReactPackageProvider());
   ```

# How it works
During the build process a new tool is hooked up in MSBuild. It runs at the same time as the code generation for XAML. The target used is called `ReactNativeManagedCodeGen`. The build writes the arguments to the tool in a response file in the `obj` folder, for example: `windows\MyProject\obj\x64\Debug\MyProject.ReactNativeCodeGen\MyProject.ReactNativeCodeGen.rsp`. The tool takes the same arguments that the C# compiler receives, the source files, the resolved package and project references and the defines. It then uses those to create a workspace using the C# compiler APIs ([Roslyn](https://github.com/dotnet/roslyn)) which analyze the code and emit the registration calls to a generated C# file next to the ` .rsp`  file. For example `windows\MyProject\obj\x64\Debug\MyProject.ReactNativeCodeGen\MyProject.ReactNativeCodeGen.g.cs`. This auto-generated C# file is then included into your application.

Your application needs to have two pieces of code to ensure it is hooked up. If you use the templates to create the project, everything is taken care of. This paragraph just intends to explain how it works.
First it needs to have a partial class called `ReactPackageProvider` in the default namespace of your project. This class must have a partial method declared with the following signature:
```c#
partial void CreatePackageImplementation(IReactPackageBuilder packageBuilder);
``` 
which the generated file implements. This class should implement `IReactPackageProvider` and call the partial method from the `CreatePackage` function. 
You then need to register this class in your App's XAML startup code by adding the following call to the constructor:
```c#
PackageProviders.Add(new ReactPackageProvider());
```
You can find the full code if you create a new template, or in the instructions for upgrading old projects above.
