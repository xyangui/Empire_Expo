/**
 * 我的课程里面的 CLASS 页面
 */
import React, {Component} from 'react';
import {View} from 'react-native';

import {
  Container,
  Content,
  ListItem,
  Text,
  List,
  Icon,
  Body,
  Right
} from 'native-base';

import Header from '../HeaderGoback';
import stylesContainer from '../styles.js';

import {fetchNoProgress} from "../MyFetch";
import Loading from '../Loading';

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

  constructor(props) {
    super(props);

    this.state = {
      isGetData: false,
      lessons: null,
    };
  }

  async componentDidMount() {

    let params = {
      email: gLoginEmail
    };

    fetchNoProgress('/studentLesson', 'POST', params)
      .then(responseJson => {

        // {
        //   "email": "ivan@empire.edu.au",
        //   "firstName": "ivan",
        //   "surname": "ivan",
        //   "campus": "melbourne",
        //   "unitInfo": {
        //     "classes": [
        //       {
        //         "lesson_code": "testclass2",
        //         "lesson_name": "test class 2",
        //         "lesson_description": ""
        //       },
        //       {
        //         "lesson_code": "eapunit001classcode",
        //         "lesson_name": "eapunit001class",
        //         "lesson_description": "eapunit001 class description"
        //       }
        //     ],
        //   }
        // }

        this.setState({
          isGetData: true,
          lessons: responseJson.unitInfo.classes,
        });

      });
  }

  render() {

    const {params} = this.props.navigation.state;

    let {lessons} = this.state;

    return (
      <Container style={stylesContainer.container}>

        <Header navig={this.props.navigation} title={params.CoursesName}/>

        {this.state.isGetData ?

          <List
            dataArray={datas}
            renderRow={data =>

              <View>
                <ListItem itemDivider>
                  <Text>{data.title}</Text>
                </ListItem>

                <List
                  dataArray={data.text}
                  renderRow={datatext =>

                    <ListItem>
                      <Body>
                      <Text>{datatext}</Text>
                      </Body>
                      <Right>
                        <Icon name="arrow-forward"/>
                      </Right>
                    </ListItem>
                  }
                />
              </View>
            }
          />

          :  //不加 Content 时，<Loading/> 在垂直水平方向都局中
          <Content padder>
            <Loading/>
          </Content>

        }

      </Container>
    );
  }
}


