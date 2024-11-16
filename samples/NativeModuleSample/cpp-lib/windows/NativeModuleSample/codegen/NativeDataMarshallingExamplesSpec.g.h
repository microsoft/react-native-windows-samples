
/*
 * This file is auto-generated from a NativeModule spec file in js.
 *
 * This is a C++ Spec class that should be used with MakeTurboModuleProvider to register native modules
 * in a way that also verifies at compile time that the native module matches the interface required
 * by the TurboModule JS spec.
 */
#pragma once

// #include "NativeDataMarshallingExamplesDataTypes.g.h" before this file to use the generated type definition
#include <NativeModules.h>
#include <tuple>

namespace NativeModuleSampleCodegen {

inline winrt::Microsoft::ReactNative::FieldMap GetStructInfo(DataMarshallingExamplesSpec_Point*) noexcept {
    winrt::Microsoft::ReactNative::FieldMap fieldMap {
        {L"X", &DataMarshallingExamplesSpec_Point::X},
        {L"Y", &DataMarshallingExamplesSpec_Point::Y},
    };
    return fieldMap;
}

inline winrt::Microsoft::ReactNative::FieldMap GetStructInfo(DataMarshallingExamplesSpec_Line*) noexcept {
    winrt::Microsoft::ReactNative::FieldMap fieldMap {
        {L"Start", &DataMarshallingExamplesSpec_Line::Start},
        {L"End", &DataMarshallingExamplesSpec_Line::End},
    };
    return fieldMap;
}

struct DataMarshallingExamplesSpec : winrt::Microsoft::ReactNative::TurboModuleSpec {
  static constexpr auto methods = std::tuple{
      Method<void(bool, int, double, std::string) noexcept>{0, L"ExplicitPrimitiveArgs"},
      Method<void(Callback<bool>) noexcept>{1, L"ReturnExplicitBoolean"},
      SyncMethod<bool() noexcept>{2, L"ReturnExplicitBooleanSync"},
      Method<void(Callback<int>) noexcept>{3, L"ReturnExplicitInteger"},
      SyncMethod<int() noexcept>{4, L"ReturnExplicitIntegerSync"},
      Method<void(Callback<double>) noexcept>{5, L"ReturnExplicitDouble"},
      SyncMethod<double() noexcept>{6, L"ReturnExplicitDoubleSync"},
      Method<void(Callback<std::string>) noexcept>{7, L"ReturnExplicitString"},
      SyncMethod<std::string() noexcept>{8, L"ReturnExplicitStringSync"},
      Method<void(DataMarshallingExamplesSpec_Point, DataMarshallingExamplesSpec_Point, Callback<DataMarshallingExamplesSpec_Point>) noexcept>{9, L"GetMidpoint"},
      SyncMethod<DataMarshallingExamplesSpec_Point(DataMarshallingExamplesSpec_Point, DataMarshallingExamplesSpec_Point) noexcept>{10, L"GetMidpointSync"},
      Method<void(DataMarshallingExamplesSpec_Line, Callback<double>) noexcept>{11, L"GetLength"},
      SyncMethod<double(DataMarshallingExamplesSpec_Line) noexcept>{12, L"GetLengthSync"},
      Method<void(std::vector<double>, Callback<double>) noexcept>{13, L"GetAverage"},
      SyncMethod<double(std::vector<double>) noexcept>{14, L"GetAverageSync"},
      Method<void(std::vector<std::string>, Callback<std::string>) noexcept>{15, L"Concatenate"},
      SyncMethod<std::string(std::vector<std::string>) noexcept>{16, L"ConcatenateSync"},
      Method<void(std::string, std::string, Callback<std::vector<std::string>>) noexcept>{17, L"Split"},
      SyncMethod<std::vector<std::string>(std::string, std::string) noexcept>{18, L"SplitSync"},
      Method<void(::React::JSValue, ::React::JSValue, ::React::JSValue, ::React::JSValue) noexcept>{19, L"JSValueArgs"},
      Method<void(::React::JSValue, ::React::JSValue, Callback<::React::JSValue>) noexcept>{20, L"GetMidpointByJSValue"},
      SyncMethod<::React::JSValue(::React::JSValue, ::React::JSValue) noexcept>{21, L"GetMidpointByJSValueSync"},
  };

