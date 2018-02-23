import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default class MainSignIn extends Component {

    goToRegister() {
        this.props.navigation.navigate('REGISTER');
    }

    render() {
        const {
            container, title, childContainer, loginButton, loginBtnText, registerButton,
            registerBtnText, languageContainer, languageButton, languageBtnHighlightText,
            languageBtnText
        } = styles;
        return (
            <View style={container}>
                <Text style={title}>Zalo</Text>
                <View style={childContainer}>
                    <TouchableOpacity style={loginButton}>
                        <Text style={loginBtnText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={registerButton} onPress={this.goToRegister.bind(this)}>
                        <Text style={registerBtnText}>Register a new account</Text>
                    </TouchableOpacity>
                    <View style={languageContainer}>
                        <TouchableOpacity style={languageButton}>
                            <Text style={languageBtnText}>Tiếng Việt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={languageButton}>
                            <Text style={languageBtnHighlightText}>English</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        color: '#3975e8',
        fontSize: 80,
        marginTop: 120,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1
    },
    childContainer: {
        flex: 1,
        alignItems: 'center'
    },
    loginButton: {
        backgroundColor: '#3975e8',
        width: width / 2,
        padding: 8,
        borderRadius: 16
    },
    loginBtnText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    registerButton: {
        flexDirection: 'row',
        marginTop: 30
    },
    registerBtnText: {
        // color: 'black',
        textDecorationLine: 'underline',
        fontWeight: '600'
    },
    languageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        padding: 8,
        alignItems: 'flex-end'
    },
    languageButton: {
        margin: 4
    },
    languageBtnText: {
        fontWeight: 'bold'
    },
    languageBtnHighlightText: {
        color: '#3975e8',
        fontWeight: 'bold'
    }
});
