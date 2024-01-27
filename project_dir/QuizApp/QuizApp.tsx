import {View, StyleSheet} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

const QuizApp = () => {
  return (
    <View style={styles.container}>
      <Result />
    </View>
  );
};

export default QuizApp;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
