import React, { Component } from 'react';
import {
        View,
        StyleSheet,
        Text,
        Image,
        ImageBackground
    } from 'react-native';

import moment from "moment";

export default class WelcomeScreen extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
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
        console.log (selectedNumber);

        this.state = {
            time: moment().format("LTS"),
            date: moment().format("LL"),
            backgroundImage: imageAddr[selectedNumber],
        };
    }

    componentDidMount () {
        this._isMounted = true;
        /**
         * @todo 
         * 1. Style the time and date texts
         * 2. Add react-native-image-picker to let the user upload an image
         * 3. Add random quotes to make the screen inspirational
         * 4. Add google search bar
         */

        setInterval (() => {
            let currentDate = new Date();
            let time = currentDate.getSeconds ();
            console.log ('TIME', time);
            if (this._isMounted) {
                this.setState ({
                    ...this.state,
                    time: moment().format("LTS"),
                    date: moment().format("LL")
                });
            }
        }, 1000);
    }    

    componentWillUnmount() {
        this._isMounted = false;
    }
    

    render () {
        return (
            <ImageBackground
                style={styles.mainBackground}
                source={this.state.backgroundImage}
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
                    <Text style={styles.quote}>
                        <Text style={{fontWeight: 'bold'}}>“Live as if you were to die tomorrow. Learn as if you were to live forever.”</Text> - Mahatma Gandhi
                    </Text>
                    <Text style={styles.time}>
                        {this.state.time}
                    </Text>
                    <Text style={styles.date}>
                        {this.state.date}
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
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // To add a backdrop effect
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
    }, time: {
        color: '#fff',
        fontSize: 50,  
        fontWeight: 'bold'
    }, date: {
        color: '#fff',
        marginTop: -7,
        fontSize: 14
    }, quote: {
        color: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 20,
    }
});