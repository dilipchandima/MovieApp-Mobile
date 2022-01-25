import { getGenres } from 'actions/Genres.actions';
import { getLatestMovie, getMovieDetails, getPopularMovies } from 'actions/Movies.actions';
import * as React from 'react';

import { Button, Text, View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import fonts from 'res/fonts';
import Logo from 'res/icons/logo.svg';

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
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: fonts.regular, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Text style={{ fontFamily: fonts.light, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Text style={{ fontFamily: fonts.bold, fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Button title="Go to movies" onPress={getMovies} />
      <Button title="Go to Details" onPress={getDetails} />
      <Button title="Go to latest" onPress={getLatest} />
      <Button title="Go to genres" onPress={genres} />
      <Logo />
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
        <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
      </Svg>
    </View>
  );
};
