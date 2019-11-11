# react-native-native-module-sample

## Getting started

`$ npm install react-native-native-module-sample --save`

### Mostly automatic installation

`$ react-native link react-native-native-module-sample`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-native-module-sample` and add `NativeModuleSample.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libNativeModuleSample.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.NativeModuleSamplePackage;` to the imports at the top of the file
  - Add `new NativeModuleSamplePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-native-module-sample'
  	project(':react-native-native-module-sample').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-native-module-sample/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-native-module-sample')
  	```


## Usage
```javascript
import NativeModuleSample from 'react-native-native-module-sample';

// TODO: What to do with the module?
NativeModuleSample;
```
