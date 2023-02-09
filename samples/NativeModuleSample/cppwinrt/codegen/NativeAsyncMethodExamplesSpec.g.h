
/*
 * This file is auto-generated from a NativeModule spec file in js.
 *
 * This is a C++ Spec class that should be used with MakeTurboModuleProvider to register native modules
 * in a way that also verifies at compile time that the native module matches the interface required
 * by the TurboModule JS spec.
 */
#pragma once

#include "NativeModules.h"
#include <tuple>

namespace NativeModuleSample {

struct AsyncMethodExamplesSpec : winrt::Microsoft::ReactNative::TurboModuleSpec {
  static constexpr auto methods = std::tuple{
      Method<void(std::string, Promise<::React::JSValue>) noexcept>{0, L"GetHttpResponse"},
  };

  template <class TModule>
  static constexpr void ValidateModule() noexcept {
    constexpr auto methodCheckResults = CheckMethods<TModule, AsyncMethodExamplesSpec>();

    REACT_SHOW_METHOD_SPEC_ERRORS(
          0,
          "GetHttpResponse",
          "    REACT_METHOD(GetHttpResponse) void GetHttpResponse(std::string uri, ::React::ReactPromise<::React::JSValue> &&result) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(GetHttpResponse) static void GetHttpResponse(std::string uri, ::React::ReactPromise<::React::JSValue> &&result) noexcept { /* implementation */ }\n");
  }
};

} // namespace NativeModuleSample
