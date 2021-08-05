# Samples

## CI Status

<div align="center">

| Sample | CI | CI (Upgrade) |
|:------:|:--:|:------------:|
| [Calculator](samples/Calculator) | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22Calculator+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/Calculator%20CI/badge.svg" alt="Calculator CI Status" /></a> | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22Calculator+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/Calculator%20CI%20(Upgrade)/badge.svg" alt="Calculator CI (Upgrade) Status" /></a> |
| [CalculatorNuGet](samples/CalculatorNuGet) | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorNuGet+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorNuGet%20CI/badge.svg" alt="CalculatorNuGet CI Status" /></a> | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CalculatorNuGet+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/CalculatorNuGet%20CI%20(Upgrade)/badge.svg" alt="CalculatorNuGet CI (Upgrade) Status" /></a> |
| [CameraDemo](samples/CameraDemo) | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CameraDemo+CI%22"> <img src="https://github.com/microsoft/react-native-windows-samples/workflows/CameraDemo%20CI/badge.svg" alt="CameraDemo CI Status" /></a> | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22CameraDemo+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/CameraDemo%20CI%20(Upgrade)/badge.svg" alt="CameraDemo CI (Upgrade) Status" /></a> |
| [ContinuousIntegration](samples/ContinuousIntegration) | N/A | N/A |
| [NativeModuleSample](samples/NativeModuleSample) | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22NativeModuleSample+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/NativeModuleSample%20CI/badge.svg" alt="NativeModuleSample CI Status" /></a> | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22NativeModuleSample+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/NativeModuleSample%20CI%20(Upgrade)/badge.svg" alt="NativeModuleSample CI (Upgrade) Status" /></a> |
| [RssReader](samples/rssreader) | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22RssReader+CI%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/RssReader%20CI/badge.svg" alt="RssReader CI Status" /></a> | <a href="https://github.com/microsoft/react-native-windows-samples/actions?query=workflow%3A%22RssReader+CI+%28Upgrade%29%22"><img src="https://github.com/microsoft/react-native-windows-samples/workflows/RssReader%20CI%20(Upgrade)/badge.svg" alt="RssReader CI (Upgrade) Status" /></a> |
| [TestProject](samples/TestProject) | N/A | N/A |
| [TodosFeed](samples/TodosFeed) | N/A | N/A |

</div>

## Upgrade Procedure

When new major versions of RNW are released (out of preview), the sample apps in this folder need to be upgraded. The rough procedure is to:

1. Delete the existing sample app folder.
2. Run the React Native CLI to create a new sample app with the same name.
3. Run the React Native Windows CLI to add Windows support.
4. Restore the original app code to override the "new project" app code.
5. Verify that the app still builds and runs.

For specific steps check each sample's readme.
