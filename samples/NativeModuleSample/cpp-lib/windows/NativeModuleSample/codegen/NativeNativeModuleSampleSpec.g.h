
/*
 * This file is auto-generated from a NativeModule spec file in js.
 *
 * This is a C++ Spec class that should be used with MakeTurboModuleProvider to register native modules
 * in a way that also verifies at compile time that the native module matches the interface required
 * by the TurboModule JS spec.
 */
#pragma once


#include <NativeModules.h>
#include <tuple>

namespace NativeModuleSampleCodegen {

struct NativeModuleSampleSpec : winrt::Microsoft::ReactNative::TurboModuleSpec {
  static constexpr auto methods = std::tuple{
      Method<void(double, double, Promise<double>) noexcept>{0, L"multiply"},
  };

  template <class TModule>
  static constexpr void ValidateModule() noexcept {
    constexpr auto methodCheckResults = CheckMethods<TModule, NativeModuleSampleSpec>();

    REACT_SHOW_METHOD_SPEC_ERRORS(
          0,
          "multiply",
          "    REACT_METHOD(multiply) void multiply(double a, double b, ::React::ReactPromise<double> &&result) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(multiply) static void multiply(double a, double b, ::React::ReactPromise<double> &&result) noexcept { /* implementation */ }\n");
  }
};

} // namespace NativeModuleSampleCodegen
