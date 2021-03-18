---
id: version-0.64-JsiRuntime
title: JsiRuntime
original_id: JsiRuntime
---

Kind: `class`



> **EXPERIMENTAL**

## Properties
### Description
`readonly`  string `Description`

### Global
`readonly`  [`JsiObjectRef`](JsiObjectRef) `Global`

### IsInspectable
`readonly`  bool `IsInspectable`



## Methods
### Call
[`JsiValueRef`](JsiValueRef) **`Call`**([`JsiObjectRef`](JsiObjectRef) func, [`JsiValueRef`](JsiValueRef) thisArg, [`JsiValueRef`](JsiValueRef) args)



### CallAsConstructor
[`JsiValueRef`](JsiValueRef) **`CallAsConstructor`**([`JsiObjectRef`](JsiObjectRef) func, [`JsiValueRef`](JsiValueRef) args)



### CloneObject
[`JsiObjectRef`](JsiObjectRef) **`CloneObject`**([`JsiObjectRef`](JsiObjectRef) obj)



### ClonePropertyId
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`ClonePropertyId`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)



### CloneString
[`JsiStringRef`](JsiStringRef) **`CloneString`**([`JsiStringRef`](JsiStringRef) str)



### CloneSymbol
[`JsiSymbolRef`](JsiSymbolRef) **`CloneSymbol`**([`JsiSymbolRef`](JsiSymbolRef) symbol)



### CreateArray
[`JsiObjectRef`](JsiObjectRef) **`CreateArray`**(uint32_t size)



### CreateFunctionFromHostFunction
[`JsiObjectRef`](JsiObjectRef) **`CreateFunctionFromHostFunction`**([`JsiPropertyIdRef`](JsiPropertyIdRef) funcName, uint32_t paramCount, [`JsiHostFunction`](JsiHostFunction) hostFunc)



### CreateObject
[`JsiObjectRef`](JsiObjectRef) **`CreateObject`**()



### CreateObjectWithHostObject
[`JsiObjectRef`](JsiObjectRef) **`CreateObjectWithHostObject`**([`IJsiHostObject`](IJsiHostObject) hostObject)



### CreatePropertyId
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyId`**(string name)



### CreatePropertyIdFromAscii
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyIdFromAscii`**(uint8_t ascii)



### CreatePropertyIdFromString
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyIdFromString`**([`JsiStringRef`](JsiStringRef) str)



### CreatePropertyIdFromUtf8
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyIdFromUtf8`**(uint8_t utf8)



### CreateString
[`JsiStringRef`](JsiStringRef) **`CreateString`**(string value)



### CreateStringFromAscii
[`JsiStringRef`](JsiStringRef) **`CreateStringFromAscii`**(uint8_t ascii)



### CreateStringFromUtf8
[`JsiStringRef`](JsiStringRef) **`CreateStringFromUtf8`**(uint8_t utf8)



### CreateValueFromJson
[`JsiValueRef`](JsiValueRef) **`CreateValueFromJson`**(string json)



### CreateValueFromJsonUtf8
[`JsiValueRef`](JsiValueRef) **`CreateValueFromJsonUtf8`**(uint8_t json)



### CreateWeakObject
[`JsiWeakObjectRef`](JsiWeakObjectRef) **`CreateWeakObject`**([`JsiObjectRef`](JsiObjectRef) obj)



### EvaluateJavaScript
[`JsiValueRef`](JsiValueRef) **`EvaluateJavaScript`**([`IJsiByteBuffer`](IJsiByteBuffer) buffer, string sourceUrl)



### EvaluatePreparedJavaScript
[`JsiValueRef`](JsiValueRef) **`EvaluatePreparedJavaScript`**([`JsiPreparedJavaScript`](JsiPreparedJavaScript) js)



### GetAndClearError
[`JsiError`](JsiError) **`GetAndClearError`**()



### GetArrayBufferData
void **`GetArrayBufferData`**([`JsiObjectRef`](JsiObjectRef) arrayBuffer, [`JsiByteArrayUser`](JsiByteArrayUser) useArrayBytes)



### GetArrayBufferSize
uint32_t **`GetArrayBufferSize`**([`JsiObjectRef`](JsiObjectRef) arrayBuffer)



### GetArraySize
uint32_t **`GetArraySize`**([`JsiObjectRef`](JsiObjectRef) arr)



### GetHostFunction
[`JsiHostFunction`](JsiHostFunction) **`GetHostFunction`**([`JsiObjectRef`](JsiObjectRef) func)



### GetHostObject
[`IJsiHostObject`](IJsiHostObject) **`GetHostObject`**([`JsiObjectRef`](JsiObjectRef) obj)



