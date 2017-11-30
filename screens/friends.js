import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Title , List, ListItem, Left, Body, Right } from 'native-base';
import { View, Text, StyleSheet} from 'react-native';


export default class FriendsPage extends Component {
    render() {
        return (
		<View>
        <List style={styles.List}>
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
			
			<ListItem icon>
              <Left>
                <Icon name="person" />
              </Left>
              <Right>
                <Text>OP</Text>
              </Right>
              
            </ListItem>
			
			
			
          </List>
		  </View>
        );
    }   

}
const styles = StyleSheet.create({
	List: {
      flexDirection: 'column',
	  alignItems: 'flex-start',
	  marginRight:200,
    }
	
})

