import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import icAddFriend from '../../../icons/ic_add_friend.png';

export default class AddFriendButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Image style={styles.button} source={icAddFriend} />
            </TouchableOpacity>
        );
    }
}
