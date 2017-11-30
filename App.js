import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import Tabs from './Tabs';
import Feed from './screens/feed';
import Friends from './screens/friends';
import Profile from './screens/profile';
import Itinerary from './screens/itineraryFolder/itinerary';

import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View          // Container component
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs>
          {/* First tab */}
          <View title="Friends" style={styles.content} >
            <Friends/>
          </View>
          {/* Second tab */}
          <View title="Feed" style={styles.content}>
            <Feed/>
          </View>
          {/* Third tab */}
          <View title="Itinerary" style={styles.content}>
            <Itinerary/>
          </View>
          <View title="Profile" style={styles.content}>
            <Profile/>
          </View>
        </Tabs>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1,                            // Take up all screen
    backgroundColor: '#E91E63',         // Background color
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
