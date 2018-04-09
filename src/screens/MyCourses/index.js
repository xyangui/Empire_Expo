/**
 * 我的课程页面
 */
import React, {Component} from "react";
import {Image} from "react-native";
import {
  Container,
  Header,
  Title,
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
import styles from "./styles";

const cardImage = require("../../../assets/mycourse_cover.png");

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

class MyCourses extends Component {
  render() {
    return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button
                  transparent
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon name="menu"/>
              </Button>
            </Left>
            <Body>
            <Title>My Courses</Title>
            </Body>
            <Right/>
          </Header>


          <Content padder>
            <List dataArray={datas}
                  renderRow={data =>

                      <Card style={styles.mb}>
                        <CardItem>
                          <Left>
                            <Thumbnail source={data.img}/>
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
                          <Body>
                          <Button
                              transparent
                              onPress={() => this.props.navigation.navigate("MyClass", {CoursesName: data.title})}
                          >
                            <Icon active name="ios-school"/>
                            <Text>Class</Text>
                          </Button>
                          </Body>
                          <Right>
                            {/*<Text>11h ago</Text>*/}
                          </Right>
                        </CardItem>
                      </Card>
                  }
            />
          </Content>


          <Text />
          <Text />
        </Container>
    );
  }
}

export default MyCourses;
