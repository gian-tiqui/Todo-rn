import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Index from './navigation/Index';

/*

    QUIZ APP MAIN CONTAINER

*/

const QuizApp = () => {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
};

export default QuizApp;
