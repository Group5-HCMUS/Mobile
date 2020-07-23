import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Map from '../../components/Map';
import Chat from '../../components/Chat';

const Tab = createBottomTabNavigator();
const Child = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === "Map") {
            iconName = 'google-maps';
          }
          if (route.name === 'Chat'){
              iconName = 'chat-outline';
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
      <Tab.Screen name="Map" component={Map} initialParams={{location: props.route.params.location}} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default Child;
