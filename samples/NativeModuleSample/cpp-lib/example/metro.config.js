const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const fs = require('fs');
const path = require('path');
const escape = require('escape-string-regexp');
const pack = require('../package.json');

const root = path.resolve(__dirname, '..');
const modules = Object.keys({ ...pack.peerDependencies });

const rnwPath = fs.realpathSync(
  path.resolve(require.resolve('react-native-windows/package.json'), '..'),
);

//

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [root,
    //
  ],

  // We need to make sure that only one version is loaded for peerDependencies
  // So we block them at the root, and alias them to the versions in example's node_modules
  resolver: {
    blockList:
      modules.map((m) => {
        // Normalize separators so the pattern matches metro's forward-slash
        // normalized module paths on Windows (path.join yields backslashes).
        const escaped = escape(path.join(root, 'node_modules', m)).replace(
          /\\\\/g,
          '[\\\\/]'
        );
        return new RegExp(`^${escaped}[\\\\/].*$`);
      }).concat([
        // This stops "npx @react-native-community/cli run-windows" from causing the metro server to crash if its already running
        new RegExp(
          `${path.resolve(__dirname, 'windows').replace(/[/\\]/g, '/')}.*`,
        ),
        // This prevents "npx @react-native-community/cli run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip or other files produced by msbuild
        new RegExp(`${rnwPath.replace(/\\/g, '/')}/build/.*`),
        new RegExp(`${rnwPath.replace(/\\/g, '/')}/target/.*`),
        /.*\.ProjectImports\.zip/,
      ])
    ,

    extraNodeModules: modules.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    },
    {
      //
    }
    ),

    // On the windows platform, redirect 'react-native' (and its deep imports)
    // to 'react-native-windows' so a single renderer / view-config registry
    // instance is used. Without this, custom native components (e.g. those
    // created via codegenNativeComponent) can be registered against one module
    // instance and looked up from another, causing "View config getter callback
    // for component `X` must be a function (received `undefined`)" at runtime.
    resolveRequest: (context, moduleName, platform) => {
      if (platform === 'windows') {
        if (moduleName === 'react-native') {
          return context.resolveRequest(
            { ...context, resolveRequest: undefined },
            'react-native-windows',
            platform
          );
        }
        if (moduleName.startsWith('react-native/')) {
          const redirected = moduleName.replace(
            'react-native/',
            'react-native-windows/'
          );
          try {
            return context.resolveRequest(
              { ...context, resolveRequest: undefined },
              redirected,
              platform
            );
          } catch (e) {
            // fall through to default resolution below
          }
        }
      }
      return context.resolveRequest(
        { ...context, resolveRequest: undefined },
        moduleName,
        platform
      );
    },
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
