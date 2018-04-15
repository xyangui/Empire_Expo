/**
 * 我的课程里面的 CLASS 页面
 */
import React, { Component } from 'react';
import { View } from 'react-native';

import {
  Container,
  ListItem,
  Text,
  List,
  Icon,
  Body,
  Right
} from 'native-base';

import Header from '../HeaderGoback';
import stylesContainer from '../styles.js';

const datas = [
  {
    title: "Uname1",
    text: ["U1classname1", "U1classname2", "U1classname3"]
  },
  {
    title: "Unname2",
    text: ["Un2classname1", "Un2classname2"]
  },
  {
    title: "Uniname3",
    text: ["Uni3classname1", "Uni3classname2", "Uni3classname3", "Uni3classname4"]
  }
];

export default class MyClass extends Component {

  // _getClassNameArray(classNames: Array<string>) {
  //
  //   var listItemArray = [];
  //
  //   for (let text of classNames) {
  //
  //     let str = text;
  //     let str2 = text;
  //
  //     listItemArray.push(
  //         <ListItem>
  //           <Text>{text}</Text>
  //         </ListItem>
  //     );
  //   }
  //
  //   return listItemArray;
  // }

  render() {

    const {params} = this.props.navigation.state;

    return (
      <Container style={stylesContainer.container}>

		<Header navig={this.props.navigation} title={params.CoursesName}/>

        <List dataArray={datas}
              renderRow={data =>

                <View>
                  <ListItem itemDivider>
                    <Text>{data.title}</Text>
                  </ListItem>

                  <List dataArray={data.text}
                        renderRow={datatext =>

                          <ListItem>
                            <Body>
                            <Text>{datatext}</Text>
                            </Body>
                            <Right>
                              <Icon name="arrow-forward" />
                            </Right>
                          </ListItem>
                        }
                  />
                </View>
              }
        />

      </Container>
    );
  }
}

