
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

const AppNavigator_Login = StackNavigator(
	{
	  Drawer: { screen: Drawer },

	  Unit: { screen: Unit },
	  MyClass: {screen: MyClass },

	  Login: { screen: Login },
	},
	{
	  initialRouteName: "Login",
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
	  isLogin: false,
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

	  if (responseJson.state === 'successful') {

		this.setState({isLogin: true});

	  } else {

		this.setState({isLogin: false});
	  }

	}).catch(error => {

	  this.setState({isLogin: false});
	});
  }

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
