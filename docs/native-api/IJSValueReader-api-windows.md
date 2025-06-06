---
id: IJSValueReader
title: IJSValueReader
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

## New Architecture

Kind: `interface`

Forward-only reader for JSON-like streams.
It is used to read data sent between native modules and the Microsoft.ReactNative library.

The JSON-like streams are data structures that satisfy the [JSON specification](https://tools.ietf.org/html/rfc8259). The data structure may have objects with name-value pairs and arrays of items. Property values or array items can be of type `Null`, `Object`, `Array`, `String`, `Boolean`, or `Number`. The `IJSValueReader` treats the `Number` type as `Int64` or `Double`. See [`JSValueType`](JSValueType).

When `IJSValueReader` reads data it must walk the whole tree without skipping any items. For example, if the current value type is `Object`, one must call [`GetNextObjectProperty`](#getnextobjectproperty) to start reading the current object's properties, and if the current type is `Array`, [`GetNextArrayItem`](#getnextarrayitem) must be called to start reading the elements in the array. These functions must be called in a loop until they return false, which signifies that there are no more items within the object or array being traversed.

See the [`IJSValueWriter`](IJSValueWriter) for the corresponding writer interface.

The [`IJSValueReader`](IJSValueReader) and [`IJSValueWriter`](IJSValueWriter) must be rarely used directly. Use them to create functions that serialize a native type or deserialize into a native type. The rest of application code must use these functions to serialize/deserialize values. The `Microsoft.ReactNative.Cxx` and `Microsoft.ReactNative.Managed` projects offer serializer/deserializer functions for many standard types. Use them directly or to define serializer/deserializer functions for your types.

### Properties
#### ValueType
`readonly`  [`JSValueType`](JSValueType) `ValueType`

Gets the type of the current value.

### Methods
#### GetBoolean
bool **`GetBoolean`**()

Gets the current `Boolean` value.

#### GetDouble
double **`GetDouble`**()

Gets the current `Number` value as a `Double`.

#### GetInt64
int64_t **`GetInt64`**()

Gets the current `Number` value as an `Int64`.

#### GetNextArrayItem
bool **`GetNextArrayItem`**()

Advances the iterator within the current array to fetch the next array element. The element can then be obtained by calling one of the Get functions.

Returns **`true`** if the next array item is acquired successfully. Otherwise, it returns **`false`**, meaning that reading of the JSON-like array is completed.

**Note**
- Use [`ValueType`](#valuetype) to get the type of the array item and other GetXXX methods to read it.
- Use [`GetNextObjectProperty`](#getnextobjectproperty) method to start reading property value of type [`JSValueType`](JSValueType) `Object`.
- Use [`GetNextArrayItem`](#getnextarrayitem) method to start reading property value of type [`JSValueType`](JSValueType) `Array

#### GetNextObjectProperty
bool **`GetNextObjectProperty`**(**out** string propertyName)

Advances the iterator within the current object to fetch the next object property. The property value can then be obtained by calling one of the Get functions.

Returns **`true`** if the next property is acquired successfully. In that case the `propertyName` is set to the name of the property. Otherwise, it returns **`false`**, meaning that reading of the JSON-like object is completed.

**Note**
- Use [`ValueType`](#valuetype) to get the type of the property value and other GetXXX methods to read it.
- Use [`GetNextObjectProperty`](#getnextobjectproperty) method to start reading property value of type [`JSValueType`](JSValueType) `Object`.
- Use [`GetNextArrayItem`](#getnextarrayitem) method to start reading property value of type [`JSValueType`](JSValueType) `Array

#### GetString
string **`GetString`**()

Gets the current `String` value.

### Referenced by
- [`Color`](Color)
- [`HandleCommandArgs`](HandleCommandArgs)
- [`IComponentProps`](IComponentProps)
- [`IRedBoxErrorInfo`](IRedBoxErrorInfo)
- [`ImageSource`](ImageSource)
- [`MethodDelegate`](MethodDelegate)
- [`SyncMethodDelegate`](SyncMethodDelegate)

## Old Architecture

Kind: `interface`

Forward-only reader for JSON-like streams.
It is used to read data sent between native modules and the Microsoft.ReactNative library.

The JSON-like streams are data structures that satisfy the [JSON specification](https://tools.ietf.org/html/rfc8259). The data structure may have objects with name-value pairs and arrays of items. Property values or array items can be of type `Null`, `Object`, `Array`, `String`, `Boolean`, or `Number`. The `IJSValueReader` treats the `Number` type as `Int64` or `Double`. See [`JSValueType`](JSValueType).

When `IJSValueReader` reads data it must walk the whole tree without skipping any items. For example, if the current value type is `Object`, one must call [`GetNextObjectProperty`](#getnextobjectproperty) to start reading the current object's properties, and if the current type is `Array`, [`GetNextArrayItem`](#getnextarrayitem) must be called to start reading the elements in the array. These functions must be called in a loop until they return false, which signifies that there are no more items within the object or array being traversed.

See the [`IJSValueWriter`](IJSValueWriter) for the corresponding writer interface.

The [`IJSValueReader`](IJSValueReader) and [`IJSValueWriter`](IJSValueWriter) must be rarely used directly. Use them to create functions that serialize a native type or deserialize into a native type. The rest of application code must use these functions to serialize/deserialize values. The `Microsoft.ReactNative.Cxx` and `Microsoft.ReactNative.Managed` projects offer serializer/deserializer functions for many standard types. Use them directly or to define serializer/deserializer functions for your types.

### Properties
#### ValueType
`readonly`  [`JSValueType`](JSValueType) `ValueType`

Gets the type of the current value.

### Methods
#### GetBoolean
bool **`GetBoolean`**()

Gets the current `Boolean` value.

#### GetDouble
double **`GetDouble`**()

Gets the current `Number` value as a `Double`.

#### GetInt64
int64_t **`GetInt64`**()

Gets the current `Number` value as an `Int64`.

#### GetNextArrayItem
bool **`GetNextArrayItem`**()

Advances the iterator within the current array to fetch the next array element. The element can then be obtained by calling one of the Get functions.

Returns **`true`** if the next array item is acquired successfully. Otherwise, it returns **`false`**, meaning that reading of the JSON-like array is completed.

**Note**
- Use [`ValueType`](#valuetype) to get the type of the array item and other GetXXX methods to read it.
- Use [`GetNextObjectProperty`](#getnextobjectproperty) method to start reading property value of type [`JSValueType`](JSValueType) `Object`.
- Use [`GetNextArrayItem`](#getnextarrayitem) method to start reading property value of type [`JSValueType`](JSValueType) `Array

#### GetNextObjectProperty
bool **`GetNextObjectProperty`**(**out** string propertyName)

Advances the iterator within the current object to fetch the next object property. The property value can then be obtained by calling one of the Get functions.

Returns **`true`** if the next property is acquired successfully. In that case the `propertyName` is set to the name of the property. Otherwise, it returns **`false`**, meaning that reading of the JSON-like object is completed.

**Note**
- Use [`ValueType`](#valuetype) to get the type of the property value and other GetXXX methods to read it.
- Use [`GetNextObjectProperty`](#getnextobjectproperty) method to start reading property value of type [`JSValueType`](JSValueType) `Object`.
- Use [`GetNextArrayItem`](#getnextarrayitem) method to start reading property value of type [`JSValueType`](JSValueType) `Array

#### GetString
string **`GetString`**()

Gets the current `String` value.

### Referenced by
- [`IRedBoxErrorInfo`](IRedBoxErrorInfo)
- [`IViewManagerCreateWithProperties`](IViewManagerCreateWithProperties)
- [`IViewManagerWithCommands`](IViewManagerWithCommands)
- [`IViewManagerWithNativeProperties`](IViewManagerWithNativeProperties)
- [`MethodDelegate`](MethodDelegate)
- [`SyncMethodDelegate`](SyncMethodDelegate)
