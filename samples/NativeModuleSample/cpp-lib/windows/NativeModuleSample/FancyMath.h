// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include "pch.h"

#include "pch.h"
#include "resource.h"

#if __has_include("codegen/NativeFancyMathDataTypes.g.h")
#include "codegen/NativeFancyMathDataTypes.g.h"
#endif
#include "codegen/NativeFancyMathSpec.g.h"

#include "NativeModules.h"

#include <functional>
#define _USE_MATH_DEFINES
#include <math.h>

namespace winrt::NativeModuleSample {

REACT_MODULE(FancyMath);
struct FancyMath {
  using ModuleSpec = NativeModuleSampleCodegen::FancyMathSpec;

  REACT_GET_CONSTANTS(GetConstants)
  NativeModuleSampleCodegen::FancyMathSpec_Constants GetConstants() noexcept {
    NativeModuleSampleCodegen::FancyMathSpec_Constants constants;
    constants.E = M_E;
    constants.Pi = M_PI;
    return constants;
  }

  REACT_METHOD(Add, L"add");
  double Add(double a, double b) noexcept {
    double result = a + b;
    AddEvent(result);
    return result;
  }

  REACT_EVENT(AddEvent);
  std::function<void(double)> AddEvent;
};

} // namespace winrt::NativeModuleSample
