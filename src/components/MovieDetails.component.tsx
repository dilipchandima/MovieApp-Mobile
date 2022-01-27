import GenresComponent from 'components/Genres.component';
import LangComponent from 'components/Lang.component';
import * as React from 'react';

import { Image, ImageBackground, Linking, StyleSheet, Text, View } from 'react-native';
import colors from 'res/colors';
import fonts from 'res/fonts';
import { SingleMovie } from 'types/movie';

interface IProps {
  movie: SingleMovie;
}

export default ({ movie }: IProps) => {
  const [canOpenHomePage, setCanOpenHomePage] = React.useState(false);

  React.useEffect(() => {
    canOpenHomePageHandler();
  }, []);

  const openUrl = () => {
    Linking.openURL(movie.homepage);
  };

  const canOpenHomePageHandler = async () => {
    const canOpen = await Linking.canOpenURL(movie.homepage);
    setCanOpenHomePage(canOpen);
  };

  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={styles.backgroundImage}
        source={{
          uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${
            movie?.poster_path || movie?.backdrop_path
          }`,
        }}>
        <View style={styles.headerRow}>
          <Image
            source={{
              uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.backdrop_path}`,
            }}
            style={styles.image}
          />
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.tagline}>{movie.tagline}</Text>
        {movie.release_date !== '' && (
          <Text style={styles.tagline}>Released on: {movie.release_date}</Text>
        )}
        <Text style={styles.h2}>Overview</Text>
        <Text style={styles.overView}>{movie.overview}</Text>
      </View>
      <View style={styles.container}>
        <LangComponent langs={movie.spoken_languages} />
        <GenresComponent genres={movie.genres} />
        {canOpenHomePage && (
          <Text onPress={openUrl} style={styles.link}>
            {movie.homepage}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    minHeight: 300,
    justifyContent: 'center',
  },
  imageStyle: {
    opacity: 0.2,
  },
  image: {
    height: 200,
    width: 150,
    backgroundColor: colors.gray,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 4,
    borderColor: colors.lightGreen,
  },
  headerRow: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 25,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.white,
    paddingRight: 30,
    marginTop: 15,
    backgroundColor: colors.primaryDark,
  },
  detailsContainer: {
    backgroundColor: colors.primaryDark,
    paddingHorizontal: 20,
    flex: 1,
  },
  tagline: {
    fontFamily: fonts.light,
    color: colors.white,
    opacity: 0.7,
    marginTop: 5,
    marginBottom: 20,
  },
  h2: {
    fontFamily: fonts.bold,
    fontSize: 18,
    opacity: 0.7,
    color: colors.white,
  },
  overView: {
    fontFamily: fonts.regular,
    fontSize: 14,
    opacity: 0.7,
    color: colors.white,
    marginTop: 10,
    marginBottom: 40,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  link: {
    color: 'blue',
    fontFamily: fonts.regular,
    marginVertical: 20,
    textDecorationLine: 'underline',
  },
});
