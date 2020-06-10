---
id: config
title: React Native Config Schema
---

The CLI command [`npx react-native config`](https://github.com/react-native-community/cli/blob/master/docs/commands.md#config) outputs project and dependencies configuration in JSON format to stdout.

The following describes the schema for projects and dependencies provided by React Native for Windows + macOS.

> See the [React Native CLI Platforms doc](https://github.com/react-native-community/cli/blob/master/docs/platforms.md) for a description of the schemas for iOS and Android.

## Windows Platform

The schema fields are tagged with the following:

|  Tag   | Description |
|:-------|:------------|
| *auto* | Item is always calculated by config. An override file should NEVER provide it. |
| *req*  | Item is required. If an override file exists, it MUST provide it. If no override file exists, config will try to calculate it. |
| *opt*  | Item is optional. If an override file exists, it MAY provide it. If no override file exists, config may try to calculate it. |

### projectConfig

`react-native config` will generate the following JSON for app projects that have a windows implementation, as a target for auto-linking. This is done heurestically, so if the result isn't quite correct, app developers can provide a manual override file: `react-native.config.js`.

Schema for app projects:

```js
{
  folder: string,       // (auto) Absolute path to the app root folder, determined by react-native config, ex: 'c:\path\to\my-app'
  sourceDir: string,    // (req) Relative path to the windows implementation under folder, ex: 'windows'
  solutionFile: string, // (req) Relative path to the app's VS solution file under sourceDir, ex: 'MyApp.sln'
  project: { // (req)
    projectFile: string, // (req) Relative path to the VS project file under sourceDir, ex: 'MyApp\MyApp.vcxproj' for 'c:\path\to\my-app\windows\MyApp\MyApp.vcxproj'
    projectName: string, // (auto) Name of the project, determined from projectFile, ex: 'MyApp'
    projectLang: string, // (auto) Language of the project, cpp or cs, determined from projectFile
    projectGuid: string, // (auto) Project identifier, determined from projectFile
  },
}
```

Example `react-native.config.js` for a *MyApp*:

```js
module.exports = {
  project: {
    windows: {
      sourceDir: 'windows',
      solutionFile: 'MyApp.sln',
      project: {
        projectFile: 'MyApp\\MyApp.vcxproj',
      },
    },
  },
};
```

### dependencyConfig

`react-native config` will generate the following JSON for each native module dependency under node_modules that has a windows implementation, in order to support auto-linking. This is done heurestically, so if the result isn't quite correct, native module developers can provide a manual override file: `react-native.config.js`.

Schema for dependencies:

```js
{
  folder: string,       // (auto) Absolute path to the module root folder, determined by react-native config, ex: 'c:\path\to\app-name\node_modules\my-module'
  sourceDir: string,    // (opt, req if projects defined) Relative path to the windows implementation under folder, ex: 'windows'
  solutionFile: string, // (opt) Relative path to the module's VS solution file under sourceDir, ex: 'MyModule.sln'
  projects: [ // (opt) Array of VS projects that must be added to the consuming app's solution file, so they are built
    {
      projectFile: string,     // (req) Relative path to the VS project file under sourceDir, ex: 'MyModule\MyModule.vcxproj' for 'c:\path\to\app-name\node_modules\my-module\windows\MyModule\MyModule.vcxproj'
      directDependency: bool,  // (req) Whether to add the project file as a dependency to the consuming app's project file. true for projects that provide native modules
      projectName: string,     // (auto) Name of the project, determined from projectFile, ex: 'MyModule'
      projectLang: string,     // (auto) Language of the project, cpp or cs, determined from projectFile
      projectGuid: string,     // (auto) Project identifier, determined from projectFile
      cppHeaders: [],          // (opt) Array of cpp header include lines, ie: 'winrt/MyModule.h', to be transformed into '#include <winrt/MyModule.h>'
      cppPackageProviders: [], // (opt) Array of fully qualified cpp IReactPackageProviders, ie: 'MyModule::ReactPackageProvider'
      csNamespaces: [],        // (opt) Array of cs namespaces, ie: 'MyModule', to be transformed into 'using MyModule;'
      csPackageProviders: [],  // (opt) Array of fully qualified cs IReactPackageProviders, ie: 'MyModule.ReactPackageProvider'
    },
  ],
  nugetPackages: [ // (opt) Array of nuget packages including native modules that must be added as a dependency to the consuming app. It can be empty, but by its nature it can't be calculated
    {
      packageName: string,     // (req) Name of the nuget package to install
      packageVersion: string,  // (req) Version of the nuget package to install
      cppHeaders: [],          // (req) Array of cpp header include lines, ie: 'winrt/NugetModule.h', to be transformed into '#include <winrt/NugetModule.h>'
      cppPackageProviders: [], // (req) Array of fully qualified cpp IReactPackageProviders, ie: 'NugetModule::ReactPackageProvider'
      csNamespaces: [],        // (req) Array of cs namespaces, ie: 'NugetModule', to be transformed into 'using NugetModule;'
      csPackageProviders: [],  // (req) Array of fully qualified cs IReactPackageProviders, ie: 'NugetModule.ReactPackageProvider'
    },
  ],
}
```

Example `react-native.config.js` for a *MyModule*:

```js
module.exports = {
  dependency: {
    platforms: {
      windows: {
        sourceDir: 'windows',
        solutionFile: 'MyModule.sln',
        projects: [
          {
            projectFile: 'MyModule\\MyModule.vcxproj',
            directDependency: true,
          }
        ],
      },
    },
  },
};
```

## MacOS Platform

*TODO*
