// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import NativeFancyMath from './NativeFancyMath';
import NativeDataMarshallingExamples from './NativeDataMarshallingExamples';
import NativeSimpleHttpModule from './NativeSimpleHttpModule';

export const FancyMath = {
  ...NativeFancyMath.getConstants(),
  add: NativeFancyMath.add,
};

export { type Point, type Line } from './NativeDataMarshallingExamples';
export const DataMarshallingExamples = NativeDataMarshallingExamples;

export { type Response } from './NativeSimpleHttpModule';
export const SimpleHttpModule = {
  GetHttpResponse: NativeSimpleHttpModule.GetHttpResponse,
};
