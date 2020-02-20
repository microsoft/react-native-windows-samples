
using Microsoft.ReactNative;
using Microsoft.ReactNative.Managed;
using Windows.UI.Xaml.Controls;


namespace TodosFeed.Component
{
    public sealed partial class TodosFeedControl : UserControl
    {
        const string JSFileName = "index";
        const string JSComponentName = "TodosFeed";

        public TodosFeedControl()
        {
            this.InitializeComponent();
            LoadReact();
        }

        public void LoadReact()
        {
            ReactNativeHost host = new ReactNativeHost();

            host.InstanceSettings.UseLiveReload = true;
            host.InstanceSettings.UseWebDebugger = true;
            host.InstanceSettings.EnableDeveloperMenu = true;
            host.InstanceSettings.JavaScriptMainModuleName = JSFileName;

            RootElement.ComponentName = JSComponentName;
            JSValue initialProps = new JSValueObject { ["one"] = "1", ["two"] = "2" };
            RootElement.InitialProps = (IJSValueWriter writer) => writer.WriteValue(initialProps);
            RootElement.ReactNativeHost = host;
        }
    }
}
