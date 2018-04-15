/**
 * Courses 公开页面，无论是否登陆，都可以访问
 */
import React, {Component} from 'react';

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
import MySwiper from './swiper/index';

import Header from '../HeaderMenu';
import stylesContainer from '../styles.js';

const datas = [
  {
    img: require('../../../assets/logo_naati.png'),
    text: "NATTI",
    note: "This is NATTI!"
  },
  {
    img: require('../../../assets/logo_cclt.jpg'),
    text: "CCLT",
    note: "This is CCLT!"
  },
  {
    img: require('../../../assets/logo_pte.jpg'),
    text: "PTE",
    note: "This is PTE!"
  }
];

export default class Courses extends Component {
  render() {
    return (
      <Container style={stylesContainer.container}>

        <Header navig={this.props.navigation.navigate} title='Courses'/>

        {/*<Content style={{flex: 1}}>*/}
        <Grid>
          <Row size={3}>
            {/*轮播图*/}
            <MySwiper/>
          </Row>

          <Row size={4}>
            <List
              dataArray={datas}
              renderRow={data =>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square size={55} source={data.img}/>
                  </Left>
                  <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                  </Body>
                  {/*<Right>*/}
                    {/*<Button transparent>*/}
                      {/*<Text>View</Text>*/}
                    {/*</Button>*/}
                  {/*</Right>*/}

                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>}
            />
          </Row>

        </Grid>
        {/*</Content>*/}
      </Container>
    );
  }
}
