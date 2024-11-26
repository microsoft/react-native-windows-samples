// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

#include "pch.h"

#include "CircleMask.h"

namespace winrt::NativeModuleSample::implementation
{

void RegisterCircleMaskNativeComponent(
    winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept
{
#ifdef RNW_NEW_ARCH
  NativeModuleSampleCodegen::RegisterCircleMaskNativeComponent<CircleMaskComponentView>(packageBuilder, {});
#else
  packageBuilder.AddViewManager(L"CircleMaskViewManager", []() { return winrt::make<CircleMaskViewManager>(); });
#endif  
}

#ifdef RNW_NEW_ARCH

winrt::Microsoft::UI::Composition::Visual CircleMaskComponentView::CreateVisual(const winrt::Microsoft::ReactNative::ComponentView &view) noexcept
{
  // Adapting https://github.com/microsoft/WindowsAppSDK-Samples/blob/main/Samples/SceneGraph/SampleGalleryApp/Samples/CompCapabilities/CompCapabilities.xaml.cs#L139

  auto compositor = view.as<winrt::Microsoft::ReactNative::Composition::ComponentView>().Compositor();
  // auto compositionContext = view.as<winrt::Microsoft::ReactNative::Composition::ComponentView>().CompositionContext();

  winrt::Windows::Foundation::Size size{100, 100};

  // // Create circle mask 
  // auto circleMaskSurface = compositionContext.CreateDrawingSurfaceBrush(size)

  // Get child visual
  auto circleVisual = compositor.CreateSpriteVisual();

  // // Apply mask to Visual
  // auto maskBrush = compositor.CreateMaskBrush();
  // maskBrush.Source(???);
  // maskBrush.Mask(circleMaskSurface);


  // circleVisual.Brush(maskBrush);

  // // Insert visual
  // InnerVisual().InsertAt(circleVisual, 0);

  return circleVisual;
}

#else

// IViewManager
winrt::hstring CircleMaskViewManager::Name() noexcept
{
  return L"CircleMask";
}

winrt::Windows::UI::Xaml::FrameworkElement CircleMaskViewManager::CreateView() noexcept
{
  auto const &view = winrt::Windows::UI::Xaml::Controls::Border();

  auto const &binding = winrt::Windows::UI::Xaml::Data::Binding();
  binding.Source(view);
  binding.Path(winrt::Windows::UI::Xaml::PropertyPath(L"Height"));
  binding.Converter(HeightToCornerRadiusConverter::Instance());

  view.SetBinding(winrt::Windows::UI::Xaml::Controls::Border::CornerRadiusProperty(), binding);

  return view;
}

// IViewManagerWithChildren

void CircleMaskViewManager::AddView(
    winrt::Windows::UI::Xaml::FrameworkElement const &parent,
    winrt::Windows::UI::Xaml::UIElement const &child,
    int64_t /*index*/) noexcept
{
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(child);
  }
}

void CircleMaskViewManager::RemoveAllChildren(winrt::Windows::UI::Xaml::FrameworkElement const &parent) noexcept
{
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(nullptr);
  }
}

void CircleMaskViewManager::RemoveChildAt(winrt::Windows::UI::Xaml::FrameworkElement const &parent, int64_t /*index*/) noexcept
{
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(nullptr);
  }
}

void CircleMaskViewManager::ReplaceChild(
    winrt::Windows::UI::Xaml::FrameworkElement const &parent,
    winrt::Windows::UI::Xaml::UIElement const & /*oldChild*/,
    winrt::Windows::UI::Xaml::UIElement const &newChild) noexcept
{
  if (auto const &border = parent.try_as<winrt::Windows::UI::Xaml::Controls::Border>()) {
    border.Child(newChild);
  }
}

winrt::Windows::Foundation::IInspectable HeightToCornerRadiusConverter::Convert(
    winrt::Windows::Foundation::IInspectable const &value,
    winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
    winrt::Windows::Foundation::IInspectable const & /*parameter*/,
    winrt::hstring const & /*language*/) noexcept
{
  double d = winrt::unbox_value<double>(value);

  if (isnan(d)) {
    d = 0.0;
  }

  return winrt::box_value(winrt::Windows::UI::Xaml::CornerRadiusHelper::FromUniformRadius(d));
}

winrt::Windows::Foundation::IInspectable HeightToCornerRadiusConverter::ConvertBack(
    winrt::Windows::Foundation::IInspectable const &value,
    winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
    winrt::Windows::Foundation::IInspectable const & /*parameter*/,
    winrt::hstring const & /*language*/) noexcept
{
  return value;
}

winrt::Windows::UI::Xaml::Data::IValueConverter HeightToCornerRadiusConverter::Instance() noexcept
{
  static auto const &instance = winrt::make<HeightToCornerRadiusConverter>();
  return instance;
};

#endif // #ifndef RNW_NEW_ARCH

} // namespace winrt::NativeModuleSample::implementation
