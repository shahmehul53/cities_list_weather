import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import R from '../R';
import { useDispatch, useSelector } from 'react-redux'
import { getDataAction } from '../redux/actions/detailsAction';



const Details = ({route}) => {
  const {data} = route.params;
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState("");
  const dispatch = useDispatch();
  

  useEffect(() => {
    // setCityName()
    // apiCall();
    dispatch(getDataAction(data?.item?.name))
  }, []);

  const weatherData = useSelector(state => state.details.cityData);

  console.log("weather Data", weatherData)

  const apiCall = async() => {
   await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data?.item?.name}&appid=${R.strings.API_KEY}`,
      )
      .then(response => {
        console.log('response', response.data);
        setWeather(response.data)
      }).catch((err) => console.log("err", err))
  };

  return (
    <View>
      <Text>{data?.item?.name}</Text>
      {/* <Text>Temp : {weather?.main?.temp}</Text>
      <Text>Description : {weather?.weather?.[0]?.description}</Text>
      <Text>Humidity : {weather?.main?.humidity}</Text>
      <Text>Pressure : {weather?.main?.pressure}</Text> */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
