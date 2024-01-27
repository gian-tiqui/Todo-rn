import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

type SampleData = {
  id: string;
  uri: any;
  text: string;
  text2: string;
  hearts: boolean;
};

type RenderItemProps = {
  id: string;
  uri: string;
  text: string;
  text2: string;
  handleHeartPressed: any;
  data: SampleData[];
};

const Card = ({
  id,
  uri,
  text,
  text2,
  handleHeartPressed,
  data,
}: RenderItemProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={{uri: uri}} style={styles.cardImage}>
        <View style={styles.cardFooter}>
          <Text style={styles.overlayText1}>{text}</Text>
          <Text style={styles.overlayText2}>{text2}</Text>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => handleHeartPressed(id)}>
            {data.find(d => d.id === id)?.hearts ? (
              <AntDesign name="heart" color={'red'} size={22} />
            ) : (
              <AntDesign name="hearto" color={'grey'} size={22} />
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 210,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 1,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlayText2: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 23,
    borderColor: '#000',
    borderWidth: 0.2,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  circleRed: {
    position: 'absolute',
    right: 20,
    top: 23,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 7,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});

export default Card;
