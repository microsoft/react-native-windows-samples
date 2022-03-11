# Samples

<div align="center">

| Sample | Description | CI Status |
|:-------|:------------|:---|
| [AppServiceDemo](./AppServiceDemo) | A sample RNW app which interacts with the Win32 ecosystem using App Services. | N/A |
| [Calculator](./Calculator) | A sample RNW app implementing a simple calculator. | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22Calculator+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/Calculator%20CI/badge.svg" alt="Calculator CI Status" /></a><br /><a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22Calculator+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/Calculator%20CI%20(Upgrade)/badge.svg" alt="Calculator CI (Upgrade) Status" /></a> |
| [CalculatorNuGet](./CalculatorNuGet) | The Calculator sample, but consuming RNW through the NuGet packages. | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorNuGet+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorNuGet%20CI/badge.svg" alt="CalculatorNuGet CI Status" /></a><br /><a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorNuGet+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorNuGet%20CI%20(Upgrade)/badge.svg" alt="CalculatorNuGet CI (Upgrade) Status" /></a> |
| [ContinuousIntegration](./ContinuousIntegration) | Sample CI pipeline configurations for RNW projects. | N/A |
| [NativeModuleSample](./NativeModuleSample) | A sample RNW native module with both C++ and C# implementations. | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22NativeModuleSample+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/NativeModuleSample%20CI/badge.svg" alt="NativeModuleSample CI Status" /></a><br /><a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22NativeModuleSample+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/NativeModuleSample%20CI%20(Upgrade)/badge.svg" alt="NativeModuleSample CI (Upgrade) Status" /></a> |
| [RssReader](./rssreader) | A sample RNW and RNM app implementing a RSS reader. | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22RssReader+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/RssReader%20CI/badge.svg" alt="RssReader CI Status" /></a><br /><a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22RssReader+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/RssReader%20CI%20(Upgrade)/badge.svg" alt="RssReader CI (Upgrade) Status" /></a> |
| [TodosFeed](./TodosFeed) | Samples showcasing three ways of using RNW: as a standalone UWP app, as a component within an existing UWP app, and as a component within an existing WPF app using XAML Islands. | N/A |

</div>

## Upgrade Procedure

When new major versions of RNW are released (out of preview), the sample apps in this folder need to be upgraded. The rough procedure is to:

1. Delete the existing sample app folder.
2. Run the React Native CLI to create a new sample app with the same name.
3. Run the React Native Windows CLI to add Windows support.
4. Restore the original app code to override the "new project" app code.
5. Verify that the app still builds and runs.

For specific steps check each sample's readme.
