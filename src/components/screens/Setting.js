import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../fragments/Header';
import SettingItem from '../fragments/SettingItem';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                { id: '2', name: 'Notifications', iconName: 'ic_privacy.png' },
                { id: '3', name: 'Messages', iconName: 'ic_mesages.png' },
                { id: '4', name: 'Timeline and story', iconName: 'ic_privacy.png' },
                { id: '5', name: 'Contacts', iconName: 'ic_privacy.png' },
                { id: '6', name: 'Languages and fonts', iconName: 'ic_privacy.png' },
                { id: '7', name: 'About us', iconName: 'ic_privacy.png' },
            ],
        };
    }
    render() {
        const { container } = styles;
        const { navigation } = this.props;
        return (
            <View style={container}>
                <Header title="Setting" navigation={this.props.navigation} />
                <SettingItem
                    item={{ id: '0', name: 'Privacy' }}
                    navigation={navigation}
                />
                <SettingItem
                    item={{ id: '1', name: 'Account and security' }}
                    navigation={navigation}
                />
                <View style={{ marginVertical: 8 }}>
                    <FlatList
                        data={this.state.mang}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({ item }) => <SettingItem item={item} navigation={navigation} />
                        }
                    />
                </View>
                <SettingItem
                    item={{ id: '8', name: 'Log out' }}
                    navigation={navigation}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececec'
    }
});

export default Setting;
