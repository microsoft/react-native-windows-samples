---
id: version-0.79-IRedBoxErrorFrameInfo
title: IRedBoxErrorFrameInfo
original_id: IRedBoxErrorFrameInfo
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

Kind: `interface`

This object represents a single frame within the call stack of an error.

## Properties
### Collapse
`readonly`  bool `Collapse`

True if this frame is part of the internals of `react-native`, that is likely not useful for the developer to see.

### Column
`readonly`  uint32_t `Column`

The column within the line.

### File
`readonly`  string `File`

The file location of this frame.

### Line
`readonly`  uint32_t `Line`

The line number within the file.

### Method
`readonly`  string `Method`

The method name of this frame.
