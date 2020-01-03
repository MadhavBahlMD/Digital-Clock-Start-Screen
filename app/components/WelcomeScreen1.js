import React, { Component } from 'react';
import {
        View,
        StyleSheet,
        Text,
        ImageBackground
    } from 'react-native';

export default class WelcomeScreen extends Component {
    render () {
        return (
            <ImageBackground
                style={styles.mainBackground}
                source={require('./../images/img1.jpg')}
            >

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({
    mainBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }
});