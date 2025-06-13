---
id: version-0.79-ImageFailedResponse
title: ImageFailedResponse
original_id: ImageFailedResponse
---

![Architecture](https://img.shields.io/badge/architecture-new_only-blue)

Kind: `class`

Extends: [`ImageResponse`](ImageResponse)

> **EXPERIMENTAL**

Use this as a return value from [`IUriImageProvider.GetImageResponseAsync`](IUriImageProvider#getimageresponseasync) to provide information about why the image load failed.

## Constructors
### ImageFailedResponse
 **`ImageFailedResponse`**(string errorMessage)

> **EXPERIMENTAL**

### ImageFailedResponse
 **`ImageFailedResponse`**(string errorMessage, [`HttpStatusCode`](https://docs.microsoft.com/uwp/api/Windows.Web.Http.HttpStatusCode) responseCode, [`HttpResponseHeaderCollection`](https://docs.microsoft.com/uwp/api/Windows.Web.Http.Headers.HttpResponseHeaderCollection) responseHeaders)

> **EXPERIMENTAL**
