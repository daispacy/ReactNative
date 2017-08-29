import React, {Component} from 'react';
import {Text} from 'react-native';

class AComponent extends Component {
    render() {
        return (
            <Text>{this.props.children}</Text>
        )
    }
}

export default AComponent;