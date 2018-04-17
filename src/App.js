/**
 *  全局变量
 *  global.gLoginEmail 用户登陆 email ，可能为空 ''
 *  global.gIsLogin    用户是否已经登陆，默认 false，
 *                     初始化时，本地存储与网络请求一致：true，登陆页面登陆成功，true
 */
import React, { Component } from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./screens/SideBar";
import Courses from "./screens/Courses";

import MyCourses from "./screens/MyCourses";
import Unit from "./screens/MyCourses/unit";
import MyClass from "./screens/MyCourses/class";

import Login from "./screens/Login/index";
import MyProfile from "./screens/MyProfile/index";
import getTheme from "./theme/components";
import variables from "./theme/variables/commonColor";
import { Font, SecureStore } from "expo";
import { Alert, LayoutAnimation } from "react-native";
import { fetchNoProgress } from "./screens/MyFetch";

const Drawer = DrawerNavigator(
  {
    Courses: { screen: Courses },   // Courses 是公开页面，无需登陆状态
    MyCourses: { screen: MyCourses },

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
    MyClass: {screen: MyClass },

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

    global.gLoginEmail = '';
    global.gIsLogin = false;
  }

  _getValue = async key => {
	try {
	  const fetchedValue = await SecureStore.getItemAsync(key, {});
	  // Alert.alert('Success!', 'Fetched value: ' + fetchedValue, [
	  // { text: 'OK', onPress: () => {} },
	  // ]);

	  return fetchedValue;
	} catch (e) {
	  Alert.alert('Error!', e.message, [{ text: 'OK', onPress: () => {} }]);
	}
  };

  async componentWillMount() {

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

    const emailValue = await this._getValue('email');
	const passwordValue = await this._getValue('password');

	let params = {
	  user: emailValue,
	  password: passwordValue
	};

    fetchNoProgress('/login', 'POST', params)
	.then(responseJson => {

	  if (responseJson.state === 'success') {

        global.gLoginEmail = emailValue;
        global.gIsLogin = true;
	  }
	});
  }

  //初始化默认已经登陆状态 isLogin: true, ，让用户也能访问 Courses 等公开页面
  //访问网络验证用户名密码，如果成功，状态不变，如果失败，跳到登陆页面，
  //如果在登陆页面，点击 Back 也能访问公开页面
  render() {
	return (
		<Root>

		  <AppNavigator />

        </Root>
	);
  }
}
