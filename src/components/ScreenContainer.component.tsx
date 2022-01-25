import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import colors from 'res/colors';
import BackArrow from 'res/icons/BackArrow';
import HeaderComponent from './Header.component';

export default ({ children, removeScrollView = false, enableBack = false }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderComponent />
      {enableBack && (
        <Pressable
          style={styles.backContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <BackArrow />
        </Pressable>
      )}
      {removeScrollView ? <>{children}</> : <ScrollView>{children}</ScrollView>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 60,
    left: 10,
    backgroundColor: colors.lightBlue,
    height: 40,
    width: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    color: colors.white,
  },
});
