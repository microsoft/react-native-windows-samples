# Copilot Instructions for React Native Windows Samples

## Repository Overview

This repository contains React Native samples, components, and templates for Windows, macOS, and Duo. It serves as a companion to the main [React Native for Windows](https://github.com/microsoft/react-native-windows) and [React Native for macOS](https://github.com/microsoft/react-native-macos) repositories.

## Repository Structure

```
├── samples/                    # Current React Native Windows samples
│   ├── Calculator/            # Calculator sample with C++/WinRT, C#, and Fabric implementations
│   ├── NativeModuleSample/    # Native module and component examples
│   └── ContinuousIntegration/ # CI/CD pipeline configurations
├── samples-old/               # Legacy samples for older RN versions
├── website/                   # Documentation website (Docusaurus)
├── docs/                      # Additional documentation
└── .github/                   # GitHub workflows and templates
```

## Technology Stack

- **React Native for Windows (RNW)**: Target version 0.79+
- **Languages**: TypeScript/JavaScript, C++/WinRT, C#
- **Build Tools**: MSBuild, npm/yarn, React Native CLI
- **Platforms**: Windows (x86, x64, ARM64), macOS, Android Emulator (Duo)
- **Testing**: Jest, React Native testing tools
- **CI/CD**: GitHub Actions with cross-platform builds

## Development Environment

### Prerequisites
- Follow [React Native Windows System Requirements](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies)
- Node.js and npm/yarn
- Visual Studio with C++ and Windows development workloads
- Windows SDK
- React Native CLI: `@react-native-community/cli`

### Common Commands

**Setup a sample:**
```bash
cd samples/[SampleName]/[Implementation]
npm install  # or yarn install
```

**Build and run:**
```bash
npx @react-native-community/cli@latest run-windows
```

**For native modules:**
```bash
npx @react-native-community/cli@latest run-windows --no-autolink --no-deploy
```

## Sample Projects

### Calculator
- **Location**: `samples/Calculator/`
- **Implementations**: 
  - `cppwinrt/` - C++/WinRT implementation
  - `csharp/` - C# implementation  
  - `fabric/` - New Architecture (Fabric) implementation
- **Purpose**: Demonstrates basic RNW app structure and platform-specific implementations

### NativeModuleSample
- **Location**: `samples/NativeModuleSample/`
- **Purpose**: Shows how to create native modules and components
- **Key Features**: C++ native module examples, platform-specific APIs

### ContinuousIntegration
- **Location**: `samples/ContinuousIntegration/`
- **Purpose**: Provides CI/CD pipeline templates for different RNW versions
- **Includes**: GitHub Actions workflows, Azure DevOps pipelines

## Build System

### GitHub Actions Workflows
- **CI (ci.yml)**: Builds all samples across platforms weekly
- **CI Upgrade (ci-upgrade.yml)**: Tests sample upgrades
- **PR (pr.yml)**: Validates pull request changes
- **Website Publish**: Deploys documentation website

### Build Matrix
- **Configurations**: Debug, Release
- **Platforms**: x86, x64, ARM64
- **Sample Types**: Apps, Native Modules

## Code Patterns and Conventions

### File Structure (Typical RNW Project)
```
├── android/           # Android platform files
├── ios/              # iOS platform files  
├── windows/          # Windows platform files
├── App.tsx           # Main app component
├── index.js          # Entry point
├── package.json      # Dependencies and scripts
├── metro.config.js   # Metro bundler configuration
└── tsconfig.json     # TypeScript configuration
```

### Naming Conventions
- Sample folders: PascalCase (e.g., `Calculator`, `NativeModuleSample`)
- Implementation subfolders: lowercase (e.g., `cppwinrt`, `csharp`, `fabric`)
- React components: PascalCase with `.tsx` extension
- Native files: Follow platform conventions (C++: `.cpp/.h`, C#: `.cs`)

### Code Style
- **TypeScript/JavaScript**: Use ESLint and Prettier configurations from sample projects
- **C++**: Follow Microsoft C++ coding standards
- **C#**: Follow .NET coding conventions
- **Indentation**: 2 spaces for JS/TS, 4 spaces for C++/C#

## Testing Approach

### JavaScript/TypeScript Testing
- **Framework**: Jest with React Native testing utilities
- **Location**: `__tests__/` directories in each sample
- **Run**: `npm test` or `yarn test`

### Native Code Testing
- Follow platform-specific testing practices
- Integration tests through React Native bridge
- Manual testing via sample applications

## Common Development Tasks

### Adding a New Sample
1. Create folder in `samples/` with PascalCase name
2. Include implementations in subfolders (cppwinrt, csharp, etc.)
3. Add README.md with setup/run instructions
4. Update root README.md sample table
5. Add to CI workflows if appropriate

### Upgrading Samples
1. Update React Native and RNW versions in package.json
2. Run `npx @react-native-community/cli@latest init --template react-native@latest`
3. Merge changes carefully, preserving sample-specific code
4. Test across all supported platforms
5. Update documentation

### Working with Native Code
- **C++/WinRT**: Use Visual Studio for IntelliSense and debugging
- **C#**: Leverage Visual Studio's C# tools
- **Bridge Integration**: Test JS-native communication thoroughly
- **Platform APIs**: Reference WinRT documentation for Windows-specific features

## Documentation

- **Main docs**: `docs/` directory and website
- **Sample docs**: Individual README.md files
- **API references**: Link to main RNW repository docs
- **Contributing**: See CONTRIBUTING.md for guidelines

## Troubleshooting Common Issues

### Build Failures
- Ensure Windows SDK and Visual Studio components are installed
- Check React Native and RNW version compatibility
- Verify platform target (x86/x64/ARM64) matches your system
- Clear Metro cache: `npx react-native start --reset-cache`

### Metro Bundle Issues
- Check metro.config.js configuration
- Ensure all dependencies are properly installed
- Restart Metro server with cache reset

### Native Module Loading
- Verify module registration in native code
- Check autolink configuration
- Ensure proper export from native modules

## Best Practices for Contributors

1. **Follow existing patterns**: Match the structure and style of existing samples
2. **Cross-platform compatibility**: Test on multiple platforms when applicable
3. **Documentation**: Include clear README files and inline comments
4. **Dependencies**: Use stable, widely-supported packages
5. **Performance**: Consider Windows-specific performance implications
6. **Accessibility**: Follow Windows accessibility guidelines
7. **Testing**: Include both unit tests and integration examples

## Related Resources

- [React Native Windows Documentation](https://microsoft.github.io/react-native-windows/)
- [React Native Windows GitHub](https://github.com/microsoft/react-native-windows)
- [React Native for macOS](https://github.com/microsoft/react-native-macos)
- [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)