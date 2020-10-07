---
id: win10-vm
title: Developing Windows apps on a non-Windows PC
---

It is possible to develop Windows apps on a non-Windows PC by creating using a virtual machine.

1. Go to [Windows 10 development environment](https://developer.microsoft.com/windows/downloads/virtual-machines/) for a link to download a Windows 10 virtual machine image. These are usually available for 90 days and are provided in different formats (VMWare, Hyper-V, VirtualBox, and Parallels).
2. Once you have created your VM, open an elevated PowerShell session: press the start menu button, type `powershell`, right click on it and select Run as administrator. You will be prompted for permissions, click "Yes".

![](assets/powershell-start-menu.png)

3. At this point you are ready to set up your development dependencies. Follow the instructions on [dependencies](rnw-dependencies.md).