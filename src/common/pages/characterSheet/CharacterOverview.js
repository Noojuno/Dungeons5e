import React, {Component} from 'react';
import {Text, ScrollView, TextInput, StyleSheet} from 'react-native';

import {AbilityScore} from "../../components/AbilityScore";

import {
    Content,
    Grid,
    Col,
    Row,
    Card,
    CardItem,
    Body
} from "native-base";

export class CharacterOverview extends Component {
    render() {
        return (
            <ScrollView style={styles.inner}>
                <Grid>
                    <Row>
                        <Col size={50}>
                            <AbilityScore name="Strength" score='11' modifier='0' save='0'/>
                        </Col>
                        <Col size={50}>
                            <AbilityScore name="Intelligence" score='14' modifier='+2' save='+2'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={50}>
                            <AbilityScore name="Dexterity" score='12' modifier='+1' save='+1'/>
                        </Col>
                        <Col size={50}>
                            <AbilityScore name="Wisdom" score='15' modifier='+2' save='+2'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={50}>
                            <AbilityScore name="Constitution" score='13' modifier='+1' save='+1'/>
                        </Col>
                        <Col size={50}>
                            <AbilityScore name="Charisma" score='16' modifier='+3' save='+3'/>
                        </Col>
                    </Row>
                </Grid>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    inner: {
        padding: 8,
        backgroundColor: "#fafafa"
    },
    instructions: {
        textAlign: 'left',
        color: '#000',
        marginBottom: 5
    }
});
