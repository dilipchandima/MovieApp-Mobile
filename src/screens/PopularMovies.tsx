import { getPopularMovies } from 'actions/Movies.actions';
import axios from 'axios';
import * as React from 'react';

import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import fonts from 'res/fonts';

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    dispatch(getPopularMovies());
    const list = await axios.get('http://localhost:5000/movies/popular');
    console.log(list);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: fonts.regular, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Text style={{ fontFamily: fonts.light, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Button title="Go to Details" onPress={getMovies} />
    </View>
  );
};
