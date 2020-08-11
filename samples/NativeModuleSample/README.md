# Native Module Sample - React Native for Windows

<p align="center">
  <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%NativeModuleSample+CI%22">
    <img src="https://github.com/microsoft/react-native-windows-samples/workflows/NativeModuleSample%20CI/badge.svg" alt="NativeModuleSample CI Status" />
  </a>
</p>

These samples showcase building Native Modules for React Native for Windows. It includes implementations in [C#](./csharp/) and [C++/WinRT](./cppwinrt/).

It currently targets React Native Windows 0.62.

The official documentation can be found here:

* [Native Modules Setup](https://microsoft.github.io/react-native-windows/docs/native-modules-setup)
* [Native Modules and React Native Windows](https://microsoft.github.io/react-native-windows/docs/native-modules)
* [Native Modules and React Native Windows (Advanced Topics)](https://microsoft.github.io/react-native-windows/docs/native-modules-advanced)
* [Native UI Components](https://microsoft.github.io/react-native-windows/docs/view-managers)

>**Note: Don't build your own projects directly out of these samples. When you publish a native module (as source), you'll want to create a new project with the correct metadata. This will also make sure that you're using unique identifiers in your project files to avoid conflicts with other native modules.**
