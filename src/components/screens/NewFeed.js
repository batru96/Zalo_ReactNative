import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import NewFeedItem from '../fragments/NewFeedItem';
import SearchView from '../fragments/SearchView';

class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: ['1', '2', '3']
        };
    }

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <SearchView />
                <FlatList
                    data={this.state.mang}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <NewFeedItem item={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ececec',
    }
});

export default NewFeed;
