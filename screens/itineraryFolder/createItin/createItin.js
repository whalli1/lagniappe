import React, { Component } from 'react';

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	List,
	ListItem,
	CheckBox,
	Text,
	Left,
	Right,
	Body,
} from 'native-base';


export default class NHCheckbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkbox1: false,
			checkbox2: false,
			checkbox3: false,
			checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
		};
	}

	toggleSwitch1() {
		this.setState({
			checkbox1: !this.state.checkbox1,
		});
	}

	toggleSwitch2() {
		this.setState({
			checkbox2: !this.state.checkbox2,
		});
	}

	toggleSwitch3() {
		this.setState({
			checkbox3: !this.state.checkbox3,
		});
	}

	toggleSwitch4() {
		this.setState({
			checkbox4: !this.state.checkbox4,
		});
	}
  toggleSwitch5() {
		this.setState({
			checkbox5: !this.state.checkbox5,
		});
	}
  toggleSwitch6() {
		this.setState({
			checkbox6: !this.state.checkbox6,
		});
	}
  toggleSwitch7() {
		this.setState({
			checkbox7: !this.state.checkbox7,
		});
	}

	render() {
		return (
			<Container>
				<Content>
					<ListItem icon button onPress={() => this.toggleSwitch1()}>
            <Left>
              <Icon name="ios-film-outline" />
            </Left>
						<Body>
							<Text>Amusement</Text>
						</Body>
            <Right>
              <CheckBox checked={this.state.checkbox1} onPress={() => this.toggleSwitch1()} />
            </Right>
					</ListItem>
					<ListItem icon button onPress={() => this.toggleSwitch2()}>
						<Left>
              <Icon name="ios-restaurant-outline" />
            </Left>
						<Body>
							<Text>Food</Text>
						</Body>
            <Right>
              <CheckBox checked={this.state.checkbox2} onPress={() => this.toggleSwitch2()} />
            </Right>
					</ListItem>
					<ListItem icon button onPress={() => this.toggleSwitch3()}>
						<Left>
              <Icon name="ios-microphone-outline" />
            </Left>
						<Body>
							<Text>Music</Text>
						</Body>
            <Right>
              <CheckBox checked={this.state.checkbox3} onPress={() => this.toggleSwitch3()} />
            </Right>
					</ListItem>
					<ListItem icon button onPress={() => this.toggleSwitch4()}>
		        <Left>
              <Icon name="ios-moon-outline" />
            </Left>
						<Body>
							<Text>Night Life</Text>
						</Body>
            <Right>
              <CheckBox checked={this.state.checkbox4} onPress={() => this.toggleSwitch4()} />
            </Right>
					</ListItem>
          <ListItem icon button onPress={() => this.toggleSwitch5()}>
		        <Left>
              <Icon name="ios-sunny-outline" />
            </Left>
						<Body>
							<Text>Outdoors</Text>
						</Body>
            <Right>
              <CheckBox checked={this.state.checkbox5} onPress={() => this.toggleSwitch5()} />
            </Right>
					</ListItem>
          <ListItem icon button onPress={() => this.toggleSwitch6()}>
		        <Left>
              <Icon name="ios-cart-outline" />
            </Left>
						<Body>
							<Text>Shopping</Text>
						</Body>
            <Right>
              <CheckBox checked={this.state.checkbox6} onPress={() => this.toggleSwitch6()} />
            </Right>
					</ListItem>
          <ListItem icon button onPress={() => this.toggleSwitch7()}>
		        <Left>
              <Icon name="ios-american-football-outline" />
            </Left>
						<Body>
							<Text>Sporting Events</Text>
						</Body>
            <Right>
              <CheckBox checked={this.state.checkbox7} onPress={() => this.toggleSwitch7()} />
            </Right>
					</ListItem>
				</Content>
			</Container>
		);
	}
}

//export default NHCheckbox;
