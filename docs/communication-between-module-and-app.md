---
id: communication-between-module-and-app
title: Establish a communication between the application and a native module
---

There are different scenarios in which you may need to exchange data between the React Native application and a module. For example, there are many features in the Universal Windows Platform (like the [share contract](https://docs.microsoft.com/en-us/windows/uwp/app-to-app/share-data) or [background tasks](https://docs.microsoft.com/en-us/windows/uwp/launch-resume/support-your-app-with-background-tasks)) which are activated via the `App` class. Thanks to the activation events, you are able to gather the information you need to continue your task (for example, the data the user wants to share using your application). If these scenario are trivial to implement in a traditional UWP application, you might face some challenges in the React Native context because your actual application lives in the JavaScript ecosystem.

As such, these scenarios usually involve the interaction between 2 different components:

1) The host UWP application, which is the one that receives the activation parameters you need.
2) A native module, which enables to expose the operations you need to perform with the data to the React Native layer in JavaScript.

React Native for Windows provides two options to handle interactions between the main application and a module: 

1) **Property bags**: this is the best option when you need to exchange data.
2) **Notifications**: this is the best option when the application needs to notify a module about an event or the other way around.

Let's explore both options in more details.

### Property bags
Property bags are containers which are specific to the application instance and that can be accessed from every component, including native modules which are referenced by the application. Each property is exposed with a key / value pair.
Let's say you're building an application which is capable of managing a certain set of files. You'll want to intercept the `OnFileActivated` event of the `App` class to share with a native module you're building the path of the file that has been opened.

This is an example on how to achieve this goal in C++:

```cpp
void App::OnFileActivated(activation::FileActivatedEventArgs const& e) {
	auto name = ReactPropertyBagHelper::GetName(ReactPropertyBagHelper::GlobalNamespace(), L"FilePath");
	auto path = e.Files().First().Current().Path();
	super::InstanceSettings().Properties().Set(name, box_value(path));
}
```

This is the same example in C#:

```csharp
protected override void OnFileActivated(FileActivatedEventArgs args)
{
    var name = ReactPropertyBagHelper.GetName(ReactPropertyBagHelper.GlobalNamespace, "FilePath");
    InstanceSettings.Properties.Set(name, args.Files.FirstOrDefault().Path);
}
```

The main class you're going to leverage to work with properties is called `ReactPropertyBagHelper`.
As first step, you use it to create a `ReactPropertyName` object, which is a unique identifier of the property across the application. It's made by a namespace and a key. You can leverage the default global namespace (exposed by the `ReactPropertyBagHelper.GlobalNamespace` property) or you can create a custom one.
Every React Native application exposes a property called `InstanceSettings`, which stores multiple information about the current application. It's used, for example, to control features like fast refresh. This property exposes also a global container for properties, through the `Properties` collection. To create a new property, you must call the `Set()` method, passing as parameter the name we have previously created and the value we want to store (in this case, the path of the selected file).

Once the property is set, you can retrieve it from any other component of the application using the same namespace and key. For example, let's say you have built a native module and you want to retrieve this property.
As first thing, you have to get access to the context of the React Native application through the `ReactContext` class.
In C++, this is done by adding a `ReactContext` implementation to the class, by passing a parameter of type `IReactContext`:

```cpp

private:
    winrt::Microsoft::ReactNative::IReactContext m_reactContext{ nullptr };

void MyNativeModule::ReactContext(IReactContext reactContext) noexcept {
    m_reactContext = reactContext;
}
```

In C#, instead, you have to create an initialization method with a `ReactContext` parameter and decorated with the `[ReactInitializer]` attribute:

```csharp

private ReactContext _context;

[ReactInitializer]
public void Initialize(ReactContext context)
{
    _context = context;
}
```

Thanks to the `ReactContext` object, you have access to the same settings exposed through the `InstanceSettings` class in the main application, including the `Properties()` collection. This is the code to retrieve a property in C++:

```cpp
void ReactWebViewManager::ReactContext(IReactContext reactContext) noexcept {
    m_reactContext = reactContext;
    auto name = ReactPropertyBagHelper::GetName(ReactPropertyBagHelper::GlobalNamespace(), L"FilePath");
    auto filePath = reactContext.Properties().Get(name);
}
```

And this is how you achieve the same in C#:

```csharp
[ReactInitializer]
public void Initialize(ReactContext context)
{
    _context = context;
    var propertyName = ReactPropertyBagHelper.GetName(ReactPropertyBagHelper.GlobalNamespace, "FilePath");
    var path = context.Handle.Properties.Get(propertyName);
}
```

First, like we did in the main application, you setup a `ReactPropertyName` object, using the same namespace and the same name you have used in the `App` class. Then you use the `Properties()` collection exposed by the `ReactContext` object to retrieve the property with the `Get()` method, which simply accepts the `ReactPropertyName` we have just created.
We will get in return the value that we have previously set in the main application, which is the path of the selected file.

The same code works also in the opposite scenario. You could use the `ReactContext` object to set a property in the module and then retrieve from the main application using the InstanceSettings object.








