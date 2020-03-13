import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput, ScrollView, Button, ActivityIndicator} from 'react-native';
import PlaceInput from "../components/PlaceInput"
import API from '../config/api'
import axios from  'axios';

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
                    <Button
                        title="Press me"
                        onPress={this.getfetch}
                    />
                </View>
                <View style={styles.footer}>
                    <Text>Footer</Text>
                </View>

            </View>

        );
    }
    getfetch = () => {
        return fetch('https://gdziezjemapi.azurewebsites.net/api/city',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(responseJson);

            })
            .catch((error) =>{
                console.log(error);
            });
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