---
id: version-0.70-JsiRuntime
title: JsiRuntime
original_id: JsiRuntime
---

Kind: `class`



> **EXPERIMENTAL**

An experimental API. Do not use it directly. It may be removed or changed in a future version. Instead, use the JSI API that uses this API internally.
See the `ExecuteJsi` method in `JsiApiContext.h` of the `Microsoft.ReactNative.Cxx` shared project, or the examples of the JSI-based TurboModules in the `Microsoft.ReactNative.IntegrationTests` project.
Note that the JSI is defined only for C++ code. We plan to add the .Net support in future.

## Properties
### Description
`readonly`  string `Description`

> **EXPERIMENTAL**

### Global
`readonly`  [`JsiObjectRef`](JsiObjectRef) `Global`

> **EXPERIMENTAL**

### IsInspectable
`readonly`  bool `IsInspectable`

> **EXPERIMENTAL**



## Methods
### BigIntStrictEquals
bool **`BigIntStrictEquals`**([`JsiBigIntRef`](JsiBigIntRef) left, [`JsiBigIntRef`](JsiBigIntRef) right)

> **EXPERIMENTAL**



### Call
[`JsiValueRef`](JsiValueRef) **`Call`**([`JsiObjectRef`](JsiObjectRef) func, [`JsiValueRef`](JsiValueRef) thisArg, [`JsiValueRef`](JsiValueRef) args)

> **EXPERIMENTAL**



### CallAsConstructor
[`JsiValueRef`](JsiValueRef) **`CallAsConstructor`**([`JsiObjectRef`](JsiObjectRef) func, [`JsiValueRef`](JsiValueRef) args)

> **EXPERIMENTAL**



### CloneBigInt
[`JsiBigIntRef`](JsiBigIntRef) **`CloneBigInt`**([`JsiBigIntRef`](JsiBigIntRef) bigInt)

> **EXPERIMENTAL**



### CloneObject
[`JsiObjectRef`](JsiObjectRef) **`CloneObject`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### ClonePropertyId
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`ClonePropertyId`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)

> **EXPERIMENTAL**



### CloneString
[`JsiStringRef`](JsiStringRef) **`CloneString`**([`JsiStringRef`](JsiStringRef) str)

> **EXPERIMENTAL**



### CloneSymbol
[`JsiSymbolRef`](JsiSymbolRef) **`CloneSymbol`**([`JsiSymbolRef`](JsiSymbolRef) symbol)

> **EXPERIMENTAL**



### CreateArray
[`JsiObjectRef`](JsiObjectRef) **`CreateArray`**(uint32_t size)

> **EXPERIMENTAL**



### CreateFunctionFromHostFunction
[`JsiObjectRef`](JsiObjectRef) **`CreateFunctionFromHostFunction`**([`JsiPropertyIdRef`](JsiPropertyIdRef) funcName, uint32_t paramCount, [`JsiHostFunction`](JsiHostFunction) hostFunc)

> **EXPERIMENTAL**



### CreateObject
[`JsiObjectRef`](JsiObjectRef) **`CreateObject`**()

> **EXPERIMENTAL**



### CreateObjectWithHostObject
[`JsiObjectRef`](JsiObjectRef) **`CreateObjectWithHostObject`**([`IJsiHostObject`](IJsiHostObject) hostObject)

> **EXPERIMENTAL**



### CreatePropertyId
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyId`**(string name)

> **EXPERIMENTAL**



### CreatePropertyIdFromAscii
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyIdFromAscii`**(uint8_t ascii)

> **EXPERIMENTAL**



### CreatePropertyIdFromString
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyIdFromString`**([`JsiStringRef`](JsiStringRef) str)

> **EXPERIMENTAL**



### CreatePropertyIdFromSymbol
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyIdFromSymbol`**([`JsiSymbolRef`](JsiSymbolRef) sym)

> **EXPERIMENTAL**



### CreatePropertyIdFromUtf8
[`JsiPropertyIdRef`](JsiPropertyIdRef) **`CreatePropertyIdFromUtf8`**(uint8_t utf8)

