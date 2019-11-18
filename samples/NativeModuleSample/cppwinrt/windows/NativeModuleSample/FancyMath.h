// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include "pch.h"

#include <functional>
#define _USE_MATH_DEFINES
#include <math.h>

#include "NativeModules.h"

namespace NativeModuleSample
{
    REACT_MODULE(FancyMath);
    struct FancyMath
    {
        REACT_CONSTANT(E);
        const double E = M_E;

        REACT_CONSTANT(PI, "Pi");
        const double PI = M_PI;

        REACT_METHOD(Add, "add");
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
