const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

class InitCli extends React.Component {
    render () {
       return (
           <MarkdownBlock>
# React Native Windows Init CLI
This guide will give you more information on the React Native Windows CLI.

## `react-native-windows-init`

`react-native-windows-init` is a CLI used to bootstrap the addition of the Windows platform to `react-native` projects.

### Usage
Run this from an existing `react-native` project, to install `react-native-windows` and generate initial project files for Windows.

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

           </MarkdownBlock>
       ); 
    }
}
module.exports = InitCli;
