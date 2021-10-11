---
id: version-0.66-ReactPropertyBagHelper
title: ReactPropertyBagHelper
original_id: ReactPropertyBagHelper
---

Kind: `class`



Helper methods for the property bag implementation.

## Properties
### GlobalNamespace
`static`   `readonly`  [`IReactPropertyNamespace`](IReactPropertyNamespace) `GlobalNamespace`

> **Deprecated**: Do not use. It will be removed in a future version.

Deprecated. Do not use. It will be removed in a future version.



## Methods
### CreatePropertyBag
`static` [`IReactPropertyBag`](IReactPropertyBag) **`CreatePropertyBag`**()

Creates new instance of [`IReactPropertyBag`](IReactPropertyBag)



### GetName
`static` [`IReactPropertyName`](IReactPropertyName) **`GetName`**([`IReactPropertyNamespace`](IReactPropertyNamespace) ns, string localName)

Gets atomic [`IReactPropertyName`](IReactPropertyName) for the namespace `ns` and the `localName`.
**Note that passing `null` as `ns` is reserved for local values since 0.65. In previous versions it was the same as passing [`GlobalNamespace`](#globalnamespace).**



### GetNamespace
`static` [`IReactPropertyNamespace`](IReactPropertyNamespace) **`GetNamespace`**(string namespaceName)

Gets an atomic [`IReactPropertyNamespace`](IReactPropertyNamespace) for a provided `namespaceName`.
Consider using module name as the namespace for module-specific properties.




