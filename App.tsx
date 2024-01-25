import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './project_dir/TravelApp/components/AppBar/BottomTabNavigator';

const App = () => {
  return (
    <View style={styles.flegs}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  flegs: {
    flex: 1,
  },
});
