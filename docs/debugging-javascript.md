---
id: debugging-javascript
title: JavaScript Debugging
---

This page details how to debug the JavaScript code in your RNW applications, including which tools are supported in which scenarios. You have two different options: *Web Debugging* and *Direct Debugging*.

> Unless stated otherwise, each of the debugging scenarios detailed below assume you're loading your JS bundle from the Metro Packager, not loading a prebuilt bundle file.

## Web Debugging

*Web Debugging* (also referred to as *Remote JS Debugging*) is the original JS debugging solution for RN.

It works by running your app's JS code within the JS engine of an external process, usually a web browser such as Edge (or Chrome). You're then able to debug your app using the development tools of that external process, i.e. the browser's web development tools.

> Web Debugging requires the Metro Packager, as Metro proxies the connection between your native Windows app and the remote JS engine.

### Web Debugging Tool Support

| JavaScript Engine | Edge Developer Tools | Visual Studio Code<br/> w/ React Native Tools |
|:------------------|:-:|:-:|
| Chakra (Default)  | ✅ | ✅ |
| Hermes            | ✅ | ✅ |

> **Important:** As your code is run in the remote JS engine, the app's embedded engine is not used. This can cause your released app to behave differently when it *is* using the embedded engine. See [Web vs. Direct Debugging](#web-vs-direct-debugging) for details.

### Step 1: Enable Web Debugging

You have two options to enable Web Debugging: at compile-time in your app's native code or at runtime via the in-app Developer Menu.

#### Option 1: Setting `UseWebDebugger` in your native code

Web Debugging can be enabled by setting `UseWebDebugger` property of your app's `InstanceSettings` during startup.

<!--DOCUSAURUS_CODE_TABS-->

<!--C#-->

##### Modifying your C# RNW app

1. You'll want to edit your `App`'s constructor in `App.xaml.cs` with:

```csharp
InstanceSettings.UseWebDebugger = true;
InstanceSettings.UseDirectDebugger = false;
```

<!--C++-->

##### Modifying your C++ RNW app

1. You'll want to edit your `App`'s constructor in `App.cpp` with:

```c++
InstanceSettings().UseWebDebugger(true);
InstanceSettings().UseDirectDebugger(false);
```

<!--END_DOCUSAURUS_CODE_TABS-->

2. Then simply re-build and launch your RNW app as usual.

> For a new RNW app created using `react-native-windows-init`, `UseWebDebugger` defaults to `true` for Debug builds, and `false` for Release builds.

#### Option 2: Using the Developer Menu

Web Debugging can also be enabled at runtime via the in-app Developer Menu.

1. With your RNW app running, press `Ctrl+Shift+D` to invoke the Developer Menu
2. Click *Enable Remote JS Debugging*

The app then should automatically refresh with Web Debugging enabled.

### Step 2: Connect a debugger

The next step is to connect to Metro with your chosen debugger / development tools.

> This must happen before the native app attempts to download the JS bundle from Metro. If a debugger is not already attached, Metro will automatically attempt to set up the Edge Developer Tools.

<!--DOCUSAURUS_CODE_TABS-->

<!--Edge DevTools-->

#### Using the Edge Developer Tools

You can web debug within Edge by using the [Edge Developer Tools](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/).

> If you use Chrome, the process is similar for using the [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/).

1. Launch your RNW app (with Web Debugging enabled and Metro running)
2. In Edge, open the URL http://localhost:8081/debugger-ui/
    > Metro may have already opened it, look for a *React Native Debugger* tab.
3. Press `Ctrl+Shift+J` on the page to launch the Developer Tools

You should now be able to debug your RNW application. To set breakpoints you'll find your app's JS source files in the *Sources* tab under *`debuggerWorker.js` > `localhost:8081` > `src/ui`*.

<!--VS Code w/ React Native Tools-->

#### Using Visual Studio Code with the React Native Tools

