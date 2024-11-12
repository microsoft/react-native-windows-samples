#pragma once

#include "pch.h"
#include "resource.h"

#if __has_include("codegen/NativeNativeModuleSampleDataTypes.g.h")
  #include "codegen/NativeNativeModuleSampleDataTypes.g.h"
#endif
#include "codegen/NativeNativeModuleSampleSpec.g.h"

#include "NativeModules.h"

namespace winrt::NativeModuleSample
{

REACT_MODULE(NativeModuleSample)
struct NativeModuleSample
{
  using ModuleSpec = NativeModuleSampleCodegen::NativeModuleSampleSpec;

  REACT_INIT(Initialize)
  void Initialize(React::ReactContext const &reactContext) noexcept;

  REACT_METHOD(multiply)
  void multiply(double a, double b, ::React::ReactPromise<double> &&result) noexcept;

private:
  React::ReactContext m_context;
};

} // namespace winrt::NativeModuleSample