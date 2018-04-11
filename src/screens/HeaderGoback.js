/**
 * 带返回按钮的 Header
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

export default class HeaderGoback extends Component {

  render() {
    return (

        <Header>
          <Left>
            <Button
                transparent
                onPress={() => this.props.navig.goBack()}
            >
              <Icon name="arrow-back"/>
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
