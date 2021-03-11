---
id: version-0.63-IJSValueReader
title: IJSValueReader
original_id: IJSValueReader
---

Kind: `interface`



## Properties
### ValueType
`readonly`  [`JSValueType`](JSValueType) `ValueType`



## Methods
### GetBoolean
bool **`GetBoolean`**()



### GetDouble
double **`GetDouble`**()



### GetInt64
int64_t **`GetInt64`**()



### GetNextArrayItem
bool **`GetNextArrayItem`**()



### GetNextObjectProperty
bool **`GetNextObjectProperty`**(**out** string propertyName)



### GetString
string **`GetString`**()






## Referenced by
- [`IRedBoxErrorInfo`](IRedBoxErrorInfo)
- [`IViewManagerWithCommands`](IViewManagerWithCommands)
- [`IViewManagerWithNativeProperties`](IViewManagerWithNativeProperties)
- [`MethodDelegate`](MethodDelegate)
- [`SyncMethodDelegate`](SyncMethodDelegate)
