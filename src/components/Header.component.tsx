import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from 'res/colors';
import Logo from 'res/icons/Logo';

export default () => {
  return (
    <View style={styles.container}>
      <Logo width={70} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
