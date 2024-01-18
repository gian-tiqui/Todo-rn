import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.header}>
      <Ionicons name="reorder-three-outline" color={'black'} size={50} />
      <Text style={styles.text}>Header</Text>
      <AntDesign name="bells" color={'black'} size={35} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 10,
    flexDirection: 'row',
    gap: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
});
