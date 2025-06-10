---
id: version-0.79-IReactPackageProvider
title: IReactPackageProvider
original_id: IReactPackageProvider
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `interface`

Implement this interface to provide custom native modules and view managers.

## Methods
### CreatePackage
void **`CreatePackage`**([`IReactPackageBuilder`](IReactPackageBuilder) packageBuilder)

Creates a new package with help of the [`IReactPackageBuilder`](IReactPackageBuilder).
Use the [`IReactPackageBuilder`](IReactPackageBuilder) to register custom native modules and view managers.
