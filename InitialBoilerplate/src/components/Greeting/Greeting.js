import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Greeting = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Hello React Native!</Text>
    </View>
  );
};

export default Greeting;
