#pragma once

#include "MainPage.g.h"



namespace winrt::TodosFeed::implementation
{
    struct MainPage : MainPageT<MainPage>
    {
        MainPage();

    private:
      void LoadReact();
    };
}

namespace winrt::TodosFeed::factory_implementation
{
    struct MainPage : MainPageT<MainPage, implementation::MainPage>
    {
    };
}


