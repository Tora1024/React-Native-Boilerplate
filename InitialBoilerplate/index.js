import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Shared/Header/Header';
import Greeting from './src/components/Greeting/Greeting';

const App = () => (
  <View>
    <Header headerText={'First Mobile App'} />
    <Greeting />
  </View>
);

AppRegistry.registerComponent('InitialBoilerplate', () => App);
