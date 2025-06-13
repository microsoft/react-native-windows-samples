---
id: version-0.79-IViewManagerWithCommands
title: IViewManagerWithCommands
original_id: IViewManagerWithCommands
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `interface`

## Properties
### Commands
`readonly`  [`IVectorView`](https://docs.microsoft.com/uwp/api/Windows.Foundation.Collections.IVectorView-1)<string> `Commands`

## Methods
### DispatchCommand
void **`DispatchCommand`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) view, string commandId, [`IJSValueReader`](IJSValueReader) commandArgsReader)
