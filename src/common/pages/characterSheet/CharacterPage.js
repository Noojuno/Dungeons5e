import React, {Component, PureComponent} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {AdMobBanner, AdMobInterstitial} from 'react-native-admob'
import {
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Footer,
    FooterTab,
    Text,
    Content,
    Subtitle
} from 'native-base';

import {TabNavigator, TabView} from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CharacterOverview} from './CharacterOverview'
import {CharacterSpells} from './CharacterSpells'
import {CharacterSkills} from './CharacterSkills'
import {CharacterItems} from './CharacterItems'
import {CharacterTraits} from './CharacterTraits'

import FEColors from '../../FEColors';

var characterTemplate = {
    "name": "Ronald McDonald",
    "class": "Ranger",
    "xp": 0,
    "level": 99,
    "stats": {
        "baseHealth": 11,
        "currentHealth": 11,
        "baseAC": 12,
        "initiative": 3,
        "speed": 35,
        "passivePerception": 12,
        "abilities": {
            "strength": {
                "name": "Strength",
                "score": 12,
                "savingThrow": 3,
                "skills": {
                    "Athletics": {
                        "modifier": 2,
                        "trained": true
                    }
                }
            },
            "intelligence": {
                "name": "Intelligence",
                "score": 10,
                "savingThrow": 0,
                "skills": {
                    "Arcana": {
                        "modifier": 0,
                        "trained": false
                    },
                    "History": {
                        "modifier": 0,
                        "trained": false
                    },
                    "Investigation": {
                        "modifier": 2,
                        "trained": true
                    },
                    "Nature": {
                        "modifier": 2,
                        "trained": true
                    },
                    "Religion": {
                        "modifier": 0,
                        "trained": false
                    }
                }
            },
            "dexterity": {
                "name": "Dexterity",
                "score": 17,
                "savingThrow": 5,
                "skills": {
                    "Acrobatics": {
                        "modifier": 3,
                        "trained": false
                    },
                    "Sleight of Hand": {
                        "modifier": 2,
                        "trained": false
                    },
                    "Stealth": {
                        "modifier": 2,
                        "trained": true
                    }
                }
            },
            "wisdom": {
                "name": "Wisdom",
                "score": 15,
                "savingThrow": 2,
                "skills": {
                    "Animal Handling": {
                        "modifier": 2,
                        "trained": false
                    },
                    "Insight": {
                        "modifier": 2,
                        "trained": false
                    },
                    "Medicine": {
                        "modifier": 2,
                        "trained": false
                    },
                    "Perception": {
                        "modifier": 4,
                        "trained": true
                    },
                    "Survival": {
                        "modifier": 4,
                        "trained": false
                    }
                }
            },
            "constitution": {
                "name": "Constitution",
                "score": 13,
                "savingThrow": 1
            },
            "charisma": {
                "name": "Charisma",
                "score": 8,
                "savingThrow": -1,
                "skills": {
                    "Deception": {
                        "modifier": -1,
                        "trained": false
                    },
                    "Intimidation": {
                        "modifier": -1,
                        "trained": false
                    },
                    "Performance": {
                        "modifier": -1,
                        "trained": false
                    },
                    "Persuasion": {
                        "modifier": -1,
                        "trained": false
                    }
                }
            }
        }
    }
};

const CharacterTabs = TabNavigator({
    Overview: {
        screen: CharacterOverview
    },
    Skills: {
        screen: CharacterSkills
    },
    Spells: {
        screen: CharacterSpells
    },
    Items: {
        screen: CharacterItems
    },
    Traits: {
        screen: CharacterTraits
    }
}, {
    tabBarComponent: TabView.TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: FEColors.primaryColor,
            paddingBottom: 4
        },
        labelStyle: {
          fontSize: 12
        },
        activeTintColor: FEColors.navTextActive,
        inactiveTintColor: FEColors.navText
    }
});

export class CharacterPage extends PureComponent {
    static navigationOptions = {
        title: 'Ronald McDonald - Level 1 Hunter',
        header: {
            style: {
                backgroundColor: FEColors.primaryColor
            },
            tintColor: FEColors.navTitleText
        }
    };

    constructor(props) {
        super(props);

        // AdMobInterstitial.setAdUnitID('ca-app-pub-2417893763284111/1363167587');
        // AdMobInterstitial.requestAd(err => AdMobInterstitial.showAd());
    }

    render() {
        return (
            <Container>
              <StatusBar backgroundColor={FEColors.secondaryColor} barStyle="light-content"/>
                {/* <Header hasSubtitle>
                    <Left size={1}>
                        <Button transparent onPress={() => {
                            this.setState({selectedTab: 'items'})
                        }}>
                            <Icon name='arrow-left'/>
                        </Button>
                    </Left>
                    <Body size={10}>
                        <Title>Character Name</Title>
                        <Subtitle>Level 1 Class</Subtitle>
                    </Body>
                    <Right size={1}>
                        <Button transparent>
                            <Icon name='dots-vertical'/>
                        </Button>
                    </Right>
                </Header> */}
                {/* <CharacterOverview character={characterTemplate}/> */}
                <CharacterTabs screenProps={{
                    character: characterTemplate
                }}/>
            </Container>
        );
    }
}

var buttonStyle = {
    padding: 8
};
