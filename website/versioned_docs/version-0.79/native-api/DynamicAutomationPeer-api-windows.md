---
id: version-0.79-DynamicAutomationPeer
title: DynamicAutomationPeer
original_id: DynamicAutomationPeer
---

![Architecture](https://img.shields.io/badge/architecture-old_only-yellow)

Kind: `class`

Extends: [`FrameworkElementAutomationPeer`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Peers.FrameworkElementAutomationPeer)

Implements: [`IInvokeProvider`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IInvokeProvider), [`ISelectionProvider`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.ISelectionProvider), [`ISelectionItemProvider`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.ISelectionItemProvider), [`IToggleProvider`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IToggleProvider), [`IExpandCollapseProvider`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IExpandCollapseProvider), [`IRangeValueProvider`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IRangeValueProvider)

## Properties
### CanSelectMultiple
`readonly`  bool `CanSelectMultiple`

### ExpandCollapseState
`readonly`  [`ExpandCollapseState`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.ExpandCollapseState) `ExpandCollapseState`

### IsReadOnly
`readonly`  bool `IsReadOnly`

### IsSelected
`readonly`  bool `IsSelected`

### IsSelectionRequired
`readonly`  bool `IsSelectionRequired`

### LargeChange
`readonly`  double `LargeChange`

### Maximum
`readonly`  double `Maximum`

### Minimum
`readonly`  double `Minimum`

### SelectionContainer
`readonly`  [`IRawElementProviderSimple`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IRawElementProviderSimple) `SelectionContainer`

### SmallChange
`readonly`  double `SmallChange`

### ToggleState
`readonly`  [`ToggleState`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.ToggleState) `ToggleState`

### Value
`readonly`  double `Value`

## Constructors
### DynamicAutomationPeer
 **`DynamicAutomationPeer`**([`FrameworkElement`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) owner)

## Methods
### AddToSelection
void **`AddToSelection`**()

### Collapse
void **`Collapse`**()

### Expand
void **`Expand`**()

### GetSelection
[`IRawElementProviderSimple`](https://learn.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IRawElementProviderSimple) **`GetSelection`**()

### Invoke
void **`Invoke`**()

### RemoveFromSelection
void **`RemoveFromSelection`**()

### Select
void **`Select`**()

### SetValue
void **`SetValue`**(double value)

### Toggle
void **`Toggle`**()
