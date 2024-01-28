import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MathMagic = () => {
  const [cards, setCards] = React.useState<Array<number[]>>([[]]);
  return (
    <View>
      <Text>MathMagic</Text>
    </View>
  );
};

export default MathMagic;

const styles = StyleSheet.create({});
