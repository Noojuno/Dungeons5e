import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

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

export class SingleScorePlusMinus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: this.props.score
        };
    }
    nudgeScore(value) {
        if (value == '-') {
            this.state.score--;
        } else {
            this.state.score++;
        }
        this.forceUpdate();
    }
    render() {
        var reachedLowerLimit = this.state.score <= 0
            ? true
            : false;
        return (
            <Col size={this.props.size}>
                <Card>
                    <CardItem style={{
                        padding: 6
                    }}>
                        <Body>
                            <Row>
                                <Col>
                                    <Text style={styles.abilityTitle}>{this.props.name}</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button disabled={reachedLowerLimit} light style={{
                                        padding: 8,
                                        alignSelf: "flex-start"
                                    }} onPress={() => this.nudgeScore('-')}>
                                        <Icon style={{
                                            fontSize: 16
                                        }} name='remove'/>
                                    </Button>
                                </Col>
                                <Col>
                                    <Text style={styles.bigNumber}>{this.state.score}</Text>

                                </Col>
                                <Col>
                                    <Button light style={{
                                        padding: 8,
                                        alignSelf: "flex-end"
                                    }} onPress={() => this.nudgeScore('+')}>
                                        <Icon style={{
                                            fontSize: 16
                                        }} name='add'/>
                                    </Button>
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
    numberTitle: {
        textAlign: "center"
    },
    button: {
        padding: 8,
        alignSelf: "center"
    },
    icon: {
        fontSize: 16
    },
    smallText: {
      fontSize: 10,
      textAlign: 'center',
    },
});
