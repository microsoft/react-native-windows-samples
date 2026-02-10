---
id: version-0.82-ReactViewOptions
title: ReactViewOptions
original_id: ReactViewOptions
---

## New Architecture

Kind: `class`

> **EXPERIMENTAL**

Settings per each IReactViewHost associated with an IReactHost instance.

### Properties
#### ComponentName
 string `ComponentName`

> **EXPERIMENTAL**

Name of a component registered in JavaScript via AppRegistry.registerComponent('ModuleName', () => ModuleName);

#### InitialProps
 [`JSValueArgWriter`](JSValueArgWriter) `InitialProps`

> **EXPERIMENTAL**

Set of initial component properties. It is a JSON string.

### Constructors
#### ReactViewOptions
 **`ReactViewOptions`**()

### Referenced by
- [`IReactViewHost`](IReactViewHost)
- [`IReactViewInstance`](IReactViewInstance)
- [`ReactCoreInjection`](ReactCoreInjection)
- [`ReactNativeWin32App`](ReactNativeWin32App)

## Old Architecture

Kind: `class`

> **EXPERIMENTAL**

Settings per each IReactViewHost associated with an IReactHost instance.

### Properties
#### ComponentName
 string `ComponentName`

> **EXPERIMENTAL**

Name of a component registered in JavaScript via AppRegistry.registerComponent('ModuleName', () => ModuleName);

#### InitialProps
 [`JSValueArgWriter`](JSValueArgWriter) `InitialProps`

> **EXPERIMENTAL**

Set of initial component properties. It is a JSON string.

### Constructors
#### ReactViewOptions
 **`ReactViewOptions`**()

### Referenced by
- [`IReactViewHost`](IReactViewHost)
- [`IReactViewInstance`](IReactViewInstance)
- [`ReactCoreInjection`](ReactCoreInjection)
