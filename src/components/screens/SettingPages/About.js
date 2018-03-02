import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../fragments/Header';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ['Feature & Instructions', 'Check for new version', 'Review Zalo',
                'Follow us on Facebook', 'Website: http://zaloapp.com', 'Email customer service: feedback@zaloapp.com',
                'Online support'],
        };
    }
    renderItem(value, index) {
        const { itemContainer, itemText } = styles;
        return (
            <TouchableOpacity key={index} style={itemContainer}>
                <Text style={itemText}>{value}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        const { container, serviceBtn, logoContainer, logo, logoText, bottomContainer } = styles;
        return (
            <View style={container}>
                <Header title='About' />
                <View style={logoContainer}>
                    <View style={logo}>
                        <Text style={logoText}>Zalo</Text>
                    </View>
                    <Text style={{ color: '#cdd0d2' }}>Version: 3.4.2 medium</Text>
                </View>
                {this.state.mang.map((value, index) => this.renderItem(value, index))}
                <View style={bottomContainer}>
                    <TouchableOpacity style={serviceBtn}>
                        <Text style={{ color: '#3b7fea' }}>Terns of service</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    serviceBtn: {
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 4,
        marginLeft: 16,
        borderBottomWidth: 1,
        borderColor: '#cdd0d2'
    },
    logo: {
        backgroundColor: '#3b7fea',
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    itemContainer: {
        marginLeft: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#cdd0d2',
        backgroundColor: 'white'
    },
    itemText: {
        color: '#8f9296'
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#cdd0d2',
        padding: 16
    }
});
