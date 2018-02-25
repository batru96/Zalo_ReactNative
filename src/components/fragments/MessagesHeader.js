import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import icBack from '../../icons/ic_left_arrow_white.png';
import icPhone from '../../icons/ic_phone_white.png';
import icVideoCall from '../../icons/ic_video_call_white.png';
import icSetting from '../../icons/ic_hori_setting.png';

class MessagesHeader extends Component {
    render() {
        const { container, title, btnsContainer, button, timeText } = styles;
        return (
            <View style={container}>
                <TouchableOpacity>
                    <Image source={icBack} style={button} />
                </TouchableOpacity>
                <View>
                    <Text style={title}>Cam Van</Text>
                    <Text style={timeText}>Last seen 14 minutes...</Text>
                </View>
                <View style={btnsContainer}>
                    <TouchableOpacity>
                        <Image source={icPhone} style={button} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icVideoCall} style={button} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={icSetting} style={button} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 8,
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#4b8bff',
        alignItems: 'center',
    },
    title: {
        color: 'white'
    },
    timeText: {
        fontSize: 12,
        color: 'white'
    },
    btnsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1
    },
    button: {
        marginHorizontal: 8,
        width: 30,
        height: 30
    }
});

export default MessagesHeader;
