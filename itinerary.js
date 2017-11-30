import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Button, Icon, Body, Right,
  Title, Left, Tab, Tabs} from 'native-base';
import {
    StyleSheet,         // CSS-like styles
    Text,               // Renders text
    View                // Container component
} from 'react-native';
//import Tabs   from './itinTabs';
import Tab1 from './myItins';
import Tab2 from './createItin/createItin';
export default class ItineraryPage extends Component {
  constructor(props) {
		super(props);
		this.state = {
     //stuff
		};
	}
  doNothing() {
    this.setState({
      //stuff
    });
  }

    render() {
    return (
      <View style={{marginTop: 20}}>
        <Header hasTabs style={styles.header}>
          <Left/>
          <Right>
            {/*button will bring you to create itin */}
            <Button transparent onPress={() => this.doNothing()}>
              <Icon name="ios-add-circle-outline"/>
            </Button>
          </Right>
        </Header>
        <Container>
          <Content>
            <Tabs initialPage={1}>
              <Tab heading="Upcoming">
                <Tab1 />
              </Tab>
              <Tab heading="Create">
                <Tab2 />
              </Tab>
            </Tabs>
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


    content: {
      flex: 1,                            // Take up all available space
      justifyContent: 'center',           // Center vertically
      alignItems: 'center',               // Center horizontally
      backgroundColor: '#FFFFFF',         // Darker background for content area
    },
});
