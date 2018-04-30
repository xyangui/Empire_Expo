/**
 *  全局变量
 *  global.gLoginEmail 用户登陆 email, 初始化为空 ''
 *  global.gIsLogin    用户是否已经登陆，初始化 false，
 *                     初始化时，本地存储与网络请求一致：true，登陆页面登陆成功，true
 */
import React, { Component } from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import getTheme from "./theme/components";
import variables from "./theme/variables/commonColor";
import { Font } from "expo";
import { Alert, LayoutAnimation } from "react-native";

import SideBar from "./screens/SideBar";
import Courses from "./screens/Courses";

import MyCourses from "./screens/MyCourses";
import Unit from "./screens/MyCourses/unit";
import MyClass from "./screens/MyCourses/class";

import Timetable from "./screens/Timetable/index";
import ClassAgenda from "./screens/Timetable/agenda";
import ClassCalendars from "./screens/Timetable/calendars";

import MyProfile from "./screens/MyProfile/index";
import Login from "./screens/Login/index";

import { fetchBodyParams } from "./screens/MyFetch";
import { getValueByKey } from './screens/SecureStore';

const Drawer = DrawerNavigator(
  {
    Courses: { screen: Courses },   // Courses 是公开页面，无需登陆状态
    MyCourses: { screen: MyCourses },

    Timetable: { screen: Timetable },

    MyProfile: { screen: MyProfile },
    Login: { screen: Login }
  },
  {
    initialRouteName: "Courses",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    Unit: { screen: Unit },
    MyClass: { screen: MyClass },

    ClassAgenda: { screen: ClassAgenda },
    ClassCalendars: { screen: ClassCalendars },

    Login: { screen: Login },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

// export default () =>
//   <Root>
//     <AppNavigator />
//   </Root>;

export default class App extends Component {

  constructor(props) {
	super(props);

    global.gLoginEmail = ''; //全局变量初始化
    global.gIsLogin = false;
  }

  async componentDidMount() {

    // this._getValue('email').then( (value) => {
	//
	 //  //请求网络对比用户名密码
    //   if(value === 'ivan@empire.edu.au'){
	//
		// this.setState({isLogin: true});
    //   } else {
	//
		// this.setState({isLogin: false});
    //   }
    // });

    const emailValue = await getValueByKey('email');
	const passwordValue = await getValueByKey('password');

	let params = {
	  user: emailValue,
	  password: passwordValue
	};

    fetchBodyParams('/login', 'POST', params)
	.then(responseJson => {

	  if (responseJson.state === 'success') {

        global.gLoginEmail = emailValue;
        global.gIsLogin = true;
	  }
	});
  }

  render() {
	return (
		<Root>

		  <AppNavigator />

        </Root>
	);
  }
}
