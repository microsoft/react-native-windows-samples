# CalculatorExperimental - React Native for Windows

This sample showcases the usage of React Native for Windows to build a simple calculator that is hosted on the experimental [Fabric rendering system](https://github.com/microsoft/react-native-windows/issues/12042).

Currently this samples targets RNW 0.79

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
npx @react-native-community/cli@latest run-windows
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
    rd /s /q fabric
    ```
3. Create a new React Native app and change version to version you want to upgrade to:
    ```cmd
        npx --yes @react-native-community/cli@latest init CalculatorFabric --template @react-native-community/template@latest --skip-git-init
    ```
4. Add Windows support:
    ```cmd
    cd CalculatorFabric
    yarn add react-native-windows@latest
    npx @react-native-community/cli init-windows --template cpp-app --overwrite --logging
    ```
5. Rename the folder to fabric
    ```cmd
    cd ..
    ren CalculatorFabric fabric
    ```

6. Restore README.md and App.tsx
   ```cmd
   cd fabric
   git restore App.tsx
   git restore README.md
   ```
7. Verify App runs
   ```cmd
   npx @react-native-community/cli@latest run-windows
   ```
8. Look at the Package.appxmanifast and change the publisher name to "CN=React Native Windows Sample". Revert all changes made to GUID values in the project and solution files.
9. Update this file to the current version of the App