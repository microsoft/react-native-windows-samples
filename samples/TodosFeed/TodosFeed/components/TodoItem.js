import React, { Component } from 'react';
import {
  Text,  
  View,
} from 'react-native';

const FeedItem = () => {
    return (
        <View style={{ paddingBottom: 12}}>
            <Text style={{ fontSize: 18}}>{this.props.title}</Text>
        </View>
    );
}

export default FeedItem