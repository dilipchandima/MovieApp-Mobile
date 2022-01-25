import MovieDetailsComponent from 'components/MovieDetails.component';
import ScreenContainerComponent from 'components/ScreenContainer.component';
import * as React from 'react';

import { SingleMovie } from 'types/movie';

export default ({ route }) => {
  const movie: SingleMovie = route.params.movie;

  return (
    <ScreenContainerComponent enableBack>
      <MovieDetailsComponent movie={movie} />
    </ScreenContainerComponent>
  );
};
