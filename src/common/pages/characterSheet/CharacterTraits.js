import React, {Component} from 'react';
import {Text, ScrollView, TextInput, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AdMobBanner, AdMobInterstitial} from 'react-native-admob'

export class CharacterTraits extends Component {
  static navigationOptions = {
      tabBar: {
          label: 'Traits',
          icon: ({tintColor}) => (<Icon name="pencil" style={{
              color: tintColor,
              fontSize: 22
          }}/>)
      }
  }
    render() {
        return (
          <View style={styles.outer}>
            <ScrollView style={styles.inner}>
                <Text style={styles.welcome}>
                    Traits Overview
                </Text>
                <Text style={styles.instructions}>
                    This is the traits page
                </Text>
            </ScrollView>
            <AdMobBanner bannerSize="smartBannerLandscape" adUnitID="ca-app-pub-2417893763284111/8886434387" testDeviceID="5AD4506F18FA8B5A4A528F379E3C746B" didFailToReceiveAdWithError={this.bannerError}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  inner: {
      padding: 4,
      paddingTop: 3,
      backgroundColor: "#fafafa"
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
    },
    outer: {
      flex: 1
    }
});
