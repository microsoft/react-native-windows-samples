module.exports = {
    dependency: {
      platforms: {
        windows: {
          sourceDir: 'windows',
          solutionFile: 'NativeModuleSample.sln',
          projects: [
            {
              projectFile: 'NativeModuleSample\\NativeModuleSample.vcxproj',
              directDependency: true,
            }
          ],
        },
      },
    },
  };