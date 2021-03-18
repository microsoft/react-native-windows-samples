---
id: version-0.63-IReactModuleBuilder
title: IReactModuleBuilder
original_id: IReactModuleBuilder
---

Kind: `interface`





## Methods
### AddConstantProvider
void **`AddConstantProvider`**([`ConstantProviderDelegate`](ConstantProviderDelegate) constantProvider)



### AddInitializer
void **`AddInitializer`**([`InitializerDelegate`](InitializerDelegate) initializer)



### AddMethod
void **`AddMethod`**(string name, [`MethodReturnType`](MethodReturnType) returnType, [`MethodDelegate`](MethodDelegate) method)



### AddSyncMethod
void **`AddSyncMethod`**(string name, [`SyncMethodDelegate`](SyncMethodDelegate) method)






## Referenced by
- [`ReactModuleProvider`](ReactModuleProvider)
