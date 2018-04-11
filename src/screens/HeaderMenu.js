/**
 * 带 Menu 的 Header
 */
import React, {Component} from 'react';

import {
  Header,
  Title,
  Button,
  Left,
  Icon,
  Body,
  Right
} from 'native-base';

export default class HeaderMenu extends Component {

  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navig("DrawerOpen")}
          >
            <Icon name="ios-menu"/>
          </Button>
        </Left>
        <Body>
        <Title>{this.props.title}</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}
