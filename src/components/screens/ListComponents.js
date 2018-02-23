import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, FlatList
} from 'react-native';
import SearchView from '../fragments/SearchView';
import ListItem from '../fragments/ListItem';
import imgThu from '../../images/thu.jpg';
import icAddImages from '../../icons/ic_add_image.png';

export default class ListComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                { id: '1', name: 'People nearby' }, { id: '2', name: 'Chat rooms' },
                { id: '3', name: 'Shop' }, { id: '4', name: 'Sticker' }, { id: '5', name: 'Game' },
                { id: '6', name: 'Channel' }
            ]
        };
    }

    render() {
        const { container, content, profile, imgProfile, profileNameContainer, profileImgAdd } = styles;
        return (
            <View style={container}>
                <SearchView />
                <View style={content}>
                    <TouchableOpacity style={profile}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={imgProfile} source={imgThu} />
                            <View style={profileNameContainer}>
                                <Text style={{ fontWeight: 'bold' }}>Hoang Khoa</Text>
                                <Text style={{ fontSize: 12 }}>My Profile</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Image style={profileImgAdd} source={icAddImages} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View>
                        <FlatList
                            style={{ backgroundColor: 'white' }}
                            data={this.state.mang}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <ListItem item={item} />}
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
})
