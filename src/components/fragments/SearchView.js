import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icSearch from '../../icons/ic_search.png';

export default class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }
    render() {
        const { container, button, input } = styles;
        return (
            <View style={container}>
                <TouchableOpacity>
                    <Image style={button} source={icSearch} />
                </TouchableOpacity>
                <TextInput
                    style={input}
                    value={this.state.searchValue}
                    underlineColorAndroid="transparent"
                />
                <View style={button} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4a8afd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    button: {
        height: 25,
        width: 25
    },
    input: {
        flex: 1,
        borderWidth: 1,
        height: 35,
    }
})
