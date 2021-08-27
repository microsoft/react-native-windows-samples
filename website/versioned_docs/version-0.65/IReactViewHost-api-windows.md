---
id: version-0.65-IReactViewHost
title: IReactViewHost
original_id: IReactViewHost
---

Kind: `interface`



> **EXPERIMENTAL**

Used to implement a non-XAML platform ReactRootView.



## Methods
### AttachViewInstance
void **`AttachViewInstance`**([`IReactViewInstance`](IReactViewInstance) viewInstance)

Attaches IReactViewInstance to the IReactViewHost.



### DetachViewInstance
void **`DetachViewInstance`**()

Detaches IReactViewInstance from the IReactViewHost.



### ReloadViewInstance
void **`ReloadViewInstance`**()

Reloads the IReactViewInstance if it is attached.



### ReloadViewInstanceWithOptions
void **`ReloadViewInstanceWithOptions`**([`ReactViewOptions`](ReactViewOptions) options)

Reloads IReactViewInstance if it is attached with a new set of options.



### UnloadViewInstance
void **`UnloadViewInstance`**()

Unloads the attached IReactViewInstance.






## Referenced by
- [`ReactCoreInjection`](ReactCoreInjection)
