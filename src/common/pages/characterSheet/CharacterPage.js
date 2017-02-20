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
    Content
} from 'native-base';

import {Scene, Router} from 'react-native-router-flux';

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
        this.setState({overview: true, stats: false, skills: false, tab4: false});
    }

    toggleStats() {
        this.setState({overview: false, stats: true, skills: false, tab4: false});
    }

    toggleSkills() {
        this.setState({overview: false, stats: false, skills: true, tab4: false});
    }

    toggleTab4() {
        this.setState({overview: false, stats: false, skills: false, tab4: true});
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Character Name</Title>
                    </Body>
                </Header>
                <Content>
                    <Router>
                        <Scene key="overview" component={CharacterOverview}/>
                        <Scene key="stats" component={CharacterStats} initial={true}/>
                        <Scene key="skills" component={CharacterSkills}/>
                    </Router>
                </Content>
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
                        <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
                            <Icon name="basket"/>
                            <Text>Inventory</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
