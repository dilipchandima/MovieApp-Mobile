import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PopularMovies from 'screens/PopularMovies';
import MovieDetails from 'screens/MovieDetails';
import LatestMovie from 'screens/LatestMovie';
import CustomTabBar from './CustomTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import colors from 'res/colors';
import ScreenNames from 'constants/ScreenNames';
import LoaderComponent from 'components/Loader.component';
import { useSelector } from 'react-redux';
import Reducers from 'types/Reducers';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const screenOptions = { headerShown: false };

const PopularMoviesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={ScreenNames.POPULAR_MOVIES} component={PopularMovies} />
      <Stack.Screen name={ScreenNames.MOVIE_DETAILS} component={MovieDetails} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  const loaders = useSelector((state: Reducers) => state.common.loaders);

  return (
    <>
      <SafeAreaView style={styles.mainAppContainer}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={screenOptions}>
            <Tab.Screen name={ScreenNames.POPULAR_MOVIES_TAB} component={PopularMoviesStack} />
            <Tab.Screen name={ScreenNames.LATEST_MOVIE} component={LatestMovie} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      {loaders.length > 0 && <LoaderComponent />}
    </>
  );
};

const styles = StyleSheet.create({
  mainAppContainer: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
});

export default AppNavigator;
