import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import icBack from '../../icons/ic_left_arrow_white.png';

export default class Header extends Component {
    render() {
        const { header, buttonBack, title } = styles;
        return (
            <View style={header}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={icBack} style={buttonBack} />
                </TouchableOpacity>
                <Text style={title}>{this.props.title}</Text>
                <View style={buttonBack} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3975e8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
    buttonBack: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    title: {
        color: 'white',
        fontSize: 16
    },
});
