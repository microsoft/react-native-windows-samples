---
id: native-modules-vs-turbo-modules
title: Native Modules vs Turbo Modules
---

If you've worked with React Native, you may be familiar with the concept of Native Modules, which allow JavaScript and platform-native code to communicate over the React Native "bridge", which handles cross-platform serialization via JSON.

TurboModules are the next iteration of Native Modules that provide a few extra benefits, in particular these modules use JSI, a JavaScript interface for native code, which allows for more efficient communication between native and JavaScript code than the bridge.

### How to migrate to TurboModules

Modules running as TurboModules will be available in the JS from `TurboModuleRegistry.get('<modulename>')` instead of `NativeModules.<modulename>`.  So your JavaScript will have to be updated before switching.  Ideally while you are at it, you should switch your modules to use [Spec files](https://reactnative.dev/docs/the-new-architecture/pillars-turbomodules#2-javascript-specification). This will make your modules compatible with codegen.

>Note: `TurboModuleRegistry` will fallback to returning a native module instead of a turbo module if there is a native module registered from the native code. So you can update your JavaScript before updating your native code.

Starting in version 0.71, JS/TS spec files can codegen C++ spec files that can verify that the native implementation matches the definition in JS.  In addition modules can now be run as TurboModules instead of as a Native Module simply by using adding an additional parameter to your call to `AddAttributedModules`:

```cpp
AddAttributedModules(packageBuilder, true);
```

Alternatively if you are registering modules more manually by calling `IReactPackageBuilder.AddModule`, you can call `IReactPackageBuilder.AddTurboModule` instead.


### Web Debugging Behavior

TurboModules cannot run when using Remote Debugging / Web Debugging.  React-Native-Windows will attempt to run a TurboModule as a native module when running in that mode, but if the module is using JSI directly, that fallback may not work.

