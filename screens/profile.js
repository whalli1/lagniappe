import { AppRegistry, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import {
    Container, Header, Content, Footer, FooterTab, Button, Text, Icon, Card, CardItem,
    Left, Thumbnail, Image, Body, Item, Label, Right, Form, ListItem, List
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ProfilePage extends Component {

    render() {
        return (

            <View style={{ flexDirection: 'row' }}>
                <Container>
                    <View style={{ marginTop: 25 }}>
                        <Header noShadow style={styles.header}>
                            <Left>
                                <Text style={styles.headerTxt}>Lagniappe</Text>
                            </Left>
                            <Right>
                                {/*button will add to calender*/}
                                <Button transparent>
                                    <Icon name="settings" />
                                </Button>
                            </Right>
                        </Header>
                    </View>
                    <Container style={{ backgroundColor: '#0b5fe8', maxHeight: 130 }}>
                        <View style={styles.img} >
                            <Icon fontSize="64" name="person" style={styles.content} />
                        </View>
                        <View style={styles.profile}>
                            <Text style={styles.profileTitle}>Thomas Fiddlestick</Text>
                        </View>
                        <View style={styles.profile}>
                            <Text style={styles.profileTxt}>West Monroe, La</Text>
                        </View>
                    </Container>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <View style={{ borderBottomWidth: 3, borderColor: "#0b5fe8", marginLeft: 15, marginRight: 15, paddingHorizontal: 20, paddingVertical: 10 }}>
                            <Text>Member Since:</Text><Text style={styles.field}>Oct 27th</Text>
                        </View>
                        <View style={{ borderBottomWidth: 3, borderColor: "#0b5fe8", marginLeft: 15, marginRight: 15, paddingHorizontal: 20, paddingVertical: 10 }}>
                            <Text>Friends:</Text><Text style={styles.field} Right>56</Text>
                        </View>
                    </View>

                    <View style={styles.interests}>
                        <Text>Interests:</Text>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-american-football-outline" />
                            </Left>
                            <Body>
                                <Text style={styles.interestField}>Sports</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-sunny-outline" />
                            </Left>
                            <Body>
                                <Text style={styles.interestField}>Outdoors</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="ios-cart-outline" />
                            </Left>
                            <Body>
                                <Text style={styles.interestField}>Shopping</Text>
                            </Body>
                        </ListItem>
                    </View>

                    <List style={styles.list}>
                        <ListItem icon>
                            <Left>
                                <Icon name="calendar" />
                            </Left>
                            <Body>
                                <Text>Itineraries</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    content: {
        alignSelf: 'center',             // Center horizontally
        fontSize: 72,
        color: '#0b5fe8',
        borderRadius: 100,
        backgroundColor: 'white',
        width: 72,
        height: 76,
        textAlign: 'center',
    },

    field: {
        alignSelf: 'center',
        color: 'grey'
    },
    label: {
        marginLeft: 15,
        marginRight: 15,
        color: "#000000"
    },
    img: {
        backgroundColor: 'transparent'
    },
    button: {
        marginTop: 8,
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#0b5fe8',
    },
    profileTop: {
        backgroundColor: '#B0E0E6'
    },

    headerTxt: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Avenir',
        fontWeight: '900',
    },

    profile: {
        alignItems: 'center'
    },

    profileTxt: {
        color: 'white'
    },
    profileTitle: {
        alignItems: 'center',
        color: 'white',
        fontWeight: '100',
        fontSize: 20
    },

    list: {
        flexDirection: 'column',
        paddingHorizontal: 50,
        paddingVertical: 15
    },

    interests: {
        paddingHorizontal: 50,
        paddingVertical: 25
    },

    interestField: {
        color: 'grey'
    }

});


