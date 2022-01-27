import { getLatestMovie } from 'actions/Movies.actions';
import MovieDetailsComponent from 'components/MovieDetails.component';
import ScreenContainerComponent from 'components/ScreenContainer.component';
import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const latestMovie = useSelector((state) => state.movies.latestMovie);

  React.useEffect(() => {
    dispatch(getLatestMovie());

    const unsubscribe = navigation.addListener('tabPress', (e) => {
      dispatch(getLatestMovie());
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScreenContainerComponent>
      <MovieDetailsComponent movie={latestMovie} />
    </ScreenContainerComponent>
  );
};
