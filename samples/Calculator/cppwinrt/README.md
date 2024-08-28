# Calculator C++/WinRT Sample - React Native for Windows

See [../README.md](../README.md) for details of this sample.

See [../csharp/](../csharp/) for a C# version of this sample.

It currently targets React Native Windows 0.75.

### Setup
See [../README.md#Setup](../README.md#Setup).

### Run
See [../README.md#Run](../README.md#Run).

### Upgrade
To upgrade this sample to the latest version of RNW:

1. Open a command prompt and navigate to the `samples/Calculator` folder:
    ```cmd
    cd ..
    ```
2. Delete this folder:
    ```cmd
    rd /s /q cppwinrt
    ```
3. Create a new React Native app and change version to version you want to upgrade to:
    ```cmd
    npx @react-native-community/cli@latest init Calculator --template @react-native-community/template@latest
    ```
4. Add `yarn.lock` file to app directory (otherwise `yarn add react-native-windows@latest` will throw an error)

5. Add Windows support:
    ```cmd
    cd Calculator
    yarn add react-native-windows@latest
    npx @react-native-community/cli@latest init-windows --template old/uwp-cpp-app --overwrite
    ```
6. Rename the folder to cppwinrt
    ```
    cd ..
    ren Calculator cppwinrt
    ```
7. Restore these original app files:
    ```
    cd cppwinrt
    git restore README.md
    git restore App.tsx
    ```
8. Verify the new app builds and runs:
    ```
    npx @react-native-community/cli@latest run-windows
    ```
9. Look at windows/Calculators/Package.appxmanifast and change the publisher name to "CN=React Native Windows Sample".
10. Update this readme with the new major version at the top.
