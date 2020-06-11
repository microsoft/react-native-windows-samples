---
id: ijsvaluereader-api
title: IJSValueReader
---

``IJSIValueReader`` is used to read data from JavaScript in custom NativeModules.  It acts as a stream.

``IJSIValueReader`` supports the following types:

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

Returns if there is another property in the current object.  If there is ``propertyName`` will proide the name of the property.

### ```Boolean GetNextArrayItem()```

Moves the reader to the next array item.  Returns if there is another item in the array.

### ```String GetString()```

Gets the current string value.

### ```Boolean GetBoolean()```

Gets the current boolean value.

### ```Int64 GetInt64()```

Gets the current number value as an int.

### ```Double GetDouble()```

Gets the current number value as a double.


## Properties

### ```JSValueType ValueType { get; }```

Returns the type of the current value.




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
