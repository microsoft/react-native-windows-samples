using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.ReactNative;
using Microsoft.ReactNative.Managed;
using Windows.ApplicationModel;
using Windows.ApplicationModel.AppService;
using Windows.Foundation.Collections;
using Windows.UI;

namespace ReactNativeAppServiceModule
{
    [ReactModule("ReactNativeAppServiceModule")]
    internal sealed class ReactNativeModule
    {

        private ReactContext _reactContext;

        [ReactInitializer]
        public void Initialize(ReactContext reactContext)
        {
            _reactContext = reactContext;
        }

        [ReactMethod("launchFullTrustProcess")]
        public async Task LaunchFullTrustProcessAsync()
        {
            await FullTrustProcessLauncher.LaunchFullTrustProcessForCurrentAppAsync();
        }


        [ReactMethod("getRegistryKey")]
        public async Task<string> GetRegistryKey(string key)
        {
            var ns = ReactPropertyBagHelper.GetNamespace("RegistryChannel");
            var name = ReactPropertyBagHelper.GetName(ns, "AppServiceConnection");

            var content = _reactContext.Handle.Properties.Get(name);

            var _connection = content as AppServiceConnection;

            ValueSet valueSet = new ValueSet
            {
                { "RegistryKeyName", key }
            };

            var result = await _connection.SendMessageAsync(valueSet);

            string message = result.Message["RegistryKeyValue"].ToString();
            return message;
        }
    }
}
