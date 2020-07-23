import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeNavigatorScreen } from '../../global/constants/screen-name';
import HomeNavigator from './HomeNavigator';

const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name={HomeNavigatorScreen} component={HomeNavigator}/>
    </AppStack.Navigator>
  );
};

export default AppNavigator;
