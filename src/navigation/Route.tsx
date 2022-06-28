import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './stack/MainStack';

const Route = () => {
  return <NavigationContainer>{MainStack()}</NavigationContainer>;
};

export default Route;
