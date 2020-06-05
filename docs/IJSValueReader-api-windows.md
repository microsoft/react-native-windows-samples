---
id: ijsvaluereader-api
title: IJSValueReader
---

*Describe the API*

IJSValueReader supports the following types:

```
  enum JSValueType {
    Null,
    Object,
    Array,
    String,
    Boolean,
    Int64,
    Double,
  };
```


# Reference

## Methods

### ```Boolean GetNextObjectProperty(out String propertyName)```

TODO: Fill in stub

### ```Boolean GetNextArrayItem()```

TODO: Fill in stub

### ```String GetString()```

TODO: Fill in stub

### ```Boolean GetBoolean()```

TODO: Fill in stub

### ```Int64 GetInt64()```

TODO: Fill in stub

### ```Double GetDouble()```

TODO: Fill in stub


## Properties

### ```JSValueType ValueType { get; }```

TODO: Fill in stub




<!--
namespace Microsoft.ReactNative {

  // Type of value read from JavaScript by IJSValueReader
  enum JSValueType {
    Null,
    Object,
    Array,
    String,
    Boolean,
    Int64,
    Double,
  };

  // Forward only reader for JSON like streams or trees.
  [webhosthidden]
  interface IJSValueReader {
    JSValueType ValueType { get; };
    Boolean GetNextObjectProperty(out String propertyName);
    Boolean GetNextArrayItem();
    String GetString();
    Boolean GetBoolean();
    Int64 GetInt64();
    Double GetDouble();
  }
} // namespace Microsoft.ReactNative -->
