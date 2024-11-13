import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'native-module-sample' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const NativeFancyMathModule = isTurboModuleEnabled
  ? require('./NativeFancyMath').default
  : NativeModules.FancyMath;

const NativeFancyMath = NativeFancyMathModule
  ? NativeFancyMathModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const NativeDataMarshallingExamplesModule = isTurboModuleEnabled
  ? require('./NativeDataMarshallingExamples').default
  : NativeModules.DataMarshallingExamples;

const NativeDataMarshallingExamples = NativeDataMarshallingExamplesModule
  ? NativeDataMarshallingExamplesModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

const NativeSimpleHttpModuleModule = isTurboModuleEnabled
  ? require('./NativeSimpleHttpModule').default
  : NativeModules.SimpleHttpModule;

const NativeSimpleHttpModule = NativeSimpleHttpModuleModule
  ? NativeSimpleHttpModuleModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export default {
  FancyMath: NativeFancyMath,
  DataMarshallingExamples: NativeDataMarshallingExamples,
  SimpleHttpModule: NativeSimpleHttpModule,
};
