import React, { Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Icon } from 'native-base';
import Tabs from './Tabs';
import Feed from './screens/feed';
import Friends from './screens/friends';
import Profile from './screens/profile';
import Itinerary from './screens/itineraryFolder/itinerary';

import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,          // Container component
  Button,
  AppRegistry
} from 'react-native';

function UserGreeting(props) {
  return <View>Welcome back!</View>;
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }

  login() {
    this.setState({isLoggedIn: true})
  }

  static getState(data){
  }


  render() {
    return (
      <View style={styles.container}>
        <Tabs>
          {/* First tab */}
          <View title="Feed" style={styles.content}>
            <Feed />
          </View>
          {/* Third tab */}
          <View title="Itinerary" style={styles.content}>
            {this.state.isLoggedIn && <Itinerary />}
            {!this.state.isLoggedIn && <Authenticate />}
          </View>
          <View title="Profile" style={styles.content}>
            {this.state.isLoggedIn && <Profile />}
            {!this.state.isLoggedIn && <Authenticate />}
          </View>
          <View title="Friends" style={styles.content} >
            {this.state.isLoggedIn && <Friends />}
            {!this.state.isLoggedIn && <Authenticate />}
          </View>
          {/* Second tab */}
        </Tabs>
      </View>
    );
  }
}

class Authenticate extends Component {
  constructor(props) {
    super(props);
  }

  login(){
    App.login();
  }

    render() {
      return (
        <Button title="Hello" onPress={() =>this.login()}></Button>
      );
    }
  }

  const styles = StyleSheet.create({
    // App container
    container: {
      flex: 1,                            // Take up all screen
      backgroundColor: '#0b5fe8',         // Background color
    },
    // Tab content container
    content: {
      flex: 1,                            // Take up all available space
      justifyContent: 'center',           // Center vertically
      alignItems: 'center',               // Center horizontally
      backgroundColor: '#FFFFFF',         // Darker background for content area
    },
    // Content header
    header: {
      margin: 10,                         // Add margin
      color: '#FFFFFF',                   // White color
      fontFamily: 'Avenir',               // Change font family
      fontSize: 26,                       // Bigger font size
    },
    // Content text
    text: {
      marginHorizontal: 20,               // Add horizontal margin
      color: 'rgba(255, 255, 255, 0.75)', // Semi-transparent text
      textAlign: 'center',                // Center
      fontFamily: 'Avenir',
      fontSize: 18,
    },
  });
