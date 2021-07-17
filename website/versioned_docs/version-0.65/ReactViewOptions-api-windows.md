---
id: version-0.65-ReactViewOptions
title: ReactViewOptions
original_id: ReactViewOptions
---

Kind: `class`



> **EXPERIMENTAL**

Settings per each IReactViewHost associated with an IReactHost instance.

## Properties
### ComponentName
 string `ComponentName`

Name of a component registered in JavaScript via AppRegistry.registerComponent('ModuleName', () => ModuleName);

### InitialProps
 [`JSValueArgWriter`](JSValueArgWriter) `InitialProps`

Set of initial component properties. It is a JSON string.


## Constructors
### ReactViewOptions
 **`ReactViewOptions`**()







## Referenced by
- [`IReactViewHost`](IReactViewHost)
- [`IReactViewInstance`](IReactViewInstance)
- [`ReactCoreInjection`](ReactCoreInjection)
