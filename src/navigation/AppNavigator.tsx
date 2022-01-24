import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PopularMovies from 'screens/PopularMovies';
import MovieDetails from 'screens/MovieDetails';
import LatestMovie from 'screens/LatestMovie';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const screenOptions = { headerShown: false };

const PopularMoviesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={PopularMovies} />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={PopularMoviesStack} />
        <Tab.Screen name="Settings" component={LatestMovie} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
