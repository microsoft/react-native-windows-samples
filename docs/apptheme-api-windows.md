---
id: apptheme-api
title: AppTheme
---

> This API name will be deprecated and merged with Facebook's ``Appearance`` API when we update to version 0.62 of React Native.

AppTheme allows you to detect Windows app theme changes - dark, light or high contrast - as well as which theme the app is in and the theme colors being used when in high contrast mode.

```
import { AppTheme } from 'react-native-windows'

const App = class App extends React.Component {
  state = {
    currentTheme: AppTheme.currentTheme
  }

  componentDidMount() {
    AppTheme.addListener("appThemeChanged", this.onAppThemeChanged);
  }

  componentWillUnmount() {
    AppTheme.removeListener("appThemeChanged", this.onAppThemeChanged);
  }

  onAppThemeChanged = (event) => {
    const currentTheme = AppTheme.currentTheme;
    this.setState({currentTheme});
  };

  render() {
    return (
      <Button title="click me" color={this.state.currentTheme === "dark" ? "grey" : "orange"}/>
    );
  }
}

export default App;
```

# Reference

## Methods

### ``getCurrentTheme()``

```
string getCurrentTheme()
```

Returns the string either ``dark`` or ``light`` depending on which theme the app is in.

### ``isHighContrast()``

```
bool isHighContrast()
```

Returns ``true`` when the user has set their system to high contrast mode. ``False`` otherwise.

### ``currentHighContrastColors()``

```
IHighContrastColors currentHighContrastColors()
```

Returns the list of colors being used in high contrast.

### ``appThemeChanged()``

```
static appThemeChanged()
```

An event that fires when the user's app changes theme.

### ``highContrastChanged()``

```
static highContrastChanged()
```

An event that fires when the user's app changes to a high contrast theme.
