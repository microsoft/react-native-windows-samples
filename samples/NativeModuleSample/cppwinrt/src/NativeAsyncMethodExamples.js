/**
 * This makes the JS forward looking, in that it supports the implementation of DataMarshallingExamples being a NativeModule or a TurboModule
 * It also provides flow type information for the DataMarshallingExamples module, which in the future can be used to verify that the
 * native implementation matches the JS definition.
 * 
 * @flow
 * @format
 */

 import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
 import * as TurboModuleRegistry from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
 
 export type Response = {|
  statusCode: number,
  content: string,
|};

 export interface Spec extends TurboModule {
   +GetHttpResponse(uri: string) => Promise<Response>;
 }
 
 export default (TurboModuleRegistry.getEnforcing<Spec>(
   'SimpleHttpModule',
 ): Spec);
 