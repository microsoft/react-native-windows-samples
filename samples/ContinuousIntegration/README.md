# ContinuousIntegration - React Native for Windows

Whether you're building a new React Native Windows project or adding Windows support to an existing React Native project, at some point you may want to set up continuous integration. This would ensure that your project and native module continue to work despite updates to either
- the app or module itself,
- an underlying dependency (e.g. react-native, react-native-windows), 
- the tool chain (different Visual Studio versions, compiler)

This folder includes some sample continuous integration scripts.

## GitHub Actions ##

These yaml files are [GitHub Actions](https://github.com/features/actions) workflows for building React Native for Windows projects. They're organized by version of React Native for Windows.

To install, simply copy the workflows that meet your needs to into the `.github/workflows` folder in your repo. They're meant as starting points - all of them can be fully modified to meet your specific needs.

For more information, see the [GitHub Actions Documentation](https://docs.github.com/en/actions).
