---
id: version-0.64-IReactPropertyBag
title: IReactPropertyBag
original_id: IReactPropertyBag
---

Kind: `interface`



`IReactPropertyBag` provides a thread-safe property storage. Properties are identified by an instance of `IReactPropertyName`. It is expected that there will be no direct use of this interface. Ideally, all usage should happen through strongly-typed accessors.



## Methods
### Get
Object **`Get`**([`IReactPropertyName`](IReactPropertyName) name)

Get a property's value. It returns null if the property does not exist.



### GetOrCreate
Object **`GetOrCreate`**([`IReactPropertyName`](IReactPropertyName) name, [`ReactCreatePropertyValue`](ReactCreatePropertyValue) createValue)

Get a property's value. If the property does not exist, this method creates it by calling the `createValue` delegate. The function may return null if the `createValue` returns null when called.The `createValue` is called outside of any locks. It is possible that its result is not used in case another thread sets the property value before the created value is applied.



### Set
Object **`Set`**([`IReactPropertyName`](IReactPropertyName) name, Object value)

Set a property's value. It returns the previously-stored property value. It returns null if the property did not exist. If the new value is null, then the property is removed.






## Referenced by
- [`IReactContext`](IReactContext)
- [`ReactInstanceSettings`](ReactInstanceSettings)
- [`ReactPropertyBagHelper`](ReactPropertyBagHelper)
- [`XamlUIService`](XamlUIService)
