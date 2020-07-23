import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AuthNavigatorScreen,
  HomeParentScreen,
  HomeChildScreen,
  AppNavigatorScreen,
  ChildScreen
} from "../global/constants/screen-name";

import RootTab from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import HomeChild from "../screens/Home/HomeChild";
import HomeParent from "../screens/Home/HomeParent";
import { navigationRef } from "../core/helpers/root-navigation";
import AppNavigator from "./AppNavigator";
import Child from "../screens/Child";
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator mode="modal" initialRouteName={AuthNavigator}>
        <Stack.Screen
          name={AuthNavigatorScreen}
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={AppNavigatorScreen}
          component={AppNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ChildScreen}
          component={Child}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
