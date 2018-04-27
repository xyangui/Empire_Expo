/**
 * 我的课程里面的 UNIT 页面
 */
import React, {Component} from 'react';

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  List
} from 'native-base';

import Header from '../HeaderGoback';

import styles from './style';
import stylesContainer from '../styles.js';

import {fetchUrlParams} from "../MyFetch";
import Loading from '../Loading';

// const datas = [
//   {
//     title: "Unitname1",
//     text: "This is a introduction on unitname1. This is a introduction on unitname1."
//   },
//   {
//     title: "Unitname2",
//     text: "This is a introduction on unitname2. This is a introduction on unitname2."
//   },
//   {
//     title: "Unitname3",
//     text: "This is a introduction on unitname3. This is a introduction on unitname3."
//   }
// ];

export default class Unit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isGetData: false,
      units: null,
    };
  }

  async componentDidMount() {

    const {params} = this.props.navigation.state;

    let urlParams = {
      email: gLoginEmail,
      courseCode: params.CourseCode,
    };

    fetchUrlParams('/studentUnit', 'GET', urlParams)
      .then(responseJson => {

        // {
        //   "email": "ivan@empire.edu.au",
        //   "firstName": "ivan",
        //   "surname": "ivan",
        //   "campus": "melbourne",
        //   "courseCode": "EAP001",
        //   "data":
        //   {
        //     "units":
        //     [
        //       {
        //         "unit_name": "business",
        //         "unit_code": "67063ii",
        //         "unit_description": ""
        //       },
        //       {
        //         "unit_name": "EAP unit",
        //         "unit_code": "zeapunit001",
        //         "unit_description": "eap001 unit description update"
        //       },
        //       {
        //         "unit_name": "unit2",
        //         "unit_code": "unit2",
        //         "unit_description": "qwe"
        //       },
        //       {
        //         "unit_name": "business",
        //         "unit_code": "67063ii",
        //         "unit_description": ""
        //       }
        //     ]
        //   }
        // }

        this.setState({
          isGetData: true,
          units: responseJson.data.units,
        });

      });
  }

  render() {

    // 接收传递的参数
    const {params} = this.props.navigation.state;

    let {units} = this.state;

    return (
      <Container style={stylesContainer.container}>

        <Header navig={this.props.navigation} title={params.CoursesName}/>

        <Content padder>

          {this.state.isGetData ?

            <List
              dataArray={units}
              renderRow={unit =>

                <Card style={styles.mb}>
                  <CardItem header>
                    <Text>{unit.unit_name}</Text>
                  </CardItem>
                  <CardItem>
                    <Body>
                    <Text>
                      {unit.unit_description}
                    </Text>
                    </Body>
                  </CardItem>
                  {/*<CardItem footer>*/}
                  {/*<Text>GeekyAnts</Text>*/}
                  {/*</CardItem>*/}
                </Card>
              }
            />

            :
            <Loading/>
          }

        </Content>

      </Container>
    );
  }
}
