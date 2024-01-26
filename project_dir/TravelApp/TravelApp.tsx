import {View, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/AppBar/BottomTabNavigator';

const TravelApp = () => {
  return (
    <View style={styles.flegs}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default TravelApp;

const styles = StyleSheet.create({
  flegs: {
    flex: 1,
  },
});
