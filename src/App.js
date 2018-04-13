
import React, {Component} from "react";
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
import {Font, SecureStore} from "expo";
import {Alert, LayoutAnimation} from "react-native";
import myFetch from "./screens/MyFetch";

const Drawer = DrawerNavigator(
  {
    Courses: { screen: Courses },
    MyCourses: { screen: MyCourses },
    Login: { screen: Login },

    MyProfile: { screen: MyProfile }
  },
  {
    initialRouteName: "Courses",
	initialRouteParams: { isLogin_initRoute: true },
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} getIsLogin={() => {return true;}}/>

	// 初始路由参数： initialRouteParams: { isLogin_initRoute: true }, 只能在初始页面 Courses 内获取到
	// 而 Courses 是公开页面，无需登陆状态
	// 需要把初始登陆状态 getIsLogin={() => {return false;}} 传递给 SideBar，由 SideBar 传递给其他页面
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
	initialRouteParams: { isLogin_initRoute: true },
    headerMode: "none"
  }
);

const Drawer_Login = DrawerNavigator(
	{
	  Courses: { screen: Courses },
	  MyCourses: { screen: MyCourses },
	  Login: { screen: Login },

	  MyProfile: { screen: MyProfile }
	},
	{
	  initialRouteName: "Courses",
	  initialRouteParams: { isLogin_initRoute: false },
	  contentOptions: {
		activeTintColor: "#e91e63"
	  },
	  contentComponent: props => <SideBar {...props} getIsLogin={() => {return false;}} />
	}
);

const AppNavigator_Login = StackNavigator(
	{
	  Drawer_Login: { screen: Drawer_Login },

	  Unit: { screen: Unit },
	  MyClass: { screen: MyClass },

	  Login: { screen: Login },
	},
	{
	  initialRouteName: "Login",
	  initialRouteParams: { isLogin_initRoute: false },
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

	this.state = {
	  isLogin: true,  //默认已经登陆状态
	};
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

	myFetch('/login', 'POST', params)
	.then(responseJson => {

	  if (responseJson.state === 'success') {

		this.setState({isLogin: true});

	  } else {

		this.setState({isLogin: false});
	  }

	}).catch(error => {

	  this.setState({isLogin: false});
	});
  }

  //初始化默认已经登陆状态 isLogin: true, ，让用户也能访问 Courses 等公开页面
  //访问网络验证用户名密码，如果成功，状态不变，如果失败，跳到登陆页面，
  //如果在登陆页面，点击 Back 也能访问公开页面
  render() {
	return (
		<Root>

		  {this.state.isLogin ?

			   <AppNavigator />
			  :
			  <AppNavigator_Login />
		  }

          {/*<AppNavigator />*/}
        </Root>
	);
  }
}
