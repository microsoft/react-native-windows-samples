#include "pch.h"
#include "ReactPackageProvider.h"

#include "NativeModules.h"



using namespace Microsoft::ReactNative;
using namespace winrt::Microsoft::ReactNative::Bridge;

namespace winrt::TodosFeed::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder);
}

} // namespace winrt::TodosFeed::implementation


