---
id: version-0.79-IReactPackageBuilderFabric
title: IReactPackageBuilderFabric
original_id: IReactPackageBuilderFabric
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

> **EXPERIMENTAL**

Provides ability to register custom ViewComponents when running fabric.

## Methods
### AddUriImageProvider
void **`AddUriImageProvider`**([`IUriImageProvider`](IUriImageProvider) provider)

Ability to load images using custom Uri protocol handlers.

### AddViewComponent
void **`AddViewComponent`**(string componentName, [`ReactViewComponentProvider`](ReactViewComponentProvider) componentProvider)

Registers a custom native view component.
