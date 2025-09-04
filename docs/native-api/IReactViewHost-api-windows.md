﻿---
id: IReactViewHost
title: IReactViewHost
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

## New Architecture

Kind: `interface`

> **EXPERIMENTAL**

Used to implement a non-XAML platform ReactRootView.

### Properties
#### ReactNativeHost
`readonly`  [`ReactNativeHost`](ReactNativeHost) `ReactNativeHost`

The ReactNativeHost associated with this ReactViewHost.

### Methods
#### AttachViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`AttachViewInstance`**([`IReactViewInstance`](IReactViewInstance) operation)

Attaches IReactViewInstance to the IReactViewHost.

#### DetachViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`DetachViewInstance`**()

Detaches IReactViewInstance from the IReactViewHost.

#### ReloadViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`ReloadViewInstance`**()

Reloads the IReactViewInstance if it is attached.

#### ReloadViewInstanceWithOptions
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`ReloadViewInstanceWithOptions`**([`ReactViewOptions`](ReactViewOptions) operation)

Reloads IReactViewInstance if it is attached with a new set of options.

#### UnloadViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`UnloadViewInstance`**()

Unloads the attached IReactViewInstance.

### Referenced by
- [`CompositionHwndHost`](CompositionHwndHost)
- [`ReactCoreInjection`](ReactCoreInjection)
- [`ReactNativeIsland`](ReactNativeIsland)

## Old Architecture

Kind: `interface`

> **EXPERIMENTAL**

Used to implement a non-XAML platform ReactRootView.

### Properties
#### ReactNativeHost
`readonly`  [`ReactNativeHost`](ReactNativeHost) `ReactNativeHost`

The ReactNativeHost associated with this ReactViewHost.

### Methods
#### AttachViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`AttachViewInstance`**([`IReactViewInstance`](IReactViewInstance) operation)

Attaches IReactViewInstance to the IReactViewHost.

#### DetachViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`DetachViewInstance`**()

Detaches IReactViewInstance from the IReactViewHost.

#### ReloadViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`ReloadViewInstance`**()

Reloads the IReactViewInstance if it is attached.

#### ReloadViewInstanceWithOptions
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`ReloadViewInstanceWithOptions`**([`ReactViewOptions`](ReactViewOptions) operation)

Reloads IReactViewInstance if it is attached with a new set of options.

#### UnloadViewInstance
[`IAsyncAction`](https://docs.microsoft.com/uwp/api/Windows.Foundation.IAsyncAction) **`UnloadViewInstance`**()

Unloads the attached IReactViewInstance.

### Referenced by
- [`ReactCoreInjection`](ReactCoreInjection)

