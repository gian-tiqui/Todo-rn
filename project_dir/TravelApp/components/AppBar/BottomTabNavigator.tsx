import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TravelApp from '../../TravelApp';
import TodoScreen from '../../../todo/TodoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

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
        name="Travel"
        component={TravelApp}
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
