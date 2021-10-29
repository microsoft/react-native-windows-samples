---
id: upgrade-app
title: Upgrading App to Latest Version of React Native Windows
---

## Steps to Upgrade An App to New React Native Windows Version
1. In the root of your project,  run `npx react-native-windows-init --version 0.XX.X --overwrite`.
2. In the root of your project, run `npx react-native autolink-windows` to autolink any native modules used by your app.
3. Step 1 will overwrite any changes you previously made to the native Windows code of your project. If you made changes to this code, you have two options:

    1. Re-add those updates manually.
    2. If your project is a GitHub repository, open the project in Visual Studio Code and navigate to the Source Control tab. There, you can undo the specific overwrite edits that erased your changes.
4. Your app is now ready to build!
