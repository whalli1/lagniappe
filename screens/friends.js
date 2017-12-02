import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Title, List, ListItem, Left, Body, Right } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';


export default class FriendsPage extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Container>
                    <Header style={styles.header}>
                        <Body>
                            <Text style={styles.headerTxt}>Lagniappe</Text>
                        </Body>
                        <Right>
                            {/*button will bring you to create itin */}
                            <Button transparent onPress={() => this.doNothing()}>
                                <Icon name="ios-add-circle-outline" />
                            </Button>
                        </Right>
                    </Header>
                    <View>
                        <List style={styles.List}>
                            <ListItem icon>
                                <Left>
                                    <Icon name="people" />
                                </Left>
                                <Right>
                                    <Text style={styles.listTitle}>Friends</Text>
                                </Right>

                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>Devin</Text>
                                </Right>

                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>Jackson</Text>
                                </Right>

                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>James</Text>
                                </Right>

                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>Jillian</Text>
                                </Right>

                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>Jimmy</Text>
                                </Right>

                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>Joel</Text>
                                </Right>

                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>John</Text>
                                </Right>

                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>Julie</Text>
                                </Right>

                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="person" />
                                </Left>
                                <Right>
                                    <Text>Louie</Text>
                                </Right>

                            </ListItem>
                        </List>
                    </View>
                </Container>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    List: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: 25
    },
    header: {
        backgroundColor: '#0b5fe8',
        marginTop: 25
    },

    headerTxt: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Avenir',
        fontWeight: '900',
    },
    listTitle: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'Avenir',
        fontWeight: '900'
    }

})
