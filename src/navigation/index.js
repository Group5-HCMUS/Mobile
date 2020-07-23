import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  AuthNavigatorScreen,
  RootTabScreen,
  HomeParentScreen,
  HomeChildScreen,
} from "../global/constants/screen-name";

import RootTab from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import HomeChild from "../screens/Home/HomeChild";
import HomeParent from "../screens/Home/HomeParent";
import { navigationRef } from "../core/helpers/root-navigation";
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name={AuthNavigatorScreen}
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RootTabScreen}
          component={RootTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={HomeChildScreen}
          component={HomeChild}
          options={{ title: "Home Child" }}
        />
        <Stack.Screen
          name={HomeParentScreen}
          component={HomeParent}
          options={{ title: "Home Parent" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
