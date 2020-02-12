// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using Microsoft.ReactNative;
using Microsoft.ReactNative.Managed;

namespace NativeModuleSample
{
    public sealed class ReactPackageProvider : IReactPackageProvider
    {
        public void CreatePackage(IReactPackageBuilder packageBuilder)
        {
            packageBuilder.AddAttributedModules();
        }
    }
}