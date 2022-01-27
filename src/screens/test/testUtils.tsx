import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React, { FunctionComponent, ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from 'store/Store';
import ScreenNames from 'constants/ScreenNames';

export const renderWithRedux = (component: ReactElement) => {
  return {
    ...render(<Provider store={store}>{component} </Provider>),
    store,
  };
};

export const renderWithReduxAndNavigation = (component: ReactElement) => {
  const App = component;

  const Stack = createNativeStackNavigator();

  return {
    ...render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={ScreenNames.POPULAR_MOVIES} component={App} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    ),
    store,
  };
};

export const renderWithMockStoreAndNavigation = (component: ReactElement, mockStore: object) => {
  const App = component;
  const mockReducer = configureStore([]);
  const store = mockReducer(mockStore);

  const Stack = createNativeStackNavigator();
  return {
    ...render(
      <SafeAreaProvider initialSafeAreaInsets={{ top: 1, left: 2, right: 3, bottom: 4 }}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={ScreenNames.POPULAR_MOVIES} component={App} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>,
    ),
    store,
  };
};

export const makeProps = (params: { [key: string]: any } = {}, props?: object) => ({
  navigation: {
    addListener: jest.fn().mockReturnValue(jest.fn),
    navigate: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
  },
  route: { params },
  ...props,
});
