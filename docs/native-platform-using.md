---
id: native-platform-using
title: "Native Platform: Using Native Libraries"
sidebar_label: Using Native Libraries
---

![Architecture](https://img.shields.io/badge/architecture-new_&_old-green)

This guide covers exposing native non-UI functionality from Windows to React Native by implementing a Native Module for the Windows platform. For a higher-level overview of developing native, see [Native Platform: Overview](native-platform.md) before reading this guide.

> **Note:** 

## High-Level Overview

In order to implement Windows support for a Native Module, you'll need to:

1. Define the API surface for your Native Module in one or more JS spec files
2. Use React Native for Windows' Native Module Codegen to take those JS spec files and create the C++ headers for the Windows code
3. Write the Windows C++ code to implement the functions in the generated headers

## Step by Step Guide

### 0. Setup

You'll need a React Native library project initialized with Windows support. The rest of this guide assumes you've followed the [Native Platform: Getting Started](native-platform-getting-started.md) guide to set up a new library.

### 1. Define the API surface in JS

### 2. Use React Native for Windows' Native Module Codegen

### 3. Implement the Windows C++ code

## Next Steps

