import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Carousel principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* Peliculas populares */}
        <HorizontalCarousel movies={popular} title="Más populares" />

        {/* Peliculas mas valoradas */}
        <HorizontalCarousel movies={topRated} title="Más valoradas" />

        {/* Peliculas proximas a estrenar */}
        <HorizontalCarousel movies={upcoming} title="Próximas a estrenar" />
      </View>
    </ScrollView>
  );
};
