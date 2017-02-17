import React, {Component} from 'react'
import {AppRegistry, View, StatusBar, StyleSheet, Text} from 'react-native'

import FEColors from '../FEColors';

export class TopNavigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={FEColors.secondaryColor} barStyle="light-content"/>
                <View style={styles.navTop}>
                    <Text style={styles.navTopTitle} ellipsizeMode="tail" numberOfLines={1}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    navTop: {
        height: 56,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: FEColors.primaryColor,
        padding: 16
    },
    navTopTitle: {
        color: "#fff",
        fontSize: 20,
        fontFamily: 'Roboto'
    }
});
