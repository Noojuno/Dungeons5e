import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    TextInput,
    StyleSheet
} from 'react-native';

import Container from "../../components/Container";

export class CharacterSkills extends Component {
    render() {
        return (
            <ScrollView style={styles.inner}>
                <Text style={styles.welcome}>
                    Skills Overview
                </Text>
                <Text style={styles.instructions}>
                    This is the skill list page
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    inner: {
        padding: 16
    },
    welcome: {
        fontSize: 30,
        textAlign: 'left',
        color: "#000"
    },
    instructions: {
        textAlign: 'left',
        color: '#000',
        marginBottom: 5
    }
});
