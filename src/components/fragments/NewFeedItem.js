import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import imgThu from '../../images/thu.jpg';
import imgNewFeed from '../../images/photo.jpg';
import iconFavorite from '../../icons/ic_favorite.png';
import iconLoving from '../../icons/ic_loving.png';
import icComment from '../../icons/ic_comment.png';
import icMore from '../../icons/ic_more.png';

class NewFeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoving: false
        };
    }
    toggle() {
        this.setState({
            isLoving: !this.state.isLoving
        });
    }
    render() {
        const {
            container, topContainer, imgProfile, nameTitle, title, image, bottomContainer,
            iconComment, commentText, icMoreContainer
        } = styles;
        const icLoving = this.state.isLoving ? iconLoving : iconFavorite;
        return (
            <View style={container}>
                <View style={topContainer}>
                    <Image style={imgProfile} source={imgThu} />
                    <View>
                        <Text style={nameTitle}>Xuan Anh Thu</Text>
                        <Text>8 hours</Text>
                    </View>
                </View>
                <Text style={title}>Da thay doi anh dai dien</Text>
                <TouchableOpacity>
                    <Image source={imgNewFeed} style={image} />
                </TouchableOpacity>
                <View style={bottomContainer}>
                    <TouchableOpacity onPress={this.toggle.bind(this)}>
                        <Image source={icLoving} style={iconComment} />
                    </TouchableOpacity>
                    <Text style={commentText}>2</Text>
                    <TouchableOpacity>
                        <Image source={icComment} style={iconComment} />
                    </TouchableOpacity>
                    <Text style={commentText}>2</Text>
                    <View style={icMoreContainer}>
                        <TouchableOpacity>
                            <Image source={icMore} style={iconComment} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 8,
        padding: 8
    },
    topContainer: {
        flexDirection: 'row'
    },
    imgProfile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 16,
    },
    nameTitle: {
        fontWeight: 'bold'
    },
    title: {
        marginVertical: 8,
    },
    image: {
        width: 100,
        height: 100
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: 4,
        borderTopWidth: 1,
        borderColor: '#ececec',
        alignItems: 'center'
    },
    iconComment: {
        width: 25,
        height: 25,
        marginHorizontal: 4
    },
    commentText: {
        marginRight: 16
    },
    icMoreContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center'
    }
});

export default NewFeedItem;
