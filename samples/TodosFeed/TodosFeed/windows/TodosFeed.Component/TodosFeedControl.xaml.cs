using react.uwp;
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
            InstanceSettings settings = new InstanceSettings();

            settings.UseLiveReload = true;
            settings.UseWebDebugger = true;

            var instance = Instance.Create(JSFILENAME);
            instance.Start(settings);
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
