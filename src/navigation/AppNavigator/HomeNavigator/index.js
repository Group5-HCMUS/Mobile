import React, { useContext, useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeChild from "../../../screens/Home/HomeChild";
import HomeParent from "../../../screens/Home/HomeParent";
import {
  HomeParentScreen,
  HomeChildScreen,
} from "../../../global/constants/screen-name";
import { AuthenticationContext } from "../../../providers/authentication-provider";

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: "#fff",
  },
  headerTintColor: "black",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
};
const HomeNavigator = () => {
  const authContext = useContext(AuthenticationContext);
  const [checkParent, setCheckParent] = useState(false);
  useEffect(() => {
    if(authContext.state.userInfo.parent){
        setCheckParent(true)
    }
  }, [authContext.state.userInfo.parent]);
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={checkParent === true ? HomeParentScreen : HomeChildScreen}
        component={checkParent === true ? HomeParent : HomeChild}
        options={{ title: checkParent === true ? "Home Parent" : "Home Child" }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
