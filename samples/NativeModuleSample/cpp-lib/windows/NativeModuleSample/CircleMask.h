// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

#pragma once

#include "pch.h"

#ifdef RNW_NEW_ARCH

#include "codegen/react/components/NativeModuleSampleSpec/CircleMask.g.h"

#include <winrt/Microsoft.ReactNative.Composition.Experimental.h>

#else

#include <winrt/Windows.UI.Xaml.Controls.h>
#include <winrt/Windows.UI.Xaml.Data.h>

#endif

namespace winrt::NativeModuleSample::implementation
{

void RegisterCircleMaskNativeComponent(
    winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept;

#ifdef RNW_NEW_ARCH

struct CircleMaskComponentView : winrt::implements<CircleMaskComponentView, winrt::IInspectable>,
                                  NativeModuleSampleCodegen::BaseCircleMask<CircleMaskComponentView>
{
  winrt::Microsoft::UI::Composition::Visual CreateVisual(const winrt::Microsoft::ReactNative::ComponentView &view) noexcept override;
  void Initialize(const winrt::Microsoft::ReactNative::ComponentView &/*view*/) noexcept override;

private:
  winrt::Microsoft::ReactNative::ComponentView::LayoutMetricsChanged_revoker m_layoutMetricChangedRevoker;
  winrt::Microsoft::UI::Composition::SpriteVisual m_visual{nullptr};
};

#else

struct CircleMaskViewManager : winrt::implements<
                                  CircleMaskViewManager,
                                  winrt::Microsoft::ReactNative::IViewManager,
                                  winrt::Microsoft::ReactNative::IViewManagerWithChildren>
{
 public:
  CircleMaskViewManager(){}

  // IViewManager
  winrt::hstring Name() noexcept;

  winrt::Windows::UI::Xaml::FrameworkElement CreateView() noexcept;

  // IViewManagerWithChildren

  void AddView(
      winrt::Windows::UI::Xaml::FrameworkElement const &parent,
      winrt::Windows::UI::Xaml::UIElement const &child,
      int64_t /*index*/) noexcept;

  void RemoveAllChildren(winrt::Windows::UI::Xaml::FrameworkElement const &parent) noexcept;

  void RemoveChildAt(winrt::Windows::UI::Xaml::FrameworkElement const &parent, int64_t /*index*/) noexcept;

  void ReplaceChild(
      winrt::Windows::UI::Xaml::FrameworkElement const &parent,
      winrt::Windows::UI::Xaml::UIElement const & /*oldChild*/,
      winrt::Windows::UI::Xaml::UIElement const &newChild) noexcept;
};

struct HeightToCornerRadiusConverter
    : winrt::implements<HeightToCornerRadiusConverter, winrt::Windows::UI::Xaml::Data::IValueConverter>
{
 public:
  HeightToCornerRadiusConverter(){}

  winrt::Windows::Foundation::IInspectable Convert(
      winrt::Windows::Foundation::IInspectable const &value,
      winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
      winrt::Windows::Foundation::IInspectable const & /*parameter*/,
      winrt::hstring const & /*language*/) noexcept;

  winrt::Windows::Foundation::IInspectable ConvertBack(
      winrt::Windows::Foundation::IInspectable const &value,
      winrt::Windows::UI::Xaml::Interop::TypeName const & /*targetType*/,
      winrt::Windows::Foundation::IInspectable const & /*parameter*/,
      winrt::hstring const & /*language*/) noexcept;

  static winrt::Windows::UI::Xaml::Data::IValueConverter Instance() noexcept;

  // IValueConverter
};

#endif // #ifdef RNW_NEW_ARCH

} // namespace winrt::NativeModuleSample::implementation
