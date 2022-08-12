import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {cities} from '../Cities';
import axios from 'axios';
import R from '../R';

const Home = ({navigation}) => {
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    setCitiesData(cities);

    // getTemp();
  }, []);

  const getTemp = () => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cities?.coord?.lat}&lon=${cities?.coord?.lon}&appid=${R.strings.API_KEY}`,
    ).then((res) => {
      console.log("res", res);
      
    }).catch((err) => console.log(err))
  };

  return (
    <View>
      <FlatList
        data={cities}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate('Details', {
                  data: item,
                })
              }>
              <Text style={styles.title}>{item.item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
