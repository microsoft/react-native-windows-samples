---
id: version-0.60-project-structure
title: MSBuild Project Structure
original_id: project-structure
---

This is a description of each of the core projects, their purpose and output artifacts.<br/>
Sample applications are not covered.

## Alphabetical Index

- [Common\Common.vcxproj](#Common)
- [Chakra\Chakra.vcxitems](#Chakra)
- [Desktop\React.Windows.Desktop.vcxproj](#React.Windows.Desktop)
- **[Desktop.DLL\React.Windows.Desktop.DLL.vcxproj](#React.Windows.Desktop.DLL)**
- [Desktop.IntegrationTests\React.Windows.Desktop.IntegrationTests.vcxproj](#React.Windows.Desktop.IntegrationTests)
- [Desktop.UnitTests\React.Windows.Desktop.UnitTests.vcxproj](#React.Windows.Desktop.UnitTests)
- [Folly\Folly.vcxproj](#Folly)
- [FollyWin32\FollyWin32.vcxproj](#FollyWin32)
- [IntegrationTestScripts\IntegrationTests.njsproj](#IntegrationTests-Node-Project)
- [IntegrationTests\React.Windows.IntegrationTests.vcxproj](#React.Windows.IntegrationTests)
- [JSI\Desktop\JSI.Desktop.vcxproj](#JSI.Desktop)
- [JSI\Shared\JSI.Shared.vcxitems](#JSI.Shared)
- [JSI\Universal\JSI.Universal.vcxproj](#JSI.Universal)
- [JSI.Desktop.UnitTests\JSI.Desktop.UnitTests](#JSI.Desktop.UnitTests)
- **[Microsoft.ReactNative\Microsoft.ReactNative.vcxproj](#Microsoft.ReactNative)**
- [Microsoft.ReactNative.Cxx\Microsoft.ReactNative.Cxx.vcxitems](#Microsoft.ReactNative.Cxx)
- [Microsoft.ReactNative.SharedManaged\Microsoft.ReactNative.SharedManaged.projitems](#Microsoft.ReactNative.SharedManaged)
- [ReactCommon\ReactCommon.vcxproj](#ReactCommon)
- [ReactUWP\ReactUWP.vcxproj](#ReactUWP)
- [ReactWindowsCore\ReactWindowsCore.vcxproj](#ReactWindowsCore)
- [Shared\Shared.vcxitems](#Shared)
- [Universal.IntegrationTests\React.Windows.Universal.IntegrationTests.vcxproj](#React.Windows.Universal.IntegrationTests)
- [Universal.UnitTests\React.Windows.Universal.UnitTests.vcxproj](#React.Windows.Universal.UnitTests)

## Common Projects

### Common

_Static Library_<br/>
Functionality shared between React and JSI projects that do not depend on React or JSI functionality.

### ReactWindowsCore

_Static Library_<br/>
Contains common functionality for both Desktop and Universal Windows variants.

### Shared

_Shared Items (no build artifact)_<br/>
Holds sources common to both Windows variants, that require different build configuration
(i.e. compiler flags, language standard).

### ReactCommon

_Static Library_<br/>
React Native core, cross-platform C++ types and interfaces.<br/>
Sources provided as part of the `react-native` Node dependency. Not part of this repository.<br/>
See https://github.com/facebook/react-native/tree/v0.59.9/ReactCommon.

### Folly

_Static Library_<br/>
Folly variant type system for JavaScript/C++ interoperability.<br/>
Sources provided as part of the `react-native` Node dependency. Not part of this repository.

### Chakra

_Shared Items (no build artifact)_<br/>
ChakraCore bridging layer. May use different compiler flags between Windows variants.

### JSI.Shared

_Shared Items (no build artifact)_<br/>
Code shared between [JSI\Desktop\JSI.Desktop.vcxproj](#JSI.Desktop) and [JSI\Universal\JSI.Universal.vcxproj](#JSI.Universal).

### Microsoft.ReactNative.Cxx

_Shared Items (no build artifact)_<br/>
Contains helpers to simplify authoring C++/WinRT native modules on top of [Microsoft.ReactNative](#Microsoft.ReactNative).

### Microsoft.ReactNative.SharedManaged

_Shared Items (no build artifact)_<br/>
Contains helpers to simplify authoring C# native modules on top of [Microsoft.ReactNative](#Microsoft.ReactNative).

### React.Windows.IntegrationTests

_Static Library_<br/>
Common framework for running out of process and/or full React instance testing.

### IntegrationTests (Node Project)

_MSBuild Node project. For reading/editing purposes only (no build artifact)_<br/>
Set of JavaScript component tests for [RNTester](https://github.com/facebook/react-native/tree/v0.59.9/RNTester).
Sources provided as part of the `react-native` Node dependency. Not part of this repository.<br/>
See https://github.com/facebook/react-native/tree/v0.59.9/IntegrationTests.

## Windows Desktop Projects

### React.Windows.Desktop

_Static Library_<br/>
Set of Native Modules, View Managers and Executors for Windows Desktop.

### React.Windows.Desktop.DLL

_Dynamic Library_<br/>
Shared library that exports the intended public API surface for [React.Windows.Desktop](#React.Windows.Desktop).<br/>
**Main artifact to use in Windows Desktop applications.**

### React.Windows.Desktop.UnitTests

_VSTest Dynamic Library_<br/>
Set of isolated (mocked) tests for types defined in [React.Windows.Desktop](#React.Windows.Desktop).

### React.Windows.Desktop.IntegrationTests

_VSTest Dynamic Library_<br/>
Set of component tests that validate functionality against external runtime components
(i.e. networking servers, file system, React Native applications, external processes).<br/>
Validates [React.Windows.Desktop.DLL](#React.Windows.Desktop.DLL).

### JSI.Desktop

_Static Library_<br/>
ChakraCore based JSI::Runtime implementation.

### JSI.Desktop.UnitTests

_Google Test Executable_<br/>
Set of unit tests for jsi::runtime.

### FollyWin32

_Static Library_<br/>
Superset of Folly APIs only available and required by [React.Windows.Desktop](#React.Windows.Desktop).<br/>
Sources provided as part of the `react-native` Node dependency. Not part of this repository.

## Windows Universal Projects

### Microsoft.ReactNative

_Windows Runtime Component_</br>
The primary Windows Universal entry point and public API surface for React Native Windows. Currently depends on the implementation details in [ReactUWP](#ReactUWP).<br/>
**Main artifact to use in Windows Universal applications.**

### ReactUWP

_Dynamic Library_<br/>
Set of Native Modules, View Managers and Executors for Windows Universal. Formerly the entry point and ABI surface for React Native Windows, it will eventually be subsumed by [Microsoft.ReactNative](#Microsoft.ReactNative).

### React.Windows.Universal.UnitTests

_VSTest Dynamic Library_
Set of isolated (mocked) tests for types defined in [ReactUWP](#ReactUWP).

### React.Windows.Universal.IntegrationTests

_VSTest Dynamic Library_
Set of component tests that validate functionality against external runtime components
(i.e. networking servers, file system, React Native applications, external processes).<br/>
Validates [ReactUWP](#ReactUWP).

### JSI.Universal

_Static Library_<br/>
Chakra based JSI::Runtime implementation.
