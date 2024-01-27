import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../Header/Header';
import Card from '../Card/Card';

const URI =
  'https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/12/Hand-Luggage-Only-10-5.jpg?w=1600&ssl=1';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 290,
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  overlayText1: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    top: 150,
    left: 20,
  },
  overlayText2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    top: 180,
    left: 20,
  },
  textBold: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  circle: {
    position: 'absolute',
    bottom: 150,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleRed: {
    position: 'absolute',
    bottom: 200,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 10,
  },
  textBold2: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatList: {
    marginVertical: 17,
  },
  midComp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  seeAll: {
    color: 'blue',
    fontSize: 16,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
});

type RenderItemProps = {
  id: string;
  uri: string;
  text: string;
  text2: string;
};

type SampleData = {
  id: string;
  uri: any;
  text: string;
  text2: string;
  hearts: boolean;
};

const Home = () => {
  const [data, setData] = useState<SampleData[]>([]);

  const handleHeartPressed = (id: string) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? {...item, hearts: !item.hearts} : item,
      ),
    );
  };

  const renderItem = ({id, uri, text, text2}: RenderItemProps) => (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{uri: uri}}
        style={styles.image}
        resizeMode="cover">
        <Text style={styles.overlayText1}>{text}</Text>
        <Text style={styles.overlayText2}>{text2}</Text>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => handleHeartPressed(id)}>
          {data.find(d => d.id === id)?.hearts ? (
            <AntDesign name="heart" color={'red'} size={25} />
          ) : (
            <AntDesign name="hearto" color={'grey'} size={25} />
          )}
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );

  const renderCard = ({id, uri, text, text2}: RenderItemProps) => (
    <Card
      uri={uri}
      text={text}
      text2={text2}
      data={data}
      handleHeartPressed={handleHeartPressed}
      id={id}
    />
  );

  useEffect(() => {
    const exampleData: SampleData[] = [
      {
        id: '1',
        uri: URI,
        text: 'Mayon, Bicol',
        text2: 'Philippines',
        hearts: false,
      },
      {
        id: '2',
        uri: URI,
        text: 'Mayon, Bicol',
        text2: 'Philippines',
        hearts: false,
      },
      {
        id: '3',
        uri: URI,
        text: 'Mayon, Bicol',
        text2: 'Philippines',
        hearts: false,
      },
      {
        id: '4',
        uri: URI,
        text: 'Mayon, Bicol',
        text2: 'Philippines',
        hearts: false,
      },
      {
        id: '5',
        uri: URI,
        text: 'Mayon, Bicol',
        text2: 'Philippines',
        hearts: false,
      },
    ];

    setData(exampleData);
  }, []);

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Text style={styles.textBold}>Find your</Text>
        <Text style={styles.text}>Dream Trip</Text>
        <FlatList
          data={data}
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
          data={data}
          renderItem={({item}) => renderCard(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          style={styles.flatList}
        />
        <FlatList
          data={data}
          renderItem={({item}) => renderCard(item)}
          keyExtractor={item => item.id}
          horizontal={true}
          style={styles.flatList}
        />
      </ScrollView>
    </>
  );
};

export default Home;
