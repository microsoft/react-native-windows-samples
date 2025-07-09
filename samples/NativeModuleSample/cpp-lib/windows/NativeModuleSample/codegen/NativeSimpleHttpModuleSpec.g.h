
/*
 * This file is auto-generated from a NativeModule spec file in js.
 *
 * This is a C++ Spec class that should be used with MakeTurboModuleProvider to register native modules
 * in a way that also verifies at compile time that the native module matches the interface required
 * by the TurboModule JS spec.
 */
#pragma once
// clang-format off

// #include "NativeSimpleHttpModuleDataTypes.g.h" before this file to use the generated type definition
#include <NativeModules.h>
#include <tuple>

namespace NativeModuleSampleCodegen {

inline winrt::Microsoft::ReactNative::FieldMap GetStructInfo(SimpleHttpModuleSpec_Response*) noexcept {
    winrt::Microsoft::ReactNative::FieldMap fieldMap {
        {L"statusCode", &SimpleHttpModuleSpec_Response::statusCode},
        {L"content", &SimpleHttpModuleSpec_Response::content},
    };
    return fieldMap;
}

struct SimpleHttpModuleSpec : winrt::Microsoft::ReactNative::TurboModuleSpec {
  static constexpr auto methods = std::tuple{
      Method<void(std::string, Promise<SimpleHttpModuleSpec_Response>) noexcept>{0, L"GetHttpResponse"},
  };

  template <class TModule>
  static constexpr void ValidateModule() noexcept {
    constexpr auto methodCheckResults = CheckMethods<TModule, SimpleHttpModuleSpec>();

    REACT_SHOW_METHOD_SPEC_ERRORS(
          0,
          "GetHttpResponse",
          "    REACT_METHOD(GetHttpResponse) void GetHttpResponse(std::string uri, ::React::ReactPromise<SimpleHttpModuleSpec_Response> &&result) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(GetHttpResponse) static void GetHttpResponse(std::string uri, ::React::ReactPromise<SimpleHttpModuleSpec_Response> &&result) noexcept { /* implementation */ }\n");
  }
};

} // namespace NativeModuleSampleCodegen
