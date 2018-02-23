import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import imgThu from '../../images/thu.jpg';

class ListItem extends Component {
    render() {
        const { imgProfile, itemContainer, itemName } = styles;
        const { item } = this.props;
        return (
            <TouchableOpacity style={itemContainer}>
                <Image source={imgThu} style={imgProfile} />
                <Text style={itemName}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    imgProfile: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#ececec',
        alignItems: 'center'
    },
    itemName: {
        paddingHorizontal: 16
    }
});

export default ListItem;