  template <class TModule>
  static constexpr void ValidateModule() noexcept {
    constexpr auto methodCheckResults = CheckMethods<TModule, DataMarshallingExamplesSpec>();

    REACT_SHOW_METHOD_SPEC_ERRORS(
          0,
          "ExplicitPrimitiveArgs",
          "    REACT_METHOD(ExplicitPrimitiveArgs) void ExplicitPrimitiveArgs(bool b, int i, double d, std::string s) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(ExplicitPrimitiveArgs) static void ExplicitPrimitiveArgs(bool b, int i, double d, std::string s) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          1,
          "ReturnExplicitBoolean",
          "    REACT_METHOD(ReturnExplicitBoolean) void ReturnExplicitBoolean(std::function<void(bool)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(ReturnExplicitBoolean) static void ReturnExplicitBoolean(std::function<void(bool)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          2,
          "ReturnExplicitBooleanSync",
          "    REACT_SYNC_METHOD(ReturnExplicitBooleanSync) bool ReturnExplicitBooleanSync() noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(ReturnExplicitBooleanSync) static bool ReturnExplicitBooleanSync() noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          3,
          "ReturnExplicitInteger",
          "    REACT_METHOD(ReturnExplicitInteger) void ReturnExplicitInteger(std::function<void(int)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(ReturnExplicitInteger) static void ReturnExplicitInteger(std::function<void(int)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          4,
          "ReturnExplicitIntegerSync",
          "    REACT_SYNC_METHOD(ReturnExplicitIntegerSync) int ReturnExplicitIntegerSync() noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(ReturnExplicitIntegerSync) static int ReturnExplicitIntegerSync() noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          5,
          "ReturnExplicitDouble",
          "    REACT_METHOD(ReturnExplicitDouble) void ReturnExplicitDouble(std::function<void(double)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(ReturnExplicitDouble) static void ReturnExplicitDouble(std::function<void(double)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          6,
          "ReturnExplicitDoubleSync",
          "    REACT_SYNC_METHOD(ReturnExplicitDoubleSync) double ReturnExplicitDoubleSync() noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(ReturnExplicitDoubleSync) static double ReturnExplicitDoubleSync() noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          7,
          "ReturnExplicitString",
          "    REACT_METHOD(ReturnExplicitString) void ReturnExplicitString(std::function<void(std::string)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(ReturnExplicitString) static void ReturnExplicitString(std::function<void(std::string)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          8,
          "ReturnExplicitStringSync",
          "    REACT_SYNC_METHOD(ReturnExplicitStringSync) std::string ReturnExplicitStringSync() noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(ReturnExplicitStringSync) static std::string ReturnExplicitStringSync() noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          9,
          "GetMidpoint",
          "    REACT_METHOD(GetMidpoint) void GetMidpoint(DataMarshallingExamplesSpec_Point && p1, DataMarshallingExamplesSpec_Point && p2, std::function<void(DataMarshallingExamplesSpec_Point const &)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(GetMidpoint) static void GetMidpoint(DataMarshallingExamplesSpec_Point && p1, DataMarshallingExamplesSpec_Point && p2, std::function<void(DataMarshallingExamplesSpec_Point const &)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          10,
          "GetMidpointSync",
          "    REACT_SYNC_METHOD(GetMidpointSync) DataMarshallingExamplesSpec_Point GetMidpointSync(DataMarshallingExamplesSpec_Point && p1, DataMarshallingExamplesSpec_Point && p2) noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(GetMidpointSync) static DataMarshallingExamplesSpec_Point GetMidpointSync(DataMarshallingExamplesSpec_Point && p1, DataMarshallingExamplesSpec_Point && p2) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          11,
          "GetLength",
          "    REACT_METHOD(GetLength) void GetLength(DataMarshallingExamplesSpec_Line && line, std::function<void(double)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(GetLength) static void GetLength(DataMarshallingExamplesSpec_Line && line, std::function<void(double)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          12,
          "GetLengthSync",
          "    REACT_SYNC_METHOD(GetLengthSync) double GetLengthSync(DataMarshallingExamplesSpec_Line && line) noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(GetLengthSync) static double GetLengthSync(DataMarshallingExamplesSpec_Line && line) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          13,
          "GetAverage",
          "    REACT_METHOD(GetAverage) void GetAverage(std::vector<double> const & values, std::function<void(double)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(GetAverage) static void GetAverage(std::vector<double> const & values, std::function<void(double)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          14,
          "GetAverageSync",
          "    REACT_SYNC_METHOD(GetAverageSync) double GetAverageSync(std::vector<double> const & values) noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(GetAverageSync) static double GetAverageSync(std::vector<double> const & values) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          15,
          "Concatenate",
          "    REACT_METHOD(Concatenate) void Concatenate(std::vector<std::string> const & values, std::function<void(std::string)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(Concatenate) static void Concatenate(std::vector<std::string> const & values, std::function<void(std::string)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          16,
          "ConcatenateSync",
          "    REACT_SYNC_METHOD(ConcatenateSync) std::string ConcatenateSync(std::vector<std::string> const & values) noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(ConcatenateSync) static std::string ConcatenateSync(std::vector<std::string> const & values) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          17,
          "Split",
          "    REACT_METHOD(Split) void Split(std::string s, std::string separators, std::function<void(std::vector<std::string> const &)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(Split) static void Split(std::string s, std::string separators, std::function<void(std::vector<std::string> const &)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          18,
          "SplitSync",
          "    REACT_SYNC_METHOD(SplitSync) std::vector<std::string> SplitSync(std::string s, std::string separators) noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(SplitSync) static std::vector<std::string> SplitSync(std::string s, std::string separators) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          19,
          "JSValueArgs",
          "    REACT_METHOD(JSValueArgs) void JSValueArgs(::React::JSValue && b, ::React::JSValue && i, ::React::JSValue && d, ::React::JSValue && s) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(JSValueArgs) static void JSValueArgs(::React::JSValue && b, ::React::JSValue && i, ::React::JSValue && d, ::React::JSValue && s) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          20,
          "GetMidpointByJSValue",
          "    REACT_METHOD(GetMidpointByJSValue) void GetMidpointByJSValue(::React::JSValue && p1, ::React::JSValue && p2, std::function<void(::React::JSValue const &)> const & callback) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(GetMidpointByJSValue) static void GetMidpointByJSValue(::React::JSValue && p1, ::React::JSValue && p2, std::function<void(::React::JSValue const &)> const & callback) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          21,
          "GetMidpointByJSValueSync",
          "    REACT_SYNC_METHOD(GetMidpointByJSValueSync) ::React::JSValue GetMidpointByJSValueSync(::React::JSValue && p1, ::React::JSValue && p2) noexcept { /* implementation */ }\n"
          "    REACT_SYNC_METHOD(GetMidpointByJSValueSync) static ::React::JSValue GetMidpointByJSValueSync(::React::JSValue && p1, ::React::JSValue && p2) noexcept { /* implementation */ }\n");
  }
};

} // namespace NativeModuleSampleCodegen
