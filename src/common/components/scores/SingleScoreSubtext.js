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

export class SingleScoreSubtext extends Component {
    render() {
      var titleStyles = styles.abilityTitle;
      if (this.props.small) {
          titleStyles = [styles.abilityTitle, styles.abilityTitleSmall];
      }
        return (
            <Col>
                <Card >
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
                                    <Text style={styles.bigNumber}>{this.props.score}</Text>
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
    smallText: {
      fontSize: 10,
      textAlign: 'center',
    },
    numberTitle: {
        textAlign: "center"
    }
});
