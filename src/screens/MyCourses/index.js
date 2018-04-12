/**
 * 我的课程页面
 */
import React, { Component } from 'react';
import { Image, Alert } from 'react-native';

import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Card,
  CardItem,
  Thumbnail,
  List
} from "native-base";

import { SecureStore } from 'expo';
import Header from '../HeaderMenu';

import styles from './style';
import stylesContainer from '../styles';

const cardImage = require("../../../assets/mycourse_cover.png");

const datas = [
  {
    img: require("../../../assets/logo_naati.png"),
    title: "NATTI",
    text: "Empire"
  },
  {
    img: require("../../../assets/logo_cclt.jpg"),
    title: "CCLT",
    text: "Empire"
  },
  {
    img: require("../../../assets/logo_pte.jpg"),
    title: "PTE",
    text: "Empire"
  }
];

export default class MyCourses extends Component {

  // _getValue = async key => {
	// try {
	//   const fetchedValue = await SecureStore.getItemAsync(key, {});
	//   // Alert.alert('Success!', 'Fetched value: ' + fetchedValue, [
	// 	// { text: 'OK', onPress: () => {} },
	//   // ]);
  //
  //     let fff = fetchedValue;
	//   let ff = fetchedValue;
  //
  //     return fetchedValue;
	// } catch (e) {
	//   Alert.alert('Error!', e.message, [{ text: 'OK', onPress: () => {} }]);
	// }
  // };
  //
  // constructor(props) {
	// super(props);
  //
	// let email11 = this._getValue('email');
	// let password11 = this._getValue('password');
  //
	// let ff = 22;
  //
  // }

  render() {
    return (
        <Container style={stylesContainer.container}>

          <Header navig={this.props.navigation.navigate} title='My Courses'/>

          <Content padder>
            <List dataArray={datas}
                  renderRow={data =>

                      <Card style={styles.mb}>
                        <CardItem>
                          <Left>
                            <Thumbnail source={data.img}/>
                            <Body>
                            <Text>{data.title}</Text>
                            <Text note>{data.text}</Text>
                            </Body>
                          </Left>
                        </CardItem>

                        <CardItem cardBody>
                          <Image
                              style={{
                                resizeMode: "cover",
                                width: null,
                                height: 200,
                                flex: 1
                              }}
                              source={cardImage}
                          />
                        </CardItem>

                        <CardItem style={{paddingVertical: 0}}>
                          <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("Unit", {CoursesName: data.title})}
                            >
                              {/*{CoursesName: data.title} 为需要传递的参数，CoursesName为key*/}

                              <Icon active name="ios-photos"/>
                              <Text>Unit</Text>
                            </Button>
                          </Left>
                          <Left>
                          <Button
                              transparent
                              onPress={() => this.props.navigation.navigate("MyClass", {CoursesName: data.title})}
                          >
                            <Icon active name="ios-school"/>
                            <Text>Class</Text>
                          </Button>
                          </Left>
                          <Right>
                            {/*<Text>11h ago</Text>*/}
                          </Right>
                        </CardItem>
                      </Card>
                  }
            />
          </Content>


          <Text />
          <Text />
        </Container>
    );
  }
}
