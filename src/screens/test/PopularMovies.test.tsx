import { cleanup, fireEvent } from '@testing-library/react-native';
import React from 'react';
import PopularMovies from 'screens/PopularMovies';
import {
  makeProps,
  renderWithMockStoreAndNavigation,
  renderWithReduxAndNavigation,
} from './testUtils';
import * as MovieActions from 'actions/Movies.actions';

const getMovieDetails = jest.spyOn(MovieActions, 'getMovieDetails');

describe('Popular Movies Screen', () => {
  afterEach(cleanup);

  test('Title and Button should be render', () => {
    const { getByText } = renderWithReduxAndNavigation(() => <PopularMovies />);

    expect(getByText("What's Popular")).toBeTruthy();
    expect(getByText('BACK TO FIRST')).toBeTruthy();
  });

  test('when press on a movie it should call get movie details action', async () => {
    const props = makeProps({});
    const { getByTestId } = renderWithMockStoreAndNavigation(() => <PopularMovies {...props} />, {
      movies: {
        popularMovies: {
          movies: [{ title: 'testing', id: 232, overview: 'asdfasdf sfsf sfs fs fs f sf s' }],
        },
      },
    });

    expect(getByTestId('test_btn_0')).toBeTruthy();

    fireEvent.press(getByTestId('test_btn_0'));

    expect(getMovieDetails).toBeCalled();
  });
});
