---
id: version-0.82-metro-config-out-tree-platforms
title: Metro config for out of tree platforms
original_id: metro-config-out-tree-platforms
---

How to setup and diagnose issues with metro config for `react-native-macos` and `react-native-windows`.  Many of the instructions within this document may refer just to `react-native-windows`, but the steps apply to `react-native-macos` in the same way.

# Version requirements

The information here only applies to versions of `react-native-macos` **>=0.62.11** and `react-native-windows` **>=0.62.0**.  It is also required that you have `@react-native-community/cli` **>=4.9.0**. Older versions require a much more complex configuration which is not covered by this document.

# What does the metro config for macOS/Windows need to do

The way that `react-native-macos` and `react-native-windows` provide an implementation for `react-native` is by providing an additional copy of the `react-native` JavaScript files that implement their respective platforms.  This JavaScript code is not included in the `react-native` package.  When you do an `import from 'react-native'` normally metro will look for `node_modules/react-native` somewhere up the file path to file that module.  Unfortunately when using `react-native-macos` or `react-native-windows` this will return the wrong JavaScript code.  A simple solution might be to add a metro-config that includes
```js
resolver {
    extraNodeModules: {
        'react-native': <path-to-react-native-windows>
    }
}
```

While that would enable metro to find the correct JavaScript files when building a windows bundle, that config would not work for macOS, or iOS and Android.  Instead what we really need is for metro to resolve `react-native` differently depending on which platform is being bundled at the time.

The solution is to provide metro a custom resolver that accounts for the current platform being resolved.  As of `@react-native-community/cli@4.9.0` a [change](https://github.com/react-native-community/cli/pull/1115) was added to the react-native CLI to configure metro with a custom resolver that does just that.


# Diagnosing metro config issues

The usual way that these show up is a failure something like 

```
Error: Unable to resolve module `./Libraries/Components/AccessibilityInfo/AccessibilityInfo` from <Some file path here>
```

Its usually an import to `AccessibilityInfo` that fails, this is because this is the first module that `react-native` itself tries to resolve, which only includes a `.ios` and `.android` version of the file within `react-native`.


## Reset your metro cache

Sometimes after bumping package versions or modifying your metro config, the metro cache can get out of sync.  A simple thing to try is resetting metro's file cache.  This can be done by running `yarn start --reset-cache`.


## Verify the platform is installed and hooked into the CLI

Run `npx react-native config`.  Look at the output and verify that the JSON contains either the `platforms.macos.npmPackageName` property or the `platforms.windows.npmPackageName` property (or both) depending on which platform you are using:
```json
{
    ...
    "platforms": {
      "ios": {},
      "android": {},
      "macos": {
        "npmPackageName": "react-native-macos"
      },
      "windows": {
        "npmPackageName": "react-native-windows"
      }
    },
    ...
}
```

## If in a mono-repo, verify that react-native-macos/react-native-windows is not in your exclusionList

You can run `node -p require.resolve('react-native-windows')` if you are not sure where `react-native-windows` is installed.  Ensure that the `react-native-windows` folder is not included within the exclusionList in your `metro.config.js`.

## Verify that react-native-macos/react-native-windows is in your `watchFolders`

By default metro config will see all files within your package's folder.  Many package managers, especially when running in monorepos (yarn workspaces etc) will hoist packages to a location outside of the package's local file structure.  In this case you may need to add addition folders to metros watch list.  This can be done adding to metro config:

```js
  watchFolders: [
    // Include hoisted modules
    path.resolve(__dirname, '../..', 'node_modules'),
  ],
```
The file location above should include the path to `react-native-windows` that is returned by the `node -p require.resolve('react-native-windows')`.

## If your setup includes symlinks

Various package managers may create symlinks within `node_modules`.  Metro does not support following symlinks, so if `node_modules/react-native-windows` is a symlink metro will not be able to find it.  If that is the case, you can add
```js
resolver {
    extraNodeModules: {
        'react-native-windows': <path-to-react-native-windows>
    }
}
```
to your metro config to notify metro of the real location of `react-native-windows`.

## Reset your cache again

If you were following these steps in order, you probably made a bunch of changes to your metro config file.  Have you tired resetting the metro cache again?  `yarn start --reset-cache`
