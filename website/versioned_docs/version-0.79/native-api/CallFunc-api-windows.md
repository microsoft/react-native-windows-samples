---
id: version-0.79-CallFunc
title: CallFunc
original_id: CallFunc
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `delegate`

Function that acts on a JsiRuntime, provided as the argument to the function.  ABI safe version of facebook::react::CallFunc in CallInvoker.h. Most direct usage of this should be avoided by using ReactContext.CallInvoker.

## Invoke
void **`Invoke`**(Object runtime)

## Referenced by
- [`CallInvoker`](CallInvoker)
