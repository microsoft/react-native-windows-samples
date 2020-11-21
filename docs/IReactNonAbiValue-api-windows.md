---
id: IReactNonAbiValue
title: IReactNonAbiValue
---

Kind: `interface`



## Description
`IReactNonAbiValue` helps wrap a non-ABI-safe C++ value into an `IInspectable` object. Use it to handle native module lifetime. It also can be used to store values in the [`IReactPropertyBag`](IReactPropertyBag.md) that do not need to go through the EXE/DLL boundary.



## Methods
### GetPtr
int64_t **`GetPtr`**()

Get a pointer to the stored value.


