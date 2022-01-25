import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'res/colors';
import fonts from 'res/fonts';

export default ({ genres }) => {
  return (
    <>
      <Text style={styles.title}>Genres</Text>
      <View style={styles.row}>
        {genres.length === 0 && <Text style={styles.noGenres}>No genres listed</Text>}
        {genres?.map((item) => (
          <View style={styles.lngContainer} key={item.name}>
            <Text style={styles.lng}>{item?.name}</Text>
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
    backgroundColor: colors.primaryDark,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 5,
  },
  title: {
    fontFamily: fonts.bold,
  },
  lng: {
    fontFamily: fonts.regular,
    color: colors.lightGreen,
  },
  noGenres: {
    fontFamily: fonts.regular,
    opacity: 0.3,
  },
});
