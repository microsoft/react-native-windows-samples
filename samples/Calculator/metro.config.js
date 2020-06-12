/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const fs = require("fs");
const path = require("path");
const blacklist = require("metro-config/src/defaults/blacklist");

const rnPath = fs.realpathSync(
  path.resolve(require.resolve("react-native/package.json"), "..")
);
const rnwPath = fs.realpathSync(
  path.resolve(require.resolve("react-native-windows/package.json"), "..")
);

console.log(rnPath);
console.log(rnwPath);

module.exports = {
  resolver: {
    extraNodeModules: {
      // Redirect react-native to react-native-windows
      "react-native": rnwPath,
      "react-native-windows": rnwPath
    },
    // Include the macos platform in addition to the defaults because the fork includes macos, but doesn't declare it
    platforms: ["ios", "android", "windesktop", "windows", "web", "macos"],
    providesModuleNodeModules: ["react-native-windows"],
    // Since there are multiple copies of react-native, we need to ensure that metro only sees one of them
    // This should go in RN 0.61 when haste is removed
    blacklistRE: blacklist([
      // Avoid error EBUSY: resource busy or locked, open 'D:\a\1\s\packages\E2ETest\msbuild.ProjectImports.zip' in pipeline
      /.*\.ProjectImports\.zip/,
      // This stops "react-native run-windows" from causing the metro server to crash if its already running
      new RegExp(
        `${path.resolve(__dirname, "windows").replace(/[/\\]/g, "/")}.*`
      )
    ])
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
};
