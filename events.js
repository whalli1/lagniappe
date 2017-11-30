import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Friends } from './friends'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Title } from 'native-base';
import {FlatList, ActivityIndicator, View, Text, StyleSheet} from 'react-native';

export default class FeedPage extends Component
{
//import {music1, music2, music3, night1, night2, night3, food1, food2, outdoor, amusement} from './events';
//var event = {type:"", name:"", eventLoc:"", date:"", description:"", picUrl:""};

var amusement = {type:"Amusement", name:"Justice League", eventloc:"AMC Mall of Louisiana", date:"12-1", description:"Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists newfound ally Diana Prince to face an even greater threat.", picUrl:"https://www.facebook.com/JusticeLeagueOfficial/photos/a.1089591771134636.1073741827.956707734423041/1596152707145204/?type=3&theater" };

var music1 = {type:"Music", name:"DMX Concert", eventLoc:"Varsity Theater", date:"12-2", description:"Come see DMX live and direct at the Varsity!", picUrl:"http://i.axs.com/2015/11/promoted-media-optimized_565a2e7742451.png"}; 

var music2 = {type:"Music", name:"Baton Rouge Symphony", eventLoc:"Raisin Cane's River Center", date:"12-1", description:"Playing John Cage's 4'22 for 6 hours straight", picUrl:"https://www.seattlesymphony.org/~/media/images/landing%20page%20banner%20880x385/1415_abouttheseattlesymphony_banner.jpg"}; 

var outdoor = {type:"Outdoors", name:"Yoga On Tap", eventLoc:"tin Roof Brewing Co.", date:"12-2", description:"Come get your stretch on, free drinks after!", picUrl:"http://nadiaraafat.com/wp-content/uploads/2016/06/yoga1.jpg"}; 

var music3 = {type:"Music", name:"Dog Parade", eventLoc:"Raisin Cane's Dog Park", date:"12-3", description:"Featuring live music by the doobie brothers. BYOD Bring your own dog.", picUrl:"https://static1.squarespace.com/static/5313d3e9e4b0d7a86d52896e/5338535ae4b020268eeea7a7/53385934e4b028c3f32146fa/1397877670399/1.jpg"};

var food1 = {type:"Food", name:"Tapas at the Botanical Garden", eventLoc:"Baton Rouge Botanical Garden", date:"12-4", description:"Chef Richard Cheese serving a contemporary take on Nouvelle Spanish-Creole cuisine", picUrl:"http://www.loverhyl.co.uk/wp-content/uploads/2014/03/br_Banner.jpg"}; 

var food2 = {type:"Food", name:"Jamabalaya Cookoff", eventLoc:"BRCC", date:"12-4", description:"8 Chefs 8 recipies, see who is the best! 5$ entry", picUrl:"http://999ktdy.com/files/2012/06/jambalaya-300x199.jpg"};

var night1 = {type:"Night Life", name:"Backyard Keg Part 3", eventLoc:"Dave's backyard", date:"12-5", description:"5$ a head BYOB", picUrl:"https://i2.wp.com/jatnewsdaily.com/wp-content/uploads/2015/06/Backyard-Kegger.jpg"}; 

var night2 = {type:"Night Life", name:"T-Shirt Night", eventLoc:"TigerLand", date:"12-4", description:"Free drinks 8-10", picUrl:"https://bloximages.newyork1.vip.townnews.com/lsunow.com/content/tncms/assets/v3/editorial/4/ce/4cedbc46-d411-11e5-a8c8-2b2e550a32a2/56c217c777bc4.image.jpg"};

var night3 = {type:"Night Life", name:"Wine Night", eventLoc:"TigerLand", date:"12-5", description:"$2 glasses 8 till.", picUrl:"https://thumbs.dreamstime.com/b/blond-wasted-depressed-alcoholic-drunk-woman-drinking-white-wine-glass-desperate-sad-caucasian-looking-alcohol-abuse-72898943.jpg"};

}
