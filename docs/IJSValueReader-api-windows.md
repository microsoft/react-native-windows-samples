---
id: IJSValueReader
title: IJSValueReader
---

Kind: `interface`



`IJSIValueReader` is used to read data from JavaScript in custom native modules.  It acts as a stream and supports all the types in [`JSValueType`](JSValueType).

## Properties
### ValueType
`readonly`  [`JSValueType`](JSValueType) `ValueType`

Returns the type of the current value.



## Methods
### GetBoolean
bool **`GetBoolean`**()

Gets the current boolean value.



### GetDouble
double **`GetDouble`**()

Gets the current number value as a double.



### GetInt64
int64_t **`GetInt64`**()

Gets the current number value as an int.



### GetNextArrayItem
bool **`GetNextArrayItem`**()

Moves the reader to the next array item.  Returns if there is another item in the array.



### GetNextObjectProperty
bool **`GetNextObjectProperty`**(**out** string propertyName)

Returns whether there is another property in the current object.  If there is `propertyName` indicates the name of the property.



### GetString
string **`GetString`**()

Gets the current string value.






## Referenced by
- [`IRedBoxErrorInfo`](IRedBoxErrorInfo)
- [`IViewManagerCreateWithProperties`](IViewManagerCreateWithProperties)
- [`IViewManagerWithCommands`](IViewManagerWithCommands)
- [`IViewManagerWithNativeProperties`](IViewManagerWithNativeProperties)
- [`MethodDelegate`](MethodDelegate)
- [`SyncMethodDelegate`](SyncMethodDelegate)
