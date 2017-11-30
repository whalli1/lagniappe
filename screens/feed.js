import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Friends } from './friends'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Title, Body, Right, Left } from 'native-base';
import {FlatList, ActivityIndicator, View, Text, StyleSheet, Dimensions, ScrollView, Image} from 'react-native';
//import {EventList} from '.EventList';

const {width, height} = Dimensions.get('window'); 

export default class FeedPage extends Component {

  render() {
    return (
		<ScrollView>
			{<Text style={styles.title}> DMX Concert </Text> }
			{<Text style={styles.title}> Dog Parade </Text> }
			{<Text style={styles.title}> Keg Party </Text> }
			{<Text style={styles.title}> Spanish Moon Concert </Text> }
			{<Text style={styles.title}> Tapas at the Park </Text> }
			{<Text style={styles.title}> Wine Night </Text> }
			{<Text style={styles.title}> Beer Brew Off </Text> }
			{<Text style={styles.title}> John Cage Concert </Text> }
			{<Text style={styles.title}> Van Halen Cover Band </Text> }
			{<Text style={styles.title}> Yoga on Tap </Text> }
			{<Text style={styles.title}> Another Dog Parade </Text> }
			{<Text style={styles.title}> Webbie Live </Text> }
			{<Text style={styles.title}> The Justice League </Text> }
			{<Text style={styles.title}> Group Hiking with Dave </Text> }
			{<Text style={styles.title}> A party </Text> }
		</ScrollView>
		
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
});
