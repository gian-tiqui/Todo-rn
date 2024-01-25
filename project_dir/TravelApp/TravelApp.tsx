import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';

const URI =
  'https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/12/Hand-Luggage-Only-10-5.jpg?w=1600&ssl=1';

type RenderItemProps = {
  uri: string;
  text: string;
  text2: string;
};

const renderItem = ({uri, text, text2}: RenderItemProps) => (
  <View style={styles.imageContainer}>
    <ImageBackground source={{uri: uri}} style={styles.image}>
      <Text style={styles.overlayText1}>{text}</Text>
      <Text style={styles.overlayText2}>{text2}</Text>
      <View>
        <AntDesign name="hearto" color={'black'} size={35} />
      </View>
    </ImageBackground>
  </View>
);

const exampleData = [
  {id: '1', uri: URI, text: 'Bulkan Mayon', text2: 'Bicol'},
  {id: '2', uri: URI, text: 'Bulkan Mayon', text2: 'Bicol'},
  {id: '3', uri: URI, text: 'Bulkan Mayon', text2: 'Bicol'},
  {id: '4', uri: URI, text: 'Bulkan Mayon', text2: 'Bicol'},
  {id: '5', uri: URI, text: 'Bulkan Mayon', text2: 'Bicol'},
];

const TravelApp = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.textBold}>Find your</Text>
        <Text style={styles.text}>Dream Trip</Text>
        <FlatList
          data={exampleData}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
          horizontal={true}
        />

        <Text style={styles.textBold}>Popular Trips</Text>
        <FlatList
          data={exampleData}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
          horizontal={true}
        />
        <FlatList
          data={exampleData}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  text: {
    color: '#000',
    fontSize: 50,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 360,
    height: 280,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
  },
  overlayText1: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    top: 150,
    left: 20,
  },
  overlayText2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    top: 150,
    left: 20,
  },
  textBold: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 25,
  },
});

export default TravelApp;
