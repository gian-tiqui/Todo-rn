import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {ScoreContext} from './Quiz';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Result = ({navigation}: {navigation: NavigationProp<any>}) => {
  const score = React.useContext(ScoreContext);

  const handlePressHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.floatingButton}>
          <Ionicons name="arrow-back-outline" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.result}>Results</Text>
      </View>

      <View>
        <Text style={styles.sentence}>Total correct answers</Text>
        <Text style={styles.resultText}>You scored {score} out of 10</Text>
      </View>

      <View style={styles.centerView}>
        <Text style={styles.middleViewTitle}>Your final score is</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{score}0</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.tryAgainButton} onPress={handlePressHome}>
        <Text style={styles.tryAgainButtonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#162c46',
  },
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#3a74b8',
    padding: 5,
    borderRadius: 50,
  },
  result: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#50a0ff',
  },
  resultText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    marginTop: 5,
  },
  sentence: {
    fontSize: 20,
    marginTop: 50,
    fontWeight: '400',
    color: '#fff',
  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a74b8',
    borderRadius: 50,
    height: '50%',
    marginVertical: 50,
    marginHorizontal: 5,
  },
  middleViewTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  circle: {
    borderRadius: 360,
    backgroundColor: '#50a0ff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    marginTop: 30,
  },
  circleText: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  tryAgainButton: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    borderColor: '#1A759F',
    borderWidth: 3,
  },
  tryAgainButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
