import React, {Component} from 'react';
import {View, StatusBar, ScrollView, TextInput, Navigator} from 'react-native';
import {AdMobBanner, AdMobInterstitial, PublisherBanner} from 'react-native-admob'
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
    Text,
    Content,
    Subtitle
} from 'native-base';

import {Scene, Router, Actions} from 'react-native-router-flux';

import FEColors from '../../FEColors'

import {CharacterOverview} from './CharacterOverview'
import {CharacterStats} from './CharacterStats'
import {CharacterSkills} from './CharacterSkills'

export class CharacterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overview: true,
            stats: false,
            skills: false,
            tab4: false
        };
    }

    toggleOverview() {
        this.setState({overview: true, stats: false, skills: false, items: false});
        Actions.overview({type: 'reset'});
    }

    toggleStats() {
        this.setState({overview: false, stats: true, skills: false, items: false});
        Actions.stats({type: 'reset'});
    }

    toggleSkills() {
        this.setState({overview: false, stats: false, skills: true, items: false});
        Actions.skills({type: 'reset'});
    }

    toggleItems() {
        this.setState({overview: false, stats: false, skills: false, items: true});
        Actions.items({type: 'reset'});
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Character Name</Title>
                        <Subtitle>Class</Subtitle>
                    </Body>
                </Header>
                <Router>
                    <Scene key="characterPageRoot" hideNavBar>
                        <Scene key="overview" component={CharacterOverview} initial={true}/>
                        <Scene key="stats" component={CharacterStats}/>
                        <Scene key="skills" component={CharacterSkills}/>
                        <Scene key="items" component={CharacterSkills}/>
                    </Scene>
                </Router>
                <AdMobBanner bannerSize="smartBannerLandscape" adUnitID="ca-app-pub-2417893763284111/8886434387" testDeviceID="5AD4506F18FA8B5A4A528F379E3C746B" didFailToReceiveAdWithError={this.bannerError}/>
                <Footer>
                    <FooterTab>
                        <Button active={this.state.overview} onPress={() => this.toggleOverview()}>
                            <Icon name="person"/>
                            <Text>Character</Text>
                        </Button>
                        <Button active={this.state.stats} onPress={() => this.toggleStats()}>
                            <Icon name="stats"/>
                            <Text>Stats</Text>
                        </Button>
                        <Button active={this.state.skills} onPress={() => this.toggleSkills()}>
                            <Icon active name="book"/>
                            <Text>Skills</Text>
                        </Button>
                        <Button active={this.state.items} onPress={() => this.toggleItems()}>
                            <Icon name="basket"/>
                            <Text>Items</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
