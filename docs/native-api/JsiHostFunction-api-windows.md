---
id: JsiHostFunction
title: JsiHostFunction
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `delegate`

> **EXPERIMENTAL**

An experimental API. Do not use it directly. It may be removed or changed in a future version. Instead, use the JSI API that uses this API internally.
See the `ExecuteJsi` method in `JsiApiContext.h` of the `Microsoft.ReactNative.Cxx` shared project, or the examples of the JSI-based TurboModules in the `Microsoft.ReactNative.IntegrationTests` project.
Note that the JSI is defined only for C++ code. We plan to add the .Net support in future.

## Invoke
[`JsiValueRef`](JsiValueRef) **`Invoke`**([`JsiRuntime`](JsiRuntime) runtime, [`JsiValueRef`](JsiValueRef) thisArg, [`JsiValueRef`](JsiValueRef) args)

## Referenced by
- [`JsiRuntime`](JsiRuntime)

