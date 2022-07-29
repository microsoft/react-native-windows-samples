# CalculatorCoreAppNuGet - React Native for Windows

<p align="center">
  <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorCoreAppNuGet+CI%22">
    <img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorCoreAppNuGet%20CI/badge.svg" alt="CalculatorCoreAppNuGet CI Status" />
  </a>
  <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorCoreAppNuGet+CI+%28Upgrade%29%22">
    <img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorCoreAppNuGet%20CI%20(Upgrade)/badge.svg" alt="CalculatorCoreAppNuGet CI (Upgrade) Status" />
  </a>
</p>

This sample showcases the usage of React Native for Windows to build a simple Calculator, using the CoreApp APIs and the Microsoft.ReactNative NuGet package.

It currently targets React Native Windows 0.0.0-canary.535

### Setup
First, make sure you've met the [React Native Windows System Requirements](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies).

Then, within this folder, install the applications's dependencies. If you have `yarn` installed:

```cmd
yarn install
```

Otherwise, you can just use npm:

```cmd
npm install
```

### Run
Once you have all of the dependencies installed, you can run the application with the following command:

```cmd
npx react-native run-windows
```

The command will:
* Build the application and all dependencies
* Deploy the application
* Launch the React Native Server and Debugger
* Launch the application

### Upgrade
To upgrade this sample to the latest version of RNW:

The CoreApp APIs are part of the framework, so you only need to update:
- the JS code
- the Microsoft.ReactNative and Microsoft.ReactNative.Cxx NuGet packages
