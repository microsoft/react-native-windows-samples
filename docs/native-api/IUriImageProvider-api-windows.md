---
id: IUriImageProvider
title: IUriImageProvider
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

> **EXPERIMENTAL**

This allows applications to provide their own image caching / storage pipelines. Or to generate images on the fly based on uri.

## Methods
### CanLoadImageUri
bool **`CanLoadImageUri`**([`IReactContext`](IReactContext) context, [`Uri`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Uri) uri)

This should return true if this provider will provide an image for the provided uri.

### GetImageResponseAsync
[`IAsyncOperation`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncOperation-1)<[`ImageResponse`](ImageResponse)> **`GetImageResponseAsync`**([`IReactContext`](IReactContext) operation, [`ImageSource`](ImageSource) context)

## Referenced by
- [`IReactPackageBuilderFabric`](IReactPackageBuilderFabric)
