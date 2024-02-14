# CalculatorCoreAppNuGet - React Native for Windows

This sample showcases the usage of React Native for Windows to build a simple Calculator, using the CoreApp APIs and the Microsoft.ReactNative NuGet package.

It currently targets React Native Windows 0.73

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
