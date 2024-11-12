#include "pch.h"

#include "NativeModuleSample.h"

namespace winrt::NativeModuleSample
{

// See https://microsoft.github.io/react-native-windows/docs/native-modules for details on writing native modules

void NativeModuleSample::Initialize(React::ReactContext const &reactContext) noexcept {
  m_context = reactContext;
}

void NativeModuleSample::multiply(double a, double b, ::React::ReactPromise<double> &&result) noexcept {
  result.Resolve(a * b);
}

} // namespace winrt::NativeModuleSample