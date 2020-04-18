---
id: native-modules-jsvalue
title: Using JSValue
---

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
