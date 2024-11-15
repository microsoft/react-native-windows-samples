// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

#pragma once

#include <functional>
#include <sstream>
#include <string>

#include "JSValue.h"
#include "NativeModules.h"
#include "../../codegen/NativeAsyncMethodExamplesSpec.g.h"

namespace NativeModuleSample
{
    REACT_MODULE(SimpleHttpModule);
    struct SimpleHttpModule
    {
        using ModuleSpec = AsyncMethodExamplesSpec;

        // An example asynchronous method which uses asynchronous Windows APIs to make a
        // http request to the given url and resolve the given promise with the result
        static winrt::Windows::Foundation::IAsyncAction GetHttpResponseAsync(std::string uri,
            winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValue> promise) noexcept
        {
            // Capture the promise to make sure it doesn't get cleaned up
            // during the asynchronous calls below
            auto capturedPromise = promise;

            // Create an HttpClient object
            auto httpClient = winrt::Windows::Web::Http::HttpClient();

            // Send the GET request asynchronously
            auto httpResponseMessage = co_await httpClient.GetAsync(winrt::Windows::Foundation::Uri(winrt::to_hstring(uri)));

            // Parse response
            auto statusCode = httpResponseMessage.StatusCode();
            auto content = co_await httpResponseMessage.Content().ReadAsStringAsync();

            // Build result object
            auto resultObject = winrt::Microsoft::ReactNative::JSValueObject();

            resultObject["statusCode"] = static_cast<int>(statusCode);
            resultObject["content"] = winrt::to_string(content);

            capturedPromise.Resolve(std::move(resultObject));
        }

        // An example method which provides a promise-based JS method on one side
        // which seamlessly calls native asynchronous code without any blocking
        //
        // Example JS:
        //
        // NativeModules.SimpleHttpModule.GetHttpResponse('https://microsoft.github.io/react-native-windows/')
        //  .then(result => console.log(result))
        //  .catch(error => console.log(error));
        REACT_METHOD(GetHttpResponse);
        void GetHttpResponse(std::string uri,
            winrt::Microsoft::ReactNative::ReactPromise<winrt::Microsoft::ReactNative::JSValue> promise) noexcept
        {
            // Here we're simply starting our asynchronous method
            // and returning back to the caller
            auto asyncOp = GetHttpResponseAsync(uri, promise);
            asyncOp.Completed([promise](auto action, auto status)
            {
                // Here we handle any unhandled exceptions thrown during the
                // asynchronous call by rejecting the promise with the error code
                if (status == winrt::Windows::Foundation::AsyncStatus::Error)
                {
                    std::stringstream errorCode;
                    errorCode << "0x" << std::hex << action.ErrorCode() << std::endl;

                    auto error = winrt::Microsoft::ReactNative::ReactError();
                    error.Message = "HRESULT " + errorCode.str() + ": " + std::system_category().message(action.ErrorCode());
                    promise.Reject(error);
                }
            });
        }
    };
}
