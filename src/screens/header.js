
import React, {Component} from 'react';
import {
  Header,
  Title,
  Button,
  Left,
  Icon,
  Body,
  Right
} from "native-base";

export default class MyHeader extends Component {

  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigate("DrawerOpen")}
          >
            <Icon name="ios-menu"/>
          </Button>
        </Left>
        <Body>
        <Title>Courses</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}
