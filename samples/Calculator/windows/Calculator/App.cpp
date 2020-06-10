#include "pch.h"

#include "App.h"
#include "ReactPackageProvider.h"
#include <winrt/Windows.UI.Xaml.h>
#include <winrt/Windows.UI.Xaml.Controls.h>


using namespace winrt::Calculator;
using namespace winrt::Calculator::implementation;
using namespace winrt::Windows::UI::Xaml;
using namespace winrt::Windows::UI::Xaml::Controls;

/// <summary>
/// Initializes the singleton application object.  This is the first line of
/// authored code executed, and as such is the logical equivalent of main() or
/// WinMain().
/// </summary>
App::App() noexcept
{
#if BUNDLE
    JavaScriptBundleFile(L"index.windows");
    InstanceSettings().UseWebDebugger(false);
    InstanceSettings().UseLiveReload(false);
#else
    JavaScriptMainModuleName(L"index");
    InstanceSettings().UseWebDebugger(true);
    InstanceSettings().UseLiveReload(true);
#endif

#if _DEBUG
    InstanceSettings().EnableDeveloperMenu(true);
#else
    InstanceSettings().EnableDeveloperMenu(false);
#endif

    PackageProviders().Append(make<ReactPackageProvider>()); // Includes all modules in this project

    InitializeComponent();
}

void App::OnLaunched(winrt::Windows::ApplicationModel::Activation::LaunchActivatedEventArgs e)
{
    base::OnLaunched(e);
    Window::Current().Content().as<Frame>().Navigate(winrt::xaml_typename<MainPage>(), e);
}
