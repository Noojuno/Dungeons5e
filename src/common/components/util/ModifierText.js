import React, {Component} from 'react';
import {Text} from 'react-native';

export class ModifierText extends Component {
    render() {
        var modifier = this.props.children;
        var displayNormal = this.props.displayNormal;

        if (displayNormal == null || !displayNormal) {
            if (modifier > 0) {
                modifier = '+' + modifier;
            }
        }

        return (
            <Text {...this.props}>
                {modifier}
            </Text>
        );
    }
}
