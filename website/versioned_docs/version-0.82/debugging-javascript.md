---
id: version-0.82-debugging-javascript
title: JavaScript Debugging
original_id: debugging-javascript
---

## React Native DevTools

We're excited to share that [React Native DevTools](https://reactnative.dev/docs/react-native-devtools) (the modern Chrome DevTools-based debugger) is now fully supported in React Native Windows!

![React Native DevTools](/react-native-windows/img/react-native-devtools.jpg)

### What you can do now:
- **Debug JavaScript** – Set breakpoints, step through code, inspect variables
- **Use the Console** – View logs, evaluate JS, inspect objects
- **Profile performance** – CPU profiler, memory snapshots, React render timing
- **Inspect React components** – Browse component tree, view/edit props & state, highlight elements on device

Press **"J"** in Metro to launch DevTools instantly (just like Android/iOS!)

For complete documentation of capabilities: [React Native DevTools](https://reactnative.dev/docs/react-native-devtools)

### Why this matters:
Windows developers now get the same debugging experience as Android and iOS. No more second-class tooling – it's full platform parity.

### Technical details:
- Works with Hermes engine on both Composition and Paper apps
- Backward compatible – `hermes.dll` supports both legacy and modern debuggers
- Based on stable React Native 0.76+ DevTools architecture
