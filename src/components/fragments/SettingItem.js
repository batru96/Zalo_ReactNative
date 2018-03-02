import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import icNext from '../../icons/ic_right_gray.png';
import icPrivacy from '../../icons/ic_privacy.png';
import icSecurity from '../../icons/ic_security.png';
import icNotifycation from '../../icons/ic_notifycation.png';
import icMessage from '../../icons/ic_blue_message.png';
import icContact from '../../icons/ic_orange_contact.png';
import icLanguae from '../../icons/ic_language.png';
import icTimeline from '../../icons/ic_timeline.png';
import icAbout from '../../icons/ic_about.png';
import icLogout from '../../icons/ic_logout.png';

class SettingItem extends Component {
    onPress(id) {
        const { navigation } = this.props;
        if (navigation) {
            switch (id) {
                default:
                    // Go back to the sign in
                    Alert.alert(
                        undefined,                        
                        'Log out?',
                        [
                            { text: 'No' },
                            { text: 'Yes', onPress: () => navigation.pop(2) }
                        ],
                        { cancelable: false }
                    );
                    break;
            }
        }
    }

    getIcon(id) {
        switch (id) {
            case '0': return icPrivacy;
            case '1': return icSecurity;
            case '2': return icNotifycation;
            case '3': return icMessage;
            case '4': return icTimeline;
            case '5': return icContact;
            case '6': return icLanguae;
            case '7': return icAbout;
            default: return icLogout;
        }
    }

    render() {
        const { container, icon, text } = styles;
        const { id, name } = this.props.item;
        return (
            <TouchableOpacity style={container} onPress={() => this.onPress(id)}>
                <Image style={icon} source={this.getIcon(id)} />
                <Text style={text}>{name}</Text>
                <Image style={icon} source={icNext} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#ececec',
        paddingLeft: 16,
        alignItems: 'center',
        padding: 8
    },
    icon: {
        width: 25,
        height: 25,
    },
    text: {
        flex: 1,
        marginHorizontal: 16
    }
});

export default SettingItem;
