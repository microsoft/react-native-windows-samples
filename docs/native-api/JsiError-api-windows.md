---
id: JsiError
title: JsiError
---

Kind: `class`



> **EXPERIMENTAL**

An experimental API. Do not use it directly. It may be removed or changed in 0.65. Instead, use the JSI API that uses this API internally.
See the `ExecuteJsi` method in `JsiApiContext.h` of the `Microsoft.ReactNative.Cxx` shared project, or the examples of the JSI-based TurboModules in the `Microsoft.ReactNative.IntegrationTests` project.
Note that the JSI is defined only for C++ code. We plan to add the .Net support in future.

## Properties
### ErrorDetails
`readonly`  string `ErrorDetails`

### ErrorType
`readonly`  [`JsiErrorType`](JsiErrorType) `ErrorType`

### Message
`readonly`  string `Message`

### Stack
`readonly`  string `Stack`

### Value
`readonly`  [`JsiValueRef`](JsiValueRef) `Value`






## Referenced by
- [`JsiRuntime`](JsiRuntime)
