import {Image, Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../component/Title';
import {NavigationProp} from '@react-navigation/native';

const Home = ({navigation}: {navigation: NavigationProp<any>}) => {
  const handlePressStart = () => {
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/6451/6451013.png',
          }}
          style={styles.banner}
          resizeMode="contain"
        />
        <Title />
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.middleText}>Let's Play!</Text>
        <Text style={styles.middleText2}>Start the quiz by pressing start</Text>
      </View>
      <View style={styles.bannerContainer}>
        <TouchableOpacity onPress={handlePressStart} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.exitButton}>
          <Text style={styles.exitButtonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#21436b',
  },
  banner: {
    height: 120,
    width: 120,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 20,
    flex: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  middleText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  middleText2: {
    fontSize: 25,
    fontWeight: '400',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
  },
  exitButton: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    borderColor: '#1A759F',
    borderWidth: 3,
  },
  exitButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
