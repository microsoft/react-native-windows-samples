import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  FancyMath,
  type Response,
  SimpleHttpModule,
  DataMarshallingExamples,
} from 'native-module-sample';

/* eslint-disable react-native/no-inline-styles */

export default function App() {
  const [fancyMathAddResult, setFancyMathAddResult] = useState<
    number | undefined
  >();
  const [simpleHttpModuleResponse, setSimpleHttpModuleResponse] = useState<
    Response | undefined
  >();

  useEffect(() => {
    FancyMath.add(3, 7, setFancyMathAddResult);
    SimpleHttpModule.GetHttpResponse('http://example.com').then(
      setSimpleHttpModuleResponse
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>FancyMath:</Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>E:</Text> {FancyMath.E}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>Pi:</Text> {FancyMath.Pi}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>add(3, 7):</Text>{' '}
        {fancyMathAddResult}
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
      <Text>
        <Text style={{ fontStyle: 'italic' }}>
          ReturnExplicitBooleanSync():
        </Text>{' '}
        {DataMarshallingExamples.ReturnExplicitBooleanSync().toString()}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>
          ReturnExplicitIntegerSync():
        </Text>{' '}
        {DataMarshallingExamples.ReturnExplicitIntegerSync()}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>ReturnExplicitDoubleSync():</Text>{' '}
        {DataMarshallingExamples.ReturnExplicitDoubleSync()}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>ReturnExplicitStringSync():</Text>{' '}
        {DataMarshallingExamples.ReturnExplicitStringSync()}
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
      <Text>
        <Text style={{ fontStyle: 'italic' }}>
          GetLengthSync({'{Start: { X: 0, Y: 0 }, End: { X: 1, Y: 1 }}'}):
        </Text>{' '}
        {DataMarshallingExamples.GetLengthSync({
          Start: { X: 0, Y: 0 },
          End: { X: 1, Y: 1 },
        })}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>
          GetAverageSync([1,2,3,4,5,6]):
        </Text>{' '}
        {DataMarshallingExamples.GetAverageSync([1, 2, 3, 4, 5, 6])}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>
          ConcatenateSync(['hello', 'world']):
        </Text>{' '}
        {DataMarshallingExamples.ConcatenateSync(['hello', 'world'])}
      </Text>
      <Text>
        <Text style={{ fontStyle: 'italic' }}>
          SplitSync('hello world', ' '):
        </Text>{' '}
        {JSON.stringify(DataMarshallingExamples.SplitSync('hello world', ' '))}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
