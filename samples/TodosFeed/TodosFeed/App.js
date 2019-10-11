/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodosList from './components/TodosList'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>To-dos</Text>
        <TodosList /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    height: 150
  },
  welcome: {
    fontSize: 28,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
