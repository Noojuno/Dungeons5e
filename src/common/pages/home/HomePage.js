import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {Button} from 'native-base'

import {NavigationActions} from 'react-navigation';

import FEColors from '../../FEColors';

export class HomePage extends Component {
    static navigationOptions = {
        title: 'Home',
        header: {
            style: {
                backgroundColor: FEColors.primaryColor
            },
            tintColor: FEColors.navTitleText
        }
    };
    render() {
        return (
            <View>
                <StatusBar backgroundColor={FEColors.secondaryColor} barStyle="light-content"/>
                <Button block onPress={() => this.props.navigation.dispatch(NavigationActions.navigate({routeName: "Character"}))}><Text>Dis da home page yo</Text></Button>
            </View>
        );
    }
}
