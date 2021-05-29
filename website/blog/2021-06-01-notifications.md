---
title: "Add Toast notifications to your React Native for Windows application"
author: Alexander Sklar
authorURL: https://twitter.com/alexsklar
description: "Add Windows toast notifications to a React Native for Windows application"
is_blog: true
published_date: June 01, 2021
---

In this article, we will discuss how to enable your app to show toast notifications, which you can use to notify the user that something needs their attention, or to notify them that a long running operation has completed.

<!--truncate-->

### Create a native module

This article assumes you have some familiarity with React Native for Windows native modules. If you need a refresher, check out [the native modules documentation](https://microsoft.github.io/react-native-windows/docs/next/native-modules).

The Windows toast notification API is fairly rich: it includes a number of UI _templates_ that an app can use to customize how it wants the notification to look. 
Some templates include text only, while others include text and images. Every template has some combination of these. You can see a list of the available templates [here](https://docs.microsoft.com/en-us/previous-versions/windows/apps/hh761494(v=win.10)).

We will create a native module which will have a single method, `raise`. The Windows toast notification API takes an XML document as input, which will specify the text and image sources that we want to show. However, it would be much more natural for us to work with JavaScript objects and JSON instead of XML markup.
So our `raise` method will take a JS object, which will include what template the app wants to use, as well as arrays of text and images that apply to the template. We will take the information in this JS object, and use it to construct the XML that we need to pass to the platform API.

### Create a module 

For the purpose of our demo, we will add a native module directly to a C++/WinRT example app. If you prefer, you can follow the steps below and apply them to a separate native module project.
We will start with our standard native module setup, by adding a `Notifications.h` file to our example app project. In this initial version, we'll use the simplest static Toast template (one string of text), so we'll have our `raise` method take a string:

```cpp
#pragma once
#include <NativeModules.h>
#include <winrt/Windows.UI.Notifications.h>
#include <winrt/Windows.Data.Xml.Dom.h>

using namespace winrt::Windows::UI::Notifications;
using namespace winrt::Windows::Data::Xml::Dom;


REACT_MODULE(Notifications)
struct Notifications {

  REACT_INIT(Initialize);
  void Initialize(React::ReactContext const& context) noexcept {
    m_context = context;
  }

  REACT_METHOD(Raise, L"raise");
  void Raise(const std::string& text) noexcept
  {
  }

private:
  React::ReactContext m_context;
};
```

Then in our app's `ReactPackageProvider.cpp`, we just include our new header:
```diff
#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"
+#include "Notifications.h"
using namespace winrt::Microsoft::ReactNative;

namespace winrt::example::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder);
}

} // namespace winrt::example::implementation
```

### Starting simple

In our JavaScript (`App.tsx` or `App.js`), we will import NativeModules and add a button that calls into our `raise` API when clicked. Here we are using a [react-native-xaml](https://github.com/asklar/react-native-xaml) Button component, but you can use any UI component and toolkit you'd like. 
Normally, you would call the `raise` API in response to some other event, like an upload/download operation completing.

```jsx
import {
  // ...
  NativeModules
} from 'react-native';
import {Button} from 'react-native-xaml';

// ...
  <Button onClick={() => {
      NativeModules.Notifications.raise("hello");
  }} content="click me to send a toast" />
```

So now we have the basic setup, and you can set a breakpoint in the C++ code and validate that clicking on the button breaks into the C++ `Raise` method.
Now we get to have fun. First let's try the simplest static Toast template, `ToastText01`. This template just has one value for us to fill out, the text we want to show.
Here's the logic to send a toast using this template, in C++:
```cpp
  REACT_METHOD(Raise, L"raise");
  void Raise(const std::string& textToShow) noexcept
  {
    auto xml = ToastNotificationManager::GetTemplateContent(ToastTemplateType::ToastText01);
    for (auto& element : xml.GetElementsByTagName(L"text")) {
      element.AppendChild(xml.CreateTextNode(winrt::to_hstring(textToShow)));
    }

    auto toast = ToastNotification(xml);
    ToastNotificationManager::CreateToastNotifier().Show(toast);
  }
```

### Complete solution

Note that it is necessary to convert the string values we get from JavaScript (as `std::string` values which are UTF-8) onto platform strings (`winrt::hstring`), which are UTF-16, so we use the `winrt::to_hstring` helper for that.
Now that we have the simple case, it's time to crank it up a notch: we want to be able to use any of the available toast templates, which can have a number of text strings and images. The image elements have a `src` attribute as well as an `alt` attribute for accessibility.

```cpp
  REACT_METHOD(Raise, L"raise");
  void Raise(const React::JSValue& notification) noexcept
  {

    ToastTemplateType type = ToastTemplateType::ToastText01;

    React::JSValueObject obj;
    if (notification.Type() == React::JSValueType::String)
    {
      obj["text"] = notification.AsString();
    }
    else {
      obj = notification.AsObject().Copy();
    }

    auto typeEntry = obj.find("template");
    if (typeEntry != obj.end() && typeEntry->second.Type() == React::JSValueType::Int64) {
      type = static_cast<ToastTemplateType>(typeEntry->second.AsInt32());
    }

    auto xml = ToastNotificationManager::GetTemplateContent(type);

    for (const auto& entry : obj)
    {
      const auto tagName = winrt::to_hstring(entry.first);
      auto xmlElements = xml.GetElementsByTagName(tagName);
      
      if (entry.second.Type() == React::JSValueType::String) {
        React::JSValueArray strToArray;
        strToArray.push_back(entry.second.AsString());
        FillXmlElements(xml, xmlElements, strToArray);
      }
      else if (entry.second.Type() == React::JSValueType::Object) {
        React::JSValueArray objToArray;
        objToArray.push_back(entry.second.AsObject().Copy());
        FillXmlElements(xml, xmlElements, objToArray);
      } else {
        FillXmlElements(xml, xmlElements, entry.second.AsArray());
      }
    }


    auto toast = winrt::Windows::UI::Notifications::ToastNotification(xml);
    ToastNotificationManager::CreateToastNotifier().Show(toast);
  }


private:
  React::ReactContext m_context;

  void FillXmlElements(const XmlDocument& xml, const XmlNodeList& xmlElements, const React::JSValueArray& arr) {
    int i = 0;
    for (const auto& arrValue : arr) {
      auto node = xmlElements.GetAt(i++);
      if (arrValue.Type() == React::JSValueType::String) {
        const auto value = winrt::to_hstring(arrValue.AsString());
        node.AppendChild(xml.CreateTextNode(value));
      }
      else if (arrValue.Type() == React::JSValueType::Object) {
        const auto& arrValueObj = arrValue.AsObject();
        for (const auto& entry : arrValueObj) {
          auto attrName = winrt::to_hstring(entry.first);
          auto attr = node.Attributes().GetNamedItem(attrName);
          if (!attr) {
            attr = xml.CreateAttribute(attrName);
            node.Attributes().SetNamedItem(attr);
          }

          attr.NodeValue(winrt::box_value(winrt::to_hstring(entry.second.AsString())));
        }
      }
    }
  }
```

The code above will enable us to specify a `template` attribute, that we will set to be the numeric value of the template we want to use. You can find a table of such values in the [ToastTemplateType docs](https://docs.microsoft.com/uwp/api/Windows.UI.Notifications.ToastTemplateType). For example, `ToastText01` has a value of 4, so we'd specify `template: 4`.
It will also iterate through the rest of our JavaScript object parameter to discover the key/value pairs we want to set and apply them to the underlying XML that we will later pass to the platform.
Here is how you'd use this complete version from JavaScript:

```jsx
  <Button onClick={() => {
      NativeModules.Notifications.raise({
          template: 0, // ToastImageAndText01 - see https://docs.microsoft.com/uwp/api/Windows.UI.Notifications.ToastTemplateType
          // The template schema can be found at https://docs.microsoft.com/previous-versions/windows/apps/hh761494(v=win.10)
          text: "hello world",
          image: {
              src: "https://microsoft.github.io/react-native-windows/img/header_logo.svg",
              alt: "React logo",
          }
      });
  }} content="click me to send a toast" />

```

### Wrapping up

In this article we have learned how to write a native module to call into the native Toast Notification APIs, and how to use the JSValue APIs to inspect values sent from the JavaScript side to the native module

You can find the `Notifications.h` header used in this article as a [GitHub Gist](https://gist.github.com/asklar/12273ce7991c084d7d5c357206174b2d).
