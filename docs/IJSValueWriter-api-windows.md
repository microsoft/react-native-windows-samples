---
id: IJSValueWriter
title: IJSValueWriter
---

Kind: `interface`



`IJSValueWriter` is used to write JavaScript values from custom native modules.  It acts as a stream and supports all the types in [`JSValueType`](JSValueType).



## Methods
### WriteArrayBegin
void **`WriteArrayBegin`**()

Start writing an array.



### WriteArrayEnd
void **`WriteArrayEnd`**()

Complete writing an array.



### WriteBoolean
void **`WriteBoolean`**(bool value)

Write a boolean value.



### WriteDouble
void **`WriteDouble`**(double value)

Write a number value from a double.



### WriteInt64
void **`WriteInt64`**(int64_t value)

Write a number value from an integer.



### WriteNull
void **`WriteNull`**()

Write a null value.



### WriteObjectBegin
void **`WriteObjectBegin`**()

Start writing an object.



### WriteObjectEnd
void **`WriteObjectEnd`**()

Complete writing an object.



### WritePropertyName
void **`WritePropertyName`**(string name)

Write a property within an object.  This should then be followed by writing the value of that property.



### WriteString
void **`WriteString`**(string value)

Write a string value






## Referenced by
- [`ConstantProviderDelegate`](ConstantProviderDelegate)
- [`JSValueArgWriter`](JSValueArgWriter)
- [`MethodDelegate`](MethodDelegate)
- [`MethodResultCallback`](MethodResultCallback)
- [`SyncMethodDelegate`](SyncMethodDelegate)
