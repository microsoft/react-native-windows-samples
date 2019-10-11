import React, { Component } from 'react';
import {
  Text,  
  View,
} from 'react-native';

class FeedItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        title: "This is a to-do"
    };

    render() {
        return (
            <View style={{ paddingBottom: 12}}>
                <Text style={{ fontSize: 18}}>{this.props.title}</Text>
            </View>
        );
    }
}

export default FeedItem