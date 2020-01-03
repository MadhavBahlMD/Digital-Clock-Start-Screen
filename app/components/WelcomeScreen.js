import React, { Component } from 'react';
import {
        View,
        StyleSheet,
        Text
    } from 'react-native';

export default class WelcomeScreen extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>This is the Welcome Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    }
});