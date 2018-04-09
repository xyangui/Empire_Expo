/**
 * 我的课程里面的 UNIT 页面
 */
import React, {Component} from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  Right,
  List
} from "native-base";
import styles from "./styles";

const datas = [
  {
    title: "Unitname1",
    text: "This is a introduction on unitname1. This is a introduction on unitname1."
  },
  {
    title: "Unitname2",
    text: "This is a introduction on unitname2. This is a introduction on unitname2."
  },
  {
    title: "Unitname3",
    text: "This is a introduction on unitname3. This is a introduction on unitname3."
  }
];

class Unit extends Component {

  render() {

    // 接收传递的参数
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

          <Content padder>
            <List dataArray={datas}
                  renderRow={data =>

                      <Card style={styles.mb}>
                        <CardItem header>
                          <Text>{data.title}</Text>
                        </CardItem>
                        <CardItem>
                          <Body>
                          <Text>
                            {data.text}
                          </Text>
                          </Body>
                        </CardItem>
                        {/*<CardItem footer>*/}
                        {/*<Text>GeekyAnts</Text>*/}
                        {/*</CardItem>*/}
                      </Card>

                  }
            />
          </Content>

        </Container>
    );
  }
}

export default Unit;
