import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'res/colors';
import fonts from 'res/fonts';

export default ({ langs }) => {
  return (
    <>
      <Text style={styles.title}>Spoken Languages</Text>
      <View style={styles.row}>
        {langs?.length === 0 && <Text style={styles.noGenres}>No languages listed</Text>}
        {langs?.map((item) => (
          <View style={styles.lngContainer} key={item?.english_name}>
            <Text style={styles.lng}>{item?.english_name}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
  lngContainer: {
    backgroundColor: colors.gray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 5,
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.primaryDark,
  },
  lng: {
    fontFamily: fonts.regular,
    color: colors.primaryDark,
  },
  noGenres: {
    fontFamily: fonts.regular,
    color: colors.primaryDark,
    opacity: 0.3,
  },
});
