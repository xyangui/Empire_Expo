import React, {Component} from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

import MySwiper from "./swiper/index";
import {Grid, Row} from "react-native-easy-grid";

const datas = [
  {
    img: require("../../../assets/logo_naati.png"),
    text: "NATTI",
    note: "This is NATTI!"
  },
  {
    img: require("../../../assets/logo_cclt.jpg"),
    text: "CCLT",
    note: "This is CCLT!"
  },
  {
    img: require("../../../assets/logo_pte.jpg"),
    text: "PTE",
    note: "This is PTE!"
  }
];

class Courses extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body>
          <Title>Courses</Title>
          </Body>
          <Right/>
        </Header>

        {/*<Content style={{flex: 1}}>*/}
        <Grid>
          <Row size={3}>
            {/*轮播图*/}
            <MySwiper/>
          </Row>

          <Row size={4}>
            {/*height={500}，轮播图和下面列表，上下高度看起来合适，不知如何规范调整？*/}
            <List
              dataArray={datas}
              renderRow={data =>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square size={55} source={data.img}/>
                  </Left>
                  <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={1} note>
                    {data.note}
                  </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>}
            />
          </Row>

        </Grid>
        {/*</Content>*/}
      </Container>
    );
  }
}

export default Courses;
