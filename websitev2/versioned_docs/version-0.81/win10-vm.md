---
id: win10-vm
title: Developing Windows apps on a non-Windows PC
---

![Architecture](https://img.shields.io/badge/architecture-needs_review-red)

> **Architecture Review Needed:** This documentation was written to support development against React Native's "Old" or "Legacy" Architecture. It *may or may not* be directly applicable to New Architecture development and needs to be reviewed and potentially updated. For information on React Native architectures in React Native Windows, see [New vs. Old Architecture](new-architecture.md).

It is possible to develop Windows apps on a non-Windows PC by using a virtual machine. The virtual machine can run either locally or on Azure.

### Local VM

1. Go to [Windows 11 development environment](https://developer.microsoft.com/windows/downloads/virtual-machines/) for a link to download a Windows 11 virtual machine image. These are usually available for 90 days and are provided in different formats (VMWare, Hyper-V, VirtualBox, and Parallels).
2. Once you have created your VM, open an elevated PowerShell session: press the start menu button, type `powershell`, right click on it and select Run as administrator. You will be prompted for permissions, click "Yes".

![](assets/powershell-start-menu.png)

3. At this point you are ready to set up your development dependencies. Follow the instructions on [dependencies](rnw-dependencies.md).

### Azure VM

1. Go to https://docs.microsoft.com/en-us/azure/virtual-machines/windows/using-visual-studio-vm and follow the instructions to create a **Visual Studio 2019 Latest** virtual machine on "Windows 10 Enterprise N" in Azure.
2. Follow the instructions on [dependencies](rnw-dependencies.md).
