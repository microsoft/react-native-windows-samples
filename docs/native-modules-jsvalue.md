---
id: native-modules-jsvalue
title: Using JSValue
---

>**This documentation and the underlying platform code is a work in progress.**

JSValue is a native, immutable invariant value type, and is meant to hold any of the commonly used JS types: bools, ints, doubles, strings, arrays, and objects. It is provided for native developers (writing native modules or view managers) who want an equivalent to the `folly::dynamic` type that is compatible with the WinRT ABI surface provided by `Microsoft.ReactNative`.

Two JSValue implementations are provided: one for C++ developers in the `Microsoft.ReactNative.Cxx` shared project, and one for C# developers in the `Microsoft.ReactNative.SharedManaged` project.

> This purpose of this document is to provide equivalency to the scenarios supported by [folly/dynamic.h](https://github.com/facebook/folly/blob/master/folly/docs/Dynamic.md).

## Overview

### C#

Here are some code samples to get started (assumes a `using Microsoft.ReactNative.Managed;` was used):

```csharp
JSValue twelve = 12; // creates a JSValue that holds an integer
JSValue str = "string"; // yep, this one is a String

// a few other types.
JSValue nul = JSValue.Null;
JSValue boolean = false;

// Arrays can be initialized with JSValueArray.
JSValueArray array = new JSValueArray() { "array ", "of", 4, " elements" };
Debug.Assert(array.Count == 4);
JSValueArray emptyArray = new JSValueArray();
Debug.Assert(emptyArray.Count == 0);

// JSValueArrays can be implicitly converted to JSValues, however
// like all JSValues they will be immutable. Accessing the contents
// via the AsArray() method will return an IReadOnlyList<JSValue>.
JSValue array2 = array;
Debug.Assert(array2.AsArray().Count == 4);
JSValue emptyArray2 = emptyArray;
Debug.Assert(emptyArray2.AsArray().Count == 0);

// Maps from strings to JSValues are called objects. The
// JSValueObject type is how you make an empty map from strings
// to JSValues.
JSValueObject map = new JSValueObject();
map["something"] = 12;
map["another_something"] = map["something"].AsInt32() * 2;

// JSValueObjects may be initialzed this way
JSValueObject map2 = new JSValueObject()
{
    { "something", 12 },
    { "another_something", 24 },
};

// Like JSValueArrays, JSValueObjects can also be implicitly
// converted to JSValues, and likewise they will be immutable.
// Accessing the contents via the AsObject() method will return an
// IReadOnlyDictionary<string, JSValue>.
JSValue map3 = map;
Debug.Assert(map3.AsObject().Count == 2);
JSValue map4 = map2;
Debug.Assert(map4.AsObject().Count == 2);
```

### C++/WinRT

Here are some code samples to get started (assumes a `#include "JSValue.h"` was used):

```c++
JSValue twelve = 12; // creates a JSValue that holds an integer
JSValue str = "string"; // yep, this one is a String

// a few other types.
JSValue nul = nullptr;
JSValue boolean = false;

// Arrays can be initialized with JSValueArray.
JSValueArray array = JSValueArray{ "array ", "of", 4, " elements" };
assert(array.size() == 4);
JSValueArray emptyArray = JSValueArray{};
assert(emptyArray.size() == 0);

// JSValueArrays can be explicitly converted to JSValues, however
// like all JSValues they will be immutable. Accessing the contents
// via the AsArray() method will return a const JSValueArray.
JSValue array2 = std::move(array);
assert(array2.AsArray().size() == 4);
JSValue emptyArray2 = std::move(emptyArray);
assert(emptyArray2.AsArray().size() == 0);

// Maps from strings to JSValues are called objects. The
// JSValueObject type is how you make an empty map from strings
// to JSValues.
JSValueObject map = JSValueObject{};
map["something"] = 12;
map["another_something"] = map["something"].AsInt32() * 2;

// JSValueObjects may be initialzed this way
JSValueObject map2 = JSValueObject
{
    { "something", 12 },
    { "another_something", 24 },
};

// Like JSValueArrays, JSValueObjects can also be explicitly
// converted to JSValues, and likewise they will be immutable.
// Accessing the contents via the AsObject() method will return
// a const JSValueObject.
JSValue map3 = std::move(map);
assert(map3.AsObject().size() == 2);
JSValue map4 = std::move(map2);
assert(map4.AsObject().size() == 2);
```

## Runtime Type Checking and Conversions

While most unsupported operations will cause compilation errors, some operations on JSValues require checking at runtime that the stored type is compatible with the operation. Some operations may throw runtime exceptions or produce unexpected behavior as type conversions fail and default values are returned.

More examples should hopefully clarify this:

### C#

```csharp
JSValue dint = 42;

JSValue str = "foo";
JSValue anotherStr = str + "something"; // fine
JSValue thisDoesntCompile = str + dint; // compilation error
```

Explicit type conversions can be requested for some of the basic types:

```csharp
JSValue dint = 12345678;
JSValue doub = dint.AsDouble(); // doub will hold 12345678.0
JSValue str = dint.AsString(); // str == "12345678"

JSValue hugeInt = long.MaxValue; // hugeInt = 9223372036854775807
JSValue hugeDoub = hugeInt.AsDouble(); // hugeDoub = 9.2233720368547758E+18
```

### C++/WinRT

```c++
JSValue dint = 42;

JSValue str = "foo";
JSValue thisDoesntCompile = str + "something"; // compilation error
JSValue thisDoesntCompile2 = str + dint; // compilation error
```

Explicit type conversions can be requested for some of the basic types:

```c++
#ifdef max
#undef max
#endif

JSValue dint = 12345678;
JSValue doub = dint.AsDouble(); // doub will hold 12345678.0
JSValue str = dint.AsString(); // str == "12345678"
JSValue hugeInt = std::numeric_limits<int64_t>::max();
JSValue hugeDoub = hugeInt.AsDouble();
```

## Iteration and Lookup

### C#

You can iterate over JSValueArrays as you would over any C# enumerable.

```csharp
JSValueArray array = new JSValueArray() { 2, 3, "foo" };

foreach (var val in array)
{
    doSomethingWith(val);
}
```

You can iterate over JSValueObjects just like any other `IDictionary<string, JSValue>`.

```csharp
JSValueObject obj = new JSValueObject() { { "2", 3}, { "hello", "world" }, { "x", 4 } };

foreach (var kvp in obj)
{
    // Key is kvp.Key, value is kvp.Value
    processKey(kvp.Key);
    processValue(kvp.Value);
}

foreach (var key in obj.Keys)
{
    processKey(key);
}

foreach (var value in obj.Values)
{
    processValue(value);
}
```

You can find an element by key in a JSValueObject using the `TryGetValue()` method,
which takes the key and returns `true` if a key is present and provides the value as an out variable. If the key is not preset, it returns `false` and the out variable will be null.

```csharp
JSValueObject obj = new JSValueObject() { { "2", 3}, { "hello", "world" }, { "x", 4 } };

if (obj.TryGetValue("hello", out JSValue value))
{
    // value is "world"
}

if (obj.TryGetValue("no_such_key", out JSValue value2))
{
    // this block will not be executed
}
// value2 is null
```

### C++/WinRT

You can iterate over JSValueArrays as you would over any C++ sequence container.

```c++
JSValueArray array = JSValueArray{ 2, 3, "foo" };

for (auto& val : array)
{
    doSomethingWith(val);
}
```

You can iterate over JSValueObjects just like any other C++ `std::map`.

```c++
JSValueObject obj = JSValueObject{ { "2", 3}, { "hello", "world" }, { "x", 4 } };

for (auto& pair : obj)
{
    // Key is pair.first, value is pair.second
    processKey(pair.first);
    processValue(pair.second);
}
```

You can find an element by key in a dynamic map using the `find()` method,
which returns an iterator:

```c++
JSValueObject obj = JSValueObject{ { "2", 3}, { "hello", "world" }, { "x", 4 } };

auto pos = obj.find("hello");
// pos->first is "hello"
// pos->second is "world"

auto pos = obj.find("no_such_key");
// pos == obj.end()
```

## Use for JSON

Unlike `folly::dynamic`, there are no built-in mechanisms for parsing or creating JSON strings directy from JValues.

## Performance

JSValues can be useful for manipulating large and complex JS objects in your native code, giving you random access to just the values you need. However, note that there is a performance penalty to doing this, as the entirety of the JS object will be parsed into the JSValue before it is passed to your code.

The performance hit of using JSValue in your external native code is in addition to the performance hit of Microsoft.ReactNative's own internal use of `folly::dynamic`. Data is marshalled out of Microsoft.ReactNative through a high-performance serialization interface, however reading that data back into a JSValue means taking the time and memory to completely re-construct the original object structure.

For more information, see [Marshalling Data](native-modules-marshalling-data.md).
