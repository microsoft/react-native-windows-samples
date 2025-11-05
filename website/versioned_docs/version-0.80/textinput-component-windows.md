---
id: version-0.80-textinput-component
title: TextInput
original_id: textinput-component
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

# Reference

## Props

Inherits [TextInput Props](https://reactnative.dev/docs/textinput).

## Windows-Specific Properties

### `submitKeyEvent`

A property that registers a set of KeyEvents that may trigger `onSubmitEditing` in a multiline scenario.

| type | required |
|:--|:--|
| { code: 'Enter', shiftKey: bool } | No |

### `clearTextOnSubmit`

If `true`, the text field will clear when submitted. The default value is false.

| type | required |
|:--|:--|
| bool | No |

## Examples

Examples can be found in the [React Native Gallery App](https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TextInputExamplePage.tsx) available in the [Microsoft Store](https://apps.microsoft.com/detail/9NPG0B292H4R)
