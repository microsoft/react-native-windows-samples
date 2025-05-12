---
id: autolink-windows-cli
title: react-native autolink-windows
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

This guide will give you more information on the `autolink-windows` command of the React Native Windows CLI.

## `autolink-windows`

The `autolink-windows` CLI command is used to link the native code and build systems for a React Native for Windows app with any native community modules it uses.

**Note:** Autolinking runs automatically as part of running the [run-windows command](run-windows-cli.md), unless the `--no-autolink` argument is used.

### Usage
Runs Windows-specific autolinking for your RNW project.
  
```bat
npx react-native autolink-windows
```
### Options

Here are the options that `react-native autolink-windows` takes:
| Option                | Input Type | Description                                      |
|-----------------------|------------|--------------------------------------------------|
| `--logging`           | boolean    | Verbose output logging                           |
| `--check`             | boolean    | Only check whether any autolinked files need to change |
| `--sln`               | string     | Override the app solution file determined by 'react-native config', i.e. `windows\myApp.sln` |
| `--proj`              | string     | Override the app project file determined by 'react-native config', i.e. `windows\myApp\myApp.vcxproj` |
| `--no-telemetry`      | boolean    | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |
| `-h`, `--help`        | boolean    | Display help for command                         |

This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See below for more details.

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft's privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

This data collection notice only applies to the process of running the react-native-windows CLI commands.
  