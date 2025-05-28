// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include "pch.h"
#include "resource.h"

#if __has_include("codegen/NativeDataMarshallingExamplesDataTypes.g.h")
#include "codegen/NativeDataMarshallingExamplesDataTypes.g.h"
#endif
#include "codegen/NativeDataMarshallingExamplesSpec.g.h"

#include "JSValue.h"
#include "NativeModules.h"

#include <string>

#define _USE_MATH_DEFINES
#include <math.h>

namespace NativeModuleSample {

void DebugWriteLine(const std::string &message) noexcept {
  std::string output = message + "\n";
  OutputDebugStringA(output.c_str());
}

#pragma region Native Objects

std::string to_string(const NativeModuleSampleCodegen::DataMarshallingExamplesSpec_Point &pt) {
  return "(" + std::to_string(pt.X) + "," + std::to_string(pt.Y) + ")";
}

std::string to_string(const NativeModuleSampleCodegen::DataMarshallingExamplesSpec_Line &line) {
  return "(" + to_string(line.Start) + "," + to_string(line.End) + ")";
}

#pragma endregion

REACT_MODULE(DataMarshallingExamples);
struct DataMarshallingExamples {
  using ModuleSpec = NativeModuleSampleCodegen::DataMarshallingExamplesSpec;

  using Line = NativeModuleSampleCodegen::DataMarshallingExamplesSpec_Line;
  using Point = NativeModuleSampleCodegen::DataMarshallingExamplesSpec_Point;

#pragma region Primitive Types

  // In these examples, we specify native methods with primitive
  // input arguments and / or return values, and rely on the code
  // in "NativeModules.h" to handle all of the data marshalling
  // to / from JS primitives.
  //
  // Both synchronous and asynchronous methods are provided where
  // possible.

  // Example JS:
  //
  // DataMarshallingExamples.ExplicitPrimitiveArgs(true, 1, 3.14, 'Hello World');
  REACT_METHOD(ExplicitPrimitiveArgs);
  void ExplicitPrimitiveArgs(bool b, int i, double d, std::string s) noexcept {
    DebugWriteLine("bool b: " + b ? "true" : "false");
    DebugWriteLine("int i: " + std::to_string(i));
    DebugWriteLine("double d: " + std::to_string(d));
    DebugWriteLine("string s: " + s);
  }

  // Example JS:
  //
  // DataMarshallingExamples.ReturnExplicitBoolean(result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.ReturnExplicitBooleanSync();
  // console.log(syncResult);
  REACT_METHOD(ReturnExplicitBoolean);
  REACT_SYNC_METHOD(ReturnExplicitBoolean, L"ReturnExplicitBooleanSync");
  bool ReturnExplicitBoolean() noexcept {
    auto result = true;
    DebugWriteLine("returning: " + result ? "true" : "false");
    return result;
  }

  // Example JS:
  //
  // DataMarshallingExamples.ReturnExplicitInteger(result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.ReturnExplicitIntegerSync();
  // console.log(syncResult);
  REACT_METHOD(ReturnExplicitInteger);
  REACT_SYNC_METHOD(ReturnExplicitInteger, L"ReturnExplicitIntegerSync");
  int ReturnExplicitInteger() noexcept {
    auto result = 1;
    DebugWriteLine("returning: " + std::to_string(result));
    return result;
  }

  // Example JS:
  //
  // DataMarshallingExamples.ReturnExplicitDouble(result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.ReturnExplicitDoubleSync();
  // console.log(syncResult);
  REACT_METHOD(ReturnExplicitDouble);
  REACT_SYNC_METHOD(ReturnExplicitDouble, L"ReturnExplicitDoubleSync");
  double ReturnExplicitDouble() noexcept {
    auto result = M_PI;
    DebugWriteLine("returning: " + std::to_string(result));
    return result;
  }

  // Example JS:
  //
  // DataMarshallingExamples.ReturnExplicitString(result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.ReturnExplicitStringSync();
  // console.log(syncResult);
  REACT_METHOD(ReturnExplicitString);
  REACT_SYNC_METHOD(ReturnExplicitString, L"ReturnExplicitStringSync");
  std::string ReturnExplicitString() noexcept {
    std::string result = "Hello World";
    DebugWriteLine("returning: " + result);
    return result;
  }

#pragma endregion

#pragma region Object Types

  // In these examples, we specify native methods with native object
  // input arguments and / or return values, and rely on the code
  // in Microsoft.ReactNative to handle all of the data
  // marshalling to / from JS objects.
  //
  // Both synchronous and asynchronous methods are provided where
  // possible.

  // Example JS:
  //
  // var p1 = { X: 2, Y: 3 };
  // var p2 = { X: 4, Y: 5 };
  //
  // DataMarshallingExamples.GetMidpoint(p1, p2, result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.GetMidpointSync(p1, p2);
  // console.log(syncResult);
  REACT_METHOD(GetMidpoint);
  REACT_SYNC_METHOD(GetMidpoint, L"GetMidpointSync");
  Point GetMidpoint(Point &&p1, Point &&p2) noexcept {
    DebugWriteLine("Point p1: " + to_string(p1));
    DebugWriteLine("Point p2: " + to_string(p2));

    double midX = 0.5 * (p1.X + p2.X);
    double midY = 0.5 * (p1.Y + p2.Y);

    Point midpoint{midX, midY};

    DebugWriteLine("returning: " + to_string(midpoint));
    return midpoint;
  }

