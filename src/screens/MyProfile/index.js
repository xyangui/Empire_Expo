
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Avatar, ListItem } from 'react-native-elements';
import { Container, List } from 'native-base';

import Icon from './Icon';
import InfoText from './InfoText';

import Header from '../HeaderMenu';
import stylesContainer from '../styles';

const avatar = require('../../../assets/user-student.png');

export default class MyProfile extends Component {
  // static propTypes = {
  //   avatar: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   navigation: PropTypes.object.isRequired,
  //   emails: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         email: PropTypes.string.isRequired,
  //       })
  //   ).isRequired,
  // }

  onPressOptions = () => {
    //this.props.navigation.navigate('options');
  };

  render() {
    //const { avatar, name, emails: [firstEmail] } = this.props
    return (

        <Container style={stylesContainer.container}>

          <Header navig={this.props.navigation.navigate} title='My Profile'/>

          <ScrollView style={styles.scroll}>
            <View style={styles.userRow}>
              <View style={styles.userImage}>
                <Avatar
                    large
                    rounded
                    source={avatar}
                />
              </View>
              <View>
                <Text style={{fontSize: 16}}>Jason</Text>
                <Text
                    style={{
                      color: 'gray',
                      fontSize: 16,
                    }}
                >
                  xyangui@163.com
                </Text>
              </View>
            </View>

            <InfoText text="Account"/>

            <List containerStyle={styles.listContainer}>
              <ListItem
                  topDivider
                  title="Push Notifications"
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{
                          backgroundColor: '#FFADF2',
                        }}
                        icon={{
                          type: 'material',
                          name: 'notifications',
                        }}
                    />
                  }
                  bottomDivider
              />
              <ListItem
                  title="Currency"
                  rightTitle="USD"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{backgroundColor: '#FAD291'}}
                        icon={{
                          type: 'font-awesome',
                          name: 'credit-card',
                        }}
                    />
                  }
                  bottomDivider
              />
              <ListItem
                  title="Location"
                  rightTitle="New York"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{backgroundColor: '#57DCE7'}}
                        icon={{
                          type: 'material',
                          name: 'place',
                        }}
                    />
                  }
                  bottomDivider
              />
              <ListItem
                  title="Language"
                  rightTitle="English"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{backgroundColor: '#FEA8A1'}}
                        icon={{
                          type: 'material',
                          name: 'language',
                        }}
                    />
                  }
                  bottomDivider
              />
            </List>

            <InfoText text="More"/>

            <View containerStyle={styles.listContainer}>
              <ListItem
                  topDivider
                  title="About US"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{backgroundColor: '#A4C8F0'}}
                        icon={{
                          type: 'ionicon',
                          name: 'md-information-circle',
                        }}
                    />
                  }
                  bottomDivider
              />
              <ListItem
                  title="Terms and Policies"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{backgroundColor: '#C6C7C6'}}
                        icon={{
                          type: 'entypo',
                          name: 'light-bulb',
                        }}
                    />
                  }
                  bottomDivider
              />
              <ListItem
                  title="Share our App"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{
                          backgroundColor: '#C47EFF',
                        }}
                        icon={{
                          type: 'entypo',
                          name: 'share',
                        }}
                    />
                  }
                  bottomDivider
              />
              <ListItem
                  title="Rate Us"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{
                          backgroundColor: '#FECE44',
                        }}
                        icon={{
                          type: 'entypo',
                          name: 'star',
                        }}
                    />
                  }
                  bottomDivider
              />
              <ListItem
                  title="Send FeedBack"
                  onPress={() => this.onPressOptions()}
                  containerStyle={styles.listItemContainer}
                  leftIcon={
                    <Icon
                        containerStyle={{
                          backgroundColor: '#00C001',
                        }}
                        icon={{
                          type: 'materialicon',
                          name: 'feedback',
                        }}
                    />
                  }
                  bottomDivider
              />
            </View>
          </ScrollView>

        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listContainer: {
    marginBottom: 0,
    marginTop: 0,
    borderTopWidth: 0,
  },
  listItemContainer: {
    height: 50,
    borderBottomColor: '#ECECEC',
  },
});
