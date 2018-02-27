import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SectionList } from 'react-native';
import ListContactItem from '../fragments/ListContactItem';
import imgThu from '../../images/thu.jpg';
import icNext from '../../icons/ic_arrow_right.png';

class ListContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang2: [
                {
                    id: '1',
                    title: 'A',
                    data: [
                        { name: 'Anh 2', image: imgThu },
                        { name: 'Xuan Anh Thu', image: imgThu }
                    ]
                },
                {
                    id: '2',
                    title: 'B',
                    data: [
                        { name: 'Bucky Roberts', image: imgThu },
                        { name: 'Bacon or tuna', image: imgThu }
                    ]
                },
                {
                    id: '3',
                    title: 'C',
                    data: [
                        { name: 'Chiken far away', image: imgThu },
                        { name: 'Footballer', image: imgThu }
                    ]
                },
                {
                    id: '4',
                    title: 'D',
                    data: [
                        { name: 'Diggle', image: imgThu },
                        { name: 'Ding dong ding dong', image: imgThu }
                    ]
                },
            ]
        };
    }

    recommendedFriends() {
    }
    render() {
        const {
            container, recommended, recommentTitle, iconNext, listTitle, friendsContainer,
            recommendedIcon, btnNextContainer, listItemHeader
        } = styles;
        return (
            <View style={container}>
                <TouchableOpacity
                    style={recommended}
                    onPress={this.recommendedFriends.bind(this)}
                >
                    <View style={recommendedIcon} />
                    <Text style={recommentTitle}>Recommended friends</Text>
                    <View style={btnNextContainer}>
                        <Image source={icNext} style={iconNext} />
                    </View>
                </TouchableOpacity>
                <View style={friendsContainer}>
                    <Text style={listTitle}>Friends</Text>
                    <SectionList
                        keyExtractor={item => item.id}
                        renderSectionHeader={({ section }) =>
                            <Text style={listItemHeader}>{section.title}</Text>}
                        renderItem={({ item }) => <ListContactItem item={item} />}
                        sections={this.state.mang2}
                    />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececec'
    },
    recommended: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        marginBottom: 16,
        borderColor: '#ececec',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center'
    },
    recommendedIcon: {
        backgroundColor: 'lightblue',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    recommentTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: '#4e5259'
    },
    btnNextContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    iconNext: {
        width: 35,
        height: 35,
    },
    friendsContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 16,
    },
    listTitle: {
        marginHorizontal: 16,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    listItemHeader: {
        borderTopWidth: 1,
        borderColor: '#ececec'
    }
});

export default ListContact;
