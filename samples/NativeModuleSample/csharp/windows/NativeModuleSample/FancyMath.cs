// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System;
using Microsoft.ReactNative.Managed;

namespace NativeModuleSample
{
    namespace NativeModuleSample
    {
        [ReactModule]
        class FancyMath
        {
            [ReactConstant]
            public double E = Math.E;

            [ReactConstant("Pi")]
            public double PI = Math.PI;

            [ReactMethod("add")]
            public void Add(double a, double b, ReactPromise<double> promise)
            {
                double result = a + b;
                AddEvent(result);
                promise.Resolve(result);
            }

            [ReactEvent]
            public Action<double> AddEvent { get; set; }
        }
    }
}
