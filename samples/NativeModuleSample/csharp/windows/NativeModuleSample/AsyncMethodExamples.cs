// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System;
using System.Threading.Tasks;
using Windows.Foundation;
using Windows.Web.Http;

using Microsoft.ReactNative.Managed;

namespace NativeModuleSample
{
  internal struct Result {
    public int statusCode { get; set; }
    public string content { get; set; }
  }
  
  [ReactModule]
  class SimpleHttpModule
  {
    [ReactMethod]
    public async Task<Result> GetHttpResponseAsync(string uri)
    {
      // Create an HttpClient object
      var httpClient = new HttpClient();

      // Send the GET request asynchronously
      var httpResponseMessage = await httpClient.GetAsync(new Uri(uri));

      var statusCode = httpResponseMessage.StatusCode;
      var content = await httpResponseMessage.Content.ReadAsStringAsync();
      
      return new Result()
      {
        statusCode = (int)statusCode,
        content = content,
      };
    }
  }
}