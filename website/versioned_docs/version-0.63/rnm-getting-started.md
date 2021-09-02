---
id: version-0.63-rnm-getting-started
title: Get Started with macOS
original_id: rnm-getting-started
---

This guide will help you get started on setting up your very first React Native for macOS app.

For information around how to set up:
- React Native for iOS and Android: See [React Native Getting Started Guide](https://reactnative.dev/docs/getting-started)
- React Native for Windows: See [React Native for Windows Getting Started Guide](https://microsoft.github.io/react-native-windows/docs/getting-started)

Make sure you have installed all the [development dependencies](https://microsoft.github.io/react-native-windows/docs/rnm-dependencies)

## Install React Native for macOS

Remember to call `react-native init` from the place you want your project directory to live.

```
npx react-native init <projectName> --template react-native@^0.63.0
```

### Navigate into this newly created directory

Once your project has been initialized, React Native will have created a new sub directory where all your generated files live.

```
cd <projectName>
```

### Install the macOS extension

Install the React Native for macOS packages.

```
npx react-native-macos-init
```

## Running a React Native macOS App

- **Without using Xcode**:
  In your React Native macOS project directory, run:

  ```
  npx react-native run-macos
  ```

- **Using Xcode**:
  Open macos\test.xcworkspace in Xcode or run `xed -b macos`; `yarn start:macos`. Hit the Run button.

A new Command Prompt window will open with the React packager as well as a `react-native-macos` app. This step may take a while during first run since it involves building the entire project and all dependencies. You can now start developing! 🎉

### `ProjectName` has not been registered
There is an existing bug where the casing of the project name affects it's ability to register properly. If you see this error, you can workaround it by navigating to your `app.json` and lowercasing the `name` field.