import { useNavigation } from '@react-navigation/native';
import { getMovieDetails } from 'actions/Movies.actions';
import ScreenNames from 'constants/ScreenNames';
import * as React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import colors from 'res/colors';
import fonts from 'res/fonts';
import { Movie } from 'types/movie';

interface IProps {
  movie: Movie;
  index: number;
}
export default ({ movie, translateY, index, rotate, testID }: IProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPressMovie = () => {
    dispatch(
      getMovieDetails(movie.id, (data) => {
        navigation.navigate(ScreenNames.MOVIE_DETAILS, { movie: data });
      }),
    );
  };

  return (
    <Pressable onPress={onPressMovie} testID={testID}>
      <Animated.View style={[styles.container, { transform: [{ translateY }, { rotate }] }]}>
        <View style={styles.voteContainer}>
          <Text style={styles.voteText}>{movie.vote_average}</Text>
        </View>
        <Image
          source={{
            uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.backdrop_path}`,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <View style={styles.hr} />
        <Text style={styles.releaseDate}>{movie.release_date}</Text>
        <Text style={styles.overview}>{movie.overview.slice(0, 100)}...</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginHorizontal: 20,
    width: 250,
    alignItems: 'center',
  },
  image: {
    height: 280,
    width: 200,
    backgroundColor: 'blue',
    borderRadius: 20,
  },
  title: {
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    marginHorizontal: 20,
  },
  overview: {
    fontFamily: fonts.light,
    marginTop: 10,
    fontSize: 13,
    marginHorizontal: 20,
  },
  voteContainer: {
    position: 'absolute',
    zIndex: 10,
    top: -20,
    right: 10,
    backgroundColor: colors.primaryDark,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.lightBlue,
  },
  voteText: {
    fontFamily: fonts.regular,
    color: colors.lightGreen,
    fontSize: 16,
  },
  releaseDate: {
    fontFamily: fonts.regular,
    fontSize: 13,
  },
  hr: {
    width: 100,
    borderBottomWidth: 3,
    marginVertical: 5,
    borderBottomColor: colors.lightGreen,
  },
});
