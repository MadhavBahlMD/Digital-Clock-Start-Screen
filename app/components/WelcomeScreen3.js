import React, { Component } from 'react';
import {
        View,
        StyleSheet,
        Text,
        Image,
        ImageBackground
    } from 'react-native';

export default class WelcomeScreen extends Component {
    selectRandomImage () {
        // If you want to add more photos, add on to this object
        const imageAddr = {
            1: require('./../images/img1.jpg'),
            2: require('./../images/img2.jpg'),
            3: require('./../images/img3.jpg'),
            4: require('./../images/img4.jpg'),
            5: require('./../images/img5.jpg'),
            6: require('./../images/img6.jpg'),
            7: require('./../images/img7.jpg'),
            8: require('./../images/img8.jpg'),
        }
        let min = 1; 
        let max = 8; // change the max to num of images
        let selectedNumber = Math.floor(Math.random() * (max - min +1) + min);

        return imageAddr[selectedNumber];
    }

    render () {
        this.selectRandomImage ();
        return (
            <ImageBackground
                style={styles.mainBackground}
                source={this.selectRandomImage()}
            >
                <View style={styles.welcomeScreenContainer}>
                    <View style={styles.photoContainer}>
                        <Image
                            style={styles.mainPhoto}
                            source={require('./../images/dp.png')}
                        />
                    </View>
                    <Text style={styles.welcomeName}>
                        Welcome,<Text style={{fontWeight: "bold"}}> Madhav Bahl</Text>
                    </Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create ({
    mainBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }, welcomeScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // To add a backdrop effect
    }, photoContainer: {
        width: 160,
        height: 160,
    }, mainPhoto: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 80,
        borderWidth: 2,
        borderColor: '#fff'
    }, welcomeName: {
        marginTop: 18,
        fontSize: 18,
        color: '#fff',
    }
});