import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataAction} from '../../redux/actions/detailsAction';

const Details = ({route}) => {
  const {data} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction(data?.item?.name));
  }, []);

  const weatherData = useSelector(state => state.details.cityData);

  return (
    <View style={styles.container}>
      <Text style={styles.tempText}>
        Temperature : {weatherData?.main?.temp}
      </Text>
      <Text style={styles.tempText}>
        Description : {weatherData?.weather?.[0]?.description}
      </Text>
      <Text style={styles.tempText}>
        Humidity : {weatherData?.main?.humidity}
      </Text>
      <Text style={styles.tempText}>
        Pressure : {weatherData?.main?.pressure}
      </Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempText: {
    fontSize: 30,
    paddingBottom: 20,
  },
});
