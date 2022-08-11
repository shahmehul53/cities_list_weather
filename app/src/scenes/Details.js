import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = ({route}) => {
  const {data} = route.params;
  console.log('data', data);
  return (
    <View>
      <Text>Details</Text>
      <Text>{data?.item?.name}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
