/**
 * Courses 公开页面，无论是否登陆，都可以访问
 */
import React, {Component} from 'react';
import {Alert, LayoutAnimation, StyleSheet, View} from 'react-native';

import {
  Container,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from 'native-base';

import {Grid, Row} from 'react-native-easy-grid';

import Header from '../HeaderMenu';
import MySwiper from './swiper/index';

import gStyles from '../styles.js';
import {fetchGetNoParams} from '../MyFetch';
import Loading from '../Loading';

// const datas = [
//   {
// 	img: require('../../../assets/logo_naati.png'),
// 	text: "NATTI",
// 	note: "This is NATTI!"
//   },
//   {
// 	img: require('../../../assets/logo_cclt.jpg'),
// 	text: "CCLT",
// 	note: "This is CCLT!"
//   },
//   {
// 	img: require('../../../assets/logo_pte.jpg'),
// 	text: "PTE",
// 	note: "This is PTE!"
//   }
// ];

const logo = require('../../../assets/logo_cclt.jpg');

export default class Courses extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isGetData: false,
      courses: null,
    };
  }

  async componentDidMount() {

    fetchGetNoParams('/allCourses')
      .then(responseJson => {

        this.setState({
          isGetData: true,
          courses: responseJson.data,
        });

      });
  }

  render() {

    let {courses} = this.state;

    return (
      <Container style={gStyles.container}>

        <Header navig={this.props.navigation.navigate} title='Courses'/>

        {/*<Content style={{flex: 1}}>*/}
        <Grid>
          <Row size={3}>
            {/*轮播图*/}
            <MySwiper/>
          </Row>

          <Row size={4}>

            {this.state.isGetData ?

              <List
                dataArray={courses}
                renderRow={course =>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail square size={55} source={logo}/>
                    </Left>
                    <Body>
                    <Text>
                      {course.code}
                    </Text>
                    <Text numberOfLines={1} note>
                      {course.name}
                    </Text>
                    </Body>

                    <Right>
                      <Icon name="arrow-forward"/>
                    </Right>
                  </ListItem>}
              />
              :
              <Loading/>
            }

          </Row>

        </Grid>
        {/*</Content>*/}
      </Container>
    );
  }
}

// <View style={styles.bgImage}>
// <Text>Loading...</Text>
// </View>

// const styles = StyleSheet.create({
//   bgImage: {
// 	flex: 1,
// 	top: 0,
// 	left: 0,
// 	justifyContent: 'center',
// 	alignItems: 'center',
//   },
// });
