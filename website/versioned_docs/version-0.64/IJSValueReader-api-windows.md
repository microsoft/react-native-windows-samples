---
id: version-0.64-IJSValueReader
title: IJSValueReader
original_id: IJSValueReader
---

Kind: `interface`



Forward-only reader for JSON-like streams.<br/>It is used to read data sent between native modules and the Microsoft.ReactNative.dll.<br/><br/>The JSON-like streams are data structures that satisfy the [JSON specification](https://tools.ietf.org/html/rfc8259). The data structure may have objects with name-value pairs and arrays of items. Property values or array items can be of type `Null`, `Object`, `Array`, `String`, `Boolean`, or `Number`. The `IJSValueReader` treats the `Number` type as `Int64` or `Double`. See [`JSValueType`](JSValueType).<br/><br/>When `IJSValueReader` reads data it must walk the whole tree without skipping any items. It means that if the current value type is `Object`, then we must call [`GetNextObjectProperty`](#getnextobjectproperty) to start reading its properties, and if the current type is `Array`, then we must call [`GetNextArrayItem`](#getnextarrayitem) to start reading its items.<br/><br/>See the [`IJSValueWriter`](IJSValueWriter) for the corresponding writer interface.<br/><br/>The [`IJSValueReader`](IJSValueReader) and [`IJSValueWriter`](IJSValueWriter) must be rarely used directly. Use them to create serializer and deserializer functions for a type. The rest of application code must use these functions to serialize/deserialize values. The `Microsoft.ReactNative.Cxx` and `Microsoft.ReactNative.Managed` projects offer serializer/deserializer functions for many standard types. Use them directly or to define serializer/deserializer functions for your types.

## Properties
### ValueType
`readonly`  [`JSValueType`](JSValueType) `ValueType`

Gets the type of the current value.



## Methods
### GetBoolean
bool **`GetBoolean`**()

Gets the current `Boolean` value.



### GetDouble
double **`GetDouble`**()

Gets the current `Number` value as a `Double`.



### GetInt64
int64_t **`GetInt64`**()

Gets the current `Number` value as an `Int64`.



### GetNextArrayItem
bool **`GetNextArrayItem`**()

Gets the next array item and makes its value to be the current value.<br/><br/>It returns **`true`** if the next array item is acquired successfully. Otherwise, it returns **`false`**, and it means that reading of the JSON-like array is completed.<br/><br/>**Note**<br/>- Use [`ValueType`](#valuetype) to get the type of the array item and other GetXXX methods to read it.<br/>- Use [`GetNextObjectProperty`](#getnextobjectproperty) method to start reading property value of type`JSValueType::Object`.<br/>- Use [`GetNextArrayItem`](#getnextarrayitem) method to start reading property value of type`JSValueType::Array`



### GetNextObjectProperty
bool **`GetNextObjectProperty`**(**out** string propertyName)

Gets the next object property and makes its value to be the current value.<br/><br/>It returns **`true`** if the next property is acquired successfully. In that case the `propertyName` is set to the name of the property. Otherwise, it returns **`false`**, that means that reading of the JSON-like object is completed.<br/><br/>**Note**<br/>- Use [`ValueType`](#valuetype) to get the type of the property value and other GetXXX methods to read it.<br/>- Use [`GetNextObjectProperty`](#getnextobjectproperty) method to start reading property value of type`JSValueType::Object`.<br/>- Use [`GetNextArrayItem`](#getnextarrayitem) method to start reading property value of type`JSValueType::Array`



### GetString
string **`GetString`**()

Gets the current `String` value.






## Referenced by
- [`IRedBoxErrorInfo`](IRedBoxErrorInfo)
- [`IViewManagerWithCommands`](IViewManagerWithCommands)
- [`IViewManagerWithNativeProperties`](IViewManagerWithNativeProperties)
- [`MethodDelegate`](MethodDelegate)
- [`SyncMethodDelegate`](SyncMethodDelegate)
