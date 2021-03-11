---
id: version-0.63-IRedBoxErrorInfo
title: IRedBoxErrorInfo
original_id: IRedBoxErrorInfo
---

Kind: `interface`



## Properties
### Callstack
`readonly`  [`IVectorView`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVectorView-1)<[`IRedBoxErrorFrameInfo`](IRedBoxErrorFrameInfo)> `Callstack`

### ComponentStack
`readonly`  string `ComponentStack`

### ExtraData
`readonly`  [`IJSValueReader`](IJSValueReader) `ExtraData`

### Id
`readonly`  uint32_t `Id`

### Message
`readonly`  string `Message`

### Name
`readonly`  string `Name`

### OriginalMessage
`readonly`  string `OriginalMessage`






## Referenced by
- [`IRedBoxHandler`](IRedBoxHandler)
