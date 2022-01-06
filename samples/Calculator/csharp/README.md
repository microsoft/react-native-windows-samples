# Calculator C# Sample - React Native for Windows

See [../README.md](../README.md) for details of this sample.

See [../cppwinrt/](../cppwinrt/) for a C++/Winrt version of this sample.

It currently targets React Native Windows 0.66.

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
3. Create a new React Native app:
    ```cmd
    npx react-native init Calculator --template react-native-template-typescript@latest
    ```
4. Add Windows support:
    ```cmd
    cd Calculator
    npx react-native-windows-init --version latest --overwrite
    ```
5. Rename the folder to csharp
    ```
    cd ..
    ren Calculator csharp
    ```
6. Restore these original app files:
    ```
    cd csharp
    git restore README.md
    git restore App.tsx
    ```
7. Verify the new app builds and runs:
    ```
    npx react-native run-windows
    ```
8. Update this readme with the new major version at the top.
