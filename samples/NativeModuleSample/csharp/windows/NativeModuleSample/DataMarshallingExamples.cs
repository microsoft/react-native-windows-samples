// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

using Microsoft.ReactNative.Managed;

namespace NativeModuleSample
{
    #region Native Objects

    // These native objects are used below under "Object Types".

    // Without any annotations, instances of this class can be used in
    // the signatures of native methods, and will be automatically
    // marshalled to / from JS object types with the keys mapping
    // to the accessible field and/or property names.
    class Point
    {
        public double X;

        public double Y;

        public override string ToString()
        {
            return $"({X},{Y})";
        }
    }

    // This example shows that native objects can even nest native
    // objects as fields and / or properties, and still rely on
    // the automatic data marshalling provided.
    class Line
    {
        public Point Start;

        public Point End;

        public override string ToString()
        {
            return $"{Start} -> {End}";
        }
    }

    #endregion

    [ReactModule]
    class DataMarshallingExamples
    {
        #region Primitive Types

        // In these examples, we specify native methods with primitive
        // input arguments and / or return values, and rely on the code
        // in Microsoft.ReactNative.Managed to handle all of the data
        // marshalling to / from JS primitives.
        //
        // Both synchronous and asynchronous methods are provided where
        // possible.

        // Example JS:
        //
        // NativeModules.DataMarshallingExamples.ExplicitPrimtiveArgs(true, 1, 3.14, 'Hello World');
        [ReactMethod]
        public void ExplicitPrimtiveArgs(bool b, int i, double d, string s)
        {
            Debug.WriteLine($"bool b: {b}");
            Debug.WriteLine($"int i: {i}");
            Debug.WriteLine($"double d: {d}");
            Debug.WriteLine($"string s: {s}");
        }

        // Example JS:
        //
        // NativeModules.DataMarshallingExamples.ReturnExplicitBoolean(result => {
        //   console.log(result);
        // });
        //
        // var syncResult = NativeModules.DataMarshallingExamples.ReturnExplicitBooleanSync();
        // console.log(syncResult);
        [ReactMethod]
        [ReactSyncMethod(nameof(ReturnExplicitBoolean) + "Sync")]
        public bool ReturnExplicitBoolean()
        {
            var result = true;
            Debug.WriteLine($"returning: {result}");
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
        [ReactMethod]
        [ReactSyncMethod(nameof(ReturnExplicitInteger) + "Sync")]
        public int ReturnExplicitInteger()
        {
            var result = 1;
            Debug.WriteLine($"returning: {result}");
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
        [ReactMethod]
        [ReactSyncMethod(nameof(ReturnExplicitDouble) + "Sync")]
        public double ReturnExplicitDouble()
        {
            var result = Math.PI;
            Debug.WriteLine($"returning: {result}");
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
        [ReactMethod]
        [ReactSyncMethod(nameof(ReturnExplicitString) + "Sync")]
        public string ReturnExplicitString()
        {
            var result = "Hello World";
            Debug.WriteLine($"returning: {result}");
            return result;
        }

        #endregion

        #region Object Types

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
        [ReactMethod]
        [ReactSyncMethod(nameof(GetMidpoint) + "Sync")]
        public Point GetMidpoint(Point p1, Point p2)
        {
            Debug.WriteLine($"Point p1: {p1}");
            Debug.WriteLine($"Point p2: {p2}");

            double midX = 0.5 * (p1.X + p2.X);
            double midY = 0.5 * (p1.Y + p2.Y);

            Point midpoint = new Point() { X = midX, Y = midY };

            Debug.WriteLine($"returning: {midpoint}");
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
        [ReactMethod]
        [ReactSyncMethod(nameof(GetLength) + "Sync")]
        public double GetLength(Line line)
        {
            Debug.WriteLine($"Line line: {line}");

            double length = Math.Sqrt(Math.Pow(line.End.X - line.Start.X, 2) + Math.Pow(line.End.Y - line.Start.Y, 2));

            Debug.WriteLine($"returning: {length}");
            return length;
        }

        #endregion

        #region Arrays / Enumerable Types

        // In these examples, we specify native methods with native enumerable
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
        [ReactMethod]
        [ReactSyncMethod(nameof(GetAverage) + "Sync")]
        public double GetAverage(double[] values)
        {
            double sum = 0.0;

            for (int i = 0; i < values.Length; i++)
            {
                Debug.WriteLine($"double values[{i}]: {values[i]}");
                sum += values[i];
            }

            double average = sum / values.Length;

            Debug.WriteLine($"returning: {average}");
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
        [ReactMethod]
        [ReactSyncMethod(nameof(Concatenate) + "Sync")]
        public string Concatenate(IReadOnlyList<string> values)
        {
            StringBuilder sb = new StringBuilder();

            foreach (string value in values)
            {
                sb.Append(value);
            }

            var result = sb.ToString();
            Debug.WriteLine($"returning: {result}");
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
        [ReactMethod]
        [ReactSyncMethod(nameof(Split) + "Sync")]
        public IList<string> Split(string s, string separators)
        {
            string[] split = s.Split(separators.ToCharArray());
            return split.ToList();
        }

        #endregion

        #region Using JSValue

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
        [ReactMethod]
        public void JSValueArgs(JSValue b, JSValue i, JSValue d, JSValue s)
        {
            // This method
            Debug.WriteLine($"JSValue b: {b.AsBoolean()}");
            Debug.WriteLine($"JSValue i: {i.AsInt32()}");
            Debug.WriteLine($"JSValue d: {d.AsDouble()}");
            Debug.WriteLine($"JSValue s: {s.AsString()}");
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
        [ReactMethod]
        [ReactSyncMethod(nameof(GetMidpointByJSValue) + "Sync")]
        public JSValue GetMidpointByJSValue(JSValue p1, JSValue p2)
        {
            double midX = 0.5 * (p1["x"].AsDouble() + p2["x"].AsDouble());
            double midY = 0.5 * (p1["y"].AsDouble() + p2["y"].AsDouble());

            JSValue midpoint = new JSValueObject()
            {
                { "x", midX },
                { "y", midY },
            };

            return midpoint;
        }

        #endregion
    }
}
