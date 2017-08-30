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

        Animated.sequence([            // decay, then spring to start and twirl
            Animated.timing(                  // Animate over time
                this.state.newy,            // The animated value to drive
                {
                    toValue: 0,                   // Animate to opacity: 1 (opaque)
                    duration: 500,              // Make it take a while
                }
            ),
            Animated.timing(                  // Animate over time
                this.state.newy,            // The animated value to drive
                {
                    toValue: 0,                   // Animate to opacity: 1 (opaque)
                    duration: 3000,              // Make it take a while
                }
            ),
            Animated.timing(                  // Animate over time
                this.state.newy,            // The animated value to drive
                {
                    toValue: -1000,                   // Animate to opacity: 1 (opaque)
                    duration: 500,              // Make it take a while
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