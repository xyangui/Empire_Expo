import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});