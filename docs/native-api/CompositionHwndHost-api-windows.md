---
id: CompositionHwndHost
title: CompositionHwndHost
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `class`

> **EXPERIMENTAL**

An HWND based host of RNW running on windows composition.Provided as an ease of use function - most of the time HWND-less hosting would be preferable.In the long term this is likely to be replaced with a more modern hosting interface.

## Properties
### ReactViewHost
 [`IReactViewHost`](IReactViewHost) `ReactViewHost`

> **EXPERIMENTAL**

A ReactViewHost specifies the root UI component and initial properties to render in this RootViewIt must be set to show any React UI elements.

### UiaProvider
`readonly`  Object `UiaProvider`

> **EXPERIMENTAL**

## Constructors
### CompositionHwndHost
 **`CompositionHwndHost`**()

## Methods
### Initialize
void **`Initialize`**(uint64_t hwnd)

> **EXPERIMENTAL**

### NavigateFocus
[`FocusNavigationResult`](FocusNavigationResult) **`NavigateFocus`**([`FocusNavigationRequest`](FocusNavigationRequest) request)

> **EXPERIMENTAL**

Move focus to this [`CompositionHwndHost`](CompositionHwndHost)

### TranslateMessage
int64_t **`TranslateMessage`**(uint32_t msg, uint64_t wParam, int64_t lParam)

> **EXPERIMENTAL**

