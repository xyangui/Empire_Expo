/**
 * 我的课程页面，只有登陆后可以访问
 */
import React, {Component} from 'react';
import {Image, Alert, LayoutAnimation} from 'react-native';

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

import {Font} from 'expo';
import Header from '../HeaderMenu';

import styles from './style';
import stylesContainer from '../styles';

import {fetchNoProgressUrl} from "../MyFetch";
import Loading from '../Loading';

const cardImage = require("../../../assets/mycourse_cover.png");
const logo = require("../../../assets/logo_cclt.jpg");

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

  constructor(props) {
    super(props);

    //const {params} = this.props.navigation.state;

    this.state = {
      isLogin: gIsLogin,
      isGetData: false,
      courses: null,
    };
  }

  async componentDidMount() {

    let params = {
      //email: gLoginEmail
      email: 'ivan@empire.edu.au'
    };

    fetchNoProgressUrl('/studentCourse', 'GET', params)
      .then(responseJson => {

        // {
        //   "email": "ivan@empire.edu.au",
        //   "firstName": "ivan",
        //   "surname": "ivan",
        //   "campus": "melbourne",
        //   "courseInfo": {
        //   "courses": [
        //     {
        //       "course_code": "EAP001",
        //       "cricos_code": "095080J",
        //       "course_name": "English for Academic Purposes (EAP) Intermediate to Advanced",
        //       "course_description": ""
        //     },
        //     {
        //       "course_code": "EAP001",
        //       "cricos_code": "095080J",
        //       "course_name": "English for Academic Purposes (EAP) Intermediate to Advanced",
        //       "course_description": ""
        //     }
        //   ],
        // }
        // }

        this.setState({
          isGetData: true,
          courses: responseJson.courseInfo.courses,
        });

      });
  }

  render() {

    let {courses} = this.state;

    return (

      !this.state.isLogin ?
        this.props.navigation.navigate("Login")

        :

        <Container style={stylesContainer.container}>

          <Header navig={this.props.navigation.navigate} title='My Courses'/>

          <Content padder>

            {this.state.isGetData ?

              <List
                dataArray={courses}
                renderRow={course =>

                  <Card style={styles.mb}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={logo}/>
                        <Body>
                        <Text>{course.course_code}</Text>
                        <Text note>{course.course_name}</Text>
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
                          onPress={() => this.props.navigation.navigate("Unit", {CoursesName: course.course_code})}
                        >
                          {/*{CoursesName: data.title} 为需要传递的参数，CoursesName为key*/}

                          <Icon active name="ios-photos"/>
                          <Text>Unit</Text>
                        </Button>
                      </Left>
                      <Left>
                        <Button
                          transparent
                          onPress={() => this.props.navigation.navigate("MyClass", {CoursesName: course.course_code})}
                        >
                          <Icon active name="ios-school"/>
                          <Text>Lesson</Text>
                        </Button>
                      </Left>
                      <Right>
                        {/*<Text>11h ago</Text>*/}
                      </Right>
                    </CardItem>
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
