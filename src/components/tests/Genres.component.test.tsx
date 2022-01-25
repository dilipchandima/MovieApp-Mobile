import { cleanup, render } from '@testing-library/react-native';
import GenresComponent from 'components/Genres.component';
import React from 'react';

describe('Genres component', () => {
  afterEach(cleanup);

  test('given genres should be render in the component', () => {
    const { getAllByText } = render(
      <GenresComponent genres={[{ name: 'horror' }, { name: 'action' }]} />,
    );

    const horrorElements = getAllByText('horror');
    expect(horrorElements).toHaveLength(1);

    const actionElements = getAllByText('action');
    expect(actionElements).toHaveLength(1);
  });

  test('when no genres available the empty test should be available', () => {
    const { getAllByText } = render(<GenresComponent genres={[]} />);

    const horrorElements = getAllByText('No genres listed');
    expect(horrorElements).toHaveLength(1);
  });

  test('the title should be available if genres are empty', () => {
    const { getAllByText } = render(<GenresComponent genres={[]} />);

    const horrorElements = getAllByText('Genres');
    expect(horrorElements).toHaveLength(1);
  });

  test('the title should be available if genres are available', () => {
    const { getAllByText } = render(<GenresComponent genres={[{ name: 'horror' }]} />);

    const horrorElements = getAllByText('Genres');
    expect(horrorElements).toHaveLength(1);
  });
});
