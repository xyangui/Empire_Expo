
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    height: 34,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 5,
    width: 34,
  },
});

const BaseIcon = ({ containerStyle, icon }) => (
  <View style={[styles.container, containerStyle]}>
    <Icon
      size={24}
      color="white"
      type="material"
      name="notifications"
      {...icon}
    />
  </View>
);

BaseIcon.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  icon: PropTypes.object,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

BaseIcon.defaultProps = {
  containerStyle: {},
  icon: {},
  iconStyle: {},
};

export default BaseIcon;
