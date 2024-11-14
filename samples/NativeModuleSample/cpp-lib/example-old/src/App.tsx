import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import {
  FancyMath,
  type Response,
  SimpleHttpModule,
  type Point,
  DataMarshallingExamples,
} from 'native-module-sample';
import type { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

/* eslint-disable react-native/no-inline-styles */

export default function App() {
  const [fancyMathAddResult, setFancyMathAddResult] = useState<
    number | undefined
  >();

  const [simpleHttpModuleResponse, setSimpleHttpModuleResponse] = useState<
    Response | undefined
  >();

  const [boolResult, setBoolResult] = useState<boolean | undefined>();
  const [intResult, setIntResult] = useState<Int32 | undefined>();
  const [doubleResult, setDoubleResult] = useState<number | undefined>();
  const [stringResult, setStringResult] = useState<string | undefined>();
  const [midpointResult, setMidpointResult] = useState<Point | undefined>();
  const [lengthResult, setLengthResult] = useState<number | undefined>();
  const [averageResult, setAverageResult] = useState<number | undefined>();
  const [concatenateResult, setConcatenateResult] = useState<
    string | undefined
  >();
  const [splitResult, setSplitResult] = useState<Array<string> | undefined>();
  const [midpointByJSValueResult, setMidpointByJSValueResult] = useState<
    Object | undefined
  >();

  useEffect(() => {
    FancyMath.add(3, 7, setFancyMathAddResult);

    SimpleHttpModule.GetHttpResponse('http://example.com').then(
      setSimpleHttpModuleResponse
    );

    DataMarshallingExamples.ReturnExplicitBoolean(setBoolResult);
    DataMarshallingExamples.ReturnExplicitInteger(setIntResult);
    DataMarshallingExamples.ReturnExplicitDouble(setDoubleResult);
    DataMarshallingExamples.ReturnExplicitString(setStringResult);
    DataMarshallingExamples.GetMidpoint(
      { X: 0, Y: 0 },
      { X: 1, Y: 1 },
      setMidpointResult
    );
    DataMarshallingExamples.GetLength(
      {
        Start: { X: 0, Y: 0 },
        End: { X: 1, Y: 1 },
      },
      setLengthResult
    );
    DataMarshallingExamples.GetAverage([1, 2, 3, 4, 5, 6], setAverageResult);
    DataMarshallingExamples.Concatenate(
      ['hello', 'world'],
      setConcatenateResult
    );
    DataMarshallingExamples.Split('hello world', ' ', setSplitResult);
    DataMarshallingExamples.GetMidpointByJSValue(
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      setMidpointByJSValueResult
    );
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text />
        <Text style={{ fontWeight: 'bold' }}>FancyMath:</Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>E:</Text> {FancyMath.E}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>Pi:</Text> {FancyMath.Pi}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>add(3, 7):</Text>{' '}
          {fancyMathAddResult ?? '???'}
        </Text>
        <Text />
        <Text style={{ fontWeight: 'bold' }}>SimpleHttpModule:</Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetHttpResponse("http://example.com"):
          </Text>{' '}
          {simpleHttpModuleResponse?.statusCode ?? '???'}
        </Text>
        <Text />
        <Text style={{ fontWeight: 'bold' }}>DataMarshallingExamples:</Text>
        <Button
          title={"ExplicitPrimitiveArgs(true, 1, 3.14, 'Hello World')"}
          onPress={(_) => {
            DataMarshallingExamples.ExplicitPrimitiveArgs(
              true,
              1,
              3.14,
              'Hello World'
            );
          }}
        />
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>ReturnExplicitBoolean():</Text>{' '}
          {boolResult?.toString() ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            ReturnExplicitBooleanSync():
          </Text>{' '}
          {DataMarshallingExamples.ReturnExplicitBooleanSync().toString()}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>ReturnExplicitInteger():</Text>{' '}
          {intResult ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            ReturnExplicitIntegerSync():
          </Text>{' '}
          {DataMarshallingExamples.ReturnExplicitIntegerSync()}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>ReturnExplicitDouble():</Text>{' '}
          {doubleResult ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            ReturnExplicitDoubleSync():
          </Text>{' '}
          {DataMarshallingExamples.ReturnExplicitDoubleSync()}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>ReturnExplicitString():</Text>{' '}
          {stringResult ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            ReturnExplicitStringSync():
          </Text>{' '}
          {DataMarshallingExamples.ReturnExplicitStringSync()}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetMidpoint({'{X: 0, Y: 0}, {X: 1, Y: 1}'}):
          </Text>{' '}
          {JSON.stringify(midpointResult) ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetMidpointSync({'{X: 0, Y: 0}, {X: 1, Y: 1}'}):
          </Text>{' '}
          {JSON.stringify(
            DataMarshallingExamples.GetMidpointSync(
              { X: 0, Y: 0 },
              { X: 1, Y: 1 }
            )
          )}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetLength({'{Start: { X: 0, Y: 0 }, End: { X: 1, Y: 1 }}'}):
          </Text>{' '}
          {lengthResult ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetLengthSync({'{Start: { X: 0, Y: 0 }, End: { X: 1, Y: 1 }}'}):
          </Text>{' '}
          {DataMarshallingExamples.GetLengthSync({
            Start: { X: 0, Y: 0 },
            End: { X: 1, Y: 1 },
          })}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetAverage([1,2,3,4,5,6]):
          </Text>{' '}
          {averageResult ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetAverageSync([1,2,3,4,5,6]):
          </Text>{' '}
          {DataMarshallingExamples.GetAverageSync([1, 2, 3, 4, 5, 6])}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            Concatenate(['hello', 'world']):
          </Text>{' '}
          {concatenateResult ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            ConcatenateSync(['hello', 'world']):
          </Text>{' '}
          {DataMarshallingExamples.ConcatenateSync(['hello', 'world'])}
        </Text>
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            Split('hello world', ' '):
          </Text>{' '}
          {JSON.stringify(splitResult) ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            SplitSync('hello world', ' '):
          </Text>{' '}
          {JSON.stringify(
            DataMarshallingExamples.SplitSync('hello world', ' ')
          )}
        </Text>
        <Text />
        <Button
          title={"JSValueArgs(true, 1, 3.14, 'Hello World')"}
          onPress={(_) => {
            DataMarshallingExamples.JSValueArgs(true, 1, 3.14, 'Hello World');
          }}
        />
        <Text />
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetMidpointByJSValue({'{x: 0, y: 0}, {x: 1, y: 1}'}):
          </Text>{' '}
          {JSON.stringify(midpointByJSValueResult) ?? '???'}
        </Text>
        <Text>
          <Text style={{ fontStyle: 'italic' }}>
            GetMidpointByJSValueSync({'{x: 0, y: 0}, {x: 1, y: 1}'}):
          </Text>{' '}
          {JSON.stringify(
            DataMarshallingExamples.GetMidpointByJSValueSync(
              { x: 0, y: 0 },
              { x: 1, y: 1 }
            )
          )}
        </Text>
        <Text />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
