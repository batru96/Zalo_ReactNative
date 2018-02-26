import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import MessagesHeader from '../fragments/MessagesHeader';
import MessageItem from '../fragments/MessageItem';
import icCamera from '../../icons/ic_camera.png';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                { id: '1', name: 'Van', message: 'Xin chao', isSelf: true },
                { id: '2', name: 'Van', message: 'Xin chao', isSelf: true },
                { id: '3', name: 'Thu', message: 'Xin chao', isSelf: false },
            ],
            messageValue: '',
        };
    }
    send() {
        this.setState({
            messageValue: ''
        });
    }
    render() {
        const { container, bottomContainer, imageButton, input } = styles;
        const { mang, messageValue } = this.state;
        return (
            <View style={container}>
                <MessagesHeader />
                <FlatList
                    data={mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <MessageItem item={item} />}
                />
                <View style={bottomContainer}>
                    <TouchableOpacity>
                        <Image source={icCamera} style={imageButton} />
                    </TouchableOpacity>
                    <TextInput
                        style={input}
                        onSubmitEditing={() => this.send()}
                        value={messageValue}
                        placeholder="Write a message"
                        placeholderTextColor="#a9a9a9"
                        underlineColorAndroid="transparent"
                        onChangeText={text => this.setState({ messageValue: text })}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e7f1'
    },
    bottomContainer: {
        borderRadius: 1,
        backgroundColor: 'white',
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageButton: {
        width: 30,
        height: 30
    },
    input: {
        borderLeftWidth: 1,
        borderColor: '#ececec',
        flex: 1,
        height: 40,
        paddingHorizontal: 16,
        justifyContent: 'center'
    }
});


export default Messages;
