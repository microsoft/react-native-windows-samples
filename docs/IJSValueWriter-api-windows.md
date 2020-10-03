---
id: ijsvaluewriter-api
title: IJSValueWriter
---

``IJSValueWriter`` is used to read data from JavaScript in custom native modules.  It acts as a stream.

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

### `WriteNull()`

```csharp
void WriteNull()
```

Write a null value.

### `WriteBoolean()`

```csharp
void WriteBoolean(bool value);
```

Write a boolean value.

### `WriteInt64()`

```csharp
void WriteInt64(int64 value);
```

Write a number value from an integer.

### `WriteDouble()`

```csharp
void WriteDouble(double value);
```

Write a number value from a double.

### `WriteString()`

```csharp
void WriteString(string value);
```

Write a string value.

### `WriteObjectBegin()`

```csharp
void WriteObjectBegin();
```

Start writing an object.

### `WritePropertyName()`

```csharp
void WritePropertyName(String name);
```

Write a property within an object.  This should then be followed by writing the value of that property.

### `WriteObjectEnd()`

```csharp
void WriteObjectEnd();
```

Complete writing an object.

### `WriteArrayBegin()`

```csharp
void WriteArrayBegin();
```

Start writing an array.

### `WriteArrayEnd()`

```csharp
void WriteArrayEnd();
```

Complete writing an array.


## Delegates

### ```JSValueArgWriter```

```csharp
delegate void JSValueArgWriter(IJSValueWriter writer);
```


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
