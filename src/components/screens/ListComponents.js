import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import imgThu from '../../images/thu.jpg';
import icAddImages from '../../icons/ic_add_image.png';

class ListComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                { id: '1', name: 'People nearby', backgroundColor: '#3b8efe' },
                { id: '2', name: 'Chat rooms', backgroundColor: '#38b8cd' },
                { id: '3', name: 'Shop', backgroundColor: '#9cf300' },
                { id: '4', name: 'Sticker', backgroundColor: '#f0bd26' },
                { id: '5', name: 'Game', backgroundColor: '#f1515a' },
                { id: '6', name: 'Channel', backgroundColor: '#ac34d5' }
            ],
        };
    }

    renderItem(item) {
        const { itemContainer, itemName } = styles;
        const { name, backgroundColor } = item;
        return (
            <TouchableOpacity style={itemContainer}>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor }} />
                <Text style={itemName}>{name}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const {
            container, content, profile, imgProfile, profileNameContainer, profileImgAdd,
            imgAddContainer
        } = styles;
        return (
            <View style={container}>
                <View style={content}>
                    <TouchableOpacity style={profile}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={imgProfile} source={imgThu} />
                            <View style={profileNameContainer}>
                                <Text style={{ fontWeight: 'bold' }}>Hoang Khoa</Text>
                                <Text style={{ fontSize: 12 }}>My Profile</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={imgAddContainer}>
                            <Image style={profileImgAdd} source={icAddImages} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View>
                        <FlatList
                            style={{ backgroundColor: 'white' }}
                            data={this.state.mang}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => this.renderItem(item)}
                        />
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: '#ececec',
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        alignItems: 'center'
    },
    profileNameContainer: {
        paddingHorizontal: 16
    },
    profileImgAdd: {
        width: 25,
        height: 25,
        padding: 8
    },
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
    },
    imgAddContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default ListComponents;
