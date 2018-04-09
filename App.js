// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open App.js to st6654artur app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from "react";
import Setup from "./src/boot/setup";

import Expo from "expo";

import { StyleSheet, Text, View } from 'react-native';

/**
 * npm install native-base --save       添加 native-base         框架
 * npm i react-native-swiper --save     添加 react-native-swiper 轮播图
 * npm install --save react-navigation  添加 react-navigation    导航
 *
 *  "native-base": "^2.4.1",                框架
 *  "react-native-swiper": "^1.5.13",       轮播图
 *  "react-navigation": "^1.5.8",           导航
 *  "react-native-elements": "^1.0.0-beta3" 框架
 */
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require("./assets/fonts/Roboto.ttf"),
      'Roboto_medium': require("./assets/fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }


  render() {

    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    // return (
    //   <View style={styles.container}>
    //     <Text>Open App.js to st6654 app!</Text>
    //   </View>
    // );
    return <Setup />;
  }
}
