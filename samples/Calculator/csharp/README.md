# Calculator C# Sample - React Native for Windows

See [../README.md](../README.md) for details of this sample.

See [../cppwinrt/](../cppwinrt/) for a C++/Winrt version of this sample.

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
    rd /s /q csharp
    ```
3. Create a new React Native app and change version to version you want to upgrade to (replace 'version' with desired version - for latest version, use 'latest'):
    ```cmd
    npx @react-native-community/cli@latest init Calculator --template @react-native-community/template@latest --skip-git-init
    ```
4. Add `yarn.lock` file to app directory (otherwise `yarn add react-native-windows@latest` will throw an error)

5. Add Windows support:
    ```cmd
    cd Calculator
    yarn add react-native-windows@latest
    npx @react-native-community/cli@latest init-windows --template old/uwp-cs-app --overwrite
    ```
6. Rename the folder to csharp
    ```
    cd ..
    ren Calculator csharp
    ```
7. Restore these original app files:
    ```
    cd csharp
    git restore README.md
    git restore App.tsx
    ```
8. Verify the new app builds and runs:
    ```
    npx @react-native-community/cli@latest run-windows
    ```
9. Look at the Package.appxmanifast and change the publisher name to "CN=React Native Windows Sample". Revert all changes made to GUID values in the project and solution files.
10. Update this readme with the new major version at the top.