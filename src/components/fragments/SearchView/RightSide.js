import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import icAdd from '../../../icons/ic_add.png';

class RightSide extends Component {
    render() {
        const {button} = styles;
        return (
            <TouchableOpacity>
                <Image style={button} source={icAdd} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 25,
        height: 25
    }
});

export default RightSide;