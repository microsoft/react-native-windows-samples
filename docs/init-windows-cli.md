---
id: init-windows-cli
title: react-native init-windows
---

This guide will give you more information on the `init-windows` command of the React Native Windows CLI.

## `init-windows`

The `init-windows` CLI command is used to initialize a new React Native for Windows project inside an existing React Native project. 

### Usage
Initializes a new RNW project from a given template.
  
```bat
npx react-native init-windows
```
### Options

Here are the options that `react-native init-windows` takes:
| Option                | Input Type | Description                                      |
|-----------------------|------------|--------------------------------------------------|
| `--logging`           | boolean    | Verbose output logging                           |
| `--template`          | string     | Specify the template to use                      |
| `--name`              | string     | The native project name. Defaults to the name property in `app.json` or `package.json` |
| `--namespace`         | string     | The native project namespace, expressed using dots as separators, i.e. `Level1.Level2.Level3`. Defaults to the same as name |
| `--overwrite`         | boolean    | Overwrite any existing files without prompting  |
| `--no-telemetry`      | boolean    | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |
| `-h`, `--help`        | boolean    | Display help for command                         |

### Templates

The following templates are available for use with `init-windows` by replacing `--template XYZ`, where `XYZ` can be:

| Template | Name |
|:-:|:--|
| `cpp-app` | React Native Windows Application (New Arch, C++, Win32, Hermes) |
| `cpp-lib` | React Native Windows Turbo Module (New Arch, C++) |
| `old/uwp-cpp-app` | React Native Windows Application (Old Arch, UWP, C++) |
| `old/uwp-cpp-lib` | React Native Windows Library (Old Arch, UWP, C++) |
| `old/uwp-cs-app` | React Native Windows Application (Old Arch, UWP, C#)  |
| `old/uwp-cs-lib` | React Native Windows Library (Old Arch, UWP, C#)  |

This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See below for more details.

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft's privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

This data collection notice only applies to the process of running the react-native-windows CLI commands.
  