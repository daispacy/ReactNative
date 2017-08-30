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
            // show
            Animated.timing(
                this.state.newy,
                {
                    toValue: 0,
                    duration: this.props.duration || 500,
                }
            ),
            // delay
            Animated.timing(
                this.state.newy,
                {
                    toValue: 0,
                    duration: this.props.delayDuration || 3000,
                }
            ),
            // hide
            Animated.timing(
                this.state.newy,
                {
                    toValue: -1000, // hide banner
                    duration: this.props.duration || 500,
                }
            ),
        ]).start();
    }

    render() {
        let { newy } = this.state;
        return (
            <Animated.View
                style={{
                    backgroundColor: this.props.isError ? (this.props.bgColor || '#ee6e73') : (this.props.bgColor || 'green'),
                    position: this.props.position || 'absolute',
                    right: this.props.right || 0,
                    left: this.props.left || 0,
                    zIndex: 99999,
                    opacity: this.props.opacity || 0.9,
                    flex: 1,
                    justifyContent: 'space-between',
                    top: newy,         // Bind opacity to animated value
                }}
            >
                <Text style={{ marginTop: 24, textAlign: this.props.textAlign || 'center', fontWeight: 'bold', color: this.props.textColor || 'white' }}>
                    {this.props.message}
                </Text>
            </Animated.View>
        );
    }
}