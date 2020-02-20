#pragma once

#include "App.xaml.g.h"



namespace winrt::Calculator::implementation
{
    struct App : AppT<App>
    {
        App() noexcept;
    };
} // namespace winrt::Calculator::implementation


