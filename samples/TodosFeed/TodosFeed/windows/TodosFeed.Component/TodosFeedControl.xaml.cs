
using Microsoft.ReactNative;
using Windows.Services.Maps;
using Windows.UI.Xaml.Controls;


namespace TodosFeed.Component
{
    public sealed partial class TodosFeedControl : UserControl
    {
        const string JSFILENAME = "index";
        const string JSCOMPONENTNAME = "TodosFeed";

        public TodosFeedControl()
        {
            this.InitializeComponent();
            LoadReact();
        }

        public void LoadReact()
        {
            ReactInstanceSettings settings = new ReactInstanceSettings();

            settings.UseLiveReload = true;
            settings.UseWebDebugger = true;

            ReactInstance instance = new ReactInstance();
            ReactApplication app = new ReactApplication();
            app.JavaScriptMainModuleName = JSFILENAME;
            
            RootElement.Instance = instance;

            string initialProps = "{ "
                          + "\"one\":\"1\""
                          + ", \"two\":\"2\""
                          + "}";

            RootElement.InitialProps = initialProps;

            RootElement.JsComponentName = JSCOMPONENTNAME;
            RootElement.StartRender();
        }
    }
}
