import * as React from 'react';

import {Button, Text, View} from 'react-native';
import fonts from 'res/fonts';

export default ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontFamily: fonts.regular, fontSize: 20, color: 'black'}}>
        Home Screen
      </Text>
      <Text style={{fontFamily: fonts.light, fontSize: 20, color: 'black'}}>
        Home Screen
      </Text>
      <Text style={{fontFamily: fonts.bold, fontSize: 20, color: 'black'}}>
        Home Screen
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
