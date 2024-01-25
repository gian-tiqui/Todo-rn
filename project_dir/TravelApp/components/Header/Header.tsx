import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="menuunfold" color={'black'} size={35} />
        <Text style={styles.text}>Travel App</Text>
        <AntDesign name="bells" color={'black'} size={35} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
});
