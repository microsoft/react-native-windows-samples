# TodosFeed - React Native for Windows
This sample showcases the usage of React Native for Windows vNext in three different scenarios:

- As a standalone Windows application, built on top of the Universal Windows Platform
- As a component, that can be used in a traditional Universal Windows Platform application built with XAML and C#
- As a component, that can be used in a WPF application through [XAML Islands](https://docs.microsoft.com/en-us/windows/apps/desktop/modernize/xaml-islands)

### Requirements
Make sure to have, on your machine, the correct configuration to build and run React Native for Windows projects, as highlighted [here](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/GettingStarted.md).

### Launch TodosFeed as a standalone app
To run the TodosFeed project as a standalone Windows application, open the **TodosFeed** folder and run the following command:

```powershell
react-native run-windows
```

The command will take care of building React Native for Windows, deploy the application and then launch Metro bundler and the dev tools.

### Launch TodosFeed as a component in a traditional UWP app
To run the TodosFeed project as a component, open the **TodosFeed** folder and run the following command:

```powershell
yarn start
```

Once the packager is up & running, open your browser (Chrome or [the new Microsoft Edge](https://www.microsoftedgeinsider.com/en-us/)) on the URL **http://localhost:8081/debugger-ui/**.

Then open the **Inventory.sln** file inside the **InventorySample** folder with Visual Studio 2019. Make sure to choose x86 or x64 as CPU architecture, build the **Inventory.App** project, then launch it by pressing CTRL-F5.

### Launch TodosFeed as a component in a WPF app
To run the TodosFeed project as a component, open the **TodosFeed** folder and run the following command:

```powershell
yarn start
```

Once the packager is up & running, open your browser (Chrome or [the new Microsoft Edge](https://www.microsoftedgeinsider.com/en-us/)) on the URL **http://localhost:8081/debugger-ui/**.

Then open the **ContosoExpenses.sln** file inside the **ContosoExpenses** folder with Visual Studio 2019. Make sure to choose x86 or x64 as CPU architecture, build the **ContosoExpenses.Package** project, then launch it by pressing CTRL-F5.

### Learn more
This sample is a companion for a blog post about React Native for Windows, which is available on the [Windows AppConsult blog](https://techcommunity.microsoft.com/t5/Windows-Dev-AppConsult/Getting-started-with-React-Native-for-Windows/ba-p/912093).

 
 
