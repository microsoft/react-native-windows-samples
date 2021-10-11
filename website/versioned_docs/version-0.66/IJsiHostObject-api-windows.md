---
id: version-0.66-IJsiHostObject
title: IJsiHostObject
original_id: IJsiHostObject
---

Kind: `interface`



> **EXPERIMENTAL**

An experimental API. Do not use it directly. It may be removed or changed in a future version. Instead, use the JSI API that uses this API internally.
See the `ExecuteJsi` method in `JsiApiContext.h` of the `Microsoft.ReactNative.Cxx` shared project, or the examples of the JSI-based TurboModules in the `Microsoft.ReactNative.IntegrationTests` project.
Note that the JSI is defined only for C++ code. We plan to add the .Net support in future.



## Methods
### GetProperty
[`JsiValueRef`](JsiValueRef) **`GetProperty`**([`JsiRuntime`](JsiRuntime) runtime, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId)



### GetPropertyIds
[`IVector`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVector-1)<[`JsiPropertyIdRef`](JsiPropertyIdRef)> **`GetPropertyIds`**([`JsiRuntime`](JsiRuntime) runtime)



### SetProperty
void **`SetProperty`**([`JsiRuntime`](JsiRuntime) runtime, [`JsiPropertyIdRef`](JsiPropertyIdRef) propertyId, [`JsiValueRef`](JsiValueRef) value)






## Referenced by
- [`JsiRuntime`](JsiRuntime)
