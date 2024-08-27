# CalculatorExperimental - React Native for Windows

This sample showcases the usage of React Native for Windows to build a simple calculator that is hosted on the experimental [Fabric rendering system](https://github.com/microsoft/react-native-windows/issues/12042).

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
    rd /s /q CalculatorExperimental
    ```
3. Create a new React Native app and change version to version you want to upgrade to:
    ```cmd
    npx --yes @react-native-community/cli@latest init CalculatorExperimental --template @react-native-community/template@latest --skipGitInit
    ```
4. Add Windows support:
    ```cmd
    cd Calculator
    yarn add react-native-windows@latest
    npx @react-native-community/cli init-windows --template cpp-app --overwrite --logging
    ```
5. Restore README.md and App.tsx
   ```cmd
   git restore App.tsx
   git restore README.md
   ```
6. Verify App runs
   ```cmd
   npx @react-native-community/cli@latest run-windows
   ```