---
id: version-0.65-IReactPackageProvider
title: IReactPackageProvider
original_id: IReactPackageProvider
---

Kind: `interface`



Implement this interface to provide custom native modules and view managers.



## Methods
### CreatePackage
void **`CreatePackage`**([`IReactPackageBuilder`](IReactPackageBuilder) packageBuilder)

Creates a new package with help of the [`IReactPackageBuilder`](IReactPackageBuilder).
Use the [`IReactPackageBuilder`](IReactPackageBuilder) to register custom native modules and view managers.




