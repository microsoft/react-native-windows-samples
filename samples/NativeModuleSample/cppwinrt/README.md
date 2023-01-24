# Native Module C++/WinRT Sample - React Native for Windows

See [../README.md](../README.md) for details of this sample.

See [../csharp/](../csharp/) for a C# version of this sample.

>**Note: Don't build your own projects directly out of this sample. When you publish a native module (as source), you'll want to create a new project with the correct metadata. This will also make sure that you're using unique identifiers in your project files to avoid conflicts with other native modules.**

### Setup
See [../README.md#Setup](../README.md#Setup).

### Run
See [../README.md#Run](../README.md#Run).

### Upgrade
To upgrade this sample to the latest version of RNW:

1. Open a command prompt and navigate to this folder.
2. Delete the `windows` folder:
    ```cmd
    rd /s /q windows
    ```
3. Upgrade dev dependencies to the versions of `react` and `react-native` needed by `react-native-windows@latest`:
    1. Option A: Use the `UpgradeSmokeTest.ps1` helper script (Recommended):
        ```cmd
        pwsh.exe ..\..\..\.github\scripts\UpgradeSmokeTest.ps1 latest
        ```
    2. Option B: Update the package.json by hand:
        1. Look up the version of `react` required by `react-native-windows@latest`:
            ```cmd
            npm info react-native-windows@latest devDependencies.react
            ```
        2. Upgrade `react` to that version:
            ```cmd
            yarn upgrade react@VERSIONFROMLASTSTEP
            ```
        3. Look up the version of `react-native` required by `react-native-windows@latest`:
            ```cmd
            npm info react-native-windows@latest devDependencies.react-native
            ```
        4. Upgrade `react-native` to that version:
            ```cmd
            yarn upgrade react-native@VERSIONFROMLASTSTEP
            ```
4. Re-run the RNW CLI:
    ```cmd
    npx react-native-windows-init --version latest --language cpp --projectType lib --overwrite
    ```
5. Restore these original native header files (representing the native module samples):
    ```
    git restore windows\NativeModuleSample\AsyncMethodExamples.h
    git restore windows\NativeModuleSample\DataMarshallingExamples.h
    git restore windows\NativeModuleSample\FancyMath.h
    ```
6. Remove these new native header files:
    ```
    del windows\NativeModuleSample\ReactNativeModule.h
    ```
7. Referring to a diff of the modified files, make the following updates:
    1. For `windows\NativeModuleSample\NativeModuleSample.vcxproj`:
        1. Restore the `<ClInclude>` entries for the files restored in Step 5:
            ```diff
            + <ClInclude Include="AsyncMethodExamples.h" />
            + <ClInclude Include="DataMarshallingExamples.h" />
            + <ClInclude Include="FancyMath.h" />
            ```
        2. Remove the `<ClInclude>` entries for the files removed in Step 6:
            ```diff
            - <ClInclude Include="ReactNativeModule.h" />
            ```
        3. Check if the `<ProjectGuid>` property at the top of the file has been updated. If so, take note of the new Guid (for later) and restore the original Guid.
    2. For `windows\NativeModuleSample\NativeModuleSample.vcxproj.filters`:
        1. Restore the `<ClInclude>` entries for the headers restored in Step 5:
            ```diff
            + <ClInclude Include="AsyncMethodExamples.h" />
            + <ClInclude Include="DataMarshallingExamples.h" />
            + <ClInclude Include="FancyMath.h" />
            ```
        2. Remove the `<ClInclude>` entries for the headers removed in Step 6:
            ```diff
            - <ClInclude Include="ReactNativeModule.h" />
            ```
    3. For `windows\NativeModuleSample\NativeModulesSample.sln`:
        1. If the project guid was changed in Step 7.1.3 above, you'll want to restore the original Guid here too. The easiest way to do this is to just do a find-replace on the new Guid with the (uppercased) old one.
    4. For `ReactPackageProvider.h`:
        1. Restore the copyright notice at the top of the file:
            ```diff
            + // Copyright (c) Microsoft Corporation. All rights reserved.
            + // Licensed under the MIT License.
            + 
            ```
    5. For `ReactPackageProvider.cpp`:
        1. Restore the copyright notice at the top of the file:
            ```diff
            + // Copyright (c) Microsoft Corporation. All rights reserved.
            + // Licensed under the MIT License.
            + 
            ```
        2. Restore the `#include` entries for the headers restored in Step 5:
            ```diff
            + #include "FancyMath.h"
            + #include "DataMarshallingExamples.h"
            + #include "AsyncMethodExamples.h"
            ```
        2. Remove the `#include` entries for the headers removed in Step 6:
            ```diff
            - #include "ReactNativeModule.h"
            ```
    6. For `pch.h`:
        1. Restore the copyright notice at the top of the file:
            ```diff
            + // Copyright (c) Microsoft Corporation. All rights reserved.
            + // Licensed under the MIT License.
            + 
            ```
        2. Restore the extra `#include` entries used by the sample:
            ```diff
            + #include <winrt/Windows.System.Threading.h>
            + #include <winrt/Windows.Web.Http.h>
            + #include <winrt/Windows.Web.Http.Headers.h>
            ```
8. Verify the updated sample builds:
    ```cmd
    npx react-native run-windows --no-deploy --no-launch --no-packager --no-autolink --proj "NativeModuleSample\NativeModuleSample.vcxproj"
    ```
9. Update the main readme with the new major version at the top.
