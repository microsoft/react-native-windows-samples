---
id: IViewManagerCreateWithProperties
title: IViewManagerCreateWithProperties
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `interface`

Enables a view manager to create views whose behavior depend on the the property values passed to the view manager at creation time. For example, a view manager could choose to create different types of UI elements based on the properties passed in.

## Methods
### CreateViewWithProperties
Object **`CreateViewWithProperties`**([`IJSValueReader`](IJSValueReader) propertyMapReader)

