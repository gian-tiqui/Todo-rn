import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';

type RenderItemProps = {
  uri: string;
  text: string;
  text2: string;
};

const Card = ({uri, text, text2}: RenderItemProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={{uri: uri}} style={styles.cardImage}>
        <View style={styles.cardFooter}>
          <Text style={styles.overlayText1}>{text}</Text>
          <Text style={styles.overlayText2}>{text2}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 220,
    height: 270,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  overlayText1: {
    color: '#000',
    fontSize: 21,
    fontWeight: 'bold',
  },
  overlayText2: {
    color: '#000',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Card;
