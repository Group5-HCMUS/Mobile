import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Login';
import { LoginScreen } from '../../global/constants/screen-name';

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={LoginScreen} component={Login}/>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
