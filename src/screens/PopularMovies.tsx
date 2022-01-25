import { getGenres } from 'actions/Genres.actions';
import { getPopularMovies } from 'actions/Movies.actions';
import MovieItemComponent from 'components/MovieItem.component';
import ScreenContainerComponent from 'components/ScreenContainer.component';
import * as React from 'react';

import { Animated, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import fonts from 'res/fonts';
import { Movie } from 'types/movie';
import Reducers from 'types/Reducers';

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const movies = useSelector((state: Reducers) => state.movies.popularMovies.movies);

  React.useEffect(() => {
    dispatch(getPopularMovies({ page: 1 }));
    dispatch(getGenres());
  }, []);

  return (
    <ScreenContainerComponent removeScrollView>
      <Text style={styles.header}>What's Popular</Text>
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={290}
        decelerationRate={0}
        data={movies}
        extraData={movies}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={16}
        keyExtractor={(item: Movie) => item.id.toString()}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 2) * 290, (index - 1) * 290, index * 290, (index + 1) * 290];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 200, 100, 200],
            extrapolate: 'clamp',
          });

          const rotate = scrollX.interpolate({
            inputRange,
            outputRange: ['0deg', '-20deg', '0deg', '20deg'],
            extrapolate: 'clamp',
          });

          return (
            <MovieItemComponent
              movie={item}
              index={index}
              translateY={translateY}
              rotate={rotate}
            />
          );
        }}
      />
    </ScreenContainerComponent>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: fonts.bold,
    fontSize: 20,
    marginTop: 25,
    marginLeft: 25,
  },
});
