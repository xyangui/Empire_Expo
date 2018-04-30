import React, { Component } from "react";
import {
  Container,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  List,
  ListItem
} from "native-base";

import Header from '../HeaderMenu';
import gStyles from '../styles.js';
import ClassAgenda from "./agenda";
import ClassCalendars from "./calendars";

const datas = [
  {
    text: "Class Timetable Monthly",
    route: "ClassCalendars"
  },
  {
    text: "Class Timetable Details",
    route: "ClassAgenda"
  }
];

export default class Timetable extends Component {
  render() {
    return (
      <Container style={gStyles.container}>

        <Header navig={this.props.navigation.navigate} title='Timetable'/>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

