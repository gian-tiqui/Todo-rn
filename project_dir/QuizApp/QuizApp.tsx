import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Index from './navigation/Index';

const QuizApp = () => {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
};

export default QuizApp;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
