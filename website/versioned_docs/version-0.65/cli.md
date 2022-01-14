---
id: version-0.65-cli
title: React Native Windows CLI
---

This guide will give you more information on the React Native Windows CLI.

## react-native-windows-init

react-native-windows-init is a CLI used to bootstrap the addition of the Windows platform to `react-native` projects.

### Usage
Run this from an existing `react-native` project, to install `react-native-windows` and generate intial project files for Windows.

```bat
npx react-native-windows-init --overwrite
```

### Options
Here are the options that `react-native-windows-init` takes:
| Option          | Input Type                                  | Description                                      |
|-----------------|---------------------------------------------|--------------------------------------------------|
| `--help`        | boolean                                     | Show help.                                       |
| `--version`     | string                                      | The version of react-native-windows to use.      |
| `--namespace`   | string                                      | The native project namespace.                    | 
| `--verbose`     | boolean                                     | Enables logging.                                 |
| `--language`    | string ["`cs`","`cpp`"] [default: "`cpp`"]  | Which language the app is written in.            |
| `--projectType` | string ["`app`","`lib`"] [default: "`app`"] | The type of project to initialize.               |
| `--overwrite`   | boolean                                     | Overwrite any existing files without prompting.  |
| `--useWinUI3`   | boolean                                     | Targets WinUI 3.0 (Preview) instead of UWP XAML. |
| `--useHermes`   | boolean                                     | Use Hermes instead of Chakra as the JS engine (supported on 0.64+ for C++ projects) |
| `--no-telemetry`| boolean                                     | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |

This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See the `react-native-windows-init` README for more details.

## @react-native-windows/cli

@react-native-windows/cli is a CLI used to build and run React Native for Windows apps. 

### Usage
Run this from an existing React Native for Windows app to build and deploy.
  
```bat
npx react-native run-windows
```
### Options
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
| `--remote-debugging`  | boolean    | Deploys the app in remote debugging mode.        |
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
| `--useWinUI3`         | boolean    | Targets WinUI3.0 (Preview) instead of UWP XAML.  |
| `--useHermes`         | boolean    | Use Hermes instead of Chakra as the JS engine (supported on 0.64+)   |
| `--no-telemetry`      | boolean    | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |
| `-h`, `--help`        | boolean    | output usage information                         |

This sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See the `@react-native-windows/cli` [README](https://github.com/microsoft/react-native-windows/edit/main/packages/@react-native-windows/cli/README.md) for more details.
  