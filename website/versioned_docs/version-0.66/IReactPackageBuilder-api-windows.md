---
id: version-0.66-IReactPackageBuilder
title: IReactPackageBuilder
original_id: IReactPackageBuilder
---

Kind: `interface`



Builds ReactNative package with the set of native modules and view managers.



## Methods
### AddModule
void **`AddModule`**(string moduleName, [`ReactModuleProvider`](ReactModuleProvider) moduleProvider)

Adds a custom native module. See [`ReactModuleProvider`](ReactModuleProvider).



### AddViewManager
void **`AddViewManager`**(string viewManagerName, [`ReactViewManagerProvider`](ReactViewManagerProvider) viewManagerProvider)

Adds a custom view manager. See [`ReactViewManagerProvider`](ReactViewManagerProvider).






## Referenced by
- [`IReactPackageProvider`](IReactPackageProvider)
