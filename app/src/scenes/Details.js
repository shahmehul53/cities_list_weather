import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_KEY = '971d3aad3083a2a5c2fce97ca8006581';

const Details = ({route}) => {
  const {data} = route.params;
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState("")

  useEffect(() => {
    // setCityName()
    apiCall();
  }, []);

  const apiCall = async() => {
   await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data?.item?.name}&appid=${API_KEY}`,
      )
      .then(response => {
        console.log('response', response.data);
        setWeather(response.data)
      }).catch((err) => console.log("err", err))
  };

  console.log('data', data);
  return (
    <View>
      <Text>{data?.item?.name}</Text>
      <Text>Temp : {weather?.main?.temp}</Text>
      <Text>Description : {weather?.weather?.[0]?.description}</Text>
      <Text>Humidity : {weather?.main?.humidity}</Text>
      <Text>Pressure : {weather?.main?.pressure}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
