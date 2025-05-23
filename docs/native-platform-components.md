---
id: native-platform-components
title: "Native Platform: Native Components (Fabric)"
sidebar_label: Native Components (Fabric)
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

This guide covers exposing native UI views from Windows to React Native by implementing a *Native Component* for the Windows platform. For a higher-level overview of native development on Windows, see [Native Platform: Overview](native-platform.md) before reading this guide.

> **Note**: See the [reactnative.dev Native Components guide](https://reactnative.dev/docs/fabric-native-components-introduction) for steps for implementing new Native Components for both the Android and iOS platforms.

> **Architecture Note:** This guide follows the recommendation to create a *Fabric Native Component* to support React Native's New Architecture. To support React Native for Windows apps targeting the Old Architecture, see [Native Platform: Native Components (Paper)](native-platform-components-paper.md). For more information on React Native architectures in React Native for Windows, see [New vs. Old Architecture](new-architecture.md).

## High-Level Overview

In order to implement Windows support for a Native Component, you'll need to:

1. Define the API surface for your Native Component in one or more TypeScript spec files
2. Use React Native for Windows' Native Module Codegen to take those TypeScript spec files and create the C++ headers for the Windows code
3. Write the Windows C++ code to implement the *Component View* specified by the generated headers
4. Use the Native Component in your JavaScript

## Step by Step Guide

### 0. Setup

You'll need a React Native library project initialized with Windows support.

> **Note:** The rest of this guide assumes you've followed the [Native Platform: Getting Started](native-platform-getting-started.md) guide to set up a new library project named `testlib`.

### 1. Define the API surface in TypeScript

<!-- TODO -->

### 2. Use React Native for Windows' Native Module Codegen

<!-- TODO -->

### 3. Implement the Windows C++ code

<!-- TODO -->

### 4. Use the Native Component in your JavaScript

<!-- TODO -->

## Next Steps

After you've implemented your native library, the final step is consume it in your React Native for Windows app. Continue with [Native Platform: Using Native Libraries](native-platform-using.md).
