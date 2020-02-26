import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Alert} from "react-native-web";

class LocationItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            response: {}
        }
    }

    _handlePress = async () => {
        const res = await this.props.fetchDetails(this.props.place_id);
       // console.log(JSON.stringify(res));
        this.setState({
            response: res
        })
    };

    render() {
        console.log(this.state.response);
        return (
            <View style = {styles.root}>
                <TouchableOpacity onPress = {this._handlePress}>
                <Text>{this.props.description}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default LocationItem;

        const styles = StyleSheet.create({
            root: {
                height: 40,
                width: 300,
                maxWidth:300,
                alignItems: 'center',
                borderBottomWidth: StyleSheet.hairlineWidth,
                justifyContent: 'center',
            }
    });

