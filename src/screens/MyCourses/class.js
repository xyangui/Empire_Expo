/**
 * 我的课程里面的 CLASS 页面
 */
import React, {Component} from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  List
} from "native-base";
import styles from "./styles";

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

class MyClass extends Component {

  // _getClassNameArray(classNames: Array<string>) {
  //
  //   var listItemArray = [];
  //
  //   for (let text of classNames) {
  //
  //     let str = text;
  //     let str2 = text;
  //
  //     listItemArray.push(
  //         <ListItem>
  //           <Text>{text}</Text>
  //         </ListItem>
  //     );
  //   }
  //
  //   return listItemArray;
  // }

  render() {

    const {params} = this.props.navigation.state;

    return (
        <Container style={styles.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back"/>
              </Button>
            </Left>
            <Body>
            <Title>{params.CoursesName}</Title>
            </Body>
            <Right/>
          </Header>

          <List dataArray={datas}
                renderRow={data =>

                    <Content>

                      <ListItem itemDivider>
                        <Text>{data.title}</Text>
                      </ListItem>

                      <List dataArray={data.text}
                            renderRow={datatext =>

                                <Content>

                                  <ListItem>
                                    <Text>{datatext}</Text>
                                  </ListItem>
                                  {/*{this._getClassNameArray(datatext)}*/}

                                </Content>
                            }
                      />

                    </Content>
                }
          />

        </Container>
    );
  }
}

export default MyClass;
