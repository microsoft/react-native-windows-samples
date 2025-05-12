---
id: NuGet
title: Using Microsoft.ReactNative NuGet packages
---

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

>**This documentation and the underlying platform code is a work in progress.**

Traditionally, the default for React Native Windows has been to build all code from source. This includes building all the code shipped by the team in the npm package from source. The amount of code is quite large and takes both a long time to build as well as requiring a high-performance computer. Some configurations have problems building this code with only 8 GB of memory. Especially if you are used to working only with managed code, this can be a big surprise.

Starting with the (currently experimental) New Architecture (i.e. Fabric) app and module projects, React Native Windows will default to consuming pre-built binary NuGet packages instead of requiring you to compile everything yourself.

The benefit of using NuGet packages is that you get improved compilation times for your Windows project and can develop on a less powerful computer. This will also translate into a smoother update experience for newer versions of `react-native-windows`.

When creating a new project in [Get Started with Windows](getting-started.md), the type of template selected for the [init-windows command](init-windows-cli.md) will determine whether or not the project will built against the `react-native-windows` source or the pre-built NuGet packages.

> **Note on new projects:** Building from source will remain the default for new Old Architecture projects. This is because there are known compatibility issues with [community modules](supported-community-modules.md), as they often still rely on building the shared code from source, making the parallel use of NuGets problematic.

> **Note on existing projects:** Previously exposed methods for building Old Architecture projects against NuGets were experimental and are being deprecated, and therefore should not be used. If you're in the process of upgrading an existing Old Architecture project that *did* use those experimental methods, the [init-windows command](init-windows-cli.md) will try to respect that setting until the methods are formally deprecated and removed.
