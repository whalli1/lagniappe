import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="people"/>
              <Text>Friends</Text>
            </Button>
            <Button active>
              <Icon name="home"/>
              <Text>Feed</Text>
            </Button>
            <Button>
              <Icon name="calendar"/>
              <Text>Itenerary</Text>
            </Button>
            <Button>
              <Icon name="person"/>
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}