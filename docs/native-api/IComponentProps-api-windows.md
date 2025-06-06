---
id: IComponentProps
title: IComponentProps
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

> **EXPERIMENTAL**

Interface to implement custom view component properties.

## Methods
### SetProp
void **`SetProp`**(uint32_t hash, string propName, [`IJSValueReader`](IJSValueReader) value)

This method will be called for each property that comes from JavaScript.  It is up to an individual implementation to store the values of properties for access within its UpdateProps.  Properties that are part of ViewProps can be accessed from the [`ViewProps`](ViewProps) object, and so do not need to be stored.

## Referenced by
- [`InitialStateDataFactory`](InitialStateDataFactory)
- [`UpdatePropsDelegate`](UpdatePropsDelegate)
- [`ViewPropsFactory`](ViewPropsFactory)
