import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const MathMagic = () => {
  const [cards, setCards] = useState<Array<number[]>>([]);

  useEffect(() => {
    setCards([
      //SET A
      [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
      //Set B
      [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30],
      //Set C
      [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30],
      //Set D
      [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30],
      //Set E
      [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    ]);
  }, []);

  return (
    <View>
      <Text>MathMagic</Text>
    </View>
  );
};

export default MathMagic;

const styles = StyleSheet.create({});
