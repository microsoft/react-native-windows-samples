# Calculator C++/WinRT Sample - React Native for Windows

See [../README.md](../README.md) for details of this sample.

See [../csharp/](../csharp/) for a C# version of this sample.

It currently targets React Native Windows 0.76.

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
3. Create a new React Native app and change version to version you want to upgrade to (replace 'version' with desired version - for latest version, use 'latest'):
    ```cmd
    npx @react-native-community/cli@latest init Calculator --template @react-native-community/template@latest --skip-git-init
    ```

4. Add a lockfile to the calculator directory:
    ```
    cd Calculator
    yarn install
    ```

5. Add Windows support:
    ```cmd
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
9. Look at the Package.appxmanifast and change the publisher name to "CN=React Native Windows Sample". Revert all changes made to GUID values in the project and solution files.
10. Update this readme with the new major version at the top.
