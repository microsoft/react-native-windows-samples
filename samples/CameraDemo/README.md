# CameraDemo - React Native for Windows

<p align="center">
  <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CameraDemo+CI%22">
    <img src="https://github.com/microsoft/react-native-windows-samples/workflows/CameraDemo%20CI/badge.svg" alt="CameraDemo CI Status" />
  </a>
  <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CameraDemo+CI+%28Upgrade%29%22">
    <img src="https://github.com/microsoft/react-native-windows-samples/workflows/CameraDemo%20CI%20(Upgrade)/badge.svg" alt="CameraDemo CI (Upgrade) Status" />
  </a>
</p>

This sample showcases the usage of React Native for Windows to build an app which consumes an external community module, in this case, [react-native-camera](https://github.com/react-native-community/react-native-camera).

It currently targets React Native Windows 0.67.

### Setup
First, make sure you've met the [React Native Windows System Requirements](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies).

You'll also need a camera device connected to your machine.

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
    rd /s /q CameraDemo
    ```
3. Create a new React Native app:
    ```cmd
    npx react-native init CameraDemo --version latest
    ```
4. Add `react-native-camera` package:
    ```cmd
    cd CameraDemo
    yarn add react-native-camera
    ```
5. Add Windows support:
    ```cmd
    npx react-native-windows-init --version latest --overwrite
    ```
6. Restore these original app files:
    ```
    git restore README.md
    git restore App.js
    ```
7. Restore these lines in `windows\CameraDemo\Package.appxmanifest`:
    ```diff
    <Capabilities>
      <Capability Name="internetClient" />
    +  <uap:Capability Name="videosLibrary"/>
    +  <uap:Capability Name="picturesLibrary"/>
    +  <DeviceCapability Name="webcam"/>
    +  <DeviceCapability Name="microphone"/>
    </Capabilities>
    ```
8. Verify the new app builds and runs:
    ```
    npx react-native run-windows
    ```
9. Look at windows/CameraDemo/Package.appxmanifast and change the publisher name to "CN=React Native Windows Sample".
10. Update this readme with the new major version at the top.
