import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {BASE_URL} from './Config';

const App = () => {
  return (
    <SafeAreaView>
      <Text>{BASE_URL}</Text>
    </SafeAreaView>
  );
};

export default App;
