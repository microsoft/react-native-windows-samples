---
id: version-0.63-IJSValueWriter
title: IJSValueWriter
original_id: IJSValueWriter
---

Kind: `interface`





## Methods
### WriteArrayBegin
void **`WriteArrayBegin`**()



### WriteArrayEnd
void **`WriteArrayEnd`**()



### WriteBoolean
void **`WriteBoolean`**(bool value)



### WriteDouble
void **`WriteDouble`**(double value)



### WriteInt64
void **`WriteInt64`**(int64_t value)



### WriteNull
void **`WriteNull`**()



### WriteObjectBegin
void **`WriteObjectBegin`**()



### WriteObjectEnd
void **`WriteObjectEnd`**()



### WritePropertyName
void **`WritePropertyName`**(string name)



### WriteString
void **`WriteString`**(string value)






## Referenced by
- [`ConstantProviderDelegate`](ConstantProviderDelegate)
- [`JSValueArgWriter`](JSValueArgWriter)
- [`MethodDelegate`](MethodDelegate)
- [`MethodResultCallback`](MethodResultCallback)
- [`SyncMethodDelegate`](SyncMethodDelegate)
