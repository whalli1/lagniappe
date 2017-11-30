import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Friends } from './friends'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Title, Body, Right, Left } from 'native-base';
import {FlatList, ActivityIndicator, View, Text, StyleSheet, Dimensions, ScrollView, Image} from 'react-native';
//import {EventList} from '.EventList';

const {width, height} = Dimensions.get('window'); 



export default class FeedPage extends Component {
	
	   state = {
      names: [
         {'name': 'DMX Concert', 'id': 1},
         {'name': 'Wu-Tang Concert', 'id': 2},
         {'name': 'Boosie Concert', 'id': 3},
         {'name': 'Webbie Concert', 'id': 4},
         {'name': 'Beers at the Park', 'id': 5},
         {'name': 'Kegger at the Park', 'id': 6},
         {'name': 'Collective Hiking', 'id': 7},
         {'name': 'Yoga', 'id': 8},
         {'name': 'Drunk Yoga', 'id': 9},
         {'name': 'Tapas at the Park', 'id': 10},
         {'name': 'Van Halen Cover Band', 'id': 11},
         {'name': 'Jambalaya Cookoff (BYOB)', 'id': 12}
      ]
   }

  render() {
    return (
         <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
    );
  }
}
const styles = StyleSheet.create({
	container:{
		flex: 1,
	},
	image: {
    width: 450,
    height: 300,
    justifyContent: 'flex-end',
	},
	title: {
    color: 'black',
    fontSize: 30,
    padding: 5,
  },
	loc: {
		color: 'black',
		fontSize: 15,
		padding: 5,
	},
	item: {
	  flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
	}
});
