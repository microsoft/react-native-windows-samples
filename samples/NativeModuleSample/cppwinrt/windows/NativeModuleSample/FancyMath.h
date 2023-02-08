// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include "pch.h"

#include <functional>
#define _USE_MATH_DEFINES
#include <math.h>

#include "NativeModules.h"
#include "../../codegen/NativeFancyMathSpec.g.h"

namespace NativeModuleSample
{
    REACT_MODULE(FancyMath);
    struct FancyMath
    {
        using ModuleSpec = FancyMathSpec;

        REACT_GET_CONSTANTS(GetConstants)
        FancyMathSpec_Constants GetConstants() noexcept
        {
            FancyMathSpec_Constants constants;
            constants.E = M_E;
            constants.Pi = M_PI;
            return constants;
        }

        REACT_METHOD(Add, L"add");
        double Add(double a, double b) noexcept
        {
            double result = a + b;
            AddEvent(result);
            return result;
        }

        REACT_EVENT(AddEvent);
        std::function<void(double)> AddEvent;
    };
}
