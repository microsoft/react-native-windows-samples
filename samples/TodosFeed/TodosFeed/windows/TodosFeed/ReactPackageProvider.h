#pragma once

#include "winrt/Microsoft.ReactNative.Bridge.h"



using namespace winrt::Microsoft::ReactNative::Bridge;

namespace winrt::TodosFeed::implementation
{

    struct ReactPackageProvider : winrt::implements<ReactPackageProvider, IReactPackageProvider>
    {
    public: // IReactPackageProvider
        void CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept;
    };

} // namespace winrt::TodosFeed::implementation


