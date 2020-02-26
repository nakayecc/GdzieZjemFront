import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput, ScrollView} from 'react-native';
import PlaceInput from "../components/PlaceInput"

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
                <View style={styles.body}>
                    <PlaceInput/>

                </View>

                <View style={styles.footer}>
                    <Text>Footer</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    logo: {
        marginTop: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    body: {
        flex: 4,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 70,
    },

    footer: {
        flex: 1,
    },
    textInput: {
        height: 40,
        width: 300,
        borderWidth: 1,

    }


});