> **EXPERIMENTAL**



### CreateString
[`JsiStringRef`](JsiStringRef) **`CreateString`**(string value)

> **EXPERIMENTAL**



### CreateStringFromAscii
[`JsiStringRef`](JsiStringRef) **`CreateStringFromAscii`**(uint8_t ascii)

> **EXPERIMENTAL**



### CreateStringFromUtf8
[`JsiStringRef`](JsiStringRef) **`CreateStringFromUtf8`**(uint8_t utf8)

> **EXPERIMENTAL**



### CreateValueFromJson
[`JsiValueRef`](JsiValueRef) **`CreateValueFromJson`**(string json)

> **EXPERIMENTAL**



### CreateValueFromJsonUtf8
[`JsiValueRef`](JsiValueRef) **`CreateValueFromJsonUtf8`**(uint8_t json)

> **EXPERIMENTAL**



### CreateWeakObject
[`JsiWeakObjectRef`](JsiWeakObjectRef) **`CreateWeakObject`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### DrainMicrotasks
bool **`DrainMicrotasks`**(int maxMicrotasksHint)

> **EXPERIMENTAL**



### EvaluateJavaScript
[`JsiValueRef`](JsiValueRef) **`EvaluateJavaScript`**([`IJsiByteBuffer`](IJsiByteBuffer) buffer, string sourceUrl)

> **EXPERIMENTAL**



### EvaluatePreparedJavaScript
[`JsiValueRef`](JsiValueRef) **`EvaluatePreparedJavaScript`**([`JsiPreparedJavaScript`](JsiPreparedJavaScript) js)

> **EXPERIMENTAL**



### GetAndClearError
[`JsiError`](JsiError) **`GetAndClearError`**()

> **EXPERIMENTAL**



### GetArrayBufferData
void **`GetArrayBufferData`**([`JsiObjectRef`](JsiObjectRef) arrayBuffer, [`JsiByteArrayUser`](JsiByteArrayUser) useArrayBytes)

> **EXPERIMENTAL**



### GetArrayBufferSize
uint32_t **`GetArrayBufferSize`**([`JsiObjectRef`](JsiObjectRef) arrayBuffer)

> **EXPERIMENTAL**



### GetArraySize
uint32_t **`GetArraySize`**([`JsiObjectRef`](JsiObjectRef) arr)

> **EXPERIMENTAL**



### GetHostFunction
[`JsiHostFunction`](JsiHostFunction) **`GetHostFunction`**([`JsiObjectRef`](JsiObjectRef) func)

> **EXPERIMENTAL**



### GetHostObject
[`IJsiHostObject`](IJsiHostObject) **`GetHostObject`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### GetProperty
[`JsiValueRef`](JsiValueRef) **`GetProperty`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)

> **EXPERIMENTAL**



### GetPropertyIdArray
[`JsiObjectRef`](JsiObjectRef) **`GetPropertyIdArray`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### GetValueAtIndex
[`JsiValueRef`](JsiValueRef) **`GetValueAtIndex`**([`JsiObjectRef`](JsiObjectRef) arr, uint32_t index)

> **EXPERIMENTAL**



### HasProperty
bool **`HasProperty`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)

> **EXPERIMENTAL**



