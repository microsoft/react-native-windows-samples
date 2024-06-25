---
id: codegen-windows-cli
title: React Native Windows CLI (codegen-windows)
---

This guide will give you more information on the `codegen-windows` command of the React Native Windows CLI.

## `codegen-windows`

`codegen-windows` is the CLI command provided by `@react-native-windows/cli` which is used to generate some necessary Windows-specific native code for native modules.

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
| `-h`, `--help`        | boolean    | display help for command                         |

This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See the below for more details.

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft's privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

This data collection notice only applies to the process of running the react-native-windows CLI (codegen-windows and related tools).
  