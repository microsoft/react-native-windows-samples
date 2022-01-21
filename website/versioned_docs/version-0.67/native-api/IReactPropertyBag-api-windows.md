---
id: IReactPropertyBag
title: IReactPropertyBag
---

Kind: `interface`



`IReactPropertyBag` provides a thread-safe property storage.
Properties are identified by an instance of [`IReactPropertyName`](IReactPropertyName). It is expected that there will be no direct use of this interface. Ideally, all usage should happen through strongly-typed accessors.



## Methods
### Get
Object **`Get`**([`IReactPropertyName`](IReactPropertyName) name)

Gets value of the `name` property.
It returns null if the property does not exist.



### GetOrCreate
Object **`GetOrCreate`**([`IReactPropertyName`](IReactPropertyName) name, [`ReactCreatePropertyValue`](ReactCreatePropertyValue) createValue)

Gets or creates value of the `name` property.
If the property exists, then the method returns its value. If the property does not exist, then this method creates it by calling the `createValue` delegate.
The function may return null if the `createValue` returns null when called. The `createValue` is called outside of any locks. It is possible that `createValue` result is not used when another thread sets the property value before the created value is stored.



### Set
Object **`Set`**([`IReactPropertyName`](IReactPropertyName) name, Object value)

Sets property `name` to `value`.
It returns the previously-stored property value. It returns null if the property did not exist.
If the new value is null, then the property is removed.






## Referenced by
- [`IReactContext`](IReactContext)
- [`ReactCoreInjection`](ReactCoreInjection)
- [`ReactInstanceSettings`](ReactInstanceSettings)
- [`ReactPropertyBagHelper`](ReactPropertyBagHelper)
- [`UIBatchCompleteCallback`](UIBatchCompleteCallback)
- [`XamlUIService`](XamlUIService)
