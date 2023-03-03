---
id: version-0.69-LoadingState
title: LoadingState
original_id: LoadingState
---

Kind: `enum`

Used to represent the state of the React Native JavaScript instance

| Name |  Value | Description |
|--|--|--|
|`Loading` | 0x0  |  The instance is loading the JavaScript bundle and initial instance setup. Calls to run JavaScript functions will be queued to run once the instance is fully loaded.|
|`Loaded` | 0x1  |  The instance is in a ready state.  Calls to run JavaScript functions will be run as soon as they are posted to the JavaScript instance.|
|`HasError` | 0x2  |  The instance has hit an error.  Calls to run JavaScript functions will not be run.|
|`Unloaded` | 0x3  |  The instance has successfully unloaded.  Calls to run JavaScript functions will not be run.|


## Referenced by
- [`IReactContext`](IReactContext)