### InstanceOf
bool **`InstanceOf`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiObjectRef`](JsiObjectRef) constructor)

> **EXPERIMENTAL**



### IsArray
bool **`IsArray`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### IsArrayBuffer
bool **`IsArrayBuffer`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### IsFunction
bool **`IsFunction`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### IsHostFunction
bool **`IsHostFunction`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### IsHostObject
bool **`IsHostObject`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### LockWeakObject
[`JsiValueRef`](JsiValueRef) **`LockWeakObject`**([`JsiWeakObjectRef`](JsiWeakObjectRef) weakObject)

> **EXPERIMENTAL**



### MakeChakraRuntime
`static` [`JsiRuntime`](JsiRuntime) **`MakeChakraRuntime`**()

> **EXPERIMENTAL**



### ObjectStrictEquals
bool **`ObjectStrictEquals`**([`JsiObjectRef`](JsiObjectRef) left, [`JsiObjectRef`](JsiObjectRef) right)

> **EXPERIMENTAL**



### PopScope
void **`PopScope`**([`JsiScopeState`](JsiScopeState) scopeState)

> **EXPERIMENTAL**



### PrepareJavaScript
[`JsiPreparedJavaScript`](JsiPreparedJavaScript) **`PrepareJavaScript`**([`IJsiByteBuffer`](IJsiByteBuffer) buffer, string sourceUrl)

> **EXPERIMENTAL**



### PropertyIdEquals
bool **`PropertyIdEquals`**([`JsiPropertyIdRef`](JsiPropertyIdRef) left, [`JsiPropertyIdRef`](JsiPropertyIdRef) right)

> **EXPERIMENTAL**



### PropertyIdToString
string **`PropertyIdToString`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)

> **EXPERIMENTAL**



### PropertyIdToUtf8
void **`PropertyIdToUtf8`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId, [`JsiByteArrayUser`](JsiByteArrayUser) useUtf8String)

> **EXPERIMENTAL**



### PushScope
[`JsiScopeState`](JsiScopeState) **`PushScope`**()

> **EXPERIMENTAL**



### ReleaseBigInt
void **`ReleaseBigInt`**([`JsiBigIntRef`](JsiBigIntRef) bigInt)

> **EXPERIMENTAL**



### ReleaseObject
void **`ReleaseObject`**([`JsiObjectRef`](JsiObjectRef) obj)

> **EXPERIMENTAL**



### ReleasePropertyId
void **`ReleasePropertyId`**([`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)

> **EXPERIMENTAL**



### ReleaseString
void **`ReleaseString`**([`JsiStringRef`](JsiStringRef) str)

> **EXPERIMENTAL**



### ReleaseSymbol
void **`ReleaseSymbol`**([`JsiSymbolRef`](JsiSymbolRef) symbol)

> **EXPERIMENTAL**



### SetError
void **`SetError`**([`JsiErrorType`](JsiErrorType) errorType, string errorDetails, [`JsiValueRef`](JsiValueRef) value)

> **EXPERIMENTAL**



### SetProperty
void **`SetProperty`**([`JsiObjectRef`](JsiObjectRef) obj, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId, [`JsiValueRef`](JsiValueRef) value)

> **EXPERIMENTAL**



### SetValueAtIndex
void **`SetValueAtIndex`**([`JsiObjectRef`](JsiObjectRef) arr, uint32_t index, [`JsiValueRef`](JsiValueRef) value)

> **EXPERIMENTAL**



### StringStrictEquals
bool **`StringStrictEquals`**([`JsiStringRef`](JsiStringRef) left, [`JsiStringRef`](JsiStringRef) right)

> **EXPERIMENTAL**



### StringToString
string **`StringToString`**([`JsiStringRef`](JsiStringRef) str)

> **EXPERIMENTAL**



### StringToUtf8
void **`StringToUtf8`**([`JsiStringRef`](JsiStringRef) str, [`JsiByteArrayUser`](JsiByteArrayUser) useUtf8String)

> **EXPERIMENTAL**



### SymbolStrictEquals
bool **`SymbolStrictEquals`**([`JsiSymbolRef`](JsiSymbolRef) left, [`JsiSymbolRef`](JsiSymbolRef) right)

> **EXPERIMENTAL**



### SymbolToString
string **`SymbolToString`**([`JsiSymbolRef`](JsiSymbolRef) symbol)

> **EXPERIMENTAL**



### SymbolToUtf8
void **`SymbolToUtf8`**([`JsiSymbolRef`](JsiSymbolRef) symbol, [`JsiByteArrayUser`](JsiByteArrayUser) useUtf8String)

> **EXPERIMENTAL**






## Referenced by
- [`IJsiHostObject`](IJsiHostObject)
- [`JsiHostFunction`](JsiHostFunction)
