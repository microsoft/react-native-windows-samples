---
id: version-0.62-ikeyboardprops-api
title: IKeyboardProps
original_id: ikeyboardprops-api
---

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

Enum for types of keyboard event phases.

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
