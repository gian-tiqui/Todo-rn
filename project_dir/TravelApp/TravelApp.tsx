import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header/Header';

// e

const URI =
  'https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/12/Hand-Luggage-Only-10-5.jpg?w=1600&ssl=1';

const TravelApp = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>hi</Text>
        <Image source={{uri: URI}} style={styles.image} />
      </View>
    </>
  );
};

export default TravelApp;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 100,
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 10,
  },
});
