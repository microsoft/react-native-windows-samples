---
id: version-0.67-IReactPropertyName
title: IReactPropertyName
original_id: IReactPropertyName
---

Kind: `interface`



A name for a [`IReactPropertyBag`](IReactPropertyBag) property.
Use [`ReactPropertyBagHelper.GetName`](ReactPropertyBagHelper#getname) to get atomic property name for a string in a [`IReactPropertyNamespace`](IReactPropertyNamespace).
Each [`IReactPropertyName`](IReactPropertyName) object has a unique [`LocalName`](#localname) in context of the [`IReactPropertyNamespace`](IReactPropertyNamespace)

## Properties
### LocalName
`readonly`  string `LocalName`

Gets String representation of the [`IReactPropertyName`](IReactPropertyName).

### Namespace
`readonly`  [`IReactPropertyNamespace`](IReactPropertyNamespace) `Namespace`

Gets the [`IReactPropertyNamespace`](IReactPropertyNamespace) where the property name is defined.






## Referenced by
- [`IReactNotificationService`](IReactNotificationService)
- [`IReactNotificationSubscription`](IReactNotificationSubscription)
- [`IReactPropertyBag`](IReactPropertyBag)
- [`ReactDispatcherHelper`](ReactDispatcherHelper)
- [`ReactPropertyBagHelper`](ReactPropertyBagHelper)
