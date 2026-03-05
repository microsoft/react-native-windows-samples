---
id: version-0.82-init-windows-cli
title: react-native init-windows
original_id: init-windows-cli
---

This guide will give you more information on the `init-windows` command of the React Native Windows CLI.

## `init-windows`

The `init-windows` CLI command is used to (re-)initialize a new React Native for Windows project inside an existing React Native project. 

### Usage
Initializes a new React Native for Windows project from a given template.
  
```bat
npx react-native init-windows
```

### Options

Here are the options that `react-native init-windows` takes:

| Option                | Input Type | Description                                      |
|-----------------------|------------|--------------------------------------------------|
| `--logging`           | boolean    | Verbose output logging                           |
| `--template`          | string     | Specify the template to use (default: `cpp-app`) |
| `--name`              | string     | The native project name. Defaults to the name property in `app.json` or `package.json` |
| `--namespace`         | string     | The native project namespace, expressed using dots as separators, i.e. `Level1.Level2.Level3`. Defaults to the same as name |
| `--overwrite`         | boolean    | Overwrite any existing files without prompting  |
| `--no-telemetry`      | boolean    | Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI |
| `--list`              |            | Shows a list with all available templates with their descriptions. |
| `-h`, `--help`        | boolean    | Display help for command                         |

### Default Options and Re-initializing Projects

After running, the `init-windows` command will save the `name`, `namespace` and `template` configuration in the project's `package.json`:

```json
"react-native-windows": {
    "init-windows": {
      "name": "MyApp",
      "namespace": "MyApp",
      "template": "cpp-app"
    }
  }
```

If you later repeat the `init-windows` command to re-initialize a Windows project, without specifying any of those options, the command will default to any saved values. Among other things, this means you can safely re-run `init-windows` without it automatically changing your project to a different template (i.e. if your project is an Old Architecture app, `init-windows` won't force you to migrate to the New Architecture).

If you *want* to change the value (say, you *do* want to migrate to a new template) just explicitly (re-)specify the option when running `init-windows`.

## Templates

The following templates are available to `init-windows` and can by manually specified with the `--template` option (i.e. `--template cpp-lib`):

| Template | Name | Description |
|:-:|:--|:--|
| `cpp-app` | React Native Windows Application (WinAppSDK, C++) | `[Default]` A RNW app built in C++ and targeting WinAppSDK |
| `cpp-lib` | React Native Windows Library (C++) | A RNW (Turbo) Native Module built in C++ |

## Telemetry Notice

This command sends telemetry to Microsoft by default. You can prevent the telemetry from being sent by using the `--no-telemetry` command line option. See below for more details.

The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described in the repository. There are also some features in the software that may enable you and Microsoft to collect data from users of your applications. If you use these features, you must comply with applicable law, including providing appropriate notices to users of your applications together with a copy of Microsoft's privacy statement. Our privacy statement is located at https://go.microsoft.com/fwlink/?LinkID=824704. You can learn more about data collection and use in the help documentation and our privacy statement. Your use of the software operates as your consent to these practices.

This data collection notice only applies to the process of running the react-native-windows CLI commands.
  