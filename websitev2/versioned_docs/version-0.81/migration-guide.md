---
id: migration-guide
title: Migration Guide
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

### React Native Windows — Migration from Paper (Old Architecture) to Fabric (New Architecture) - Sample Calculator App 


### Introduction 

React Native 0.80 introduced Fabric as the default renderer and completed the transition to the New Architecture (Fabric + TurboModules). For React Native Windows (RNW), this migration replaces the legacy Paper architecture with a modern rendering pipeline that improves performance and memory usage. 

> **Note:** Starting with RNW v0.80, Fabric became the default renderer. This migration guide applies to migrating from Paper to Fabric for RNW versions supporting Fabric (starting RNW v0.74), including the current version 0.81.

### Key Concepts 


- Paper (Old Architecture): Legacy renderer that uses UIManager and bridge-based communication between JS and native. 

- Fabric (New Architecture): Modern concurrent renderer built on React Fiber and JSI. 

- TurboModules: New native module system that replaces the old bridge-based modules with JSI bindings. 

- RNW cpp-app Template: Default Windows template for new-architecture (Fabric) apps using C++/WinAppSDK. 

- RNW old-uwp/cpp-app Template: Legacy UWP template used for Paper-based (old architecture) apps. 


### Prerequisites 

- Node.js ≥ 22.x 
 - React Native CLI ≥ 20.x 
 - Visual Studio 2022 (v17.10 or later) 
 - Windows SDK ≥ 10.0.22621.0 
 - Existing RNW app running on RN < 0.81

Run yarn install after every update of package.json file 

### RNW App Migration 

About the App: 

For the purposes of this migration guide, we will use the sample Calculator app from the [React-native-windows-samples repository](https://github.com/microsoft/react-native-windows-samples). This Calculator app demonstrates a straightforward React Native for Windows project implemented in C++/WinRT, making it well-suited for illustrating the steps required to move from the legacy Paper architecture to the modern Fabric architecture. The app covers basic UI, native modules, and integration patterns typical in RNW projects, providing a practical reference as you follow each migration step. 

You can view the Calculator app's source code at [react-native-windows-samples/samples/Calculator/cppwinrt](https://github.com/microsoft/react-native-windows-samples/tree/9e5d850e843acc2ff060fbd64673511cc67265f9/samples/Calculator/cppwinrt) and examine the full migration changes in the pull request diff [migrate calculator by anupriya13 · PR #1092](https://github.com/microsoft/react-native-windows-samples/pull/1092/files#diff-12ccc26d0186ecea507053fb04c1d4eac13aea210e5e1e95332e9add88940971). This real-world example enables you to compare the project structure and dependencies before and after the migration, making it easier to understand and replicate the process in your own RNW apps. 

  

Repo: [react-native-windows-samples/samples/Calculator/cppwinrt at main · microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/tree/main/samples/Calculator/cppwinrt) 

Sample Diff: [migrate calculator by anupriya13 · Pull Request #1092 · microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/pull/1092/files#diff-12ccc26d0186ecea507053fb04c1d4eac13aea210e5e1e95332e9add88940971) 

Before you migrate confirm few things on your Paper project re-confirm that your project is using Paper architecture by checking the package.json init-window section 


### Steps Followed to Migrate to New Architecture (Fabric) 
- Upgrade Dependencies: Update package.json to use React Native 0.81 and run:
  ```bash
  npm install
  ```
  or
  ```bash
  yarn install
  ```
  (Reference - [react-native-windows-samples/samples/Calculator/cppwinrt/package.json at 9e5d850e843acc2ff060fbd64673511cc67265f9 · microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/blob/9e5d850e843acc2ff060fbd64673511cc67265f9/samples/Calculator/cppwinrt/package.json))  

- Delete the Existing Windows Directory:
  ```bash
  rm -rf windows
  ```

- Update Template in package.json: Set `"template": "cpp-app"` to use the new architecture template. 

- Run:
  ```bash
  yarn install
  ```

- Reinitialize the Windows Project:
  ```bash
  npx react-native init-windows --template cpp-app
  ```

- Run the Application:
  ```bash
  npx @react-native-community/cli run-windows
  ``` 


You will see new files created / updated inside windows directory 

No JS/TSX changes needed in src as Calculator uses basic components. 

                                                      
Commit Paper to Fabric: [migrate calculator by anupriya13 · Pull Request #1092 · microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/pull/1092/commits/773c0ddec708083ab3fbd93dca08acfe0aa408aa) 

### Reverting to Old Architecture (Paper) 

In case you encounter issues migrating to Fabric or due to unsupported controls or properties in Fabric please refer to below steps to revert back to Paper architecture. If you encounter missing properties, please open an issue: https://github.com/microsoft/react-native-windows/issues 

- Delete the Windows Directory:
  ```bash
  rm -rf windows
  ```

- Update Template in package.json: Set `"template": "old/uwp-cpp-app"`. (Reference -[react-native-windows-samples/samples/Calculator/fabric/package.json at 9e5d850e843acc2ff060fbd64673511cc67265f9 · microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/blob/9e5d850e843acc2ff060fbd64673511cc67265f9/samples/Calculator/fabric/package.json)) 

- Run:
  ```bash
  yarn
  ```

- Reinitialize the Old Architecture Project:
  ```bash
  npx react-native init-windows --template old/uwp-cpp-app
  ```

- Run the App:
  ```bash
  npx @react-native-community/cli run-windows
  ``` 



Commit Fabric to Paper for reference: [migrate calculator by anupriya13 · Pull Request #1092 · microsoft/react-native-windows-samples](https://github.com/microsoft/react-native-windows-samples/pull/1092/commits/450baba033b9c1f0e9b9e882bee91954f03767a1) 

### Third-Party Modules and Community Libraries [Out of Scope for Calculator] 

When migrating to the New Architecture (Fabric), it's important to verify that all third-party or community modules used in your project are compatible with the new architecture. Modules developed for the old Paper bridge may not function correctly without Fabric support. 

Before using any external module: 

 Check the module's documentation or GitHub repository for Fabric or TurboModule support. 

Prefer modules that explicitly state compatibility with React Native 0.81 or higher (or 0.80+ for Fabric compatibility). 

If the module is not updated, consider alternative libraries or maintain your own fork until Fabric support is added. 

### Flyout / Popup Behavior Update [Out of Scope for Calculator] 

In the New Architecture RNW, the Flyout and Popup components have been updated to align with the Modal API for better cross-platform consistency. Any previous usage of Flyout or Popup should be reviewed and replaced with the new Modal-based implementation, ensuring proper layering, dismissal, and accessibility behavior. 

### Conclusion 

Migrating from Paper to Fabric in React Native Windows modernizes your project, improves performance, and prepares your app for future React Native releases. Reverting to the old architecture is simple if required.
