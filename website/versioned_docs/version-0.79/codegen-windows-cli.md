---
id: version-0.79-codegen-windows-cli
title: react-native codegen-windows
original_id: codegen-windows-cli
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

This guide will give you more information on the `codegen-windows` command of the React Native Windows CLI.

## `codegen-windows`

The `codegen-windows` CLI command is used to generate some necessary Windows-specific native code for native modules.

### Usage
Runs Windows-specific codegen for native modules.
  
```bat
npx react-native codegen-windows
```
### Options

Here are the options that `react-native codegen-windows` takes:
| Option                | Input Type | Description                                      |
|-----------------------|------------|--------------------------------------------------|
| `--logging`           | boolean    | Verbose output logging                           |
| `--check`             | boolean    | Only check whether any codegen files need to change |
| `--no-telemetry`      | boolean    | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |
| `-h`, `--help`        | boolean    | Display help for command                         |

## Codegen Config

The `react-native codegen-windows` command is configured by the `codegenConfig` object in the project's `package.json` file. This `codegenConfig` object is shared by all platforms, but the relevant parts for React Native for Windows is configured as follows:

| Field | Type| Description |
|:------|:---:|:------------|
| `type` | string | `"modules"` for Native Modules, `"components"` for Native Components, or `"all"` for both |
| `jsSrcDir` | string | Path to the TypeScript spec input files |
| `windows` | object | Windows-specific codegen configuration |

The `windows` object is configured as follows:

| Field | Type| Description |
|:------|:---:|:------------|
| `namespace` | string | The C++ namespace to contain the generated code |
| `cppStringType` | string | Optional, the string type to use in C++ code, either `"std::string"` or `std::wstring`. Defaults to `"std::string"` |
| `generators` | array | Optional, array of codegen generator strings, accepting `"modulesWindows"` for Native Modules, `"componentsWindows"` for Native Components. Defaults to `[ "modulesWindows" ]` |
| `outputDirectory` | string | Optional, path to place the generated code. Defaults to `./codegen/` of the working directory |
| `separateDataTypes` | boolean | Optional, specify whether to create separate files to define custom data types. Defaults to `false` |

> **Note:** For more information on how to configure the `codegenConfig` object for other platforms, see the [reactnative.dev Configuring Codegen](https://reactnative.dev/docs/the-new-architecture/using-codegen#configuring-codegen) page.

### Example Codegen Config

```json
"codegenConfig": {
    "name": "NativeModuleSampleSpec",
    "type": "all",
    "jsSrcsDir": "src",
    "includesGeneratedCode": true,
    "windows": {
      "namespace": "NativeModuleSampleCodegen",
      "generators": [
        "modulesWindows",
        "componentsWindows"
      ],
      "outputDirectory": "windows/NativeModuleSample/codegen",
      "separateDataTypes": true
    }
  },
```

## Telemetry Notice

This command sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See below for more details.

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft's privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

This data collection notice only applies to the process of running the react-native-windows CLI commands.
  