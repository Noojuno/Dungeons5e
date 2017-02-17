import React, {Component} from 'react'
import {AppRegistry, View, StatusBar, StyleSheet, Text, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FEColors from '../FEColors';

class NavItem extends Component {
    onPressButton() {
      console.log("message");
    }

    render() {
        let text = <Text style={styles.navItemText} ellipsizeMode="tail" numberOfLines={1}>{this.props.text}</Text>;
        let iconStyle = styles.navItemIcon;

        if (this.props.active) {
            text = <Text style={[styles.navItemText,styles.navItemTextActive]} ellipsizeMode="tail" numberOfLines={1}>{this.props.text}</Text>;
            iconStyle = [styles.navItemIcon, styles.navItemIconActive];
        }

        return (
          <TouchableNativeFeedback onPress={this.onPressButton}>
            <View style={styles.navItem}>
                <Icon style={iconStyle} name={this.props.icon} />
                {text}
            </View>
          </TouchableNativeFeedback>
        );
    }
}

export class BottomNavigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBottom}>
                    <NavItem icon="account-card-details" text="Character"/>
                    <NavItem icon="blank" text="Stats"/>
                    <NavItem icon="book-open-page-variant" text="Skills"/>
                    <NavItem icon="sword" text="Inventory" active={true}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    navBottom: {
        height: 56,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: FEColors.primaryColor,
        flexDirection: 'row'
    },
    navItem: {
        flex: 1,
        maxWidth: 168,
        minWidth: 80,
        paddingTop: 8,
        paddingBottom: 10,
        height: 56
    },
    navItemIcon: {
        textAlign: "center",
        fontSize: 24,
        color: FEColors.navText,
    },
    navItemIconActive: {
        color: FEColors.navTextActive
    },
    navItemText: {
        fontSize: 12,
        fontFamily: 'Roboto',
        textAlign: "center",
        color: FEColors.navText
    },
    navItemTextActive: {
        fontSize: 14,
        color: FEColors.navTextActive
    }
});
