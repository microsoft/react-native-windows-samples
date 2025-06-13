---
id: version-0.79-ICustomResourceLoader
title: ICustomResourceLoader
original_id: ICustomResourceLoader
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

> **EXPERIMENTAL**

Applications can implement this interface to provide custom values for native platform colors.

## Methods
### GetResource
void **`GetResource`**(string resourceId, [`ResourceType`](ResourceType) resourceType, [`CustomResourceResult`](CustomResourceResult) result)

Called when a theme is queried for a specific resource. resourceId will be the name of the platform color. Implementations should return an empty result if the resource is not being overridden.

## Events
### `ResourcesChanged`
Implementations should raise this event if the platform colors will return new values

Type: [`EventHandler`](https://docs.microsoft.com/uwp/api/Windows.Foundation.EventHandler-1)<Object>

## Referenced by
- [`ReactNativeIsland`](ReactNativeIsland)
- [`Theme`](Theme)
