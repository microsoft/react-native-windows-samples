# Native Module Sample - React Native for Windows

These samples showcase building Native Modules for React Native for Windows. It includes implementations in [C#](./csharp/) and [C++/WinRT](./cppwinrt/).

Both implementations target React Native Windows 0.78.

>**Note: Don't build your own projects directly out of these samples. When you publish a native module (as source), you'll want to create a new project with the correct metadata. This will also make sure that you're using unique identifiers in your project files (\*.csproj/\*.vcxproj) to avoid conflicts with other native modules.**

### Setup
First, make sure you've met the [React Native Windows System Requirements](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies).

Then, within either the `cppwinrt` or `csharp` folder, install the module's dependencies. If you have `yarn` installed:

```cmd
yarn install
```

Otherwise, you can just use npm:

```cmd
npm install
```

### Run
Once you have all of the dependencies installed, you can build either module with following command (again, run within either the `cppwinrt` or `csharp` folder):

```cmd
npx @react-native-community/cli@latest run-windows --no-deploy --no-launch --no-packager --no-autolink --proj "NativeModuleSample\NativeModuleSample.vsproj"

```

### Upgrade
To upgrade either sample to the latest version of RNW, see their individual readme file.
