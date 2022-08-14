import axios from 'axios';
import R from '../R';

const API_KEY = R.strings.API_KEY;

export const getData = async name => {
  let response = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
  );
  return response.data;
};
