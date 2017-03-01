import React, {Component} from 'react';
import {ScrollView, TextInput, StyleSheet, View, Text} from 'react-native';

import {AdMobBanner, AdMobInterstitial, PublisherBanner} from 'react-native-admob'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Content,
    List,
    ListItem,
    Grid,
    Row,
    Col
} from "native-base";

import Container from "../../components/util/Container";

export class CharacterSpells extends Component {
    static navigationOptions = {
        tabBar: {
            label: 'Spells',
            icon: ({tintColor}) => (<Icon name="book" style={{
                color: tintColor,
                fontSize: 22
            }}/>)
        }
    }
    render() {

        var items = [
            [
                'Acrobatics', '+3', true
            ],
            [
                'Animal Handling', '+2', false
            ],
            [
                'Arcana', '0', false
            ],
            [
                'Athletics', '+3', false
            ],
            [
                'Deception', '-1', false
            ],
            [
                'History', '0', false
            ],
            [
                'Insight', '+2', false
            ],
            [
                'Intimidation', '-1', false
            ],
            [
                'Investigation', '+2', false
            ],
            [
                'Medicine', '+2', false
            ],
            [
                'Nature', '+2', true
            ],
            [
                'Perception', '+4', false
            ],
            [
                'Performance', '-1', false
            ],
            [
                'Persuasion', '-1', false
            ],
            [
                'Religion', '0', false
            ],
            [
                'Sleight of Hand', '+3', false
            ],
            [
                'Stealth', '+5', false
            ],
            ['Survival', '+4', false]
        ];

        return (
            <View style={styles.outer}>
                <Content>
                    <ScrollView>
                        <List dataArray={items} renderRow={(data) => this.renderRow(data)}></List>
                    </ScrollView>
                </Content>
                <AdMobBanner bannerSize="smartBannerLandscape" adUnitID="ca-app-pub-2417893763284111/8886434387" testDeviceID="5AD4506F18FA8B5A4A528F379E3C746B" didFailToReceiveAdWithError={this.bannerError}/>
            </View>
        );
    }
    renderRow(data) {
        var spellRow = this.renderSpellRow(data);
        if (data[2]) {
            spellRow = this.renderSpellDivider(data);
        }
        return spellRow
    }

    renderSpellDivider(data) {
        return (
            <ListItem itemDivider={data[2]}>
                <Text>{data[0]}</Text>
            </ListItem>
        )
    }

    renderSpellRow(data) {
        return (
            <ListItem>
                <Grid>
                    <Col size={10}>
                        <Text>{data[1]}</Text>
                    </Col>
                    <Col size={90}>
                        <Text style={{textAlign: 'left'}}>{data[0]}</Text>
                    </Col>
                </Grid>
            </ListItem>
        )
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
