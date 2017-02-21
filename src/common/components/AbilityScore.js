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

export class AbilityScore extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Row>
                            <Col>
                                <Text style={styles.abilityTitle}>{this.props.name}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.scoreTitle}>Score</Text>
                            </Col>
                            <Col>
                                <Text style={styles.scoreTitle}>Mod</Text>
                            </Col>
                            <Col>
                                <Text style={styles.scoreTitle}>Save</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text style={styles.scoreNumber}>{this.props.score}</Text>
                            </Col>
                            <Col>
                                <Text style={styles.scoreNumber}>{this.props.modifier}</Text>
                            </Col>
                            <Col>
                                <Text style={styles.scoreNumber}>{this.props.save}</Text>
                            </Col>
                        </Row>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    scoreNumber: {
        fontSize: 20,
        textAlign: 'center',
        color: "#000"
    },
    abilityTitle: {
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 16
    },
    scoreTitle: {
        textAlign: "center"
    }
});
