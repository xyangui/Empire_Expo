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

import {Font, SecureStore} from 'expo';
import Header from '../HeaderMenu';

import styles from './style';
import stylesContainer from '../styles';
import {fetchNoProgress} from "../MyFetch";

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


  constructor(props) {
	super(props);

	const {params} = this.props.navigation.state;

	this.state = {
	  isLogSidebar: params.isLogin
	};

    let email33 = gLoginEmail;

    global.gLoginEmail = 'aaa88990';

	let email334 = gLoginEmail;
    let email34 = gLoginEmail;
  }

  // async componentDidMount() {
  //全局变量
  //   let params = {
  //   	email: gLoginEmail
  //   };
  //
  //   fetchNoProgress('/studentCourse', 'POST', params)
  //     .then(responseJson => {
  //
  //       LayoutAnimation.easeInEaseOut();
  //       this.setState({
  //         isLoading: false
  //       });//去掉旋转进度条
  //
  //       if (responseJson.state === 'success') {
  //
  //         //存储用户名密码
  //         this._setValue('email', email);
  //         this._setValue('password', password);
  //         //登陆成功跳页
  //         //Alert.alert('successful3334');
  //         this.props.navigation.navigate('Courses');
  //
  //       } else {
  //
  //         //登陆失败弹出对话框
  //         Alert.alert('Wrong email or password !');
  //       }
  //
  //     }).catch(error => {
  //
  //     this.setState({
  //       isLoading: false
  //     });//去掉旋转进度条
  //
  //     Alert.alert('Login fail !');
  //   });
  // }

  render() {
	return (

		!this.state.isLogSidebar ?
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
