# CalculatorNuGet - React Native for Windows

<p align="center">
  <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorNuGet+CI%22">
    <img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorNuGet%20CI/badge.svg" alt="CalculatorNuGet CI Status" />
  </a>
  <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorNuGet+CI+%28Upgrade%29%22">
    <img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorNuGet%20CI%20(Upgrade)/badge.svg" alt="CalculatorNuGet CI (Upgrade) Status" />
  </a>
</p>

This sample showcases the usage of React Native for Windows to build a simple Calculator, using the Microsoft.ReactNative NuGet.

It currently targets React Native Windows 0.69.

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

1. Open a command prompt and navigate to the `samples` folder:
    ```cmd
    cd ..
    ```
2. Delete this folder:
    ```cmd
    rd /s /q CalculatorNuGet
    ```
3. Create a new React Native app:
    ```cmd
    npx react-native init Calculator --template react-native-template-typescript@latest --directory CalculatorNuGet
    ```
4. Add Windows support:
    ```cmd
    cd CalculatorNuGet
    npx react-native-windows-init --version latest --overwrite --experimentalNuGetDependency
    ```
5. Restore these original app files:
    ```
    git restore README.md
    git restore App.tsx
    ```
6. Verify the new app builds and runs:
    ```
    npx react-native run-windows
    ```
7. Look at windows/Calculator/Package.appxmanifast and change the publisher name to "CN=React Native Windows Sample".
8. Update this readme with the new major version at the top.
