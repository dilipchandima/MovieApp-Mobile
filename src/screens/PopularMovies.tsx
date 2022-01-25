import { getGenres } from 'actions/Genres.actions';
import { getPopularMovies } from 'actions/Movies.actions';
import MovieItemComponent from 'components/MovieItem.component';
import ScreenContainerComponent from 'components/ScreenContainer.component';
import * as React from 'react';

import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import colors from 'res/colors';
import fonts from 'res/fonts';
import { Movie } from 'types/movie';
import Reducers from 'types/Reducers';

export default ({}) => {
  const dispatch = useDispatch();

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef();

  const movies = useSelector((state: Reducers) => state.movies.popularMovies.movies);
  const currentPage = useSelector((state: Reducers) => state.movies.popularMovies.currentPage);
  const totalPages = useSelector((state: Reducers) => state.movies.popularMovies.totalPages);

  React.useEffect(() => {
    dispatch(getPopularMovies({ page: 1 }));
    dispatch(getGenres());
  }, []);

  const onEndReached = () => {
    console.log('object');
    if (currentPage < totalPages) {
      dispatch(getPopularMovies({ page: currentPage + 1 }));
    }
  };

  const handleScrollFirst = () => {
    flatListRef?.current?.scrollToIndex({ animated: true, index: 0 });
  };

  return (
    <ScreenContainerComponent removeScrollView>
      <Text style={styles.header}>What's Popular</Text>
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={290}
        decelerationRate={0}
        data={movies}
        onEndReached={onEndReached}
        onEndReachedThreshold={3}
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

      <Pressable style={styles.backBtn} onPress={handleScrollFirst}>
        <Text style={styles.backBtnText}>BACK TO FIRST</Text>
      </Pressable>
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
  backBtn: {
    backgroundColor: colors.primaryDark,
    width: 130,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  backBtnText: {
    fontFamily: fonts.regular,
    color: colors.white,
  },
});
