import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

const URI =
  'https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/12/Hand-Luggage-Only-10-5.jpg?w=1600&ssl=1';

type RenderItemProps = {
  uri: string;
  text: string;
  text2: string;
};

const renderItem = ({uri, text, text2}: RenderItemProps) => (
  <View style={styles.imageContainer}>
    <ImageBackground
      source={{uri: uri}}
      style={styles.image}
      resizeMode="cover">
      <Text style={styles.overlayText1}>{text}</Text>
      <Text style={styles.overlayText2}>{text2}</Text>
      <View style={styles.circle}>
        <AntDesign name="hearto" color={'grey'} size={30} />
      </View>
    </ImageBackground>
  </View>
);

const renderCard = ({uri, text, text2}: RenderItemProps) => (
  <Card uri={uri} text={text} text2={text2} />
);

const exampleData = [
  {id: '1', uri: URI, text: 'Bulkan Mayon, Bicol', text2: 'Philippines'},
  {id: '2', uri: URI, text: 'Bulkan Mayon, Bicol', text2: 'Philippines'},
  {id: '3', uri: URI, text: 'Bulkan Mayon, Bicol', text2: 'Philippines'},
  {id: '4', uri: URI, text: 'Bulkan Mayon, Bicol', text2: 'Philippines'},
  {id: '5', uri: URI, text: 'Bulkan Mayon, Bicol', text2: 'Philippines'},
];

const TravelApp = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Text style={styles.textBold}>Find your</Text>
        <Text style={styles.text}>Dream Trip</Text>
        <FlatList
          data={exampleData}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          style={styles.flatList}
        />
        <View style={styles.midComp}>
          <Text style={styles.textBold2}>Popular Trips</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <FlatList
          data={exampleData}
          renderItem={({item}) => renderCard(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          style={styles.flatList}
        />
        <FlatList
          data={exampleData}
          renderItem={({item}) => renderCard(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          style={styles.flatList}
        />
      </ScrollView>
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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  overlayText1: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 150,
    left: 20,
  },
  overlayText2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 180,
    left: 20,
  },
  textBold: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    bottom: 200,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
  },
  textBold2: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
  },
  flatList: {
    marginVertical: 20,
  },
  midComp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  seeAll: {
    color: 'blue',
    fontSize: 26,
    marginTop: 25,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
});

export default TravelApp;
