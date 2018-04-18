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

import { Font } from 'expo';
import Header from '../HeaderMenu';

import styles from './style';
import stylesContainer from '../styles';

import {fetchNoProgress} from "../MyFetch";
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
	  datas: null,
	};
  }

  async componentDidMount() {


    let dd = gLoginEmail;
    let dd3 = gIsLogin;


    let params = {
    	email: gLoginEmail
    };

    fetchNoProgress('/studentCourse', 'POST', params)
      .then(responseJson => {

        let surname = responseJson.surname;
        let surname2 = responseJson.first_name;

        let courses = responseJson.course-info.courses;
      	let courses = responseJson.course-info.courses;
      	let courseinfo = responseJson.course-info;

        this.setState({
          isGetData: true,
          courses: responseJson.course-info.courses,
        });

      });
  }

  render() {
	return (

		!this.state.isLogin ?
			this.props.navigation.navigate("Login")

			:

			<Container style={stylesContainer.container}>

			  <Header navig={this.props.navigation.navigate} title='My Courses'/>

			  <Content padder>




				<List dataArray={datas}
					  renderRow={data =>

						  <Card style={styles.mb}>
							<CardItem>
							  <Left>
								<Thumbnail source={logo}/>
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


			  <Text/>
			  <Text/>
			</Container>

	);
  }
}
