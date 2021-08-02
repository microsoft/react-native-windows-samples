---
id: version-0.65-DynamicAutomationPeer
title: DynamicAutomationPeer
original_id: DynamicAutomationPeer
---

Kind: `class`

Extends: [`FrameworkElementAutomationPeer`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Peers.FrameworkElementAutomationPeer)

Implements: [`IInvokeProvider`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IInvokeProvider), [`ISelectionProvider`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.ISelectionProvider), [`ISelectionItemProvider`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.ISelectionItemProvider), [`IToggleProvider`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IToggleProvider), [`IExpandCollapseProvider`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IExpandCollapseProvider), [`IRangeValueProvider`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IRangeValueProvider)

## Properties
### CanSelectMultiple
`readonly`  bool `CanSelectMultiple`

### ExpandCollapseState
`readonly`  [`ExpandCollapseState`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.ExpandCollapseState) `ExpandCollapseState`

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
`readonly`  [`IRawElementProviderSimple`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IRawElementProviderSimple) `SelectionContainer`

### SmallChange
`readonly`  double `SmallChange`

### ToggleState
`readonly`  [`ToggleState`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.ToggleState) `ToggleState`

### Value
`readonly`  double `Value`


## Constructors
### DynamicAutomationPeer
 **`DynamicAutomationPeer`**([`FrameworkElement`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.FrameworkElement) owner)




## Methods
### AddToSelection
void **`AddToSelection`**()



### Collapse
void **`Collapse`**()



### Expand
void **`Expand`**()



### GetSelection
[`IRawElementProviderSimple`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Automation.Provider.IRawElementProviderSimple) **`GetSelection`**()



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




