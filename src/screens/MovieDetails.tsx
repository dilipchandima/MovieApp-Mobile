import * as React from 'react';

import {Button, Text, View} from 'react-native';

export default ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  );
};
