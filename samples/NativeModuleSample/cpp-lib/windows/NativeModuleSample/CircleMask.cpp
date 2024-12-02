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
  NativeModuleSampleCodegen::RegisterCircleMaskNativeComponent<CircleMaskComponentView>(packageBuilder, [](const winrt::Microsoft::ReactNative::Composition::IReactCompositionViewComponentBuilder& /*builder*/) {
    // Once 0.76 includes SetViewFeatures - enable this code:
    /*
    // Turn off default border handling, as it overrides the Clip property of the visual
    builder.SetViewFeatures(winrt::Microsoft::ReactNative::Composition::ComponentViewFeatures::Default & ~winrt::Microsoft::ReactNative::Composition::ComponentViewFeatures::NativeBorder);
    */
  });
#else
  packageBuilder.AddViewManager(L"CircleMaskViewManager", []() { return winrt::make<CircleMaskViewManager>(); });
#endif  
}

#ifdef RNW_NEW_ARCH

winrt::Microsoft::UI::Composition::Visual CircleMaskComponentView::CreateVisual(const winrt::Microsoft::ReactNative::ComponentView &view) noexcept
{
  auto compositor = view.as<winrt::Microsoft::ReactNative::Composition::ComponentView>().Compositor();

  m_visual = compositor.CreateSpriteVisual();

  auto ellipseGeometry = compositor.CreateEllipseGeometry();
  auto clip = compositor.CreateGeometricClip();
  clip.Geometry(ellipseGeometry);
  m_visual.Clip(clip);

  return m_visual;
}

void CircleMaskComponentView::Initialize(const winrt::Microsoft::ReactNative::ComponentView &view) noexcept 
{
    m_layoutMetricChangedRevoker = view.LayoutMetricsChanged(
        winrt::auto_revoke,
        [wkThis = get_weak()](
            const winrt::IInspectable &/*sender*/, const winrt::Microsoft::ReactNative::LayoutMetricsChangedArgs& args) {
          if (auto strongThis = wkThis.get()) {
            // Once 0.76 includes SetViewFeatures - remove this code, since the core border code will not override our clip:
            {
              auto compositor = strongThis->m_visual.Compositor();
              auto ellipseGeometry = compositor.CreateEllipseGeometry();
              auto clip = compositor.CreateGeometricClip();
              clip.Geometry(ellipseGeometry);
              strongThis->m_visual.Clip(clip);
            }
            // End of workaround for not being able to disable core clipping code


            auto ellipseGeometry = strongThis->m_visual.Clip().as<winrt::Microsoft::UI::Composition::CompositionGeometricClip>().Geometry().as<winrt::Microsoft::UI::Composition::CompositionEllipseGeometry>();
            winrt::Windows::Foundation::Numerics::float2 radius = {args.NewLayoutMetrics().Frame.Width * args.NewLayoutMetrics().PointScaleFactor / 2, args.NewLayoutMetrics().Frame.Height * args.NewLayoutMetrics().PointScaleFactor / 2};
            ellipseGeometry.Center(radius);
            ellipseGeometry.Radius(radius);
          }
        });
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
