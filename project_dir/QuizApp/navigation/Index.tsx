import React, {Dispatch, SetStateAction, createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';

const Stack = createNativeStackNavigator();

export const ScoreContext = createContext<number>(0);
export const SetScoreContext = createContext<
  Dispatch<SetStateAction<number>> | undefined
>(undefined);

const Index = () => {
  const [score, setScore] = useState<number>(0);
  return (
    <ScoreContext.Provider value={score}>
      <SetScoreContext.Provider value={setScore}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Result"
            component={Result}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SetScoreContext.Provider>
    </ScoreContext.Provider>
  );
};

export default Index;
