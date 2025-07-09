# Native Module C++ Sample - React Native for Windows

See [../README.md](../README.md) for more details of this sample.

>**Note: Don't build your own projects directly out of this sample. When you publish a native module (as source), you'll want to create a new project with the correct metadata. This will also make sure that you're using unique identifiers in your project files to avoid conflicts with other native modules.**

### Setup

First, make sure you've met the [React Native Windows System Requirements](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies).

Then, install the module's dependencies with yarn and build the TypeScript:

```cmd
yarn install
yarn prepare
```

### Run

To run the example app (targeting the New Architecture) and see that the module works:

```cmd
yarn example windows
```

Alternatively, to run the old example app (targeting the Old Architecture) and see that the module works:

```
yarn example-old windows
```

### Upgrade

First run the **Setup** steps above. Then run the `UpgradeSmokeTest.ps1` script with the target RNW version (usually `latest`):

```ps1
..\..\..\.github\scripts\UpgradeSmokeTest.ps1 latest $True $True $True
```

Then call the following to update the JS and codegen with:

```cmd
yarn prepare
yarn codegen-windows
```

Finally, build and verify *both* example apps as per the **Run** steps above. If both apps work without issue, then go ahead and submit the PR with your changes.
