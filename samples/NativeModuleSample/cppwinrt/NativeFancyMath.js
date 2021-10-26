/**
 * This makes the JS forward looking, in that it supports the implementation of FancyMath being a NativeModule or a TurboModule
 * It also provides flow type information for the FancyMath module, which in the future can be used to verify that the
 * native implementation matches the JS definition.
 * 
 * @flow
 * @format
 */

 import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
 import * as TurboModuleRegistry from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
 
 export interface Spec extends TurboModule {

   // Exported methods.
   +getConstants: () => {|
     E: number,
     Pi: number,
   |};
   +add: (a: number, b: number, callback: (value: number) => void) => void;
 }
 
 export default (TurboModuleRegistry.getEnforcing<Spec>(
   'FancyMath',
 ): Spec);
 