import React, {Component} from 'react';
import {Text, ScrollView, TextInput, StyleSheet, View} from 'react-native';

import {SkillPanel} from "../../components/skills";

import {Grid, Col, Row} from "native-base";

import {AdMobBanner, AdMobInterstitial} from 'react-native-admob'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class CharacterSkills extends Component {
  static navigationOptions = {
      tabBar: {
          label: 'Skills',
          icon: ({tintColor}) => (<Icon name="cards" style={{
              color: tintColor,
              fontSize: 22
          }}/>)
      }
  }
    render() {
        var abilitiesProp = this.props.screenProps.character.stats.abilities;

        var skills = [];

        for (var abilityName in abilitiesProp) {
            var ability = abilitiesProp[abilityName];
            var rows = [];
            var i = 0;

            rows.push(["Saving Throw", ability.savingThrow]);
            for (var skillName in ability.skills) {
                var skill = ability.skills[skillName];

                var modifier = skill.modifier;
                var trained = skill.trained;

                rows.push([skillName, modifier, trained]);
            }
            skills[abilityName] = rows;
        }

        return (
          <View style={styles.outer}>
            <ScrollView style={styles.inner}>
                <View style={styles.columnOuter}>
                    <View flex={1}>
                        <SkillPanel ability="Strength" skills={skills.strength}/>
                        <SkillPanel ability="Intelligence" skills={skills.intelligence}/>
                        <SkillPanel ability="Dexterity" skills={skills.dexterity}/>
                    </View>
                    <View flex={1}>
                        <SkillPanel ability="Wisdom" skills={skills.wisdom}/>
                        <SkillPanel ability="Constitution" skills={skills.constitution}/>
                        <SkillPanel ability="Charisma" skills={skills.charisma}/>
                    </View>
                </View>
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
    columnOuter: {
        flexDirection: "row",
        flex: 1
    },
    outer: {
      flex: 1
    }
});
