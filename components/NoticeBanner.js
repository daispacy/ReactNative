import React from 'react';
import { Animated, Text, View } from 'react-native';

export default class NoticeBanner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newy: new Animated.Value(-1000)
        }
    }

    componentDidMount() {

        Animated.sequence([
            Animated.timing(
                this.state.newy,
                {
                    toValue: 0,
                    duration: 500,
                }
            ),
            Animated.timing(
                this.state.newy,
                {
                    toValue: 0,
                    duration: 3000,
                }
            ),
            Animated.timing(
                this.state.newy,
                {
                    toValue: -1000,
                    duration: 500,
                }
            ),
        ]).start();
    }

    render() {
        let { newy } = this.state;
        return (
            <Animated.View
                style={{
                    backgroundColor: this.props.isError ? '#ee6e73' : 'green',
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    zIndex: 99999,
                    opacity: 0.9,
                    flex: 1,
                    justifyContent: 'space-between',
                    top: newy,         // Bind opacity to animated value
                }}
            >
                <Text style={{ marginTop: 24, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
                    {this.props.message}
                </Text>
            </Animated.View>
        );
    }
}