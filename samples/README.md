# Samples

<div align="center">

| Sample | Description |
|:-------|:------------|
| [AppServiceDemo](./AppServiceDemo) | A sample RNW app which interacts with the Win32 ecosystem using App Services. |
| [Calculator](./Calculator) | A sample RNW app implementing a simple calculator. |
| [CalculatorNuGet](./CalculatorNuGet) | The Calculator sample, but consuming RNW through the NuGet packages. |
| [ContinuousIntegration](./ContinuousIntegration) | Sample CI pipeline configurations for RNW projects. |
| [NativeModuleSample](./NativeModuleSample) | A sample RNW native module with both C++ and C# implementations. |
| [RssReader](./rssreader) | A sample RNW and RNM app implementing a RSS reader. |

</div>

## Upgrade Procedure

When new major versions of RNW are released (out of preview), the sample apps in this folder need to be upgraded. The rough procedure is to:

1. Delete the existing sample app folder.
2. Run the React Native CLI to create a new sample app with the same name.
3. Run the React Native Windows CLI to add Windows support.
4. Restore the original app code to override the "new project" app code.
5. Verify that the app still builds and runs.

For specific steps check each sample's readme.
