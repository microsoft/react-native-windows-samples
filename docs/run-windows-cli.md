---
id: run-windows-cli
title: React Native Windows CLI
---

This guide will give you more information on the React Native Windows CLI.

## `@react-native-windows/cli`

`@react-native-windows/cli` is a CLI used to build and run React Native for Windows apps. 

### Usage
Run this from an existing React Native for Windows app to build and deploy.
  
```bat
npx react-native run-windows
```
### Options

> **Note:** Remote Debugging was officially marked as deprecated in RN 0.73 and will be removed in a later release.

Here are the options that `react-native run-windows` takes:
| Option                | Input Type | Description                                      |
|-----------------------|------------|--------------------------------------------------|
| `--release`           | boolean    | Specifies a Release build                        |
| `--root`              | string     | Override the root directory for the windows build which contains the windows folder. (default: `E:\\test63`) |
| `--arch`              | string     | The build architecture (`ARM64`, `x86`, `x64`). defaults to system architecture |
| `--singleproc`        | boolean    | Disables multi-proc build                        |
| `--emulator`          | boolean    | Deploys the app to an emulator                   |
| `--device`            | boolean    | Deploys the app to a connected device            |
| `--target`            | string     | Deploys the app to the specified `GUID` for a device |
| `--remote-debugging`  | boolean    | **(Deprecated)** Deploys the app in remote debugging mode.        |
| `--logging`           | boolean    | Enables logging                                  |
| `--no-packager`       | boolean    | Do not launch packager while building            |
| `--bundle`            | boolean    | Enable Bundle configuration and it would be `ReleaseBundle`/`DebugBundle` other than `Release`/`Debug` |
| `--no-launch`         | boolean    | Do not launch the app after deployment           |
| `--no-autolink`       | boolean    | Do not run autolinking                           |
| `--no-build`          | boolean    | Do not build the solution                        |
| `--no-deploy`         | boolean    | Do not deploy the app                            |
| `--deploy-from-layout`| boolean    | Force deploy from layout, even in release builds |
| `--sln`               | string     | Override the app solution file determined by 'react-native config', e.g. `windows\myApp.sln` |
| `--proj`              | string     | Override the app project file determined by 'react-native config', e.g. `windows\myApp\myApp.vcxproj` |
| `--msbuildprops`      | string     | Comma separated props to pass to MSBuild, e.g. `prop1=value1,prop2=value2` |
| `--buildLogDirectory` | string     | Optional directory where MSBuild log files should be stored |
| `--info`              | boolean    | Dump environment information                     |
| `--direct-debugging`  | number     | Enable direct debugging on specified port        |
| `--useWinUI3`         | boolean    | Targets `WinUI` 3.0 (Preview) instead of UWP XAML.  |
| `--useHermes`         | boolean    | Use Hermes instead of Chakra as the JS engine (supported on 0.64+)   |
| `--no-telemetry`      | boolean    | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |
| `-h`, `--help`        | boolean    | output usage information                         |

This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See the below for more details.

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft's privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

This data collection notice only applies to the process of running the react-native-windows CLI (run-windows and related tools like autolinking).
  