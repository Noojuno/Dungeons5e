import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    TextInput,
    StyleSheet
} from 'react-native';

import {AdMobBanner, AdMobInterstitial, PublisherBanner} from 'react-native-admob'


import Container from "../../components/Container";

export class CharacterStats extends Component {
    render() {
        return (
            <ScrollView style={styles.inner}>
                <Text style={styles.welcome}>
                    Stats Overview
                </Text>
                <Text style={styles.instructions}>
                    This is the stats overview page
                </Text>
                <AdMobBanner bannerSize="smartBannerLandscape" adUnitID="ca-app-pub-2417893763284111/8886434387" testDeviceID="5AD4506F18FA8B5A4A528F379E3C746B" didFailToReceiveAdWithError={this.bannerError}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    inner: {
        padding: 16
    },
    welcome: {
        fontSize: 30,
        textAlign: 'left',
        color: "#000"
    },
    instructions: {
        textAlign: 'left',
        color: '#000',
        marginBottom: 5
    }
});
