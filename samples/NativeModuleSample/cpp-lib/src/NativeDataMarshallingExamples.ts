import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

export type Point = {
  X: number;
  Y: number;
};

export type Line = {
  Start: Point;
  End: Point;
};

export interface Spec extends TurboModule {
  ExplicitPrimitiveArgs(b: boolean, i: Int32, d: number, s: string): void;

  ReturnExplicitBoolean(callback: (value: boolean) => void): void;
  ReturnExplicitBooleanSync(): boolean;

  ReturnExplicitInteger(callback: (value: Int32) => void): void;
  ReturnExplicitIntegerSync(): Int32;

  ReturnExplicitDouble(callback: (value: number) => void): void;
  ReturnExplicitDoubleSync(): number;

  ReturnExplicitString(callback: (value: string) => void): void;
  ReturnExplicitStringSync(): string;

  GetMidpoint(p1: Point, p2: Point, callback: (value: Point) => void): void;
  GetMidpointSync(p1: Point, p2: Point): Point;

  GetLength(line: Line, callback: (value: number) => void): void;
  GetLengthSync(line: Line): number;

  GetAverage(values: Array<number>, callback: (value: number) => void): void;
  GetAverageSync(values: Array<number>): number;

  Concatenate(values: Array<string>, callback: (value: string) => void): void;
  ConcatenateSync(values: Array<string>): string;

  Split(
    s: string,
    separators: string,
    callback: (value: Array<string>) => void
  ): void;
  SplitSync(s: string, separators: string): Array<string>;

  JSValueArgs(b: Object, i: Object, d: Object, s: Object): void;

  GetMidpointByJSValue(
    p1: Object,
    p2: Object,
    callback: (value: Object) => void
  ): void;
  GetMidpointByJSValueSync(p1: Object, p2: Object): Object;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'DataMarshallingExamples'
);
