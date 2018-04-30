import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import {Container} from 'native-base';
import Header from '../HeaderGoback';
import {Calendar} from 'react-native-calendars';

import gStyles from "../styles";
import {fetchGetNoParams} from '../MyFetch';
import Loading from '../Loading';

const datas = {
  '2018-04-30': {selected: true},
  '2018-05-01': {selected: true},
};



export default class ClassCalendars extends Component {

  constructor(props) {
    super(props);
    //this.state = {};
    //this.onDayPress = this.onDayPress.bind(this);

    this.state = {
      isGetData: false,
      lessonDates: null,
    };
  }

  async componentDidMount() {

    //模拟网络请求
    fetchGetNoParams('/allCourses')
      .then(responseJson => {

        const dates = ['2018-04-30', '2018-05-01', '2018-05-03'];

        //收到的数组 ['2018-04-30', '2018-05-01'] 变换成
        // { '2018-04-30': {selected: true},
        //   '2018-05-01': {selected: true}, }
        let obj = Object.create(null);
        for(let date of dates){
          obj[date] = {selected: true};
        }

        // 下面这样转换，输出的是 Array
        // let array = dates.map(function (date) {
        //
        //   let obj = Object.create(null);
        //   obj[date] = {selected: true};
        //
        //   return obj;
        // });

        this.setState({
          isGetData: true,
          lessonDates: obj,
        });

      });
  }

  render() {

    let {lessonDates} = this.state;

    let test = datas;
    //lessonDates = datas;

    return (
      <Container style={gStyles.container}>

        <Header navig={this.props.navigation} title='Timetable'/>

        <ScrollView style={styles.container}>
          <Text style={styles.text}>There are classes at marked day</Text>


          {this.state.isGetData ?

          <Calendar
            style={styles.calendar}

            hideExtraDays
            minDate={Date()}

            markedDates={
              lessonDates
            }
            hideArrows={false}
          />

            :
            <Loading/>
          }

        </ScrollView>
      </Container>
    );
  }

  // onDayPress(day) {
  //   this.setState({
  //     selected: day.dateString
  //   });
  // }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
