---
id: version-0.82-IJSValueWriter
title: IJSValueWriter
original_id: IJSValueWriter
---

## New Architecture

Kind: `interface`

JSON-like stream writer.
It is used to write data that is sent between native modules and the Microsoft.ReactNative library.

The JSON-like streams are data structures that satisfy the [JSON specification](https://tools.ietf.org/html/rfc8259). The data structure may have objects with name-value pairs and arrays of items. Property values or array items can be of type `Null`, `Object`, `Array`, `String`, `Boolean`, or `Number`. The `IJSValueWriter` treats the `Number` type as `Int64` or `Double`. See [`JSValueType`](JSValueType).

See the [`IJSValueReader`](IJSValueReader) for the corresponding reader interface.

The [`IJSValueReader`](IJSValueReader) and [`IJSValueWriter`](IJSValueWriter) must be rarely used directly. Use them to create functions that serialize a native type or deserialize into a native type. The rest of application code must use these functions to serialize/deserialize values. The `Microsoft.ReactNative.Cxx` and `Microsoft.ReactNative.Managed` projects offer serializer/deserializer functions for many standard types. Use them directly or to define serializer/deserializer functions for your types.

### Methods
#### WriteArrayBegin
void **`WriteArrayBegin`**()

Starts writing an array.

#### WriteArrayEnd
void **`WriteArrayEnd`**()

Completes writing an array.

#### WriteBoolean
void **`WriteBoolean`**(bool value)

Writes a `Boolean` value.

#### WriteDouble
void **`WriteDouble`**(double value)

Writes a `Number` value from a double.

#### WriteInt64
void **`WriteInt64`**(int64_t value)

Writes a `Number` value from an integer.

#### WriteNull
void **`WriteNull`**()

Writes a `Null` value.

#### WriteObjectBegin
void **`WriteObjectBegin`**()

Starts writing an `Object`.

#### WriteObjectEnd
void **`WriteObjectEnd`**()

Completes writing an object.

#### WritePropertyName
void **`WritePropertyName`**(string name)

Writes a property name within an object. This call should then be followed by writing the value of that property.

#### WriteString
void **`WriteString`**(string value)

Writes a `String` value.

### Referenced by
- [`Color`](Color)
- [`ConstantProviderDelegate`](ConstantProviderDelegate)
- [`JSValueArgWriter`](JSValueArgWriter)
- [`MethodDelegate`](MethodDelegate)
- [`MethodResultCallback`](MethodResultCallback)
- [`SyncMethodDelegate`](SyncMethodDelegate)

## Old Architecture

Kind: `interface`

JSON-like stream writer.
It is used to write data that is sent between native modules and the Microsoft.ReactNative library.

The JSON-like streams are data structures that satisfy the [JSON specification](https://tools.ietf.org/html/rfc8259). The data structure may have objects with name-value pairs and arrays of items. Property values or array items can be of type `Null`, `Object`, `Array`, `String`, `Boolean`, or `Number`. The `IJSValueWriter` treats the `Number` type as `Int64` or `Double`. See [`JSValueType`](JSValueType).

See the [`IJSValueReader`](IJSValueReader) for the corresponding reader interface.

The [`IJSValueReader`](IJSValueReader) and [`IJSValueWriter`](IJSValueWriter) must be rarely used directly. Use them to create functions that serialize a native type or deserialize into a native type. The rest of application code must use these functions to serialize/deserialize values. The `Microsoft.ReactNative.Cxx` and `Microsoft.ReactNative.Managed` projects offer serializer/deserializer functions for many standard types. Use them directly or to define serializer/deserializer functions for your types.

### Methods
#### WriteArrayBegin
void **`WriteArrayBegin`**()

Starts writing an array.

#### WriteArrayEnd
void **`WriteArrayEnd`**()

Completes writing an array.

#### WriteBoolean
void **`WriteBoolean`**(bool value)

Writes a `Boolean` value.

#### WriteDouble
void **`WriteDouble`**(double value)

Writes a `Number` value from a double.

#### WriteInt64
void **`WriteInt64`**(int64_t value)

Writes a `Number` value from an integer.

#### WriteNull
void **`WriteNull`**()

Writes a `Null` value.

#### WriteObjectBegin
void **`WriteObjectBegin`**()

Starts writing an `Object`.

#### WriteObjectEnd
void **`WriteObjectEnd`**()

Completes writing an object.

#### WritePropertyName
void **`WritePropertyName`**(string name)

Writes a property name within an object. This call should then be followed by writing the value of that property.

#### WriteString
void **`WriteString`**(string value)

Writes a `String` value.

### Referenced by
- [`ConstantProviderDelegate`](ConstantProviderDelegate)
- [`JSValueArgWriter`](JSValueArgWriter)
- [`MethodDelegate`](MethodDelegate)
- [`MethodResultCallback`](MethodResultCallback)
- [`SyncMethodDelegate`](SyncMethodDelegate)
