#pragma once

#include "App.xaml.g.h"
#include <winrt/Windows.ApplicationModel.h>
#include <winrt/Windows.ApplicationModel.Activation.h>


namespace winrt::Calculator::implementation
{
    struct App : AppT<App>
    {
        App() noexcept;
        void OnLaunched(winrt::Windows::ApplicationModel::Activation::LaunchActivatedEventArgs);
        using base = AppT;
    };
} // namespace winrt::Calculator::implementation


