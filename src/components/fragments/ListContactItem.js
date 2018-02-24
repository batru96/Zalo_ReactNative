import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import icVideoCall from '../../icons/ic_video_call.png';
import icPhone from '../../icons/ic_phone.png';

class ListContactItem extends Component {
    render() {
        const { container, iconButton, imgProfile, btnsContainer } = styles;
        const { name, image } = this.props.item;
        return (
            <TouchableOpacity style={container}>
                <Image source={image} style={imgProfile} />
                <Text>{name}</Text>
                <View style={btnsContainer}>
                    <TouchableOpacity>
                        <Image source={icPhone} style={iconButton} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icVideoCall} style={iconButton} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        borderColor: '#ececec',
        paddingVertical: 8,
        alignItems: 'center'
    },
    iconButton: {
        width: 25,
        height: 25,
        margin: 8,
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    btnsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default ListContactItem;
