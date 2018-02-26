import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import imgVan from '../../images/photo.jpg';
import imgThu from '../../images/thu.jpg';

class MessageItem extends Component {
    seflComponent() {
        const { seflContainer, imgProfile, selfTextContainer } = styles;
        const { message } = this.props.item;
        return (
            <View style={seflContainer}>
                <TouchableOpacity style={selfTextContainer}>
                    <Text>{message}</Text>
                </TouchableOpacity>
                <Image source={imgVan} style={imgProfile} />
            </View>
        );
    }

    friendComponent() {
        const { friendContainer, imgProfile, friendTextContainer } = styles;
        const { message } = this.props.item;
        return (
            <View style={friendContainer}>
                <Image source={imgThu} style={imgProfile} />
                <TouchableOpacity style={friendTextContainer}>
                    <Text>{message}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { container } = styles;
        const { isSelf } = this.props.item;
        return (
            <View style={container}>
                {isSelf ? this.seflComponent() : this.friendComponent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    seflContainer: {
        margin: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 4,
    },
    selfTextContainer: {
        backgroundColor: '#d4eeff',
        padding: 8,
        marginHorizontal: 8,
        borderRadius: 8,
    },
    friendContainer: {
        margin: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 4
    },
    friendTextContainer: {
        backgroundColor: 'white',
        padding: 8,
        marginHorizontal: 8,
        borderRadius: 8,
    },
    imgProfile: {
        width: 30,
        height: 30,
        borderRadius: 15
    }
});

export default MessageItem;
