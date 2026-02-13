---
id: RedBoxErrorType
title: RedBoxErrorType
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `enum`

The error type shown in the RedBox.

| Name |  Value | Description |
|--|--|--|
|`JavaScriptFatal` | 0x0  |  A JS Exception was thrown and not caught, or otherwise fatal error.|
|`JavaScriptSoft` | 0x1  |  An error coming from JS that isn't fatal, such as `console.error`.|
|`Native` | 0x2  |  An error happened in native code.|

## Referenced by
- [`IRedBoxHandler`](IRedBoxHandler)