You can web debug within [VS Code](http://code.visualstudio.com/) by using the [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) extension.

> **Important**: You will not be able to connect VS Code to Metro if the Edge Developer Tools (or another debugger) is already connected. So make sure you don't have any previous *React Native Debugger* browser tabs open.

1. Ensure you have VS Code and the React Native Tools extension installed
2. Open your project's root folder in VS Code
3. Click on the *Run and Debug* button in the sidebar or press `Ctrl+Shift+D`
4. Click on the drop-down at the top of the sidebar and select *React Native...*
> If there's no drop-down, click on *Show all automatic debug configurations* then select *React Native...* from the drop-down that appears.
5. **Option A:** Let VS Code launch everything and start debugging
    1. Click on the ⚙️ to the right of *Debug Windows*
    2. A new configuration should appear in your `launch.json` file. Rename it if you want but it should look like:
    ```json
    {
        "name": "Debug Windows",
        "cwd": "${workspaceFolder}",
        "type": "reactnative",
        "request": "launch",
        "platform": "windows",
        "isDynamic": true
    }
    ```
    3. Ensure that Metro, your native app, and/or any browser Developer Tools are **not** already running
    4. Ensure the new config is selected at the top of the *Run and Debug* sidebar
    5. Click on the ▶️ button or press *F5* in VS Code
    > Watch VS Code's *Debug Console* output for a successful debugger connection. This can be very slow, but VS Code should automatically launch Metro, establish the debugger connection, then launch your native app to download the bundle.
6. **Option B:** Attach VS Code to Metro that's already running
    1. Click on the ⚙️ to the right of *Attach to packager*
    2. A new configuration should appear in your `launch.json` file. Rename it if you want but it should look like:
    ```json
    {
        "name": "Attach to packager",
        "cwd": "${workspaceFolder}",
        "type": "reactnative",
        "request": "attach",
        "isDynamic": true
    }
    ```
    3. Ensure sure that only Metro is already running (i.e. `npx react-native start`)
    4. Ensure the new config is selected at the top of the *Run and Debug* sidebar
    5. Click on the ▶️ button or press *F5* in VS Code
    6. Confirm the address of the Metro server (default: `localhost`)
    7. Confirm the port of the Metro server (default: `8081`)
    > Watch VS Code's *Debug Console* output for a successful debugger connection.

    8. Manually launch your native app

Once everything is running, you should be able to debug your RNW application. To set breakpoints, simply do so in your app's JS source files directly in VS Code.

> Remember to save `launch.json` so you can reuse this debugging configuration in the future.

> *Important:* If you're having difficulty getting VS Code to connect with Web Debugging, make extra sure you're not running any part of RNW (watch out for rogue `node.exe` processes) before starting the steps above.

<!--END_DOCUSAURUS_CODE_TABS-->

## Direct Debugging

*Direct Debugging* is the newer JS debugging solution for RN.

Rather than running your app's JS code on an external JS engine (as with Web Debugging), with Direct Debugging you run your app's code on its embedded engine (as normal). You are then able to attach your debugger directly to the embedded engine.

> Direct Debugging requires the Metro Packager, as Metro provides keys parts of the debugging experience such as JS source mapping.

### Direct Debugging Tool Support

| JavaScript Engine | Visual Studio | Visual Studio Code | Visual Studio Code<br/> w/ React Native Tools |
|:------------------|:-:|:-:|:-:|
| Chakra (Default)  | ✅ | 🟥 | 🟥 |
| Hermes            | 🟥 | ✅ | ✅ |

> **Important:** Direct Debugging is relatively new and may still have some rough edges, depending on your choice of engine and debugger. See [Web vs. Direct Debugging](#web-vs-direct-debugging) for details.

### Step 1: Enable Direct Debugging

You have two options to enable Direct Debugging: at compile-time in your app's native code or at runtime via the in-app Developer Menu.

#### Option 1: Setting `UseDirectDebugger` in your native code

Direct Debugging can be enabled by setting `UseDirectDebugger` property of your app's `InstanceSettings` during startup.

<!--DOCUSAURUS_CODE_TABS-->

<!--C++-->

##### Modifying your C++ RNW app

1. You'll want to edit your `App`'s constructor in `App.cpp` with:

```c++
InstanceSettings().UseWebDebugger(false);
InstanceSettings().UseDirectDebugger(true);
```

<!--C#-->

##### Modifying your C# RNW app

1. You'll want to edit your `App`'s constructor in `App.xaml.cs` with:

```csharp
InstanceSettings.UseWebDebugger = false;
InstanceSettings.UseDirectDebugger = true;
```

<!--END_DOCUSAURUS_CODE_TABS-->

2. Then simply re-build and launch your RNW app as usual.

> For a new RNW app created using `react-native-windows-init`, `UseDirectDebugger` defaults to `false`.

#### Option 2: Using the Developer Menu

Direct Debugging can also be enabled at runtime via the in-app Developer Menu.

1. With your RNW app running, press `Ctrl+Shift+D` to invoke the Developer Menu
2. Click *Enable Direct JS Debugging*

The app then should automatically refresh with Direct Debugging enabled.

### Step 2: Connect a debugger

The next step is to connect with your chosen debugger.

<!--DOCUSAURUS_CODE_TABS-->

<!--Visual Studio-->

#### Using Visual Studio

You can direct debug RNW apps using the (default) Chakra JS engine with [Visual Studio](https://visualstudio.microsoft.com/)'s built-in Script debugger.

1. Ensure you have Visual Studio installed
2. Open your project's Visual Studio solution file (i.e. `MyApp.sln`)
3. **Option A:** Let Visual Studio launch the app and start debugging
    1. Ensure that Metro is already running (i.e. `npx react-native start`)
    2. Ensure the desired *Configuration* (i.e. `Debug`) and *Platform* (i.e. `x64`) of your native app by setting the drop-downs in Visual Studio's top command bar
    3. In *Solution Explorer* right-click on your native app's project (i.e. `MyApp (Universal Windows)`) and select *Properties*
        1. For C++ RNW apps, open the *Configuration Properties > Debugging* page, set the *Debugger Type* to *Script Only*, then click *OK*
        2. For C# RNW apps, open the *Debug* tab, set the *Debugger type > Application process* to *Script*, then close the properties
    4. Click on *Debug* in the menu bar and select *Start Debugging*
4. **Option B:** Attach Visual Studio to the app that's already running
    1. Ensure that your native app and Metro is already running (i.e. `npx react-native run-windows`)
    2. Click on *Debug* in Visual Studio's menu bar and select *Attach to Process...*
    3. Find and select the native process for your app (not Metro)
    4. Ensure *Attach to:* is set to *Automatic: Script code* or *Script code*
    > If *Attach to:* is set to something else, double check that *Script* is present in the *Type* column for your app's process. If it isn't, make sure you've enabled Direct Debugging in your app, and click the *Refresh* button. If *Script* is present under *Type* but not in *Attach to:*, click on the *Select...* button and try manually checking *Debug these code types: > Script*.

    5. Click on the *Attach* button

Once everything is running, you should be able to debug your RNW application. To set breakpoints, simply do so in your app's JS source files directly in Visual Studio. 

To see your app's JS source in Visual Studio, you can either:

1. Open the files directly (via *Open > File...* in the *File* menu or by pressing `Ctrl+O`) OR
2. Looking for the files in the *Solution Explorer* sidebar under *`Solution 'MyApp'` > `Script Documents` > `file://...` > `script block` > `http://localhost:8081/...`*

<!--VS Code-->

#### Using Visual Studio Code

You can direct debug RNW apps using the Hermes JS engine with [VS Code](http://code.visualstudio.com/)'s built-in Node.js debugger.

1. Ensure you have VS Code installed
2. Open your project's root folder in VS Code
3. Click on the *Run and Debug* button in the sidebar or press `Ctrl+Shift+D`
4. Click on the drop-down at the top of the sidebar and select *Add Configuration...*
> If there's no drop-down, click on *Show all automatic debug configurations* then select *Add Configuration...* from the drop-down that appears.
5. **Option A:** Let VS Code launch everything and start debugging
    > **Important:** This scenario isn't supported with the built-in automatic debug configurations in VS Code. If you want VS Code to launch everything for you, you'll need to install the React Native Tools extension.
6. **Option B:** Attach VS Code to Metro that's already running
    1. Select *Node.js: Attach*
    2. A new configuration should appear in your `launch.json` file. Rename it if you want but be sure to change the `port` to `8081`, i.e.:
    ```json
    {
        "name": "Attach",
        "port": 8081,
        "request": "attach",
        "skipFiles": [
            "<node_internals>/**"
        ],
        "type": "node"
    }
    ```
    3. Ensure that Metro is already running (i.e. `npx react-native start`)
    4. Ensure the new config is selected at the top of the *Run and Debug* sidebar
    5. Click on the ▶️ button or press *F5* in VS Code
    6. Confirm the address of the Metro server (default: `localhost`)
    7. Confirm the port of the Metro server (default: `8081`)
    > Watch VS Code's *Debug Console* output for a successful debugger connection.

    8. Manually launch your native app (if it wasn't already running)

Once everything is running, you should be able to debug your RNW application. To set breakpoints, simply do so in your app's JS source files directly in VS Code.

> Remember to save `launch.json` so you can reuse this debugging configuration in the future.

<!--VS Code w/ React Native Tools-->

#### Using Visual Studio Code with the React Native Tools

You can direct debug RNW apps using the Hermes JS engine with [VS Code](http://code.visualstudio.com/) using the [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) extension.

1. Ensure you have VS Code and the React Native Tools extension installed
2. Open your project's root folder in VS Code
3. Click on the *Run and Debug* button in the sidebar or press `Ctrl+Shift+D`
4. Click on the drop-down at the top of the sidebar and select *React Native...*
> If there's no drop-down, click on *Show all automatic debug configurations* then select *React Native...* from the drop-down that appears.
5. **Option A:** Let VS Code launch everything and start debugging
    1. Click on the ⚙️ to the right of *Debug Windows Hermes - Experimental*
    2. A new configuration should appear in your `launch.json` file. Rename it if you want but it should look like:
    ```json
    {
        "name": "Debug Windows Hermes - Experimental",
        "cwd": "${workspaceFolder}",
        "type": "reactnativedirect",
        "request": "launch",
        "platform": "windows",
        "isDynamic": true
    }
    ```
    3. Ensure that Metro and your native app are **not** already running
    4. Ensure the new config is selected at the top of the *Run and Debug* sidebar
    5. Click on the ▶️ button or press *F5* in VS Code
    > Watch VS Code's *Debug Console* output for a successful debugger connection. This can be very slow, but VS Code should automatically launch Metro, establish the debugger connection, then launch your native app to download the bundle.
6. **Option B:** Attach VS Code to Metro that's already running
    1. Click on the ⚙️ to the right of *Attach to Hermes application - Experimental*
    2. A new configuration should appear in your `launch.json` file. Rename it if you want but it should look like:
    ```json
    {
        "name": "Attach to Hermes application - Experimental",
        "cwd": "${workspaceFolder}",
        "type": "reactnativedirect",
        "request": "attach",
        "isDynamic": true
    }
    ```
    3. Ensure that Metro is already running (i.e. `npx react-native start`)
    4. Ensure the new config is selected at the top of the *Run and Debug* sidebar
    5. Click on the ▶️ button or press *F5* in VS Code
    6. Confirm the address of the Metro server (default: `localhost`)
    7. Confirm the port of the Metro server (default: `8081`)
    > Watch VS Code's *Debug Console* output for a successful debugger connection.

    8. Manually launch your native app (if it wasn't already running)

Once everything is running, you should be able to debug your RNW application. To set breakpoints, simply do so in your app's JS source files directly in VS Code.

> Remember to save `launch.json` so you can reuse this debugging configuration in the future.

<!--END_DOCUSAURUS_CODE_TABS-->

## Web vs. Direct Debugging

As mentioned above, RNW supports both Web and Direct Debugging, and it's worth knowing when to use each.

Web Debugging is the older, more well-established of the two debugging solutions. It relies on the powerful in-browser debugging tools already familiar to web developers. This reinforces RN's purpose of enabling web developers to build native apps with web technologies.

However, Web Debugging is not without its limitations. The primary problem is that JS can behave slightly differently when running in different JS engines. As such, by developing (and testing) your app while using a browser to run the JS, you might miss bugs or other issues that only manifest when running your app normally with the embedded JS engine.

This puts extra onus on developers to test all of their app's functionality in their release build, or otherwise risks situations where customers find bugs in production that aren't reproducible when using Web Debugging.

Furthermore, some parts of RN, such as synchronous calls to native module methods, only work when running on the embedded JS engine. Such native methods won't work when using Web Debugging.

With Direct Debugging, you're debugging your JS code in the same engine you ship with your final app. This removes that class of bugs caused by using a different engine while in development.

However, Direct Debugging has its own limitations too. It is newer and therefore more likely to have setup and stability issues. Furthermore, the JS debugger you want to use might not support the JS engine you want your app to use.

It is important to note, that while Web Debugging may be a sufficient for your needs now, both the RN and RNW teams are focusing future investment into the Direct Debugging experience.

## Other Tools

Here are some other tools you find useful while debugging your RNW apps.

### React Developer Tools

The [React Developer Tools](https://beta.reactjs.org/learn/react-developer-tools) can be used to inspect your app's React component hierarchy and perform performance profiling. It works in conjunction with either Web or Direct Debugging.

1. Launch your RNW app (with Metro running)
2. Run `npx react-devtools` from the command line
3. With your RNW app running, press `Ctrl+Shift+D` to invoke the Developer Menu

The React Developer Tools should detect the Developer Menu opening and automatically attach to your app.
