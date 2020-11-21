---
id: IRedBoxErrorInfo
title: IRedBoxErrorInfo
---

Kind: `interface`



This object provides information about the error.  For JavaScript errors, a call stack is also provided.

## Properties
### Callstack
`readonly`  [`IVectorView`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVectorView-1)<[`IRedBoxErrorFrameInfo`](IRedBoxErrorFrameInfo)> `Callstack`

For JavaScript errors, this will contain the call stack of where the error occurred.

### ComponentStack
`readonly`  string `ComponentStack`

This will contain the component stack where the error occurred, which can help identify the component that is producing the error

### ExtraData
`readonly`  [`IJSValueReader`](IJSValueReader) `ExtraData`

Provides access to extra data attached to the error.  Adding additional data to the errors is not yet part of the stable API.

### Id
`readonly`  uint32_t `Id`

This Id can be used in [`UpdateError`](#updateerror) to identify which error is being updated.  For native errors, this is currently always `0`, and [`UpdateError`](#updateerror) will never be called.

### Message
`readonly`  string `Message`

The error message.

### Name
`readonly`  string `Name`

An identifier for this error.

### OriginalMessage
`readonly`  string `OriginalMessage`

If the message was adjusted for formatting, or otherwise processed, this contains the message before those modifications




