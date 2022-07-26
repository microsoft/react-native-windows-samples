---
id: coreapp
title: CoreApp
---

> **EXPERIMENTAL**
These APIs are **experimental** and subject to change.

These APIs are declared in `CoreApp.h`.

## Functions
### `RNCoreAppStart`
`void` **`RNCoreAppStart`**([`RNCoreAppCallback`](#rncoreappcallback) launched, `void *` data)

This API starts a `CoreApp`, and upon launch, it will call your app back and pass some optional custom data to it as a parameter. The `launched` callback enables you to customize a variety of parameters, like your bundle name, app name, etc. See [CoreApp Schema](#coreapp-schema) below for more info. 

### `RNCoreAppStartFromConfigJson`
`void` **`RNCoreAppStartFromConfigJson`**(`wchar_t const *` configJson, 
      [`RNCoreAppCallback`](#rncoreappcallback) launched, 
      `void *` data)

This API is similar to [`RNCoreAppStart`](#rncoreappstart), one but it takes a path to a JSON configuration file. The callback is optional in this case, since more often than not, the configuration file will have all the necessary information.

The `launched` callback above gives you an output [`RNCoreApp`](#rncoreapp) structure, where you can set a number of parameters, as well as the `data` parameter that you passed in when you called the `CoreApp` API.

## Types
### `RNCoreApp`
```cpp
struct RNCoreApp {
  /// default value: L"index.windows"
  wchar_t const *jsBundleFile;
  /// default value: L"ms-appx:///Bundle/"
  wchar_t const *bundleRootPath;
  /// Provide the name of your React component here
  wchar_t const *componentName;

  /// default value: true
  bool useWebDebugger;
  /// default value: true
  bool useFastRefresh;
  /// default value: true
  bool useDeveloperSupport;
  /// default value: false
  bool useDirectDebugger;
  /// default value: true
  bool requestInlineSourceMap;

  /// default value: false
  bool enableDefaultCrashHandler;
  /// default value: 9229
  unsigned short debuggerPort;
  /// default value: 8081
  unsigned short sourceBundlePort;
  /// default value: L"localhost"
  wchar_t const *sourceBundleHost;

  /// default value: "chakra", possible values: "chakra", "hermes"
  wchar_t const *jsEngine;

  /// default value: nullptr
  wchar_t const *viewName;

  void *resourcesAbi;
  /// Provides the launch arguments back to the CoreApp callback
  wchar_t const *args;
  /// Allocate with CoTaskMemAlloc, will be freed by the framework
  void **packageProvidersAbi;
  unsigned char packageProvidersAbiCount;
  void *propertiesAbi;
};
``` 

The contents of the `RNCoreApp` structure can be set programmatically via the [`RNCoreAppCallback`](#rncoreappcallback) callback passed to [`RNCoreAppStart`](#rncoreappstart), or it can be controlled through a JSON configuration file passed to [`RNCoreAppStartFromConfigJson`](#rncoreappstartfromconfigjson).

### `RNCoreAppCallback`
`typedef void(__cdecl *`**`RNCoreAppCallback`**)([`RNCoreApp`](#rncoreapp) *, `void` *)`

This type represents a callback that takes a [`RNCoreApp`](#rncoreapp) and some application-defined data. The application-defined data is the value passed as the `data` parameter in the [`RNCoreAppStart`](#rncoreappstart) or [`RNCoreAppStartFromConfigJson`](#rncoreappstartfromconfigjson) functions.


## `CoreApp` schema

Below are the properties you can set in your `app.config.json`, with their default values.
These properties correspond to properties on the [`RNCoreApp`](#rncoreapp) structure, and these properties are applied to the instance's [`ReactInstanceSettings`](native-api/ReactInstanceSettings).

```json
{
  "jsBundleFile": "index.windows",
  "bundleRootPath": "ms-appx:///Bundle/",
  "componentName": null, // Required, this is your App's component name
  "useWebDebugger": true,
  "useFastRefresh": true,
  "useDeveloperSupport": true,
  "useDirectDebugger": false,
  "requestInlineSourceMap": true,
  "enableDefaultCrashHandler": false,
  "debuggerPort": 9229,
  "sourceBundlePort": 8081,
  "sourceBundleHost": "localhost",
  "jsEngine": "chakra", // possible values: "chakra", "hermes"
  "viewName": null, // adds an optional title to the window
  "nativeModules": [
    {
      // this corresponds to the DLL that hosts the native module,
      // or the name of the app's exe (or null) if the module is locally defined
      "moduleContainer": null,  

      // the name of the factory function to call to produce a ReactPackageProvider for
      // the module; see Using native modules below.
      "factory": null,
    }
  ],
  "properties": { 
    // these are all optional. They correspond to properties that will get set in the
    // ReactPropertyBag for the instance. Some examples:
    "someString": "string value",
    "someNumber": 42.5,
    "someBoolean": true,
    "namespace1.namespace2.foo": 22
  }
}
```

For building in Debug mode, your app will usually only need to set a few properties: `componentName`, and the native modules it uses.

## Using native modules
There are a couple of ways that a `CoreApp` can load native modules.

The simplest way is using the [`RNCoreAppStartFromConfigJson`](#rncoreappstartfromconfigjson) API. This API allows us to pass an optional DLL name to load and a plain C function to call in that DLL, to produce the [`IReactPackageProvider`](native-api/IReactPackageProvider) for the module.
Here's what this function would look like:
```cpp
extern "C" __declspec(dllexport) void *__cdecl MySpecialPackageProvider() {
  auto provider = winrt::make<MyModulePackageProvider>();
  void *abi{nullptr};
  winrt::copy_to_abi(provider, abi);
  return abi;
}
```

The snippet above will declare a plain C function (this is important so that C++ name mangling mechanism doesn't come into play, which is required to be able to use the function name in the JSON file), and export it from the DLL (or the application's EXE). It takes no parameters, and simply return a pointer to the package provider for the module.


If using [`RNCoreAppStart`](#rncoreappstart), you can create each the `ReactPackageProvider` for each native module you use, and pass it in the `packageProvidersAbi` and `packageProvidersAbiCount` members of the [`RNCoreApp`](#rncoreapp) structure:

```cpp
app->packageProvidersAbiCount = 1;
app->packageProvidersAbi =
    reinterpret_cast<void **>(CoTaskMemAlloc(sizeof(void *) * app->packageProvidersAbiCount));
app->packageProvidersAbi[0] = MySpecialPackageProvider();
```

where `MySpecialPackageProvider` is the same as above, only that the `extern "C" __declspec(dllexport)` part is not required since we don't care about the name, or exporting the function.