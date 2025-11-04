---
id: IReactPackageBuilder
title: IReactPackageBuilder
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

## New Architecture

Kind: `interface`

Builds ReactNative package with the set of native modules and view managers.

### Methods
#### AddModule
void **`AddModule`**(string moduleName, [`ReactModuleProvider`](ReactModuleProvider) moduleProvider)

Adds a custom native module. See [`ReactModuleProvider`](ReactModuleProvider).

#### AddTurboModule
void **`AddTurboModule`**(string moduleName, [`ReactModuleProvider`](ReactModuleProvider) moduleProvider)

Adds a custom native module. See [`ReactModuleProvider`](ReactModuleProvider). This will register themodule as a TurboModule unless the application is running using [`ReactInstanceSettings.UseWebDebugger`](ReactInstanceSettings#usewebdebugger),in which case it will revert to a legacy NativeModule.
NOTE: TurboModules using JSI directly will not run correctly while using [`ReactInstanceSettings.UseWebDebugger`](ReactInstanceSettings#usewebdebugger)

### Referenced by
- [`IReactPackageProvider`](IReactPackageProvider)

## Old Architecture

Kind: `interface`

Builds ReactNative package with the set of native modules and view managers.

### Methods
#### AddModule
void **`AddModule`**(string moduleName, [`ReactModuleProvider`](ReactModuleProvider) moduleProvider)

Adds a custom native module. See [`ReactModuleProvider`](ReactModuleProvider).

#### AddTurboModule
void **`AddTurboModule`**(string moduleName, [`ReactModuleProvider`](ReactModuleProvider) moduleProvider)

Adds a custom native module. See [`ReactModuleProvider`](ReactModuleProvider). This will register themodule as a TurboModule unless the application is running using [`ReactInstanceSettings.UseWebDebugger`](ReactInstanceSettings#usewebdebugger),in which case it will revert to a legacy NativeModule.
NOTE: TurboModules using JSI directly will not run correctly while using [`ReactInstanceSettings.UseWebDebugger`](ReactInstanceSettings#usewebdebugger)

#### AddViewManager
void **`AddViewManager`**(string viewManagerName, [`ReactViewManagerProvider`](ReactViewManagerProvider) viewManagerProvider)

Adds a custom view manager. See [`ReactViewManagerProvider`](ReactViewManagerProvider).

### Referenced by
- [`IReactPackageProvider`](IReactPackageProvider)

