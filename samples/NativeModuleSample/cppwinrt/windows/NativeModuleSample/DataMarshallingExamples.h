// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include "pch.h"
#include <string>

#define _USE_MATH_DEFINES
#include <math.h>

#include "NativeModules.h"


namespace NativeModuleSample
{
    void DebugWriteLine(const std::string& message) noexcept
    {
        std::string output = message + "\n";
        OutputDebugStringA(output.c_str());
    }

    #pragma region Native Objects

    // These native objects are used below under "Object Types".

    // By adding REACT_STRUCT, instances of this struct can be used in
    // the signatures of native methods, and will be automatically
    // marshalled to / from JS object types with the keys mapping
    // to the annotated field and/or property names.
    REACT_STRUCT(Point);
    struct Point
    {
        REACT_FIELD(X);
        double X;

        REACT_FIELD(Y);
        double Y;

        std::string to_string() noexcept
        {
            return "(" + std::to_string(X) + "," + std::to_string(Y) + ")";
        }
    };

    // This example shows that native objects can even nest native
    // objects as fields and / or properties, and still rely on
    // the automatic data marshalling provided.
    REACT_STRUCT(Line);
    struct Line
    {
        REACT_FIELD(Start);
        Point Start;

        REACT_FIELD(End);
        Point End;

        std::string to_string() noexcept
        {
            return Start.to_string() + " -> " + End.to_string();
        }
    };

    #pragma endregion

    REACT_MODULE(DataMarshallingExamples);
    struct DataMarshallingExamples
    {
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
        // NativeModules.DataMarshallingExamples.ExplicitPrimtiveArgs(true, 1, 3.14, 'Hello World');
        REACT_METHOD(ExplicitPrimtiveArgs);
        void ExplicitPrimtiveArgs(bool b, int i, double d, std::string s) noexcept
        {
            DebugWriteLine("bool b: " + b ? "true" : "false");
            DebugWriteLine("int i: " + std::to_string(i));
            DebugWriteLine("double d: " + std::to_string(d));
            DebugWriteLine("string s: " + s);
        }

        // Example JS:
        //
        // NativeModules.DataMarshallingExamples.ReturnExplicitBoolean(result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.ReturnExplicitBooleanSync();
        // console.log(syncResult);
        REACT_METHOD(ReturnExplicitBoolean);
        REACT_SYNC_METHOD(ReturnExplicitBoolean, L"ReturnExplicitBooleanSync");
        bool ReturnExplicitBoolean() noexcept
        {
            auto result = true;
            DebugWriteLine("returning: " + result ? "true" : "false");
            return result;
        }

        // Example JS:
        //
        // NativeModules.DataMarshallingExamples.ReturnExplicitInteger(result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.ReturnExplicitIntegerSync();
        // console.log(syncResult);
        REACT_METHOD(ReturnExplicitInteger);
        REACT_SYNC_METHOD(ReturnExplicitInteger, L"ReturnExplicitIntegerSync");
        int ReturnExplicitInteger() noexcept
        {
            auto result = 1;
            DebugWriteLine("returning: " + std::to_string(result));
            return result;
        }

        // Example JS:
        //
        // NativeModules.DataMarshallingExamples.ReturnExplicitDouble(result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.ReturnExplicitDoubleSync();
        // console.log(syncResult);
        REACT_METHOD(ReturnExplicitDouble);
        REACT_SYNC_METHOD(ReturnExplicitDouble, L"ReturnExplicitDoubleSync");
        double ReturnExplicitDouble() noexcept
        {
            auto result = M_PI;
            DebugWriteLine("returning: " + std::to_string(result));
            return result;
        }

        // Example JS:
        //
        // NativeModules.DataMarshallingExamples.ReturnExplicitString(result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.ReturnExplicitStringSync();
        // console.log(syncResult);
        REACT_METHOD(ReturnExplicitString);
        REACT_SYNC_METHOD(ReturnExplicitString, L"ReturnExplicitStringSync");
        std::string ReturnExplicitString() noexcept
        {
            std::string result = "Hello World";
            DebugWriteLine("returning: " + result);
            return result;
        }

        #pragma endregion

        #pragma region Object Types

        // In these examples, we specify native methods with native object
        // input arguments and / or return values, and rely on the code
        // in Microsoft.ReactNative.Managed to handle all of the data
        // marshalling to / from JS objects.
        //
        // Both synchronous and asynchronous methods are provided where
        // possible.

