import { AppRegistry, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Card, CardItem,
    Left, Thumbnail, Image, Body, Item, Label
} from 'native-base';

export default class ProfilePage extends Component {
    render() {
        return (

            <Container>
                <Icon fontSize="64" name="person" style={styles.content} />
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Label style={styles.field}>Name:</Label>
                    <Label style={styles.item}>Thomas Fiddlestick</Label>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Label style={styles.field}>Location: </Label>
                    <Label style={styles.item}>West Monroe, LA</Label>
                    <Label></Label>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Button rounded info style={styles.button} alignItems='center'><Text alignItems='center'> Friends </Text></Button>
                    <Button rounded danger style={styles.button}><Text alignItems='center'> Logout </Text></Button>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    content: {
        alignItems: 'center',             // Center horizontally
        marginTop: 38,
        fontSize: 64
    },

    field: {
        color: 'black',
        marginTop: 8,
    },

    item: {
        marginTop: 8
    },
    button: {
        marginTop: 8,
        alignItems: 'center'
    }

});
