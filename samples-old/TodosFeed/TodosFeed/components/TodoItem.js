import React, { Component } from 'react';
import {
  Text,  
  View,
} from 'react-native';

const FeedItem = (props) => {
    return (
        <View style={{ paddingBottom: 12}}>
            <Text style={{ fontSize: 18}}>{props.title}</Text>
        </View>
    );
}

FeedItem.defaultProps = {
    title: "This is a to-do"
}

export default FeedItem