        // Example JS:
        //
        // var p1 = { X: 2, Y: 3 };
        // var p2 = { X: 4, Y: 5 };
        //
        // NativeModules.DataMarshallingExamples.GetMidpoint(p1, p2, result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.GetMidpointSync(p1, p2);
        // console.log(syncResult);
        REACT_METHOD(GetMidpoint);
        REACT_SYNC_METHOD(GetMidpoint, L"GetMidpointSync");
        Point GetMidpoint(Point && p1, Point && p2) noexcept
        {
            DebugWriteLine("Point p1: " + p1.to_string());
            DebugWriteLine("Point p2: " + p2.to_string());

            double midX = 0.5 * (p1.X + p2.X);
            double midY = 0.5 * (p1.Y + p2.Y);

            Point midpoint = Point{ midX, midY };

            DebugWriteLine("returning: " + midpoint.to_string());
            return midpoint;
        }

        // Example JS:
        //
        // var line = { Start: { X: 2, Y: 3 }, End: { X: 4, Y: 5 } };
        //
        // NativeModules.DataMarshallingExamples.GetLength(line, result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.GetLengthSync(line);
        // console.log(syncResult);
        REACT_METHOD(GetLength);
        REACT_SYNC_METHOD(GetLength, L"GetLengthSync");
        double GetLength(Line && line) noexcept
        {
            DebugWriteLine("Line line: " + line.to_string());

            double length = sqrt(pow(line.End.X - line.Start.X, 2) + pow(line.End.Y - line.Start.Y, 2));

            DebugWriteLine("returning: " + std::to_string(length));
            return length;
        }

        #pragma endregion

        #pragma region Arrays / Iterable Types

        // In these examples, we specify native methods with native iterable
        // input arguments and / or return values, and rely on the code
        // in Microsoft.ReactNative.Managed to handle all of the data
        // marshalling to / from JS arrays.
        //
        // Both synchronous and asynchronous methods are provided where
        // possible.

        // Example JS:
        //
        // var values = [ 2, 3, 4, 5];
        //
        // NativeModules.DataMarshallingExamples.GetAverage(values, result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.GetAverageSync(values);
        // console.log(syncResult);
        REACT_METHOD(GetAverage);
        REACT_SYNC_METHOD(GetAverage, L"GetAverageSync");
        double GetAverage(std::vector<double> values) noexcept
        {
            double sum = 0.0;

            for (size_t i = 0; i < values.size(); i++)
            {
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
        // NativeModules.DataMarshallingExamples.Concatenate(values, result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.ConcatenateSync(values);
        // console.log(syncResult);
        REACT_METHOD(Concatenate);
        REACT_SYNC_METHOD(Concatenate, L"ConcatenateSync");
        std::string Concatenate(std::vector<std::string> values) noexcept
        {
            std::string result = "";

            for (auto value : values)
            {
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
        // NativeModules.DataMarshallingExamples.Split(s, separators, result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.SplitSync(s, separators);
        // console.log(syncResult);
        REACT_METHOD(Split);
        REACT_SYNC_METHOD(Split, L"SplitSync");
        std::vector<std::string> Split(std::string s, std::string separators) noexcept
        {
            std::vector<std::string> split;

            char* str = s.data();

            char* ptr;
            const char* delim = separators.c_str();

            char* token;
            token = strtok_s(str, delim, &ptr);

            while (token)
            {
                split.push_back(std::string(token));
                token = strtok_s(NULL, delim, &ptr);
            }

            return split;
        }

        #pragma endregion

        #pragma region Using JSValue

        // In these examples, we specify native methods with JSValue
        // input arguments and / or return values, and rely on the code
        // in Microsoft.ReactNative.Managed to handle all of the data
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
        // JSValues can be useful for marshalling large and complex JS objects
        // into your native code, giving you random access to just the values
        // you need. However, note that there is a performance penalty to doing
        // this, as the entirety of the JS object will be parsed into the
        // JSValue before it is passed to your code.

        // Example JS:
        //
        // NativeModules.DataMarshallingExamples.JSValueArgs(true, 1, 3.14, 'Hello World');
        REACT_METHOD(JSValueArgs);
        void JSValueArgs(JSValue && b, JSValue && i, JSValue && d, JSValue && s) noexcept
        {
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
        // NativeModules.DataMarshallingExamples.GetMidpointByJSValue(p1, p2, result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.GetMidpointByJSValue(p1, p2);
        // console.log(syncResult);
        REACT_METHOD(GetMidpointByJSValue);
        REACT_SYNC_METHOD(GetMidpointByJSValue, L"GetMidpointByJSValueSync");
        JSValue GetMidpointByJSValue(JSValue && p1, JSValue && p2) noexcept
        {
            double midX = 0.5 * (p1["x"].AsDouble() + p2["x"].AsDouble());
            double midY = 0.5 * (p1["y"].AsDouble() + p2["y"].AsDouble());

            JSValueObject midpoint = JSValueObject {
                { "x", midX },
                { "y", midY }
            };

            return midpoint;
        }

        #pragma endregion
    };
}
