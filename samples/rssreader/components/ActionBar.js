import React, { Component } from 'react';
import { Button, View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ActionBar extends Component {
  render() {
    return (
      <View style={[ styles.toolbar]}>
        <Text style={[styles.title]}>
            Windows Blogs
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 55,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 16,
        color: '#ff7675'
    }
})
