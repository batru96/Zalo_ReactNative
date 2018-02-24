import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import RightSide from './SearchView/RightSide';
import icSearch from '../../icons/ic_search.png';

export default class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
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
                    onChangeText={text => this.setState({ searchValue: text })}
                    value={this.state.searchValue}
                    placeholderTextColor="#ececec"
                    placeholder="Search friends, messages..."
                    underlineColorAndroid="transparent"
                />
                <RightSide />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4a8afd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    button: {
        height: 25,
        width: 25
    },
    input: {
        flex: 1,
        color: 'white',
        height: 30,
        paddingHorizontal: 16,
        paddingVertical: 0,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    }
});
