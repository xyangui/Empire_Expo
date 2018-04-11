/**
 * 我的课程里面的 UNIT 页面
 */
import React, {Component} from 'react';

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  List
} from 'native-base';

import Header from '../HeaderGoback';

import styles from './style';
import stylesContainer from '../styles.js';

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

export default class Unit extends Component {

  render() {

	// 接收传递的参数
	const {params} = this.props.navigation.state;

	return (
		<Container style={stylesContainer.container}>

		  <Header navig={this.props.navigation} title={params.CoursesName}/>

		  <Content padder>
			<List
				dataArray={datas}
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
