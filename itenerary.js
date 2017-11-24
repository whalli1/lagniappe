import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Body, Right,
  Title, Left, List, ListItem} from 'native-base';
import {
    StyleSheet,         // CSS-like styles
    Text,               // Renders text
    View                // Container component
} from 'react-native';

export default class IteneraryPage extends Component {
    render() {
    return (
      <View style={{flexDirection: 'row'}}>
      <Container>
        <View style={{marginTop: 25}}>
          <Header style={styles.header}>
            <Left>
            </Left>
            <Body>
              <Text style={styles.headerTxt}>Create Itinerary</Text>
            </Body>
            <Right>
              {/*button will add to calender*/}
              <Button transparent>
                <Icon name="ios-add-circle-outline"/>
              </Button>
            </Right>
          </Header>
        </View>
        <Content>
          {/*This is how they will generate their Itins.
            They don't do anything just yet.
            I will try to clean the code up later*/}
          <List style={styles.List}>
            <ListItem icon>
              <Left>
                <Icon name="ios-film-outline" />
              </Left>
              <Body>
                <Text>Amusement</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-restaurant-outline" />
              </Left>
              <Body>
                <Text>Food</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-microphone-outline" />
              </Left>
              <Body>
                <Text>Music</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-moon-outline" />
              </Left>
              <Body>
                <Text>Night Life</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-sunny-outline" />
              </Left>
              <Body>
                <Text>Outdoors</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="ios-cart-outline" />
              </Left>
              <Body>
                <Text>Shopping</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>                                 
            <ListItem icon>
              <Left>
                <Icon name="ios-american-football-outline" />
              </Left>
              <Body>
                <Text>Sporting Events</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    header: {
      backgroundColor: '#E91E63',
    },

    headerTxt: {
      color: 'white',
      fontSize: 17,
      fontFamily: 'Avenir',
      fontWeight: '900',
    },

    List: {
      flexDirection: 'column',
    }
});
