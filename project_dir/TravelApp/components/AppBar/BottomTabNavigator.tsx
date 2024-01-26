import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodoScreen from '../../../todo/TodoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Home from '../Home/Home';

const Tab = createBottomTabNavigator();

const TravelIcon = () => (
  <Ionicons name="airplane-outline" color={'grey'} size={30} />
);

const TodoIcon = () => (
  <FontAwesome6 name="note-sticky" color={'grey'} size={30} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarIcon: TravelIcon}}
      />
      <Tab.Screen
        name="Todo"
        component={TodoScreen}
        options={{tabBarIcon: TodoIcon}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
