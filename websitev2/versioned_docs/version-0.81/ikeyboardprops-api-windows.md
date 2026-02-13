---
id: ikeyboardprops-api
title: IKeyboardProps
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

When developing for a Windows device, the likelihood of you needing to support a rich keyboarding experience in your app is very high - this API allows you to customize and control how keyboarding works on your custom or native components.

```
const App = class App extends React.Component {
  state = {
    lastKeyDown
  }

  private _onKeyDown = (event: IKeyboardEvent) => {
    this.setState({ lastKeyDown: event.nativeEvent.key });
  };

  render() {
    return (
      <View onKeyDown={this._onKeyDown} />
    );
  }
}

export default App;
```

# Reference

## Methods

### ```onKeyDown()```

```
static onKeyDown()
```

Event fires once when a key is pressed.

### ```onKeyDownCapture()```

```
static onKeyDownCapture()
```

### ```OnKeyUp()```

```
static OnKeyUp()
```

Event fires once when a key is released.

### ```OnKeyUpCapture()```

```
static OnKeyUpCapture()
```

### ```eventPhase```

```
enum eventPhase
```

Enumeration of types of keyboard event phases.
Possible values:

- `None`
- `Capturing`
- `AtTarget`
- `Bubbling`

### ```keyDownEvents```

```
IHandledKeyboardEvent[] keyDownEvents
```

Array of key down events currently being handled.

### ```keyUpEvents```

```
IHandledKeyboardEvent[] keyUpEvents
```

Array of key up events currently being handled.

### ```HandledEventPhase```

```
enum HandledEventPhase
```

The currently handled event phase.
