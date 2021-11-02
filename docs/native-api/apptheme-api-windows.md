---
id: apptheme-api
title: AppTheme
---

> This API previously allowed responding to light/dark mode, but this functionality was removed in favor of react-native's
> [``Appearance``](https://reactnative.dev/docs/appearance) API. We hope to
> [reconcile](https://github.com/microsoft/react-native-windows/issues/3701) high APIs in a future release of `react-native-windows`.

`AppTheme` allows you to detect when an application is in high constrast mode, and the colors that should be used when inside of it.

```jsx
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { AppTheme } from 'react-native-windows';

const SampleComponent = () => {
  const [isHighContrast, setHighContrast] = useState(AppTheme.isHighContrast);

  useEffect(() => {
    const subscription = AppTheme.addListener('highContrastChanged', () => {
      setHighContrast(AppTheme.isHighContrast);
    });

    return () => subscription.remove();
  });

  if (isHighContrast) {
    return <Text>High Contrast Enabled</Text>;
  } else {
    return <Text>High Contrast Disabled</Text>;
  }
};

export default SampleComponent;
```

# Reference

## Events

### ``highContrastChanged``

An event that fires when the user's app changes to a high contrast theme.

## Properties

### ``isHighContrast``

```
bool isHighContrast
```

``true`` when the user has set their system to high contrast mode. ``false`` otherwise.

### ``currentHighContrastColors``

```
IHighContrastColors currentHighContrastColors
```

The list of colors being used in high contrast.

