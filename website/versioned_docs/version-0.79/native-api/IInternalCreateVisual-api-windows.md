---
id: version-0.79-IInternalCreateVisual
title: IInternalCreateVisual
original_id: IInternalCreateVisual
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `interface`

> **EXPERIMENTAL**

Custom ViewComponents need to implement this interface to be able to provide a custom visual using the composition context that allows custom compositors. This is only required for custom components that need to support running in RNW instances with custom compositors. Most custom components can just set CreateVisualHandler on ViewComponentView. This will be removed in a future version

## Properties
### CreateInternalVisualHandler
 [`CreateInternalVisualDelegate`](CreateInternalVisualDelegate) `CreateInternalVisualHandler`
