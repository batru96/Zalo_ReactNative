import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import SearchView from '../fragments/SearchView';

export default class ListComponents extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <SearchView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
