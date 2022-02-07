---
id: version-0.67-IRedBoxHandler
title: IRedBoxHandler
original_id: IRedBoxHandler
---

Kind: `interface`



`IRedBoxHandler` provides an extension point to allow custom error handling within the React instance.
This can be useful if you have an existing error reporting system that you want React errors to be reported to.
The default implementation of `RedBoxHandler` shows an error messages in a error screen
that covers the whole application window.

If you want to maintain the existing `RedBox` behaviors, and also report errors to your own reporting system,
your implementation can call into the default `RedBoxHandler`, which can be obtained by calling :

```csharp
RedBoxHelper::CreateDefaultHandler(Host);
```

Sample settings up a `RedBoxHandler` that reports errors to an external system, and displays the default `RedBox`
experience within the application:

```csharp

class MyRedBoxHandler : IRedBoxHandler
{
    MyRedBoxHandler(IRedBoxHandler defaultHandler) {
      innerHandler = defaultHandler;
    }

   public void ShowNewError(IRedBoxErrorInfo info, RedBoxErrorType type) {
      // Dont report non-fatal errors (optional)
      if (type != RedBoxErrorType.JavaScriptSoft)
        ReportErrorToMyErrorReportingSystem(info, type);

      // Display errors in app if the instance is running with DevSupportEnabled
      if (innerHandler.IsDevSupportEnabled)
        innerHandler.ShowNewError(info, type);
    }

   public bool IsDevSupportEnabled {
      get;
    }
    {
      // The default handler will return true if the instance has DevSupport turned on
      // But if you want to record error information in released versions of your app
      // Then you should return true here, so that all errors get reported.
      return true;
    }

   public void UpdateError(IRedBoxErrorInfo info) {
      if (innerHandler.IsDevSupportEnabled)
        innerHandler.UpdateError(info);
    }

   public void DismissRedBox() {
      if (innerHandler.IsDevSupportEnabled)
        innerHandler.DismissRedBox();
    }

   private IRedBoxHandler innerHandler;
}


RegisterMyRedBoxHandler()
{
    Host.InstanceSettings.RedBoxHandler = new MyRedBoxHandler(RedBoxHelper.CreateDefaultHandler(Host));
}

```

## Properties
### IsDevSupportEnabled
`readonly`  bool `IsDevSupportEnabled`

This property will control if errors should be reported to the handler. If this returns false, [`ShowNewError`](#shownewerror) and [`UpdateError`](#updateerror) will not be called.



## Methods
### DismissRedBox
void **`DismissRedBox`**()



### ShowNewError
void **`ShowNewError`**([`IRedBoxErrorInfo`](IRedBoxErrorInfo) info, [`RedBoxErrorType`](RedBoxErrorType) type)

This method is called when an error is initially hit.



### UpdateError
void **`UpdateError`**([`IRedBoxErrorInfo`](IRedBoxErrorInfo) info)

This method is called when updated information about an error has been resolved. For JavaScript errors, this is called if source map information was able to be resolved to provide a more useful call stack.






## Referenced by
- [`ReactInstanceSettings`](ReactInstanceSettings)
- [`RedBoxHelper`](RedBoxHelper)
