import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import icRightArrow from '../../../icons/ic_right_gray.png';
import Header from '../../fragments/Header';

export default class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountItems: ['Logged in computers', 'Change phone number', 'Change password'],
            securityItems: ['Set up a passcode', 'Authorized app'],
        };
    }
    renderItem(value, index) {
        const { itemContainer, itemText, icon } = styles;
        return (
            <TouchableOpacity key={index} style={itemContainer}>
                <Text style={itemText}>{value}</Text>
                <Image source={icRightArrow} style={icon} />
            </TouchableOpacity>
        );
    }
    render() {
        const { container, wrapper, title, btnDelete, btnDeleteText } = styles;
        const { accountItems, securityItems } = this.state;
        return (
            <View style={container}>
                <Header title='Account and Security' navigation={this.props.navigation} />
                <View style={wrapper}>
                    <Text style={title}>ACCOUNT</Text>
                    {accountItems.map((value, index) => this.renderItem(value, index))}
                </View>
                <View style={wrapper}>
                    <Text style={title}>SECURITY</Text>
                    {securityItems.map((value, index) => this.renderItem(value, index))}
                </View>
                <TouchableOpacity style={btnDelete}>
                    <Text style={btnDeleteText}>Delete account</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececec'
    },
    wrapper: {
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingTop: 8,
        marginBottom: 16,
    },
    title: {
        color: '#3666bd',
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingRight: 8,
        borderBottomWidth: 1,
        borderColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        width: 25,
        height: 25,
    },
    btnDelete: {
        backgroundColor: 'white',
        padding: 16,
        alignItems: 'center',
    },
    btnDeleteText: {
        color: 'red',
        fontSize: 16
    }
});
