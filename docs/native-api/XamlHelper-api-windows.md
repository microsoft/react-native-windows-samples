---
id: XamlHelper
title: XamlHelper
---

Kind: `class`



XAML helper methods to implement custom view managers.

## Properties
### ReactTagProperty
`static`   `readonly`  [`DependencyProperty`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.DependencyProperty) `ReactTagProperty`

Returns the attached property where the react tag is stored on a XAML Dependency Object.



## Methods
### BrushFrom
`static` [`Brush`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.Media.Brush) **`BrushFrom`**([`JSValueArgWriter`](JSValueArgWriter) valueProvider)

Returns a Brush from [`JSValueArgWriter`](JSValueArgWriter).



### ColorFrom
`static` [`Color`](https://docs.microsoft.com/uwp/api/Windows.UI.Color) **`ColorFrom`**([`JSValueArgWriter`](JSValueArgWriter) valueProvider)

Returns a Color from [`JSValueArgWriter`](JSValueArgWriter).



### GetReactTag
`static` int64_t **`GetReactTag`**([`DependencyObject`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.DependencyObject) dependencyObject)

Gets the react tag from a backing XAML element.



### SetReactTag
`static` void **`SetReactTag`**([`DependencyObject`](https://docs.microsoft.com/uwp/api/Windows.UI.Xaml.DependencyObject) dependencyObject, int64_t tag)

Sets the react tag for a XAML element.




