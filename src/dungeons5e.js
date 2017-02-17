import React, {Component} from 'react';
import {AppRegistry, Text, View, StatusBar, ScrollView} from 'react-native';

import {TopNavigation} from './common/components/TopNavigation'
import {BottomNavigation} from './common/components/BottomNavigation'


var StyleSheet = require('./common/XStyleSheet');

export default class Dungeons5e extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TopNavigation name="Character Name"/>
                <ScrollView style={styles.inner}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit dungeons5e.js
                    </Text>
                    <Text style={styles.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Shake or press menu button for dev menu
                    </Text>
                </ScrollView>
                <BottomNavigation/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    inner: {
      padding: 16,
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 0,
        color: "#000"
    },
    instructions: {
        textAlign: 'center',
        color: '#000',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('Dungeons5e', () => Dungeons5e);