### GetProperty
[`JsiValueRef`](JsiValueRef) **`GetProperty`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)



### GetPropertyIdArray
[`JsiObjectRef`](JsiObjectRef) **`GetPropertyIdArray`**([`JsiObjectRef`](JsiObjectRef) obj)



### GetValueAtIndex
[`JsiValueRef`](JsiValueRef) **`GetValueAtIndex`**([`JsiObjectRef`](JsiObjectRef) arr, uint32_t index)



### HasProperty
bool **`HasProperty`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)



### InstanceOf
bool **`InstanceOf`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiObjectRef`](JsiObjectRef) constructor)



### IsArray
bool **`IsArray`**([`JsiObjectRef`](JsiObjectRef) obj)



### IsArrayBuffer
bool **`IsArrayBuffer`**([`JsiObjectRef`](JsiObjectRef) obj)



### IsFunction
bool **`IsFunction`**([`JsiObjectRef`](JsiObjectRef) obj)



### IsHostFunction
bool **`IsHostFunction`**([`JsiObjectRef`](JsiObjectRef) obj)



### IsHostObject
bool **`IsHostObject`**([`JsiObjectRef`](JsiObjectRef) obj)



### LockWeakObject
[`JsiValueRef`](JsiValueRef) **`LockWeakObject`**([`JsiWeakObjectRef`](JsiWeakObjectRef) weakObject)



### MakeChakraRuntime
`static` [`JsiRuntime`](JsiRuntime) **`MakeChakraRuntime`**()



### ObjectStrictEquals
bool **`ObjectStrictEquals`**([`JsiObjectRef`](JsiObjectRef) left, [`JsiObjectRef`](JsiObjectRef) right)



### PopScope
void **`PopScope`**([`JsiScopeState`](JsiScopeState) scopeState)



### PrepareJavaScript
[`JsiPreparedJavaScript`](JsiPreparedJavaScript) **`PrepareJavaScript`**([`IJsiByteBuffer`](IJsiByteBuffer) buffer, string sourceUrl)



### PropertyIdEquals
bool **`PropertyIdEquals`**([`JsiPropertyIdRef`](JsiPropertyIdRef) left, [`JsiPropertyIdRef`](JsiPropertyIdRef) right)



### PropertyIdToString
string **`PropertyIdToString`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)



### PropertyIdToUtf8
void **`PropertyIdToUtf8`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId, [`JsiByteArrayUser`](JsiByteArrayUser) useUtf8String)



### PushScope
[`JsiScopeState`](JsiScopeState) **`PushScope`**()



### ReleaseObject
void **`ReleaseObject`**([`JsiObjectRef`](JsiObjectRef) obj)



### ReleasePropertyId
void **`ReleasePropertyId`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)



### ReleaseString
void **`ReleaseString`**([`JsiStringRef`](JsiStringRef) str)



### ReleaseSymbol
void **`ReleaseSymbol`**([`JsiSymbolRef`](JsiSymbolRef) symbol)



### SetError
void **`SetError`**([`JsiErrorType`](JsiErrorType) errorType, string errorDetails, [`JsiValueRef`](JsiValueRef) value)



### SetProperty
void **`SetProperty`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId, [`JsiValueRef`](JsiValueRef) value)



### SetValueAtIndex
void **`SetValueAtIndex`**([`JsiObjectRef`](JsiObjectRef) arr, uint32_t index, [`JsiValueRef`](JsiValueRef) value)



### StringStrictEquals
bool **`StringStrictEquals`**([`JsiStringRef`](JsiStringRef) left, [`JsiStringRef`](JsiStringRef) right)



### StringToString
string **`StringToString`**([`JsiStringRef`](JsiStringRef) str)



### StringToUtf8
void **`StringToUtf8`**([`JsiStringRef`](JsiStringRef) str, [`JsiByteArrayUser`](JsiByteArrayUser) useUtf8String)



### SymbolStrictEquals
bool **`SymbolStrictEquals`**([`JsiSymbolRef`](JsiSymbolRef) left, [`JsiSymbolRef`](JsiSymbolRef) right)



### SymbolToString
string **`SymbolToString`**([`JsiSymbolRef`](JsiSymbolRef) symbol)



### SymbolToUtf8
void **`SymbolToUtf8`**([`JsiSymbolRef`](JsiSymbolRef) symbol, [`JsiByteArrayUser`](JsiByteArrayUser) useUtf8String)






## Referenced by
- [`IJsiHostObject`](IJsiHostObject)
- [`JsiHostFunction`](JsiHostFunction)
