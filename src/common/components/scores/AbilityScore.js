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
        var modNumber;

        modNumber = Math.floor((this.props.score / 2) - 5);
        if(modNumber > 0) {
          modNumber = "+" + modNumber;
        }

        return (
            <Col>
                <Card>
                    <CardItem style={{
                        padding: 4
                    }}>
                        <Body>
                            <Row>
                                <Col>
                                    <Text style={styles.abilityTitle}>{this.props.name}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col><Text style={styles.numberTitle}>Score</Text></Col>
                                <Col><Text style={styles.numberTitle}>Modifier</Text></Col>
                                <Col><Text style={styles.numberTitle}>Save</Text></Col>
                            </Row>
                            <Row>
                                <Col><Text style={styles.smallNumber}>{this.props.score}</Text></Col>
                                <Col><Text style={styles.bigNumber}>{modNumber}</Text></Col>
                                <Col><Text style={styles.smallNumber}>{this.props.save}</Text></Col>
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
        fontSize: 22,
        textAlign: 'center',
        color: "#000"
    },
    abilityTitle: {
        textAlign: "center",
        fontWeight: 'bold',
        color: "#000000",
        fontSize: 16
    },
    numberTitle: {
        textAlign: "center",
        fontSize: 12
    }
});
