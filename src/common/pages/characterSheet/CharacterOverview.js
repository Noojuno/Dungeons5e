import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';

import {AbilityScore, SingleScore, SingleScorePlusMinus} from "../../components/scores";

import {Grid, Col, Row} from "native-base";

import {AdMobBanner, AdMobInterstitial} from 'react-native-admob'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FEColors from '../../FEColors';

export class CharacterOverview extends Component {
    static navigationOptions = {
        tabBar: {
            label: 'Overview',
            icon: ({tintColor}) => (<Icon name="account" style={{
                color: tintColor,
                fontSize: 27
            }}/>)
        }
    }

    render() {
      console.log("overview")
        var stats = this.props.screenProps.character.stats;
        return (
          <View style={styles.outer}>
            <ScrollView style={styles.inner}>
                <Grid>
                    <Row>
                        <SingleScore name="Armor Class" score={stats.baseAC} subtext='Tap for details' onPress={() => {
                            this.setState({selectedTab: 'overview'})
                        }}/>
                        <SingleScorePlusMinus name="Hit Points" score={stats.currentHealth}/>
                    </Row>
                    <Row>
                        <SingleScore size={1} name="Initiative" score={stats.initiative} small subtext='Tap for details' isModifier/>
                        <SingleScore size={2} name="Passive Perception" score={stats.passivePerception} small subtext='Tap for details'/>
                        <SingleScore size={1} name="Speed" score={stats.speed} small subtext='Tap for details'/>
                    </Row>
                    <Row>
                        <AbilityScore name="Strength" score={stats.abilities.strength.score} save={stats.abilities.strength.savingThrow}/>
                        <AbilityScore name="Wisdom" score={stats.abilities.wisdom.score} save={stats.abilities.wisdom.savingThrow}/>
                    </Row>
                    <Row>
                        <AbilityScore name="Intelligence" score={stats.abilities.intelligence.score} save={stats.abilities.intelligence.savingThrow}/>
                        <AbilityScore name="Constitution" score={stats.abilities.constitution.score} save={stats.abilities.constitution.savingThrow}/>

                    </Row>
                    <Row>
                        <AbilityScore name="Dexterity" score={stats.abilities.dexterity.score} save={stats.abilities.dexterity.savingThrow}/>
                        <AbilityScore name="Charisma" score={stats.abilities.charisma.score} save={stats.abilities.charisma.savingThrow}/>
                    </Row>
                </Grid>
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
    outer: {
      flex: 1
    }
});
