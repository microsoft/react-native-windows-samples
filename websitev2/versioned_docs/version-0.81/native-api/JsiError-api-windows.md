---
id: JsiError
title: JsiError
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `class`

> **EXPERIMENTAL**

An experimental API. Do not use it directly. It may be removed or changed in a future version. Instead, use the JSI API that uses this API internally.
See the `ExecuteJsi` method in `JsiApiContext.h` of the `Microsoft.ReactNative.Cxx` shared project, or the examples of the JSI-based TurboModules in the `Microsoft.ReactNative.IntegrationTests` project.
Note that the JSI is defined only for C++ code. We plan to add the .Net support in future.

## Properties
### ErrorDetails
`readonly`  string `ErrorDetails`

> **EXPERIMENTAL**

### ErrorType
`readonly`  [`JsiErrorType`](JsiErrorType) `ErrorType`

> **EXPERIMENTAL**

### Message
`readonly`  string `Message`

> **EXPERIMENTAL**

### Stack
`readonly`  string `Stack`

> **EXPERIMENTAL**

### Value
`readonly`  [`JsiValueRef`](JsiValueRef) `Value`

> **EXPERIMENTAL**

## Referenced by
- [`JsiRuntime`](JsiRuntime)

