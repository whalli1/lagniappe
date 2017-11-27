import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Friends } from './friends'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Title } from 'native-base';
import {FlatList, ActivityIndicator, View, Text, StyleSheet} from 'react-native';


export default class FeedPage extends Component {

	  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Events'},
            {key: 'Events'},
            {key: 'Events'},
            {key: 'Events'},
            {key: 'Events'},
            {key: 'Events'},
            {key: 'Events'},
            {key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
			{key: 'Events'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
//need to implement renderitem(event) 
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 72,
    fontSize: 32,
    height: 72,
  },
})
