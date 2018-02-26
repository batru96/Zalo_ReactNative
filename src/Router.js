import { TabNavigator, TabBarBottom } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import icMessages from './icons/ic_mesages.png';
import icTimer from './icons/ic_clock.png';
import icContact from './icons/ic_contact.png';
import TabMesage from './components/screens/ListMessage';
import TabContact from './components/screens/ListContact';
import TabComponents from './components/screens/ListComponents';

const MainTab = TabNavigator({
    TAB_MESSAGE: {
        screen: TabMesage
    },
    TAB_CONTACT: {
        screen: TabContact
    },
    TAB_COMPONENTS: {
        screen: TabComponents
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'TAB_MESSAGE') {
                    iconName = icMessages;
                } else if (routeName === 'TAB_CONTACT') {
                    iconName = icContact;
                } else if (routeName === 'TAB_COMPONENTS') {
                    iconName = icTimer;
                }
                const myColor = focused ? tintColor : 'gray';
                return (
                    <Image
                        source={iconName}
                        style={{ width: 20, height: 20, tintColor: myColor }}
                    />
                );
            }
        }),
        tabBarOptions: {
            activeTintColor: '#4b8bff',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
                height: 40
            }
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
    },
);

export default MainTab;

