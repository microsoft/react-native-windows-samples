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
 
 export type Point = {|
   X: number,
   Y: number,
 |};

 export type Line = {|
   Start: Point,
   End: Point,
 |};

 export interface Spec extends TurboModule {
   +ExplicitPrimtiveArgs(b: boolean, i: number, d: number, s: string) => void;

   +ReturnExplicitBoolean(callback: (value: boolean) => void) => void;
   +ReturnExplicitBooleanSync() => boolean;

   +ReturnExplicitInteger(callback: (value: number) => void) => void;
   +ReturnExplicitIntegerSync() => number;

   +ReturnExplicitDouble(callback: (value: number) => void) => void;
   +ReturnExplicitDoubleSync() => number;

   +ReturnExplicitString(callback: (value: string) => void) => void;
   +ReturnExplicitStringSync() => string;


   +GetMidpoint(p1: Point, p2: Point, callback: (value: Point) => void) => void;
   +GetMidpointSync(p1: Point, p2: Point) => Point;

   +GetLength(line: Line, callback: (value: number) => void) => void;
   +GetLengthSync(line: Line) => number;

   +GetAverage(values: Array<number>, callback: (value: number) => void) => void;
   +GetAverageSync(values: Array<number>) => number;

   +Concatenate(values: Array<string>, callback: (value: string) => void) => void;
   +ConcatenateSync(values: Array<string>) => string;

   +Split(s: string, separators: string, callback: (value: Array<string>) => void) => void;
   +SplitSync(s: string, separators: string) => Array<string>;

   +JSValueArgs(b: Object, i: Object, d: Object, s: Object) => void;

   +GetMidpointByJSValue(p1: Object, p2: Object, callback: (value: Object) => void) => void;
   +GetMidpointByJSValueSync(p1: Object, p2: Object) => Object;
 }
 
 export default (TurboModuleRegistry.getEnforcing<Spec>(
   'DataMarshallingExamples',
 ): Spec);
 