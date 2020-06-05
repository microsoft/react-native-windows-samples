---
id: ijsvaluewriter-api
title: IJSValueWriter
---

*Describe the API*

# Reference

## Methods

### ```void WriteNull()```

TODO: Fill in stub

### ```void WriteBoolean(Boolean value)```

TODO: Fill in stub

### ```void WriteInt64(Int64 value)```

TODO: Fill in stub

### ```void WriteDouble(Double value)```

TODO: Fill in stub

### ```void WriteString(String value)```

TODO: Fill in stub

### ```void WriteObjectBegin()```

TODO: Fill in stub

### ```void WritePropertyName(String name)```

TODO: Fill in stub

### ```void WriteObjectEnd()```

TODO: Fill in stub

### ```void WriteArrayBegin()```

TODO: Fill in stub

### ```void WriteArrayEnd()```

TODO: Fill in stub


## Delegates

### ```delegate void JSValueArgWriter(IJSValueWriter writer);```

Use this delegate to pass arbitrary value to ABI API.
  
In a function that implements the delegate use the provided writer to stream custom values.

<!-- // Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace Microsoft.ReactNative {

  // Writer for JSON-like streams or tree structures
  [webhosthidden]
  interface IJSValueWriter {
    void WriteNull();
    void WriteBoolean(Boolean value);
    void WriteInt64(Int64 value);
    void WriteDouble(Double value);
    void WriteString(String value);
    void WriteObjectBegin();
    void WritePropertyName(String name);
    void WriteObjectEnd();
    void WriteArrayBegin();
    void WriteArrayEnd();
  }

  // Use this delegate to pass arbitrary value to ABI API.
  // In a function that implements the delegate use the provided writer to stream custom values.
  delegate void JSValueArgWriter(IJSValueWriter writer);
} // namespace Microsoft.ReactNative -->
