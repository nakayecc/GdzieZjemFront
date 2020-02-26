import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import LocationItem from "./LocationItem";
import {GoogleAutoComplete} from "react-native-google-autocomplete";

class PlaceInput extends PureComponent {
    render() {
        return (
            <GoogleAutoComplete apiKey={"AIzaSyB2QdfCgYq2Cwf8_7wtrIARd9Gg5BI9nP0"} debounce={300}>
                {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
                    <React.Fragment>
                        <TextInput
                            style={styles.textInput}
                            value={inputValue}
                            onChangeText={handleTextChange}
                            placeholder="Location..."
                        />
                        <ScrollView style={styles.scrollView}>
                            {locationResults.map((el, i) => (
                                <LocationItem
                                    {...el}
                                    fetchDetails={fetchDetails}
                                    key={String(i)}
                                />
                            ))}
                        </ScrollView>
                    </React.Fragment>
                )}
            </GoogleAutoComplete>
        );
    }
}
export default PlaceInput;


const styles = StyleSheet.create({

    textInput: {
        height: 40,
        width: 300,
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingBottom: 5,
    },

    scrollView : {
        maxHeight: 200
    }
});
