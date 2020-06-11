---
id: ijsvaluewriter-api
title: IJSValueWriter
---

``IJSValueWriter`` is used to read data from JavaScript in custom NativeModules.  It acts as a stream.

``IJSValueWriter`` supports the following types:

```
  enum JSValueType {
    Null,
    Object,
    Array,
    String,
    Boolean,
    Int64,
    Double,
  };
```
# Reference

## Methods

### ```void WriteNull()```

Write a null value.

### ```void WriteBoolean(Boolean value)```

Write a boolean value.

### ```void WriteInt64(Int64 value)```

Write a number value from an integer.

### ```void WriteDouble(Double value)```

Write a number value from a double.

### ```void WriteString(String value)```

Write a string value.

### ```void WriteObjectBegin()```

Start writing an object.

### ```void WritePropertyName(String name)```

Write a property within an object.  This should then be followed by writing the value of that property.

### ```void WriteObjectEnd()```

Complete writing an object.

### ```void WriteArrayBegin()```

Start writing an array.

### ```void WriteArrayEnd()```

Complete writing an array.


## Delegates

### ```delegate void JSValueArgWriter(IJSValueWriter writer);```

Use this delegate to pass arbitrary value to ABI API.
  
In a function that implements the delegate use the provided writer to stream custom values.

<!-- // Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace Microsoft.ReactNative {

  // Writer for JSON-like streams or tree structures
  [webhosthidden]
  interface IJSValueWriter {
    void WriteNull();
    void WriteBoolean(Boolean value);
    void WriteInt64(Int64 value);
    void WriteDouble(Double value);
    void WriteString(String value);
    void WriteObjectBegin();
    void WritePropertyName(String name);
    void WriteObjectEnd();
    void WriteArrayBegin();
    void WriteArrayEnd();
  }

  // Use this delegate to pass arbitrary value to ABI API.
  // In a function that implements the delegate use the provided writer to stream custom values.
  delegate void JSValueArgWriter(IJSValueWriter writer);
} // namespace Microsoft.ReactNative -->
