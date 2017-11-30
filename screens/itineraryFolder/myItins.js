import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Thumbnail, Left, Right } from 'native-base'

export default class myItinsTab extends Component{
  // constructor(props) {
	// 	super(props);
	// 	this.state = {
  //     itinerary: false,
	// 	};
	// }

    render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>December 1st, 2017</Text>
            </CardItem>
            <CardItem>
              {/* <Left>
                <Image source={require('./lagniappe/JusticeL.png')} />
              </Left> */}
              <Body>
                <Text>
                  ~3:30-5:30 Justice League, AMC Mall of Louisiana

                  ~7:00-9:00 Baton Rouge Symphony, Raisin Cane's River Center
                </Text>
              </Body>
            </CardItem>
            {/* <CardItem footer>
              <Text></Text>
            </CardItem> */}
         </Card>
        </Content>
      </Container>
    );
  }
}
