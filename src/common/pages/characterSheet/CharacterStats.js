import React, {Component} from 'react';
import {Text, ScrollView, TextInput, StyleSheet} from 'react-native';

import {AdMobBanner, AdMobInterstitial, PublisherBanner} from 'react-native-admob'

import {Content} from "native-base";

import Container from "../../components/Container";

export class CharacterStats extends Component {
    render() {
        return (
            <Content>
                <ScrollView style={styles.inner}>
                    <Text style={styles.welcome}>
                        Stats Overview
                    </Text>
                    <Text style={styles.instructions}>
                        This is the stats overview page
                    </Text>
                </ScrollView>
            </Content>
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
