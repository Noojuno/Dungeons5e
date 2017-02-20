import React, {Component, PropTypes} from 'react';
import {AppRegistry, StatusBar, UIManager} from 'react-native';
import {BottomNavigation, ThemeProvider, Toolbar} from 'react-native-material-ui';
import {AdMobBanner, AdMobInterstitial, PublisherBanner} from 'react-native-admob'
import {Scene, Router} from 'react-native-router-flux';

import {
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon,
    StyleProvider,
    Footer,
    FooterTab,
    Text
} from 'native-base';

import FEColors from './common/FEColors';

import {CharacterPage} from './common/pages/characterSheet/CharacterPage'

const uiTheme = {
    palette: {
        primaryColor: FEColors.primaryColor,
        secondaryColor: FEColors.secondaryColor
    },
    toolbar: {
        container: {
            height: 56
        }
    }
};

var StyleSheet = require('./common/XStyleSheet');

export default class Dungeons5e extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="characterPage" component={CharacterPage} hideNavBar initial={true} title="Character Page"/>
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

AppRegistry.registerComponent('Dungeons5e', () => Dungeons5e);
