import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

import {
    Grid,
    Col,
    Row,
    Card,
    CardItem,
    Body
} from "native-base";

import {SkillRow} from './SkillRow';

export class SkillPanel extends Component {
    render() {
        var rows = [];
        this.props.skills.forEach(function(skills, index) {
            rows.push(<SkillRow key={index} skill={skills[0]} modifier={skills[1]} isTrained={skills[2]}/>);
        });
        return (
            <Card>
                <CardItem style={{
                    padding: 4
                }}>
                    <Body>
                        <Row>
                            <Col>
                                <Text style={styles.abilityTitle}>{this.props.ability}</Text>
                            </Col>
                        </Row>
                        {rows}
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    abilityTitle: {
        textAlign: "center",
        fontWeight: 'bold',
        color: "#000000",
        fontSize: 16
    }
});
