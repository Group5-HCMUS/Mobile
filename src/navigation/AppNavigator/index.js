import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeNavigator from './HomeNavigator';
import { HomeNavigatorScreen } from '../../global/constants/screen-name';
const Tab = createBottomTabNavigator();
const RootTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === "Home") {
            iconName = 'home';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1565c0',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
        },
      }}
      navigationOptions={{
        header: {
          visible: true,
        },
      }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
    </Tab.Navigator>
  );
};

export default RootTab;
