import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import imgThu from '../../images/thu.jpg';

class ListMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                { id: '1', name: 'Media Box', message: 'Dung co tin no' },
                { id: '2', name: 'Media Box', message: 'Dung co tin no' },
                { id: '3', name: 'Media Box', message: 'Dung co tin no' },
                { id: '4', name: 'Media Box', message: 'Dung co tin no' },
                { id: '5', name: 'Media Box', message: 'Dung co tin no' },
            ],
        };
    }

    renderItem(item) {
        const { listItem, imgProfile, topContainer, rightContainer, message, nameTitle } = styles;
        return (
            <TouchableOpacity style={listItem}>
                <Image source={imgThu} style={imgProfile} />
                <View style={rightContainer}>
                    <View style={topContainer}>
                        <Text style={nameTitle}>{item.name}</Text>
                        <Text>8 hours</Text>
                    </View>
                    <Text style={message}>{item.message}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { container, list } = styles;
        return (
            <View style={container}>
                <FlatList
                    style={list}
                    data={this.state.mang}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececec'
    },
    list: {
        backgroundColor: 'white',
        flex: 1
    },
    listItem: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#ececec',
        alignItems: 'center'
    },
    imgProfile: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    rightContainer: {
        flex: 1,
        marginLeft: 16
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    message: {
        fontSize: 12
    },
    nameTitle: {
        color: 'black'
    }
});

export default ListMessage;
