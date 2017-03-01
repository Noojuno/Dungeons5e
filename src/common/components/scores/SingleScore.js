import React, {Component} from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';

import {
    Grid,
    Col,
    Row,
    Card,
    CardItem,
    Body,
    Button,
    Icon
} from "native-base";

import {ModifierText} from "../util/ModifierText"

export class SingleScore extends Component {
    render() {
        var titleStyles = styles.abilityTitle;
        if (this.props.small) {
            titleStyles = [styles.abilityTitle, styles.abilityTitleSmall];
        }
        var displayNormal = false;
        if(this.props.isModifier == null && !this.props.isModifier) {
          displayNormal = true;
        }

        return (
            <Col size={this.props.size}>
                <Card>
                    <CardItem button onPress={this.props.onPress} style={{
                        padding: 4
                    }}>
                        <Body>
                            <Row>
                                <Col>
                                    <Text style={titleStyles}>{this.props.name}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ModifierText displayNormal={displayNormal} style={styles.bigNumber}>{this.props.score}</ModifierText>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Text style={styles.smallText}>{this.props.subtext}</Text>
                                </Col>
                            </Row>
                        </Body>
                    </CardItem>
                </Card>
            </Col>
        );
    }
}

const styles = StyleSheet.create({
    smallNumber: {
        fontSize: 16,
        textAlign: 'center',
        color: "#000"
    },
    bigNumber: {
        fontSize: 26,
        textAlign: 'center',
        color: "#000"
    },
    abilityTitle: {
        textAlign: "center",
        fontWeight: 'bold',
        color: "#000000",
        fontSize: 24
    },
    abilityTitleSmall: {
        fontSize: 16
    },
    smallText: {
        fontSize: 10,
        textAlign: 'center'
    },
    numberTitle: {
        textAlign: "center"
    }
});
