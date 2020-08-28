// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System;
using System.Threading.Tasks;
using Windows.Foundation;
using Windows.Web.Http;

using Microsoft.ReactNative.Managed;

namespace NativeModuleSample
{
    [ReactModule]
    class SimpleHttpModule
    {
        // An example asynchronous method which uses asynchronous Windows APIs to make a
        // http request to the given url and resolve the given promise with the result
        static async Task GetHttpResponseAsync(string uri, ReactPromise<JSValue> promise)
        {
            // Create an HttpClient object
            var httpClient = new HttpClient();

            // Send the GET request asynchronously
            var httpResponseMessage = await httpClient.GetAsync(new Uri(uri));

            var statusCode = httpResponseMessage.StatusCode;
            var content = await httpResponseMessage.Content.ReadAsStringAsync();

            // Build result object
            var resultObject = new JSValueObject();

            resultObject["statusCode"] = (int)statusCode;
            resultObject["content"] = content;

            promise.Resolve(resultObject);
        }

        [ReactMethod]
        public void GetHttpResponse(string uri, ReactPromise<JSValue> promise)
        {
            var task = GetHttpResponseAsync(uri, promise);
            task.AsAsyncAction().Completed = (action, status) =>
            {
                if (status == AsyncStatus.Error)
                {
                    var error = new ReactError();
                    error.Exception = action.ErrorCode;
                    promise.Reject(error);
                }
            };
        }
    }
}
