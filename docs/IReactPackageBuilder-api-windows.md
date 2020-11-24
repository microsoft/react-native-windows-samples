---
id: IReactPackageBuilder
title: IReactPackageBuilder
---

Kind: `interface`



A `ReactPackageBuilder` provides the react instance with all the native modules and view managers that will be available in the React instance.



## Methods
### AddModule
void **`AddModule`**(string moduleName, [`ReactModuleProvider`](ReactModuleProvider) moduleProvider)

Adds a custom native module. See [`ReactModuleProvider`](ReactModuleProvider).



### AddViewManager
void **`AddViewManager`**(string viewManagerName, [`ReactViewManagerProvider`](ReactViewManagerProvider) viewManagerProvider)

Adds a custom native module. See [`ReactViewManagerProvider`](ReactViewManagerProvider).






## Referenced by
- [`IReactPackageProvider`](IReactPackageProvider)
