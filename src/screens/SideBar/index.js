
import React, { Component } from 'react';
import { Image } from 'react-native';

import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from 'native-base';

import styles from './style';

/**
 * 更换图标网址
 * https://ionicframework.com/docs/ionicons/
 */

//const drawerCover = require("../../../assets/drawer-cover.jpeg");
//const drawerImage = require("../../../assets/logo-kitchen-sink.png");

const coverLogo = require("../../../assets/cover_logo.jpeg");
const empireLogo = require("../../../assets/empire_logo.png");

const datas = [
  {
    name: "Courses",
    route: "Courses",
    icon: "logo-buffer",
    bg: "#C5F442"
  },
  {
      name: "My Courses",
      route: "MyCourses",
      icon: "ios-book-outline",
      bg: "#13b9f4",
      types: "4"
  },

  {
    name: "My Profile",
    route: "MyProfile",
    icon: "ios-person",
    bg: "#477EEA",
    types: "8"
  },
  {
    name: "Login",
    route: "Login",
    icon: "ios-log-in",
    bg: "#DA4437"
  }
];

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };

    //接收参数
    this.state = {
	  isLogin_sidebar: this.props.getIsLogin()
	}
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >

          {/*<Image source={drawerCover} style={styles.drawerCover} />*/}
          {/*<Image square style={styles.drawerImage} source={drawerImage} />*/}

          <Image source={coverLogo} style={styles.drawerCover} />

          <Image source={empireLogo} square style={styles.drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route, {isLogin: this.state.isLogin_sidebar})}
              >

				{/*{isLogin: this.state.isLogin_sidebar} 传递参数*/}

                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} News`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}