  // Example JS:
  //
  // var line = { Start: { X: 2, Y: 3 }, End: { X: 4, Y: 5 } };
  //
  // DataMarshallingExamples.GetLength(line, result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.GetLengthSync(line);
  // console.log(syncResult);
  REACT_METHOD(GetLength);
  REACT_SYNC_METHOD(GetLength, L"GetLengthSync");
  double GetLength(Line &&line) noexcept {
    DebugWriteLine("Line line: " + to_string(line));

    double length = sqrt(pow(line.End.X - line.Start.X, 2) + pow(line.End.Y - line.Start.Y, 2));

    DebugWriteLine("returning: " + std::to_string(length));
    return length;
  }

#pragma endregion

#pragma region Arrays / Iterable Types

  // In these examples, we specify native methods with native iterable
  // input arguments and / or return values, and rely on the code
  // in Microsoft.ReactNative to handle all of the data
  // marshalling to / from JS arrays.
  //
  // Both synchronous and asynchronous methods are provided where
  // possible.

  // Example JS:
  //
  // var values = [ 2, 3, 4, 5];
  //
  // DataMarshallingExamples.GetAverage(values, result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.GetAverageSync(values);
  // console.log(syncResult);
  REACT_METHOD(GetAverage);
  REACT_SYNC_METHOD(GetAverage, L"GetAverageSync");
  double GetAverage(std::vector<double> values) noexcept {
    double sum = 0.0;

    for (size_t i = 0; i < values.size(); i++) {
      DebugWriteLine("double values[" + std::to_string(i) + "]: " + std::to_string(values[i]));
      sum += values[i];
    }

    double average = sum / values.size();

    DebugWriteLine("returning: " + std::to_string(average));
    return average;
  }

  // Example JS:
  //
  // var values = [ 'Hello', 'World' ];
  //
  // DataMarshallingExamples.Concatenate(values, result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.ConcatenateSync(values);
  // console.log(syncResult);
  REACT_METHOD(Concatenate);
  REACT_SYNC_METHOD(Concatenate, L"ConcatenateSync");
  std::string Concatenate(std::vector<std::string> values) noexcept {
    std::string result = "";

    for (auto value : values) {
      result += value;
    }

    DebugWriteLine("returning: " + result);
    return result;
  }

  // Example JS:
  //
  // var s = 'Hello World';
  // var separators = ' ';
  //
  // DataMarshallingExamples.Split(s, separators, result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.SplitSync(s, separators);
  // console.log(syncResult);
  REACT_METHOD(Split);
  REACT_SYNC_METHOD(Split, L"SplitSync");
  std::vector<std::string> Split(std::string s, std::string separators) noexcept {
    std::vector<std::string> split;

    char *str = s.data();

    char *ptr;
    const char *delim = separators.c_str();

    char *token;
    token = strtok_s(str, delim, &ptr);

    while (token) {
      split.push_back(std::string(token));
      token = strtok_s(NULL, delim, &ptr);
    }

    return split;
  }

#pragma endregion

#pragma region Using JSValue

  // In these examples, we specify native methods with JSValue
  // input arguments and / or return values, and rely on the code
  // in Microsoft.ReactNative to handle all of the data
  // marshalling to / from JS types.
  //
  // Both synchronous and asynchronous methods are provided where
  // possible.
  //
  // A JSValue can represent any JS primitive, object, or array (see
  // the JSValueType enum for the complete list of supported types).
  //
  // By using JSValues in your method signatures, you trade the
  // type-safety provided by specifying concrete native types for
  // the flexibility of arbitrary JS types.
  //
  // Because JSValues can contain any arbitrary JS values, you are
  // responsible for determining their contents within your code.
  // You can use the "Type" property to determine the type of a JSValue,
  // and then use a variety of APIs to convert the JSValue into
  // other native types.
  //
  // JSValues can be useful for manipulating large and complex JS objects
  // in your native code, giving you random access to just the values
  // you need. However, note that there is a performance penalty to doing
  // this, as the entirety of the JS object will be parsed into the
  // JSValue before it is passed to your code.

  // For more information on using JSValue, see:
  // https://microsoft.github.io/react-native-windows/docs/native-modules-jsvalue

  // Example JS:
  //
  // DataMarshallingExamples.JSValueArgs(true, 1, 3.14, 'Hello World');
  REACT_METHOD(JSValueArgs);
  void JSValueArgs(JSValue &&b, JSValue &&i, JSValue &&d, JSValue &&s) noexcept {
    // This method
    DebugWriteLine("JSValue b: " + std::to_string(b.AsBoolean()));
    DebugWriteLine("JSValue i: " + std::to_string(i.AsInt32()));
    DebugWriteLine("JSValue d: " + std::to_string(d.AsDouble()));
    DebugWriteLine("JSValue s: " + s.AsString());
  }

  // Example JS:
  //
  // var p1 = { x: 2, y: 3 };
  // var p2 = { x: 4, y: 5 };
  //
  // DataMarshallingExamples.GetMidpointByJSValue(p1, p2, result => {
  //   console.log(result);
  // });
  //
  // var syncResult = DataMarshallingExamples.GetMidpointByJSValue(p1, p2);
  // console.log(syncResult);
  REACT_METHOD(GetMidpointByJSValue);
  REACT_SYNC_METHOD(GetMidpointByJSValue, L"GetMidpointByJSValueSync");
  JSValue GetMidpointByJSValue(JSValue &&p1, JSValue &&p2) noexcept {
    double midX = 0.5 * (p1["x"].AsDouble() + p2["x"].AsDouble());
    double midY = 0.5 * (p1["y"].AsDouble() + p2["y"].AsDouble());

    JSValueObject midpoint = JSValueObject{{"x", midX}, {"y", midY}};

    return midpoint;
  }

#pragma endregion
};

} // namespace NativeModuleSample
