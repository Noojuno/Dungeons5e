import React, {Component, PropTypes} from 'react';
import {Text, StyleSheet} from 'react-native';

import {Col, Row} from "native-base";

import {ModifierText} from "../util/ModifierText"
import FEColors from '../../FEColors';

export class SkillRow extends Component {
    render() {
        var darkColor = FEColors.skills.defaultDark;
        var lightColor = FEColors.skills.defaultLight;
        if (this.props.skill == "Saving Throw") {
            darkColor = FEColors.skills.savingThrowDark;
            lightColor = FEColors.skills.savingThrowLight;
        } else if (this.props.isTrained) {
            darkColor = FEColors.skills.trainedDark;
            lightColor = FEColors.skills.trainedLight;
        }

        return (
            <Row marginTop={4}>
                <Col backgroundColor={darkColor} size={1}>
                    <ModifierText style={styles.skillMod}>{this.props.modifier}</ModifierText>
                </Col>
                <Col backgroundColor={lightColor} size={3}>
                    <ModifierText displayNormal style={styles.skillName}>{this.props.skill}</ModifierText>
                </Col>
            </Row>
        );
    }
}

const styles = StyleSheet.create({
    skillMod: {
        fontSize: 16,
        textAlign: 'center',
        color: "#000"
    },
    skillName: {
        fontSize: 16,
        textAlign: 'center',
        color: "#000"
    }
});
