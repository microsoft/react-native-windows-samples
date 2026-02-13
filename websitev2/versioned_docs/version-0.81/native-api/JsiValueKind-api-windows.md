---
id: JsiValueKind
title: JsiValueKind
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `enum`

> **EXPERIMENTAL**

An experimental API. Do not use it directly. It may be removed or changed in a future version. Instead, use the JSI API that uses this API internally.
See the `ExecuteJsi` method in `JsiApiContext.h` of the `Microsoft.ReactNative.Cxx` shared project, or the examples of the JSI-based TurboModules in the `Microsoft.ReactNative.IntegrationTests` project.
Note that the JSI is defined only for C++ code. We plan to add the .Net support in future.

| Name |  Value | Description |
|--|--|--|
|`Undefined` | 0x0  |  |
|`Null` | 0x1  |  |
|`Boolean` | 0x2  |  |
|`Number` | 0x3  |  |
|`Symbol` | 0x4  |  |
|`BigInt` | 0x5  |  |
|`String` | 0x6  |  |
|`Object` | 0x7  |  |

## Referenced by
- [`JsiValueRef`](JsiValueRef)

