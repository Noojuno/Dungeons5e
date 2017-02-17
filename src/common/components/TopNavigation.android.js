import React, {Component} from 'react'
import {AppRegistry, View, StatusBar, StyleSheet, Text} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FEColors from '../FEColors';

export class TopNavigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={FEColors.secondaryColor} barStyle="light-content"/>
                <View style={styles.navTop}>
                    <Icon style={styles.navTopIcon} name="arrow-left"/>
                    <Text style={styles.navTopTitle} ellipsizeMode="tail" numberOfLines={1}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    navTop: {
        height: 56,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: FEColors.primaryColor,
        padding: 16
    },
    navTopTitle: {
        color: FEColors.navTitleText,
        fontSize: 20
    },
    navTopIcon: {
        color: FEColors.navTitleText,
        fontSize: 24,
        marginRight: 16
    }
});
