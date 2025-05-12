---
id: upgrade-app
title: Upgrading App to Latest Version of React Native Windows
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

## Upgrading A React Native Windows App
Upgrading your app to new React Native Windows versions requires a small amount of effort, but we will try to streamline this process for you as much as possible in this guide. You have two main options for how to upgrade your React Native Windows app. You can use the [init-windows command](init-windows-cli.md) or manually upgrade using [Upgrade Helper](https://reactnative.dev/docs/upgrading#upgrade-helper). 

### Steps to Upgrade An App to New React Native Windows Version via CLI
1. In the root of your project, run the [init-windows command](init-windows-cli.md) (make sure you're using the correct template).
2. In the root of your project, run the [autolink-windows command](autolink-windows-cli.md) to link any native modules used by your app.
3. Step 1 will overwrite any changes you previously made to the native Windows code of your project and generate a new GUID. If you made changes to this code or wish to keep your previous GUID, you have two options:

    1. Add those changes manually.
    2. If your project is a Git repository, open the project in Visual Studio Code and navigate to the Source Control tab. There, you can undo the specific overwrite edits that erased your changes.
3. The upgrade script will not remove any files that were removed from the new template. To check if there are any files that require manual deletion, use [Upgrade Helper](https://react-native-community.github.io/upgrade-helper/). See the section below for the steps on how to use this tool.
4. Your app is now ready to build!

### Steps to Manually Upgrade An App to New React Native Windows Version via Upgrade Helper
1. Open [Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) in your preferred browser.
2. Select the React Native Windows version your app is currently on and the version you wish to upgrade to. By default, the latest major versions are selected.
3. Select the "Show me how to upgrade" button.
4. Manually edit your app source to match the changes displayed in Upgrade Helper.
5. Run `yarn` at the root of your project to update your dependencies.
6. Your app is now ready to build!
