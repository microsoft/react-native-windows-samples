# AppServiceDemo - React Native for Windows

This sample showcases the usage of React Native for Windows to interact with the Win32 ecosystem using App Services. This sample is documented [in the following article](https://microsoft.github.io/react-native-windows/blog/2021/08/05/win32component).

It currently targets React Native Windows 0.67.

## Setup

First, make sure you've met the [React Native Windows System Requirements](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies).	

Then, within this folder, install the application's dependencies. If you have `yarn` installed:

```cmd
yarn install
```

Otherwise, you can just use npm:

```cmd
npm install
```

## Run

Since this scenario is using a special configuration, you can't build and run the project using the CLI, but you have to take the following steps:

1. Open with Visual Studio the solution included in the `windows` folder.
2. Right click on the `appservicedemo.Package` project and choose **Set as startup project**.
3. From the Configuration Manager dropdown, make sure you're building for the right CPU architecture (x86 or x64).
4. Right click on the `appservicedemo.Package` project and choose `Deploy`.
5. Open a terminal on the folder which contains the project and run the following command:

    ```cmd
    yarn start
    ```

6. Open the Start menu and launch the `appservicedemo.Package` application.
