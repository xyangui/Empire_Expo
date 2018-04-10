
import React from 'react';
import {
  Header,
  Title,
  Button,
  Left,
  Icon,
  Body,
  Right
} from "native-base";

const MyHeader = () => (

  <Header>
    <Left>
      <Button
        transparent
        onPress={() => this.props.navigation.navigate("DrawerOpen")}
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

export default MyHeader;
