import { getGenres } from 'actions/Genres.actions';
import { getLatestMovie, getMovieDetails, getPopularMovies } from 'actions/Movies.actions';
import axios from 'axios';
import * as React from 'react';

import { Button, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import fonts from 'res/fonts';

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    dispatch(getPopularMovies({ page: 10 }));
  };
  const getDetails = async () => {
    dispatch(getMovieDetails(4545));
  };
  const getLatest = async () => {
    dispatch(getLatestMovie());
  };
  const genres = async () => {
    dispatch(getGenres());
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: fonts.regular, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Text style={{ fontFamily: fonts.light, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Button title="Go to movies" onPress={getMovies} />
      <Button title="Go to Details" onPress={getDetails} />
      <Button title="Go to latest" onPress={getLatest} />
      <Button title="Go to genres" onPress={genres} />
    </View>
  );
};
